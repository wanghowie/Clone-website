import { HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ActivityCard, LocalCard, MoreLink, RestaurantCard, StayCard } from "@/components/cards";
import { localIcons, localTones } from "@/components/category-icons";
import { JsonLd } from "@/components/json-ld";
import { HeroScene } from "@/components/hero-scene";
import { Container, SectionHeading, WaveEdge } from "@/components/page-parts";
import { SearchBox } from "@/components/search-box";
import { activities, getActivity } from "@/data/activities";
import { getLocalsByCategory, localCategories, localCategoryOrder, locals } from "@/data/locals";
import { restaurants } from "@/data/restaurants";
import { siteConfig } from "@/data/site";
import { stays } from "@/data/stays";
import { cn } from "@/lib/utils";

const featuredActivitySlugs = [
  "muck-diving",
  "apo-island-day-trip",
  "baslay-hot-spring",
  "marine-sanctuaries",
  "dauin-church-watchtowers",
  "yoga-in-dauin",
];

export default function Home() {
  const featuredActivities = featuredActivitySlugs.map(getActivity).filter((activity) => activity !== undefined);
  const nearbyActivities = activities.filter((activity) => activity.category === "nearby");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteConfig.url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <Hero />

      <Container className="mt-16 sm:mt-20">
        <SectionHeading
          title="Find a local"
          intro="Message drivers, guides, boatmen and teachers directly — no agency in between, no booking fees."
          action={<MoreLink href="/locals">All locals</MoreLink>}
        />
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {localCategoryOrder.map((category) => {
            const Icon = localIcons[category];
            const count = getLocalsByCategory(category).length;
            return (
              <li key={category}>
                <Link
                  href={`/locals?category=${category}`}
                  className="group sticker flex h-full flex-col items-start gap-3 rounded-3xl bg-card p-4 transition-transform hover:-translate-y-1"
                >
                  <span
                    className={cn(
                      "flex size-12 items-center justify-center rounded-full border-2 border-ink",
                      localTones[category],
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="font-heading text-base font-semibold group-hover:text-primary">
                    {localCategories[category].plural}
                  </span>
                  <span className="mt-auto text-xs text-muted-foreground">
                    {count > 0 ? `${count} listed` : "Joining soon"}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>

      <Container className="mt-20 sm:mt-24">
        <SectionHeading
          title="Things to do in Dauin"
          intro="World-class muck diving, turtles at Apo Island, hot springs in the hills and Spanish-era history in town."
          action={<MoreLink href="/things-to-do">All things to do</MoreLink>}
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredActivities.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} />
          ))}
        </div>
      </Container>

      <Container className="mt-20 sm:mt-24">
        <SectionHeading
          title="Beyond Dauin"
          intro="Dauin makes a great base for exploring Negros and the islands around it — whale sharks in Oslob, Siquijor's waterfalls and the white sandbar of Bais."
          action={<MoreLink href="/things-to-do?category=nearby">All trips nearby</MoreLink>}
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyActivities.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} />
          ))}
        </div>
      </Container>

      <HowItWorks />

      {locals.length > 0 && (
        <Container className="mt-20 sm:mt-24">
          <SectionHeading
            title="Meet the locals"
            intro="Real people who live in Dauin and know it best."
            action={<MoreLink href="/locals">Browse all</MoreLink>}
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {locals.slice(0, 6).map((local) => (
              <LocalCard key={local.slug} local={local} />
            ))}
          </div>
        </Container>
      )}

      <Container className="mt-20 grid gap-16 sm:mt-24 lg:grid-cols-2 lg:gap-10">
        <section>
          <SectionHeading title="Eat & drink" action={<MoreLink href="/eat">All places</MoreLink>} />
          <div className="mt-6 grid gap-4">
            {restaurants.slice(0, 3).map((restaurant) => (
              <RestaurantCard key={restaurant.slug} restaurant={restaurant} />
            ))}
          </div>
        </section>
        <section>
          <SectionHeading title="Where to stay" action={<MoreLink href="/stay">All stays</MoreLink>} />
          <div className="mt-6 grid gap-4">
            {stays.slice(0, 3).map((stay) => (
              <StayCard key={stay.slug} stay={stay} />
            ))}
          </div>
        </section>
      </Container>

      <JoinBanner />
    </>
  );
}

function Hero() {
  const quickLinks = [
    ["Apo Island", "/things-to-do/apo-island-day-trip", "bg-palm"],
    ["Muck diving", "/things-to-do/muck-diving", "bg-secondary"],
    ["Tricycle", "/locals?category=tricycle", "bg-card"],
    ["Boat trips", "/locals?category=boatman", "bg-hibiscus"],
    ["Hostels", "/stay?type=hostel", "bg-sky"],
  ] as const;

  return (
    <section className="relative overflow-hidden bg-sun text-ink">
      <Container className="relative grid items-center gap-10 pt-12 pb-24 sm:pt-16 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
        <div>
          <p className="sticker-sm inline-flex -rotate-2 rounded-full bg-card px-3 py-1 text-xs font-bold tracking-widest uppercase sm:text-sm">
            Dauin · Negros Oriental · Philippines
          </p>
          <h1 className="mt-6 text-5xl leading-[0.95] uppercase sm:text-7xl">
            Dive. Explore.
            <br />
            Meet the{" "}
            <span className="sticker inline-block rotate-2 rounded-2xl bg-primary px-3 text-primary-foreground">
              locals!
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed font-semibold text-ink/80">
            Black-sand beaches, world-famous muck diving and the turtles of Apo Island — plus the tricycle drivers,
            boatmen and guides who&apos;ll show you around.
          </p>
          <SearchBox size="lg" className="mt-8 max-w-xl" />
          <div className="mt-6 flex flex-wrap gap-2.5 text-sm">
            {quickLinks.map(([label, href, tone], index) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "sticker-sm rounded-full px-3.5 py-1 font-bold transition-transform hover:-translate-y-0.5",
                  tone,
                  index % 2 === 0 ? "-rotate-1" : "rotate-1",
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="sticker mx-auto w-full max-w-md rotate-1 overflow-hidden rounded-[2.5rem] bg-[oklch(0.92_0.06_215)] lg:max-w-none">
          <HeroScene className="block w-full" />
        </div>
      </Container>
      <WaveEdge className="absolute inset-x-0 bottom-0" />
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: HeartHandshake,
      title: "Pick a local",
      text: "Browse drivers, guides, boatmen and yoga teachers. Every profile shows languages, services and where they're based.",
    },
    {
      icon: MessageCircle,
      title: "Message them directly",
      text: "Send your dates and group size via WhatsApp, Messenger or SMS. Agree the price and details together.",
    },
    {
      icon: ShieldCheck,
      title: "Pay them in person",
      text: "No booking fees and no middleman — your money goes straight to the people who live here.",
    },
  ];
  return (
    <section className="relative mt-20 bg-secondary py-20 sm:mt-24 sm:py-24">
      <WaveEdge className="absolute inset-x-0 top-0 rotate-180" />
      <Container>
        <SectionHeading title="How Visit Dauin works" />
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span
                className={cn(
                  "sticker-sm flex size-14 shrink-0 items-center justify-center rounded-2xl",
                  ["bg-sun", "bg-accent", "bg-palm"][index],
                  index % 2 === 0 ? "-rotate-3" : "rotate-3",
                )}
              >
                <step.icon className="size-6" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-widest text-secondary-foreground uppercase">Step {index + 1}</p>
                <h3 className="mt-1 text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
      <WaveEdge className="absolute inset-x-0 bottom-0" />
    </section>
  );
}

function JoinBanner() {
  return (
    <Container className="mt-20 sm:mt-24">
      <div className="sticker relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-primary-foreground sm:px-12">
        <div aria-hidden="true" className="absolute -top-16 -right-16 size-56 rounded-full border-2 border-ink bg-sun" />
        <div aria-hidden="true" className="absolute -right-6 -bottom-10 size-32 rounded-full border-2 border-ink bg-accent" />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl sm:text-5xl">Are you a driver, guide or boatman in Dauin?</h2>
          <p className="mt-4 text-lg font-semibold text-primary-foreground/90">
            List your service on Visit Dauin for free. Travellers message you directly — you keep 100% of what you
            earn.
          </p>
          <Link
            href="/join"
            className="sticker mt-8 inline-flex rounded-full bg-sun px-7 py-3 font-heading text-lg font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Join for free
          </Link>
        </div>
      </div>
    </Container>
  );
}
