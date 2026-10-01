import Link from "next/link";
import { Logo } from "@/components/logo";
import { localCategories, localCategoryOrder } from "@/data/locals";
import { mainNav, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo inverted />
          <p className="mt-4 text-sm leading-relaxed text-ink-foreground/70">
            An independent, local-first guide to Dauin, Negros Oriental. We connect travellers directly with the
            drivers, guides, boatmen and teachers who live here — no middlemen, no booking fees.
          </p>
        </div>

        <FooterColumn title="Explore">
          {mainNav.map((item) => (
            <FooterLink key={item.href} href={item.href}>
              {item.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Find a local">
          {localCategoryOrder.map((category) => (
            <FooterLink key={category} href={`/locals?category=${category}`}>
              {localCategories[category].plural}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="For locals">
          <FooterLink href="/join">List your service for free</FooterLink>
          <FooterLink href="/about">About Visit Dauin</FooterLink>
          {siteConfig.team.facebookUrl && <FooterLink href={siteConfig.team.facebookUrl}>Facebook</FooterLink>}
          {siteConfig.team.email && (
            <FooterLink href={`mailto:${siteConfig.team.email}`}>{siteConfig.team.email}</FooterLink>
          )}
        </FooterColumn>
      </div>
      <div className="border-t border-ink-foreground/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-ink-foreground/60 sm:px-6">
          © {new Date().getFullYear()} {siteConfig.name}. Prices, fees and opening hours change — always confirm
          directly before you go. Guide last checked {siteConfig.contentCheckedAt}.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-sans text-xs font-semibold tracking-widest text-ink-foreground/50 uppercase">{title}</h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-ink-foreground/80 transition-colors hover:text-ink-foreground">
        {children}
      </Link>
    </li>
  );
}
