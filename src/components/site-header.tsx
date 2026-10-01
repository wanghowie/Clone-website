"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { mainNav } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden flex-1 items-center gap-1 lg:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full border-2 border-transparent px-3 py-1.5 text-sm font-bold text-ink/75 transition-colors hover:text-ink",
                isActive(item.href) && "sticker-sm bg-sun text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/search"
            aria-label="Search"
            className="inline-flex size-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-sun"
          >
            <Search className="size-4" />
          </Link>
          <Link
            href="/join"
            className="sticker-sm hidden rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Are you a local? Join
          </Link>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full hover:bg-muted lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t-2 border-ink bg-background px-4 py-3 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-base font-medium",
                    isActive(item.href) ? "bg-sun font-bold" : "font-semibold hover:bg-muted",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/join"
                onClick={() => setOpen(false)}
                className="sticker-sm block rounded-xl bg-accent px-3 py-3 text-center text-base font-bold text-ink"
              >
                Are you a local? Join Visit Dauin
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
