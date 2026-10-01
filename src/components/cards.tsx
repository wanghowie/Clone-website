import { ArrowRight, BadgeCheck, Clock, ExternalLink, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { activityIcons, activityTones, localIcons, localTones } from "@/components/category-icons";
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
      className="group sticker flex flex-col overflow-hidden rounded-3xl bg-card transition-transform hover:-translate-y-1 hover:rotate-[-0.5deg]"
    >
      <div
        className={cn(
          "relative flex aspect-[16/10] items-end overflow-hidden border-b-2 border-ink p-4",
          activityTones[activity.category],
        )}
      >
        {activity.image ? (
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <span aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(currentColor_1.5px,transparent_1.5px)] bg-size-[18px_18px] opacity-15" />
            <Icon
              className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 -rotate-6 transition-transform group-hover:rotate-6"
              strokeWidth={1.75}
            />
          </>
        )}
        <span className="sticker-sm relative rounded-full bg-card px-3 py-1 text-xs font-bold text-ink">
          {activityCategories[activity.category].label}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl leading-snug group-hover:text-primary">{activity.title}</h3>
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
  return (
    <Link
      href={`/locals/${local.slug}`}
      className="group sticker flex flex-col rounded-3xl bg-card p-5 transition-transform hover:-translate-y-1"
    >
      <div className="flex items-start gap-4">
        <LocalAvatar local={local} size="sm" />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-1.5">
            <h3 className="text-lg group-hover:text-primary">{local.name}</h3>
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
          <span key={language} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
            {language}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function LocalAvatar({ local, size }: { local: Local; size: "sm" | "lg" }) {
  const Icon = localIcons[local.category];
  const box = size === "sm" ? "size-14" : "size-24";
  if (local.photo) {
    return (
      <Image
        src={local.photo}
        alt={local.name}
        width={size === "sm" ? 56 : 96}
        height={size === "sm" ? 56 : 96}
        className={cn(box, "shrink-0 rounded-full border-2 border-ink object-cover")}
      />
    );
  }
  return (
    <div
      className={cn(
        box,
        "flex shrink-0 items-center justify-center rounded-full border-2 border-ink",
        localTones[local.category],
      )}
    >
      <Icon className={size === "sm" ? "size-6" : "size-10"} />
    </div>
  );
}

export function ExampleBadge() {
  return (
    <span className="rounded-full border-2 border-dashed border-ink bg-sun px-2 py-0.5 text-[11px] font-bold tracking-wide text-ink uppercase">
      Example
    </span>
  );
}

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <article id={restaurant.slug} className="sticker flex scroll-mt-24 flex-col rounded-3xl bg-card p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl">{restaurant.name}</h3>
        <span className="sticker-sm shrink-0 rounded-full bg-sun px-2 py-0.5 text-xs font-bold text-ink" title={priceTierDescription[restaurant.priceTier]}>
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
          <span key={tag} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
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
    <article id={stay.slug} className="sticker flex scroll-mt-24 flex-col rounded-3xl bg-card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{stayTypes[stay.type]}</p>
          <h3 className="mt-1 text-xl">{stay.name}</h3>
        </div>
        <span
          className="sticker-sm shrink-0 rounded-full bg-sun px-2 py-0.5 text-xs font-bold text-ink"
          title={priceTierDescription[stay.priceTier]}
        >
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
          <li key={feature} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
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
      className="inline-flex items-center gap-1 font-bold text-primary underline-offset-4 hover:underline"
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
