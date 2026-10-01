import { ArrowRight, BadgeCheck, Clock, ExternalLink, MapPin, Star } from "lucide-react";
import Link from "next/link";
import {
  activityGradients,
  activityIcons,
  localGradients,
  localIcons,
} from "@/components/category-icons";
import { activityCategories } from "@/data/activities";
import { localCategories } from "@/data/locals";
import { restaurantTypes } from "@/data/restaurants";
import { bookingLink, stayTypes } from "@/data/stays";
import { mapsLink, priceLabel, priceTierDescription } from "@/lib/links";
import { cn } from "@/lib/utils";
import type { Activity, Local, Restaurant, Stay } from "@/types";

export function ActivityCard({ activity }: { activity: Activity }) {
  const Icon = activityIcons[activity.category];
  return (
    <Link
      href={`/things-to-do/${activity.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
    >
      <div
        className={cn(
          "relative flex aspect-[16/10] items-end bg-gradient-to-br p-4",
          activityGradients[activity.category],
        )}
      >
        <Icon className="absolute top-4 right-4 size-10 text-white/35" strokeWidth={1.5} />
        <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-foreground">
          {activityCategories[activity.category].label}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug group-hover:text-primary">{activity.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{activity.summary}</p>
        <div className="mt-auto flex items-center gap-1.5 pt-4 text-xs text-muted-foreground">
          <Clock className="size-3.5" />
          {activity.duration}
        </div>
      </div>
    </Link>
  );
}

export function LocalCard({ local }: { local: Local }) {
  const category = localCategories[local.category];
  const Icon = localIcons[local.category];
  return (
    <Link
      href={`/locals/${local.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white",
            localGradients[local.category],
          )}
        >
          <Icon className="size-6" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-1.5">
            <h3 className="font-sans text-base font-semibold group-hover:text-primary">{local.name}</h3>
            {local.verified && <BadgeCheck className="size-4 text-primary" aria-label="Verified" />}
            {local.isExample && <ExampleBadge />}
          </div>
          <p className="text-sm text-muted-foreground">
            {category.label} · {local.barangay}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/80">{local.tagline}</p>
      <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
        {local.languages.map((language) => (
          <span key={language} className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {language}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function ExampleBadge() {
  return (
    <span className="rounded-full border border-dashed border-accent bg-accent/10 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-accent-foreground uppercase">
      Example
    </span>
  );
}

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <article id={restaurant.slug} className="flex scroll-mt-24 flex-col rounded-2xl border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-sans text-lg font-semibold">{restaurant.name}</h3>
        <span className="shrink-0 text-sm font-semibold text-primary" title={priceTierDescription[restaurant.priceTier]}>
          {priceLabel(restaurant.priceTier)}
        </span>
      </div>
      <p className="mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {restaurant.types.map((type) => restaurantTypes[type]).join(" · ")}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{restaurant.summary}</p>
      <dl className="mt-4 space-y-1.5 text-sm text-muted-foreground">
        <div className="flex gap-2">
          <dt className="sr-only">Area</dt>
          <MapPin className="mt-0.5 size-4 shrink-0" />
          <dd>{restaurant.area}</dd>
        </div>
        {restaurant.hours && (
          <div className="flex gap-2">
            <dt className="sr-only">Hours</dt>
            <Clock className="mt-0.5 size-4 shrink-0" />
            <dd>{restaurant.hours}</dd>
          </div>
        )}
      </dl>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {restaurant.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm font-medium">
        <ExternalTextLink href={mapsLink(restaurant.mapQuery)}>Map</ExternalTextLink>
        {restaurant.website && <ExternalTextLink href={restaurant.website}>Website</ExternalTextLink>}
      </div>
    </article>
  );
}

export function StayCard({ stay }: { stay: Stay }) {
  return (
    <article id={stay.slug} className="flex scroll-mt-24 flex-col rounded-2xl border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{stayTypes[stay.type]}</p>
          <h3 className="mt-1 font-sans text-lg font-semibold">{stay.name}</h3>
        </div>
        <span className="shrink-0 text-sm font-semibold text-primary" title={priceTierDescription[stay.priceTier]}>
          {priceLabel(stay.priceTier)}
        </span>
      </div>
      {stay.rating && (
        <p className="mt-2 flex items-center gap-1 text-sm">
          <Star className="size-4 fill-accent text-accent" />
          <span className="font-semibold">{stay.rating.score.toFixed(1)}</span>
          <span className="text-muted-foreground">
            / 10 · {stay.rating.reviews} reviews on {stay.rating.source}
          </span>
        </p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{stay.summary}</p>
      <p className="mt-3 flex gap-2 text-sm text-muted-foreground">
        <MapPin className="mt-0.5 size-4 shrink-0" />
        {stay.area}
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {stay.features.map((feature) => (
          <li key={feature} className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm font-medium">
        {stay.bookingUrl && <ExternalTextLink href={bookingLink(stay.bookingUrl)}>Check prices</ExternalTextLink>}
        {stay.website && <ExternalTextLink href={stay.website}>Website</ExternalTextLink>}
        <ExternalTextLink href={mapsLink(stay.mapQuery)}>Map</ExternalTextLink>
      </div>
    </article>
  );
}

export function ExternalTextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline"
    >
      {children}
      <ExternalLink className="size-3.5" />
    </a>
  );
}

export function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
      {children}
      <ArrowRight className="size-4" />
    </Link>
  );
}
