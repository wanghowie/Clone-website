import { CircleAlert, Clock, MapPin, Users, Wallet } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ActivityCard, ExternalTextLink, LocalCard } from "@/components/cards";
import { activityIcons, activityTones, localIcons } from "@/components/category-icons";
import { JsonLd } from "@/components/json-ld";
import { Container, WaveEdge } from "@/components/page-parts";
import { activities, activityCategories, getActivity } from "@/data/activities";
import { localCategories, locals } from "@/data/locals";
import { siteConfig } from "@/data/site";
import { mapsLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({ params }: PageProps<"/things-to-do/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) return {};
  return { title: activity.title, description: activity.summary };
}

export default async function ActivityPage({ params }: PageProps<"/things-to-do/[slug]">) {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) notFound();

  const Icon = activityIcons[activity.category];
  const helpers = locals.filter((local) => activity.localHelp.includes(local.category)).slice(0, 3);
  const related = activities
    .filter((other) => other.slug !== activity.slug && other.category === activity.category)
    .concat(activities.filter((other) => other.slug !== activity.slug && other.category !== activity.category))
    .slice(0, 3);

  const facts = [
    { icon: Clock, label: "Duration", value: activity.duration },
    { icon: Wallet, label: "Budget", value: activity.budget },
    { icon: MapPin, label: "Where", value: activity.location },
    { icon: Users, label: "Best for", value: activity.bestFor.join(", ") },
  ];

  return (
    <article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          name: activity.title,
          description: activity.summary,
          url: `${siteConfig.url}/things-to-do/${activity.slug}`,
          address: activity.location,
          touristType: activity.bestFor,
        }}
      />
      <header className={cn("relative overflow-hidden", activityTones[activity.category])}>
        <Container className="relative grid items-center gap-10 pt-12 pb-20 sm:pt-16 sm:pb-24 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm font-bold opacity-80">
              <Link href="/things-to-do" className="hover:underline">
                Things to do
              </Link>
              <span className="mx-2">/</span>
              <Link href={`/things-to-do?category=${activity.category}`} className="hover:underline">
                {activityCategories[activity.category].label}
              </Link>
            </nav>
            <h1 className="mt-4 max-w-3xl text-4xl sm:text-6xl">{activity.title}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed font-semibold opacity-90">{activity.summary}</p>
          </div>
          {activity.image ? (
            <div className="sticker relative aspect-[4/3] rotate-2 overflow-hidden rounded-3xl">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="sticker mx-auto hidden size-56 rotate-6 items-center justify-center rounded-full bg-card text-ink lg:flex">
              <Icon className="size-28" strokeWidth={1.5} aria-hidden="true" />
            </div>
          )}
        </Container>
        <WaveEdge className="absolute inset-x-0 bottom-0" />
      </header>

      <Container className="mt-10 grid gap-12 lg:grid-cols-[1fr_340px]">
        <div className="min-w-0">
          <div className="space-y-4 text-lg leading-relaxed text-foreground/85">
            {activity.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-semibold">Highlights</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {activity.highlights.map((highlight) => (
              <li key={highlight} className="sticker-sm rounded-2xl bg-card px-4 py-3 text-sm font-semibold">
                {highlight}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-semibold">Good to know</h2>
          <ul className="mt-4 space-y-3">
            {activity.goodToKnow.map((tip) => (
              <li key={tip} className="flex gap-3 text-foreground/85">
                <CircleAlert className="mt-1 size-4 shrink-0 text-accent" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Prices and fees last checked {siteConfig.contentCheckedAt}. Always confirm locally before you go.
          </p>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <dl className="sticker space-y-4 rounded-3xl bg-card p-5">
            {facts.map((fact) => (
              <div key={fact.label} className="flex gap-3">
                <fact.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{fact.label}</dt>
                  <dd className="mt-0.5 text-sm">{fact.value}</dd>
                </div>
              </div>
            ))}
            <div className="border-t border-border pt-4 text-sm">
              <ExternalTextLink href={mapsLink(activity.mapQuery)}>Open in Google Maps</ExternalTextLink>
            </div>
          </dl>

          <div className="sticker rounded-3xl bg-sun p-5">
            <h2 className="text-lg">Locals who can help</h2>
            <ul className="mt-3 space-y-2">
              {activity.localHelp.map((category) => {
                const CategoryIcon = localIcons[category];
                return (
                  <li key={category}>
                    <Link
                      href={`/locals?category=${category}`}
                      className="flex items-center gap-2 text-sm font-medium text-secondary-foreground hover:underline"
                    >
                      <CategoryIcon className="size-4" />
                      Find {localCategories[category].plural.toLowerCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </Container>

      {helpers.length > 0 && (
        <Container className="mt-16">
          <h2 className="text-2xl font-semibold">Book it with a local</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {helpers.map((local) => (
              <LocalCard key={local.slug} local={local} />
            ))}
          </div>
        </Container>
      )}

      <Container className="mt-16">
        <h2 className="text-2xl font-semibold">More things to do</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((other) => (
            <ActivityCard key={other.slug} activity={other} />
          ))}
        </div>
      </Container>
    </article>
  );
}
