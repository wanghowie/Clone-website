export type PriceTier = 1 | 2 | 3 | 4;

export type ActivityCategory =
  | "diving"
  | "island"
  | "nature"
  | "culture"
  | "wellness"
  | "day-trip"
  | "nearby";

export type LocalCategory =
  | "tricycle"
  | "van-bus"
  | "dive-guide"
  | "boatman"
  | "yoga"
  | "tour-guide";

export interface Activity {
  slug: string;
  title: string;
  category: ActivityCategory;
  summary: string;
  description: string[];
  highlights: string[];
  goodToKnow: string[];
  duration: string;
  budget: string;
  bestFor: string[];
  location: string;
  mapQuery: string;
  /** Local categories that can help with this activity */
  localHelp: LocalCategory[];
}

export interface LocalService {
  name: string;
  price?: string;
  note?: string;
}

export interface LocalContact {
  /** International format without "+" or spaces, e.g. "639171234567" */
  whatsapp?: string;
  /** Facebook username / page id used for m.me links */
  messenger?: string;
  /** Plain phone number for calls and SMS, e.g. "+639171234567" */
  phone?: string;
  facebookUrl?: string;
}

export interface Local {
  slug: string;
  name: string;
  category: LocalCategory;
  tagline: string;
  bio: string;
  barangay: string;
  languages: string[];
  yearsExperience?: number;
  services: LocalService[];
  availability: string;
  /** Path under /public, e.g. "/images/locals/kuya-jun.jpg" */
  photo?: string;
  contact: LocalContact;
  verified: boolean;
  /** Example profiles illustrate the layout and are hidden once real locals join */
  isExample?: boolean;
  joinedAt: string;
}

export type RestaurantType =
  | "filipino"
  | "cafe"
  | "pizza"
  | "vegetarian"
  | "fine-dining"
  | "bar";

export interface Restaurant {
  slug: string;
  name: string;
  types: RestaurantType[];
  summary: string;
  priceTier: PriceTier;
  area: string;
  hours?: string;
  website?: string;
  mapQuery: string;
  tags: string[];
}

export type StayType = "hostel" | "dive-resort" | "beach-resort" | "guesthouse" | "luxury";

export interface Stay {
  slug: string;
  name: string;
  type: StayType;
  summary: string;
  priceTier: PriceTier;
  area: string;
  rating?: { score: number; reviews: number; source: string };
  features: string[];
  bookingUrl?: string;
  website?: string;
  mapQuery: string;
}
