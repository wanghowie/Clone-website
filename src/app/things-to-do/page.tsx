import type { Metadata } from "next";
import { ActivityCard } from "@/components/cards";
import { Container, FilterChips, PageHeader } from "@/components/page-parts";
import { activities, activityCategories } from "@/data/activities";
import type { ActivityCategory } from "@/types";

export const metadata: Metadata = {
  title: "Things to do in Dauin",
  description:
    "The best things to do in Dauin, Negros Oriental: muck diving, marine sanctuaries, Apo Island, Baslay Hot Spring, Mt. Talinis, yoga and day trips.",
};

function isActivityCategory(value: string | undefined): value is ActivityCategory {
  return value !== undefined && value in activityCategories;
}

export default async function ThingsToDoPage({ searchParams }: PageProps<"/things-to-do">) {
  const { category: rawCategory } = await searchParams;
  const category = typeof rawCategory === "string" && isActivityCategory(rawCategory) ? rawCategory : undefined;
  const filtered = category ? activities.filter((activity) => activity.category === category) : activities;

  const chips = [
    { value: undefined, label: "All", href: "/things-to-do" },
    ...(Object.keys(activityCategories) as ActivityCategory[]).map((value) => ({
      value,
      label: activityCategories[value].label,
      href: `/things-to-do?category=${value}`,
    })),
  ];

  return (
    <>
      <PageHeader
        eyebrow="Things to do"
        title="Things to do in Dauin"
        intro="From critter-hunting on black sand to turtles at Apo Island and hot springs in the hills — here's what to do, and which locals can help you do it."
      />
      <Container className="mt-10">
        <FilterChips items={chips} activeValue={category} />
        {category && <p className="mt-6 text-muted-foreground">{activityCategories[category].description}</p>}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} />
          ))}
        </div>
      </Container>
    </>
  );
}
