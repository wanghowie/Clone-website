import { cn } from "@/lib/utils";

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg viewBox="0 0 36 36" className="size-9" aria-hidden="true">
        <circle cx="18" cy="18" r="16" className="fill-sun stroke-ink" strokeWidth="2.5" />
        <circle cx="23" cy="13" r="5" className="fill-accent stroke-ink" strokeWidth="2" />
        <path
          d="M3.5 21c3-2.5 6-2.5 9 0s6 2.5 9 0 6-2.5 11 0a16 16 0 0 1-29 0z"
          className="fill-primary stroke-ink"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={cn(
          "font-heading text-xl font-bold",
          inverted ? "text-ink-foreground" : "text-foreground",
        )}
      >
        Visit Dauin
      </span>
    </span>
  );
}
