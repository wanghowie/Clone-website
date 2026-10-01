import type { Metadata } from "next";
import Link from "next/link";
import { StayCard } from "@/components/cards";
import { JsonLd } from "@/components/json-ld";
import { Container, FilterChips, PageHeader } from "@/components/page-parts";
import { siteConfig } from "@/data/site";
import { stays, stayTypes } from "@/data/stays";
import type { StayType } from "@/types";

export const metadata: Metadata = {
  title: "Where to stay in Dauin",
  description: "Hostels, dive resorts, beach resorts and luxury stays in Dauin, Negros Oriental — for backpackers, divers, families and couples.",
};

function isStayType(value: string | undefined): value is StayType {
  return value !== undefined && value in stayTypes;
}

export default async function StayPage({ searchParams }: PageProps<"/stay">) {
  const { type: rawType } = await searchParams;
  const type = typeof rawType === "string" && isStayType(rawType) ? rawType : undefined;
  const filtered = type ? stays.filter((stay) => stay.type === type) : stays;

  const chips = [
    { value: undefined, label: "All", href: "/stay" },
    ...(Object.keys(stayTypes) as StayType[]).map((value) => ({
      value,
      label: stayTypes[value],
      href: `/stay?type=${value}`,
    })),
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Places to stay in Dauin",
          itemListElement: stays.map((stay, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "LodgingBusiness",
              name: stay.name,
              description: stay.summary,
              priceRange: "₱".repeat(stay.priceTier),
              address: `${stay.area}, Dauin, Negros Oriental, Philippines`,
              ...(stay.website && { url: stay.website }),
            },
          })),
        }}
      />
      <PageHeader
        eyebrow="Stay"
        title="Where to stay in Dauin"
        intro="Most places line the beach road between Bulak and Masaplod. Backpackers base themselves in the poblacion; divers pick a resort with its own dive centre and house reef."
      />
      <Container className="mt-10">
        <FilterChips items={chips} activeValue={type} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((stay) => (
            <StayCard key={stay.slug} stay={stay} />
          ))}
        </div>
        <div className="mt-8 space-y-2 text-sm text-muted-foreground">
          <p>
            ₱ under ~₱2,000 · ₱₱ ~₱2,000–3,500 · ₱₱₱ ~₱3,500–7,000 · ₱₱₱₱ ₱7,000+ per night for two. Ratings and price
            levels from Booking.com, last checked {siteConfig.contentCheckedAt}.
          </p>
          <p>
            Need a ride from the airport or port?{" "}
            <Link href="/locals?category=van-bus" className="text-primary underline-offset-4 hover:underline">
              Message a local van driver
            </Link>
            .
          </p>
        </div>
      </Container>
    </>
  );
}
