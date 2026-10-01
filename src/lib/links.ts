import type { PriceTier } from "@/types";

export function mapsLink(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function whatsappLink(number: string, message?: string) {
  const base = `https://wa.me/${number.replace(/\D/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function messengerLink(username: string) {
  return `https://m.me/${username}`;
}

export function smsLink(phone: string, message?: string) {
  return message ? `sms:${phone}?&body=${encodeURIComponent(message)}` : `sms:${phone}`;
}

export function priceLabel(tier: PriceTier) {
  return "₱".repeat(tier);
}

export const priceTierDescription: Record<PriceTier, string> = {
  1: "Budget",
  2: "Mid-range",
  3: "Upper mid-range",
  4: "Splurge",
};
