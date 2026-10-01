import { HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ActivityCard, LocalCard, MoreLink, RestaurantCard, StayCard } from "@/components/cards";
import { localGradients, localIcons } from "@/components/category-icons";
import { Container, SectionHeading } from "@/components/page-parts";
import { SearchBox } from "@/components/search-box";
import { activities, getActivity } from "@/data/activities";
import { getLocalsByCategory, localCategories, localCategoryOrder, locals } from "@/data/locals";
import { restaurants } from "@/data/restaurants";
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
                  className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
                >
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-full bg-gradient-to-br text-white",
                      localGradients[category],
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-semibold group-hover:text-primary">
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
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,oklch(0.72_0.15_50/0.55),transparent_45%),radial-gradient(ellipse_at_10%_90%,oklch(0.5_0.1_200/0.8),transparent_55%),linear-gradient(180deg,oklch(0.3_0.06_235),oklch(0.22_0.04_235))]"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-28 w-full sm:h-40"
      >
        <path
          d="M0 120c120-30 240-30 360 0s240 30 360 0 240-30 360 0 240 30 360 0v100H0z"
          className="fill-[oklch(0.47_0.09_205/0.45)]"
        />
        <path
          d="M0 160c120-24 240-24 360 0s240 24 360 0 240-24 360 0 240 24 360 0v60H0z"
          className="fill-background"
        />
      </svg>
      <Container className="relative pt-20 pb-36 sm:pt-28 sm:pb-48">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">Dauin · Negros Oriental · Philippines</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
          Dive, explore and meet the locals of Dauin.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/80">
          Black-sand beaches, world-famous muck diving and the turtles of Apo Island — plus the tricycle drivers,
          boatmen and guides who&apos;ll show you around.
        </p>
        <SearchBox size="lg" className="mt-8 max-w-xl" />
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          {[
            ["Apo Island", "/things-to-do/apo-island-day-trip"],
            ["Muck diving", "/things-to-do/muck-diving"],
            ["Tricycle", "/locals?category=tricycle"],
            ["Boat trips", "/locals?category=boatman"],
            ["Hostels", "/stay?type=hostel"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-full border border-ink-foreground/25 px-3 py-1 text-ink-foreground/85 transition-colors hover:bg-ink-foreground/10"
            >
              {label}
            </Link>
          ))}
        </div>
      </Container>
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
    <section className="mt-20 bg-secondary/60 py-16 sm:mt-24 sm:py-20">
      <Container>
        <SectionHeading title="How Visit Dauin works" />
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Step {index + 1}</p>
                <h3 className="mt-1 font-sans text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function JoinBanner() {
  return (
    <Container className="mt-20 sm:mt-24">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-12">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 size-72 rounded-full bg-accent/40 blur-3xl"
        />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Are you a driver, guide or boatman in Dauin?</h2>
          <p className="mt-4 text-lg text-primary-foreground/85">
            List your service on Visit Dauin for free. Travellers message you directly — you keep 100% of what you
            earn.
          </p>
          <Link
            href="/join"
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/85"
          >
            Join for free
          </Link>
        </div>
      </div>
    </Container>
  );
}
