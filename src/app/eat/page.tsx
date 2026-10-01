import type { Metadata } from "next";
import Link from "next/link";
import { RestaurantCard } from "@/components/cards";
import { Container, FilterChips, PageHeader } from "@/components/page-parts";
import { restaurants, restaurantTypes } from "@/data/restaurants";
import { siteConfig } from "@/data/site";
import type { RestaurantType } from "@/types";

export const metadata: Metadata = {
  title: "Where to eat & drink in Dauin",
  description: "Restaurants, cafés and bars in Dauin — Filipino food, pizza on the beach, vegetarian cafés, fine dining and live music.",
};

function isRestaurantType(value: string | undefined): value is RestaurantType {
  return value !== undefined && value in restaurantTypes;
}

export default async function EatPage({ searchParams }: PageProps<"/eat">) {
  const { type: rawType } = await searchParams;
  const type = typeof rawType === "string" && isRestaurantType(rawType) ? rawType : undefined;
  const filtered = type ? restaurants.filter((restaurant) => restaurant.types.includes(type)) : restaurants;

  const chips = [
    { value: undefined, label: "All", href: "/eat" },
    ...(Object.keys(restaurantTypes) as RestaurantType[]).map((value) => ({
      value,
      label: restaurantTypes[value],
      href: `/eat?type=${value}`,
    })),
  ];

  return (
    <>
      <PageHeader
        eyebrow="Eat & drink"
        title="Where to eat & drink in Dauin"
        intro="Dauin punches well above its size for food — from cheap Filipino lunches between dives to pizza on the beach and special-occasion dinners."
      />
      <Container className="mt-10">
        <FilterChips items={chips} activeValue={type} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((restaurant) => (
            <RestaurantCard key={restaurant.slug} restaurant={restaurant} />
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          ₱ budget · ₱₱ mid-range · ₱₱₱ upper mid-range · ₱₱₱₱ splurge. Opening hours change, especially in low season
          — last checked {siteConfig.contentCheckedAt}. Own a restaurant in Dauin?{" "}
          <Link href="/join" className="text-primary underline-offset-4 hover:underline">
            Get listed
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
