import { cn } from "@/lib/utils";

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <circle cx="16" cy="16" r="16" className="fill-primary" />
        <circle cx="21" cy="11" r="4" className="fill-accent" />
        <path
          d="M4 19c3-2.5 5.5-2.5 8 0s5 2.5 8 0 5.5-2.5 8 0v6a12 12 0 0 1-24 0z"
          className="fill-primary-foreground/90"
        />
        <path d="M4 23c3-2.5 5.5-2.5 8 0s5 2.5 8 0 5.5-2.5 8 0" className="fill-none stroke-primary" strokeWidth="1.5" />
      </svg>
      <span
        className={cn(
          "font-heading text-lg font-semibold tracking-tight",
          inverted ? "text-ink-foreground" : "text-foreground",
        )}
      >
        Visit Dauin
      </span>
    </span>
  );
}
