import Link from "next/link";
import { Container } from "@/components/page-parts";
import { SearchBox } from "@/components/search-box";

export default function NotFound() {
  return (
    <Container className="max-w-xl py-24 text-center">
      <p className="text-sm font-semibold tracking-widest text-primary uppercase">404</p>
      <h1 className="mt-3 text-4xl font-semibold">Lost at sea</h1>
      <p className="mt-4 text-muted-foreground">We couldn&apos;t find that page. Try a search, or head back to the beach.</p>
      <SearchBox className="mt-8" />
      <Link href="/" className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline">
        Back to home
      </Link>
    </Container>
  );
}
