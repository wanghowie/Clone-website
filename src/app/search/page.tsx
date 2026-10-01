import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/page-parts";
import { SearchBox } from "@/components/search-box";
import { search } from "@/lib/search";

export const metadata: Metadata = {
  title: "Search",
  robots: { index: false },
};

export default async function SearchPage({ searchParams }: PageProps<"/search">) {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q : "";
  const results = search(query);

  return (
    <>
      <PageHeader title="Search Visit Dauin">
        <SearchBox defaultValue={query} size="lg" className="mt-6 max-w-2xl" />
      </PageHeader>
      <Container className="mt-10 max-w-3xl">
        {query && (
          <p className="text-muted-foreground">
            {results.length} {results.length === 1 ? "result" : "results"} for “{query}”
          </p>
        )}
        <ul className="mt-6 divide-y divide-border">
          {results.map((result) => (
            <li key={result.href}>
              <Link href={result.href} className="group block py-5">
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                  {result.kind} · {result.meta}
                </p>
                <p className="mt-1 text-lg font-semibold group-hover:text-primary">{result.title}</p>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{result.description}</p>
              </Link>
            </li>
          ))}
        </ul>
        {query && results.length === 0 && (
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <p className="font-semibold">Nothing found.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a broader word like “diving”, “boat”, “pizza” or “hostel”.
            </p>
          </div>
        )}
      </Container>
    </>
  );
}
