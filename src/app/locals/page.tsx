import type { Metadata } from "next";
import Link from "next/link";
import { LocalCard } from "@/components/cards";
import { Container, FilterChips, PageHeader } from "@/components/page-parts";
import { isLocalCategory, localCategories, localCategoryOrder, locals } from "@/data/locals";

export const metadata: Metadata = {
  title: "Find a local in Dauin",
  description:
    "Message tricycle drivers, van drivers, dive guides, boatmen, yoga teachers and tour guides in Dauin directly — no agency, no booking fees.",
};

export default async function LocalsPage({ searchParams }: PageProps<"/locals">) {
  const { category: rawCategory } = await searchParams;
  const category = typeof rawCategory === "string" && isLocalCategory(rawCategory) ? rawCategory : undefined;
  const filtered = category ? locals.filter((local) => local.category === category) : locals;
  const hasExamples = filtered.some((local) => local.isExample);

  const chips = [
    { value: undefined, label: "All locals", href: "/locals" },
    ...localCategoryOrder.map((value) => ({
      value,
      label: localCategories[value].plural,
      href: `/locals?category=${value}`,
    })),
  ];

  return (
    <>
      <PageHeader
        eyebrow="Find a local"
        title={category ? localCategories[category].plural : "Meet the people who make Dauin"}
        intro={
          category
            ? localCategories[category].description
            : "Drivers, guides, boatmen and teachers who live here. Message them directly, agree the details and pay them in person."
        }
      />
      <Container className="mt-10">
        <FilterChips items={chips} activeValue={category} />

        {hasExamples && (
          <p className="mt-6 rounded-xl border border-dashed border-accent bg-accent/10 px-4 py-3 text-sm">
            We&apos;re welcoming our first locals now. Profiles marked <strong>Example</strong> show what a listing
            looks like — real profiles are added as each local joins.
          </p>
        )}

        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((local) => (
              <LocalCard key={local.slug} local={local} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-border bg-card p-8 text-center">
            <p className="text-lg font-semibold">No {category ? localCategories[category].plural.toLowerCase() : "locals"} listed yet.</p>
            <p className="mt-2 text-muted-foreground">We&apos;re adding new locals every week.</p>
          </div>
        )}

        <div className="mt-12 rounded-2xl bg-secondary p-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="font-sans text-lg font-semibold">Live in Dauin and offer a service?</h2>
            <p className="mt-1 text-sm text-muted-foreground">Listing is free. Travellers contact you directly.</p>
          </div>
          <Link
            href="/join"
            className="mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground sm:mt-0"
          >
            Join Visit Dauin
          </Link>
        </div>
      </Container>
    </>
  );
}
