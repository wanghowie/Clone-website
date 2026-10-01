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
          "pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-ink",
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
          "sticker w-full rounded-full bg-card pr-28 font-semibold text-foreground outline-none placeholder:font-normal placeholder:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
          size === "lg" ? "h-14 pl-12 text-base" : "h-11 pl-11 text-sm",
        )}
      />
      <button
        type="submit"
        className={cn(
          "absolute top-1/2 right-2 -translate-y-1/2 rounded-full border-2 border-ink bg-accent font-bold text-ink transition-colors hover:bg-accent/85",
          size === "lg" ? "h-10 px-5 text-sm" : "h-7 px-3.5 text-sm",
        )}
      >
        Search
      </button>
    </form>
  );
}
