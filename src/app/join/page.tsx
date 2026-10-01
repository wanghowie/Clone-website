import { BadgeCheck, Globe, HandCoins, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import { localIcons } from "@/components/category-icons";
import { JoinForm } from "@/components/join-form";
import { Container, PageHeader } from "@/components/page-parts";
import { localCategories, localCategoryOrder } from "@/data/locals";

export const metadata: Metadata = {
  title: "Join Visit Dauin — list your service for free",
  description:
    "Tricycle and van drivers, dive guides, boatmen, yoga teachers and tour guides in Dauin: list your service for free and get messages from travellers directly.",
};

const benefits = [
  { icon: HandCoins, title: "Free, no commission", text: "Listing costs nothing. Travellers pay you directly — you keep 100%." },
  { icon: MessageCircle, title: "Messages straight to you", text: "Travellers contact you on WhatsApp, Messenger or SMS. No app to learn." },
  { icon: Globe, title: "Reach travellers worldwide", text: "Your profile is in English and found by backpackers and Filipino travellers searching for Dauin." },
  { icon: BadgeCheck, title: "Build trust", text: "After we meet you in person, your profile gets a “Met in person” badge." },
];

const steps = [
  "Fill in the form below and send it to us.",
  "We'll message you to say hello and, where possible, meet you in Dauin.",
  "We take a friendly photo and write your profile together.",
  "Your profile goes live — travellers start messaging you.",
];

export default function JoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="For locals"
        title="Get more customers — list your service on Visit Dauin"
        intro="Are you a tricycle or van driver, dive guide, boatman, yoga teacher or tour guide in Dauin? Join for free and let travellers find you."
      >
        <a
          href="#apply"
          className="sticker mt-8 inline-flex rounded-full bg-accent px-6 py-3 font-heading text-lg font-semibold text-ink transition-transform hover:-translate-y-0.5"
        >
          Apply now — it&apos;s free
        </a>
      </PageHeader>

      <Container className="mt-12">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="sticker rounded-3xl bg-card p-5">
              <benefit.icon className="size-6 text-primary" />
              <h2 className="mt-3 text-lg">{benefit.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{benefit.text}</p>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-2xl font-semibold">Who can join</h2>
          <ul className="mt-5 space-y-3">
            {localCategoryOrder.map((category) => {
              const Icon = localIcons[category];
              return (
                <li key={category} className="flex gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <p className="font-medium">{localCategories[category].plural}</p>
                    <p className="text-sm text-muted-foreground">{localCategories[category].description}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <h2 className="mt-12 text-2xl font-semibold">How it works</h2>
          <ol className="mt-5 space-y-4">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <span className="pt-0.5 text-foreground/85">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div id="apply" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold">Tell us about yourself</h2>
          <p className="mt-2 text-muted-foreground">Takes 2 minutes. We&apos;ll reply within a few days.</p>
          <div className="mt-6">
            <JoinForm />
          </div>
        </div>
      </Container>
    </>
  );
}
