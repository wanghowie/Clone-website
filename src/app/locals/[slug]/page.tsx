import { BadgeCheck, CalendarDays, Languages, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ActivityCard, ExampleBadge, LocalAvatar } from "@/components/cards";
import { ContactPanel } from "@/components/contact-panel";
import { Container } from "@/components/page-parts";
import { activities } from "@/data/activities";
import { getLocal, localCategories, locals } from "@/data/locals";

export function generateStaticParams() {
  return locals.map((local) => ({ slug: local.slug }));
}

export async function generateMetadata({ params }: PageProps<"/locals/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const local = getLocal(slug);
  if (!local) return {};
  const category = localCategories[local.category];
  return {
    title: `${local.name} — ${category.label} in Dauin`,
    description: local.tagline,
    robots: local.isExample ? { index: false } : undefined,
  };
}

export default async function LocalPage({ params }: PageProps<"/locals/[slug]">) {
  const { slug } = await params;
  const local = getLocal(slug);
  if (!local) notFound();

  const category = localCategories[local.category];
  const relatedActivities = activities.filter((activity) => activity.localHelp.includes(local.category)).slice(0, 3);

  return (
    <>
      <Container className="mt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link href="/locals" className="hover:underline">
            Find a local
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/locals?category=${local.category}`} className="hover:underline">
            {category.plural}
          </Link>
        </nav>
      </Container>

      <Container className="mt-6 grid gap-10 lg:grid-cols-[1fr_380px]">
        <div className="min-w-0">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <LocalAvatar local={local} size="lg" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-4xl font-semibold">{local.name}</h1>
                {local.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                    <BadgeCheck className="size-3.5" /> Met in person
                  </span>
                )}
                {local.isExample && <ExampleBadge />}
              </div>
              <p className="mt-1 text-lg text-muted-foreground">
                {category.label} · {local.tagline}
              </p>
            </div>
          </div>

          <dl className="sticker mt-8 grid gap-4 rounded-3xl bg-card p-5 sm:grid-cols-3">
            <Fact icon={MapPin} label="Based in" value={`${local.barangay}, Dauin`} />
            <Fact icon={Languages} label="Speaks" value={local.languages.join(", ")} />
            <Fact icon={CalendarDays} label="Availability" value={local.availability} />
          </dl>

          <h2 className="mt-10 text-2xl font-semibold">About</h2>
          <p className="mt-3 text-lg leading-relaxed text-foreground/85">{local.bio}</p>
          {local.yearsExperience && (
            <p className="mt-3 text-sm text-muted-foreground">{local.yearsExperience} years of experience</p>
          )}

          <h2 className="mt-10 text-2xl font-semibold">Services</h2>
          <ul className="sticker mt-4 divide-y-2 divide-ink/10 rounded-3xl bg-card">
            {local.services.map((service) => (
              <li key={service.name} className="flex items-start justify-between gap-4 p-4">
                <div>
                  <p className="font-medium">{service.name}</p>
                  {service.note && <p className="mt-0.5 text-sm text-muted-foreground">{service.note}</p>}
                </div>
                {service.price && <p className="shrink-0 text-sm font-semibold text-primary">{service.price}</p>}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            Prices are agreed directly between you and {local.name}. Visit Dauin takes no commission.
          </p>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <ContactPanel
            localName={local.name}
            services={local.services}
            contact={local.contact}
            disabled={local.isExample}
          />
        </aside>
      </Container>

      {relatedActivities.length > 0 && (
        <Container className="mt-16">
          <h2 className="text-2xl font-semibold">Do it with {local.name}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedActivities.map((activity) => (
              <ActivityCard key={activity.slug} activity={activity} />
            ))}
          </div>
        </Container>
      )}
    </>
  );
}

function Fact({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
      <div>
        <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{label}</dt>
        <dd className="mt-0.5 text-sm">{value}</dd>
      </div>
    </div>
  );
}
