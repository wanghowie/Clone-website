import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/page-parts";

export const metadata: Metadata = {
  title: "About Visit Dauin",
  description: "Visit Dauin is an independent, local-first travel guide connecting travellers directly with the people of Dauin.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A local-first guide to Dauin"
        intro="Visit Dauin helps travellers discover this corner of Negros Oriental — and meet the people who live here."
      />
      <Container className="mt-12 max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/85">
        <p>
          Dauin is a small coastal town south of Dumaguete, famous among divers for its muck diving and its
          neighbour Apo Island. But most of the people who make a trip here special — the tricycle driver who knows
          every shortcut, the boatman whose family has fished these waters for generations, the guide who grew up on
          the slopes of Mt. Talinis — don&apos;t have a website, and aren&apos;t on the big booking platforms.
        </p>
        <p>
          Visit Dauin puts them in one place. Travellers can read up on what to do, then message a local directly on
          WhatsApp, Messenger or SMS. There are no booking fees and no commission: you agree the details together
          and pay them in person.
        </p>
        <h2 className="pt-4 text-2xl font-semibold">Our promises</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Listing is free for locals, and we never take a cut of what they earn.</li>
          <li>We try to meet every local in person before giving them a “Met in person” badge.</li>
          <li>We say when information was last checked, and correct it when it changes.</li>
          <li>We promote responsible travel that protects Dauin&apos;s reefs and community.</li>
        </ul>
        <p className="pt-4">
          Spotted something out of date, or want to work with us?{" "}
          <Link href="/join" className="text-primary underline-offset-4 hover:underline">
            Get in touch
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
