"use client";

import { Check, Copy, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { localCategories, localCategoryOrder } from "@/data/locals";
import { siteConfig } from "@/data/site";
import { messengerLink, whatsappLink } from "@/lib/links";
import type { LocalCategory } from "@/types";

const fieldClass =
  "mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40";

export function JoinForm() {
  const [fields, setFields] = useState({
    name: "",
    category: "tricycle" as LocalCategory,
    barangay: "",
    phone: "",
    facebook: "",
    languages: "English, Cebuano",
    services: "",
    availability: "",
  });
  const [copied, setCopied] = useState(false);

  function update<K extends keyof typeof fields>(key: K, value: (typeof fields)[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  const message = [
    "Hi Visit Dauin! I'd like to list my service.",
    `Name: ${fields.name}`,
    `Service: ${localCategories[fields.category].label}`,
    `Barangay: ${fields.barangay}`,
    `WhatsApp / mobile: ${fields.phone}`,
    fields.facebook && `Facebook: ${fields.facebook}`,
    `Languages: ${fields.languages}`,
    fields.services && `What I offer & prices: ${fields.services}`,
    fields.availability && `Availability: ${fields.availability}`,
  ]
    .filter(Boolean)
    .join("\n");

  const ready = fields.name.trim() !== "" && fields.phone.trim() !== "";
  const { team } = siteConfig;

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="sticker rounded-3xl bg-card p-5 sm:p-6">
      <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
        <label className="block text-sm font-medium">
          Your name *
          <input className={fieldClass} value={fields.name} onChange={(event) => update("name", event.target.value)} />
        </label>
        <label className="block text-sm font-medium">
          What do you offer? *
          <select
            className={fieldClass}
            value={fields.category}
            onChange={(event) => update("category", event.target.value as LocalCategory)}
          >
            {localCategoryOrder.map((category) => (
              <option key={category} value={category}>
                {localCategories[category].label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium">
          Barangay
          <input
            className={fieldClass}
            placeholder="e.g. Poblacion, Masaplod Norte"
            value={fields.barangay}
            onChange={(event) => update("barangay", event.target.value)}
          />
        </label>
        <label className="block text-sm font-medium">
          WhatsApp / mobile number *
          <input
            type="tel"
            className={fieldClass}
            placeholder="09XX XXX XXXX"
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </label>
        <label className="block text-sm font-medium">
          Facebook profile or page
          <input
            className={fieldClass}
            placeholder="facebook.com/…"
            value={fields.facebook}
            onChange={(event) => update("facebook", event.target.value)}
          />
        </label>
        <label className="block text-sm font-medium">
          Languages
          <input
            className={fieldClass}
            value={fields.languages}
            onChange={(event) => update("languages", event.target.value)}
          />
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          What you offer and your usual prices
          <textarea
            rows={3}
            className={fieldClass}
            placeholder="e.g. Apo Island boat trip for 4 people, round trip"
            value={fields.services}
            onChange={(event) => update("services", event.target.value)}
          />
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          When are you available?
          <input
            className={fieldClass}
            placeholder="e.g. Every day 6am–6pm"
            value={fields.availability}
            onChange={(event) => update("availability", event.target.value)}
          />
        </label>
      </form>

      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        {team.whatsapp && (
          <SendLink href={whatsappLink(team.whatsapp, message)} disabled={!ready} primary>
            <Send className="size-4" /> Send on WhatsApp
          </SendLink>
        )}
        {team.messenger && (
          <SendLink href={messengerLink(team.messenger)} disabled={!ready} onClick={copyMessage}>
            <MessageCircle className="size-4" /> Send on Messenger
          </SendLink>
        )}
        {team.email && (
          <SendLink
            href={`mailto:${team.email}?subject=${encodeURIComponent("Join Visit Dauin")}&body=${encodeURIComponent(message)}`}
            disabled={!ready}
          >
            <Mail className="size-4" /> Send by email
          </SendLink>
        )}
        <button
          type="button"
          onClick={copyMessage}
          disabled={!ready}
          className="sticker-sm inline-flex h-11 items-center justify-center gap-2 rounded-full bg-card px-4 text-sm font-bold hover:bg-sun disabled:opacity-50"
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          {copied ? "Copied!" : "Copy my details"}
        </button>
      </div>
      {!ready && <p className="mt-3 text-xs text-muted-foreground">Add your name and number to continue.</p>}
      {team.messenger && (
        <p className="mt-3 text-xs text-muted-foreground">
          Messenger opens without the text — your details are copied, just paste them in.
        </p>
      )}
    </div>
  );
}

function SendLink({
  href,
  disabled,
  primary = false,
  onClick,
  children,
}: {
  href: string;
  disabled: boolean;
  primary?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const className = primary
    ? "bg-primary text-primary-foreground hover:bg-primary/90"
    : "bg-card hover:bg-sun";
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={`inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold opacity-50 ${className}`}
      >
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`sticker-sm inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-bold transition-colors ${className}`}
    >
      {children}
    </a>
  );
}
