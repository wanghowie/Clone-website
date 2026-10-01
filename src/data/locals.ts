import { siteConfig } from "@/data/site";
import type { Local, LocalCategory } from "@/types";

export const localCategories: Record<
  LocalCategory,
  { label: string; plural: string; description: string; askFor: string }
> = {
  tricycle: {
    label: "Tricycle driver",
    plural: "Tricycle drivers",
    description: "Short rides around town, beach hops and trips up to the hot springs.",
    askFor: "a ride",
  },
  "van-bus": {
    label: "Van & bus driver",
    plural: "Van & bus drivers",
    description: "Airport and port transfers, group trips and full-day tours with room for dive gear.",
    askFor: "a transfer",
  },
  "dive-guide": {
    label: "Dive guide",
    plural: "Dive guides",
    description: "Sharp-eyed critter spotters for muck dives, sanctuaries and Apo Island.",
    askFor: "a dive",
  },
  boatman: {
    label: "Boatman",
    plural: "Boatmen",
    description: "Bangka trips to Apo Island, snorkelling tours and sunset cruises.",
    askFor: "a boat trip",
  },
  yoga: {
    label: "Yoga teacher",
    plural: "Yoga teachers",
    description: "Private and small-group classes on the beach, in your resort or villa.",
    askFor: "a class",
  },
  "tour-guide": {
    label: "Tour guide",
    plural: "Tour guides",
    description: "Hikes, waterfalls, markets and heritage walks with someone who grew up here.",
    askFor: "a tour",
  },
};

export const localCategoryOrder: LocalCategory[] = [
  "tricycle",
  "van-bus",
  "dive-guide",
  "boatman",
  "yoga",
  "tour-guide",
];

/**
 * Local profiles. Add real locals here after they've been met and checked.
 * Entries with `isExample: true` only illustrate the layout — they are hidden
 * when `siteConfig.showExampleLocals` is false.
 */
const allLocals: Local[] = [
  {
    slug: "example-tricycle-driver",
    name: "Kuya Jun",
    category: "tricycle",
    tagline: "Your ride around Dauin, day or night",
    bio: "Born and raised in Poblacion. I know every resort, sanctuary and shortcut in Dauin and can take you up to Baslay Hot Spring and back.",
    barangay: "Poblacion",
    languages: ["English", "Cebuano", "Tagalog"],
    yearsExperience: 12,
    services: [
      { name: "Ride within Dauin", price: "Ask for rate", note: "Per trip" },
      { name: "Baslay Hot Spring round trip", price: "Ask for rate", note: "Includes waiting time" },
      { name: "Ride to Dumaguete", price: "Ask for rate" },
    ],
    availability: "Daily, 6am–9pm",
    contact: {},
    verified: false,
    isExample: true,
    joinedAt: "2026-10-01",
  },
  {
    slug: "example-van-driver",
    name: "Manong Rey",
    category: "van-bus",
    tagline: "Airport transfers and group day trips",
    bio: "Air-conditioned van for up to 12 people with space for dive bags. Airport, ferry port and full-day tours around Negros Oriental.",
    barangay: "Lipayo",
    languages: ["English", "Cebuano", "Tagalog"],
    yearsExperience: 8,
    services: [
      { name: "Dumaguete airport / port transfer", price: "Ask for rate", note: "Per van" },
      { name: "Full-day tour", price: "Ask for rate", note: "Up to 10 hours" },
    ],
    availability: "Book at least 1 day ahead",
    contact: {},
    verified: false,
    isExample: true,
    joinedAt: "2026-10-01",
  },
  {
    slug: "example-dive-guide",
    name: "Ate Grace",
    category: "dive-guide",
    tagline: "I'll find the frogfish for you",
    bio: "Freelance dive guide specialising in macro and underwater photography. I work with several dive centres along the coast and can arrange shore dives or Apo Island trips.",
    barangay: "Masaplod Norte",
    languages: ["English", "Cebuano"],
    yearsExperience: 10,
    services: [
      { name: "Guided muck dive", price: "Ask for rate", note: "Gear and tank through partner dive centre" },
      { name: "Photo-critter dive", price: "Ask for rate", note: "Slow pace, small group" },
    ],
    availability: "Most days — message for open slots",
    contact: {},
    verified: false,
    isExample: true,
    joinedAt: "2026-10-01",
  },
  {
    slug: "example-boatman",
    name: "Kuya Boboy",
    category: "boatman",
    tagline: "Bangka trips to Apo Island",
    bio: "Third-generation fisherman with my own bangka. I take small groups to Apo Island for snorkelling with the turtles, and run sunset trips along the coast.",
    barangay: "Masaplod Sur",
    languages: ["Cebuano", "English"],
    yearsExperience: 20,
    services: [
      { name: "Apo Island private boat", price: "Ask for rate", note: "Up to 4 people, round trip" },
      { name: "Sunset boat ride", price: "Ask for rate" },
    ],
    availability: "Early mornings, weather permitting",
    contact: {},
    verified: false,
    isExample: true,
    joinedAt: "2026-10-01",
  },
  {
    slug: "example-yoga-teacher",
    name: "Mia",
    category: "yoga",
    tagline: "Sunrise yoga on the black sand",
    bio: "Certified yoga teacher offering private and small-group vinyasa, yin and breathwork sessions on the beach or at your resort.",
    barangay: "Poblacion",
    languages: ["English", "Tagalog"],
    yearsExperience: 5,
    services: [
      { name: "Private class (60 min)", price: "Ask for rate" },
      { name: "Small-group beach class", price: "Ask for rate", note: "2–6 people" },
    ],
    availability: "Mornings and late afternoons",
    contact: {},
    verified: false,
    isExample: true,
    joinedAt: "2026-10-01",
  },
  {
    slug: "example-tour-guide",
    name: "Kuya Nonoy",
    category: "tour-guide",
    tagline: "Hot springs, waterfalls and mountain trails",
    bio: "Mountain guide from the upland barangays. I lead day hikes, waterfall trips and the Mt. Talinis trek via the Bediao Trail.",
    barangay: "Baslay",
    languages: ["English", "Cebuano", "Tagalog"],
    yearsExperience: 7,
    services: [
      { name: "Waterfall & hot spring day tour", price: "Ask for rate" },
      { name: "Mt. Talinis trek (2–3 days)", price: "Ask for rate", note: "Porters available" },
    ],
    availability: "Book 2–3 days ahead for treks",
    contact: {},
    verified: false,
    isExample: true,
    joinedAt: "2026-10-01",
  },
];

export const locals = allLocals.filter((local) => siteConfig.showExampleLocals || !local.isExample);

export function getLocal(slug: string) {
  return locals.find((local) => local.slug === slug);
}

export function getLocalsByCategory(category: LocalCategory) {
  return locals.filter((local) => local.category === category);
}

export function isLocalCategory(value: string | undefined): value is LocalCategory {
  return value !== undefined && value in localCategories;
}
