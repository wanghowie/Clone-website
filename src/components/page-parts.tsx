import Link from "next/link";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>{children}</div>;
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative bg-sun text-ink">
      <Container className="pt-12 pb-20 sm:pt-16 sm:pb-24">
        {eyebrow && (
          <p className="sticker-sm inline-flex -rotate-2 rounded-full bg-card px-3 py-1 text-sm font-bold tracking-wide uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-6xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">{intro}</p>}
        {children}
      </Container>
      <WaveEdge className="absolute inset-x-0 bottom-0" />
    </section>
  );
}

export function SectionHeading({
  title,
  intro,
  action,
}: {
  title: string;
  intro?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-3xl sm:text-4xl">{title}</h2>
        {intro && <p className="mt-2 max-w-2xl text-muted-foreground">{intro}</p>}
      </div>
      {action}
    </div>
  );
}

export function FilterChips({
  items,
  activeValue,
}: {
  items: { value: string | undefined; label: string; href: string }[];
  activeValue: string | undefined;
}) {
  return (
    <nav aria-label="Filter" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <ul className="flex gap-2.5 pt-1 pb-2">
        {items.map((item) => {
          const active = item.value === activeValue;
          return (
            <li key={item.label} className="shrink-0">
              <Link
                href={item.href}
                scroll={false}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "sticker-sm inline-flex rounded-full px-3.5 py-1.5 text-sm font-bold transition-colors",
                  active ? "bg-primary text-primary-foreground" : "bg-card text-ink hover:bg-secondary",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Wavy edge that blends a coloured band into the page background */
export function WaveEdge({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={cn("block h-8 w-full text-background sm:h-12", className)}
    >
      <path d="M0 30c120-28 240-28 360 0s240 28 360 0 240-28 360 0 240 28 360 0v30H0z" fill="currentColor" />
    </svg>
  );
}
