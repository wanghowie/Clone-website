import {
  Bus,
  CarTaxiFront,
  Church,
  Compass,
  Fish,
  Flower2,
  Map,
  Mountain,
  Sailboat,
  TreePalm,
  Turtle,
  type LucideIcon,
} from "lucide-react";
import type { ActivityCategory, LocalCategory } from "@/types";

export const activityIcons: Record<ActivityCategory, LucideIcon> = {
  diving: Fish,
  island: Turtle,
  nature: Mountain,
  culture: Church,
  wellness: Flower2,
  "day-trip": Map,
  nearby: TreePalm,
};

export const localIcons: Record<LocalCategory, LucideIcon> = {
  tricycle: CarTaxiFront,
  "van-bus": Bus,
  "dive-guide": Fish,
  boatman: Sailboat,
  yoga: Flower2,
  "tour-guide": Compass,
};

/** Bright tropical colour blocks per category (used until real photos are added) */
export const activityTones: Record<ActivityCategory, string> = {
  diving: "bg-primary text-primary-foreground",
  island: "bg-palm text-ink",
  nature: "bg-[oklch(0.8_0.15_128)] text-ink",
  culture: "bg-accent text-ink",
  wellness: "bg-hibiscus text-ink",
  "day-trip": "bg-sun text-ink",
  nearby: "bg-sky text-ink",
};

export const localTones: Record<LocalCategory, string> = {
  tricycle: "bg-sun text-ink",
  "van-bus": "bg-sky text-ink",
  "dive-guide": "bg-primary text-primary-foreground",
  boatman: "bg-palm text-ink",
  yoga: "bg-hibiscus text-ink",
  "tour-guide": "bg-accent text-ink",
};
