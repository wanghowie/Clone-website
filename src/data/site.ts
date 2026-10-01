export const siteConfig = {
  name: "Visit Dauin",
  tagline: "Meet the locals who make Dauin",
  description:
    "Your local guide to Dauin, Negros Oriental — muck diving, Apo Island, hot springs and black-sand sunsets. Find trusted tricycle drivers, dive guides, boatmen, yoga teachers and tour guides, and message them directly.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.visitdauin.com",
  /** Last time the guide content (prices, fees, opening hours) was checked */
  contentCheckedAt: "October 2026",
  /**
   * How travellers and locals reach the Visit Dauin team.
   * Fill these in before launch — empty values hide the matching button.
   */
  team: {
    whatsapp: "",
    messenger: "",
    facebookUrl: "",
    email: "",
  },
  /** Show example local profiles until real locals have joined */
  showExampleLocals: true,
  /** Optional Booking.com affiliate id appended to hotel links */
  bookingAffiliateId: "",
} as const;

export const mainNav = [
  { href: "/things-to-do", label: "Things to do" },
  { href: "/locals", label: "Find a local" },
  { href: "/eat", label: "Eat & drink" },
  { href: "/stay", label: "Stay" },
  { href: "/plan", label: "Plan your trip" },
] as const;
