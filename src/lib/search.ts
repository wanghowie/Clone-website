import { activities, activityCategories } from "@/data/activities";
import { localCategories, locals } from "@/data/locals";
import { restaurants, restaurantTypes } from "@/data/restaurants";
import { stays, stayTypes } from "@/data/stays";

export type SearchResult = {
  kind: "Things to do" | "Locals" | "Eat & drink" | "Stay";
  title: string;
  description: string;
  href: string;
  meta: string;
};

function matches(query: string, fields: string[]) {
  const haystack = fields.join(" ").toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term));
}

export function search(query: string): SearchResult[] {
  const q = query.trim();
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const activity of activities) {
    const category = activityCategories[activity.category].label;
    if (matches(q, [activity.title, activity.summary, activity.location, category, ...activity.highlights])) {
      results.push({
        kind: "Things to do",
        title: activity.title,
        description: activity.summary,
        href: `/things-to-do/${activity.slug}`,
        meta: category,
      });
    }
  }

  for (const local of locals) {
    const category = localCategories[local.category];
    const services = local.services.map((service) => service.name);
    if (matches(q, [local.name, local.tagline, local.bio, local.barangay, category.label, category.plural, ...services])) {
      results.push({
        kind: "Locals",
        title: local.name,
        description: local.tagline,
        href: `/locals/${local.slug}`,
        meta: category.label,
      });
    }
  }

  for (const restaurant of restaurants) {
    const types = restaurant.types.map((type) => restaurantTypes[type]);
    if (matches(q, [restaurant.name, restaurant.summary, restaurant.area, ...types, ...restaurant.tags])) {
      results.push({
        kind: "Eat & drink",
        title: restaurant.name,
        description: restaurant.summary,
        href: `/eat#${restaurant.slug}`,
        meta: types.join(" · "),
      });
    }
  }

  for (const stay of stays) {
    if (matches(q, [stay.name, stay.summary, stay.area, stayTypes[stay.type], ...stay.features])) {
      results.push({
        kind: "Stay",
        title: stay.name,
        description: stay.summary,
        href: `/stay#${stay.slug}`,
        meta: stayTypes[stay.type],
      });
    }
  }

  return results;
}
