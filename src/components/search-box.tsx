import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function SearchBox({
  defaultValue,
  placeholder = "Try “Apo Island”, “tricycle” or “vegan”",
  size = "default",
  className,
}: {
  defaultValue?: string;
  placeholder?: string;
  size?: "default" | "lg";
  className?: string;
}) {
  return (
    <form action="/search" role="search" className={cn("relative w-full", className)}>
      <label htmlFor="site-search" className="sr-only">
        Search Visit Dauin
      </label>
      <Search
        className={cn(
          "pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted-foreground",
          size === "lg" ? "size-5" : "size-4",
        )}
      />
      <input
        id="site-search"
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={cn(
          "w-full rounded-full border border-border bg-card pr-28 text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40",
          size === "lg" ? "h-14 pl-12 text-base" : "h-11 pl-11 text-sm",
        )}
      />
      <button
        type="submit"
        className={cn(
          "absolute top-1/2 right-1.5 -translate-y-1/2 rounded-full bg-primary font-semibold text-primary-foreground transition-colors hover:bg-primary/90",
          size === "lg" ? "h-11 px-6 text-sm" : "h-8 px-4 text-sm",
        )}
      >
        Search
      </button>
    </form>
  );
}
