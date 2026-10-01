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
};

export const localIcons: Record<LocalCategory, LucideIcon> = {
  tricycle: CarTaxiFront,
  "van-bus": Bus,
  "dive-guide": Fish,
  boatman: Sailboat,
  yoga: Flower2,
  "tour-guide": Compass,
};

/** Gradient backdrops used in place of photos until real imagery is added */
export const activityGradients: Record<ActivityCategory, string> = {
  diving: "from-[oklch(0.42_0.1_220)] via-[oklch(0.5_0.1_200)] to-[oklch(0.68_0.1_180)]",
  island: "from-[oklch(0.45_0.1_190)] via-[oklch(0.6_0.11_170)] to-[oklch(0.82_0.08_95)]",
  nature: "from-[oklch(0.35_0.06_160)] via-[oklch(0.48_0.08_150)] to-[oklch(0.7_0.08_120)]",
  culture: "from-[oklch(0.42_0.06_40)] via-[oklch(0.58_0.1_50)] to-[oklch(0.8_0.09_75)]",
  wellness: "from-[oklch(0.5_0.08_330)] via-[oklch(0.65_0.1_20)] to-[oklch(0.85_0.07_70)]",
  "day-trip": "from-[oklch(0.35_0.05_250)] via-[oklch(0.5_0.08_230)] to-[oklch(0.75_0.1_60)]",
};

export const localGradients: Record<LocalCategory, string> = {
  tricycle: "from-[oklch(0.55_0.13_45)] to-[oklch(0.75_0.12_70)]",
  "van-bus": "from-[oklch(0.4_0.06_250)] to-[oklch(0.6_0.08_220)]",
  "dive-guide": "from-[oklch(0.42_0.1_220)] to-[oklch(0.65_0.1_190)]",
  boatman: "from-[oklch(0.45_0.1_190)] to-[oklch(0.72_0.1_160)]",
  yoga: "from-[oklch(0.5_0.08_330)] to-[oklch(0.75_0.09_30)]",
  "tour-guide": "from-[oklch(0.38_0.06_160)] to-[oklch(0.62_0.09_130)]",
};
