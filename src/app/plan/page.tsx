import { Bus, CloudSun, HeartPulse, Leaf, Plane, Smartphone, Wallet } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/page-parts";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Plan your trip to Dauin",
  description:
    "How to get to Dauin from Dumaguete airport and port, getting around, money, SIM cards, weather, safety and responsible travel tips.",
};

const sections = [
  {
    id: "getting-there",
    icon: Plane,
    title: "Getting to Dauin",
    items: [
      "Dauin is about 15 km south of Dumaguete City, 20–30 minutes by road.",
      "By air: fly into Dumaguete (Sibulan) Airport, DGT, with direct flights from Manila and Cebu.",
      "By sea: ferries connect Dumaguete port with Cebu, Bohol and Siquijor. From Cebu you can also take a bus + short ferry via Santander (Liloan) to Sibulan, just north of Dumaguete.",
      "From the airport, jeepneys run from the highway (a short walk from the terminal) into Dumaguete for a few pesos — or pre-arrange a van or private car straight to your resort.",
    ],
  },
  {
    id: "getting-around",
    icon: Bus,
    title: "Getting around",
    items: [
      "Ceres buses heading south (towards Zamboanguita / Bayawan) stop along the Dauin highway — roughly ₱50–₱70 from Dumaguete terminal.",
      "Jeepneys and multicabs leave from near the Dumaguete public market and bell tower — around ₱20–₱30.",
      "Tricycles are the easiest way to hop between resorts, restaurants and sanctuaries. Agree the fare before you get in.",
      "For the hills (Baslay, waterfalls, Mt. Talinis trailheads) hire a tricycle, habal-habal (motorbike taxi) or a driver for the day.",
    ],
    cta: { href: "/locals?category=tricycle", label: "Find a tricycle or van driver" },
  },
  {
    id: "money",
    icon: Wallet,
    title: "Money",
    items: [
      "Cash is king: small restaurants, tricycles, boatmen and sanctuary fees are cash only. Carry small bills.",
      "ATMs are limited in Dauin and can run out of cash — withdraw in Dumaguete, which has plenty of banks.",
      "GCash and Maya e-wallets are widely used by locals; many will accept a GCash transfer.",
      "Larger resorts and dive centres usually take cards, sometimes with a surcharge.",
    ],
  },
  {
    id: "connectivity",
    icon: Smartphone,
    title: "SIM cards & Wi-Fi",
    items: [
      "Buy a Globe or Smart prepaid SIM (bring your passport for registration) — mobile data is cheap and covers most of the coast.",
      "Most locals communicate by Facebook Messenger, WhatsApp, Viber or SMS. Messenger is the most common.",
      "Resort Wi-Fi is usually fine for messaging; video calls can be patchy in the hills.",
    ],
  },
  {
    id: "weather",
    icon: CloudSun,
    title: "When to go",
    items: [
      "Dry season is roughly December to May, with March to May the hottest months.",
      "June to November brings more rain and the southwest monsoon (habagat). Southern Negros is relatively sheltered from typhoons, but boat trips can be cancelled in rough weather.",
      "Diving is good all year — water is warm, and many photographers prefer the calmer months for critter hunting.",
    ],
  },
  {
    id: "responsible",
    icon: Leaf,
    title: "Travel responsibly",
    items: [
      "Pay sanctuary and environmental fees — they fund the rangers who protect the reefs.",
      "Never touch, stand on or collect coral, shells or marine life. Don't chase or ride turtles.",
      "Use reef-safe sunscreen, or cover up with a rash guard.",
      "Dress modestly in churches and villages, and ask before photographing people.",
      "Book locals directly — your money stays in the community.",
    ],
  },
  {
    id: "health",
    icon: HeartPulse,
    title: "Health & safety",
    items: [
      "Emergency hotline in the Philippines: 911.",
      "The nearest hospitals and pharmacies are in Dumaguete.",
      "Get dive insurance (e.g. DAN) if you're diving, and travel insurance that covers it.",
      "Stay hydrated and avoid diving within 24 hours of flying.",
    ],
  },
];

export default function PlanPage() {
  return (
    <>
      <PageHeader
        eyebrow="Plan your trip"
        title="Everything you need to know before Dauin"
        intro="Getting here, getting around, money, weather and how to travel well. Fares and fees change — treat numbers as a guide and confirm locally."
      />
      <Container className="mt-10 grid gap-10 lg:grid-cols-[220px_1fr]">
        <nav aria-label="On this page" className="hidden lg:block">
          <ul className="sticky top-24 space-y-1 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="block rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <section.icon className="size-5" />
                </span>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-foreground/85">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {section.cta && (
                <Link
                  href={section.cta.href}
                  className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  {section.cta.label}
                </Link>
              )}
            </section>
          ))}
          <p className="text-xs text-muted-foreground">Last checked {siteConfig.contentCheckedAt}.</p>
        </div>
      </Container>
    </>
  );
}
