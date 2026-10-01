"use client";

import { Check, Copy, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { messengerLink, smsLink, whatsappLink } from "@/lib/links";
import { cn } from "@/lib/utils";
import type { LocalContact, LocalService } from "@/types";

const fieldClass =
  "mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40";

export function ContactPanel({
  localName,
  services,
  contact,
  disabled = false,
}: {
  localName: string;
  services: LocalService[];
  contact: LocalContact;
  disabled?: boolean;
}) {
  const [service, setService] = useState(services[0]?.name ?? "");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("2");
  const [note, setNote] = useState("");
  const [travellerName, setTravellerName] = useState("");
  const [copied, setCopied] = useState(false);

  const message = [
    `Hi ${localName}! I found you on Visit Dauin.`,
    service && `I'm interested in: ${service}.`,
    date && `Date: ${date}.`,
    people && `Group size: ${people}.`,
    note.trim(),
    travellerName.trim() && `— ${travellerName.trim()}`,
  ]
    .filter(Boolean)
    .join("\n");

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const hasDirectChannel = Boolean(contact.whatsapp || contact.phone || contact.messenger);

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h2 className="font-sans text-lg font-semibold">Message {localName}</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill in your trip details and we&apos;ll write the message for you. You agree price and pay directly.
      </p>

      <form className="mt-5 space-y-4" onSubmit={(event) => event.preventDefault()}>
        {services.length > 0 && (
          <label className="block text-sm font-medium">
            Service
            <select className={fieldClass} value={service} onChange={(event) => setService(event.target.value)}>
              {services.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        )}
        <div className="grid grid-cols-2 gap-3">
          <label className="block text-sm font-medium">
            Date
            <input type="date" className={fieldClass} value={date} onChange={(event) => setDate(event.target.value)} />
          </label>
          <label className="block text-sm font-medium">
            People
            <input
              type="number"
              min={1}
              max={50}
              className={fieldClass}
              value={people}
              onChange={(event) => setPeople(event.target.value)}
            />
          </label>
        </div>
        <label className="block text-sm font-medium">
          Anything else?
          <textarea
            rows={3}
            className={fieldClass}
            placeholder="Pick-up point, time, questions…"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
        </label>
        <label className="block text-sm font-medium">
          Your name
          <input className={fieldClass} value={travellerName} onChange={(event) => setTravellerName(event.target.value)} />
        </label>
      </form>

      <div className="mt-5 rounded-lg bg-muted p-3">
        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Your message</p>
        <p className="mt-1 text-sm whitespace-pre-line">{message}</p>
      </div>

      {disabled ? (
        <p className="mt-5 rounded-lg border border-dashed border-accent bg-accent/10 p-3 text-sm">
          This is an example profile to show how listings will look. Real locals are joining soon.
        </p>
      ) : (
        <div className="mt-5 grid gap-2">
          {contact.whatsapp && (
            <ChannelButton href={whatsappLink(contact.whatsapp, message)} primary>
              <Send className="size-4" /> Send on WhatsApp
            </ChannelButton>
          )}
          {contact.messenger && (
            <ChannelButton href={messengerLink(contact.messenger)} onClick={copyMessage}>
              <MessageCircle className="size-4" /> Open Messenger (message copied)
            </ChannelButton>
          )}
          {contact.phone && (
            <div className="grid grid-cols-2 gap-2">
              <ChannelButton href={smsLink(contact.phone, message)}>
                <MessageCircle className="size-4" /> SMS
              </ChannelButton>
              <ChannelButton href={`tel:${contact.phone}`}>
                <Phone className="size-4" /> Call
              </ChannelButton>
            </div>
          )}
          <button
            type="button"
            onClick={copyMessage}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full text-sm font-medium text-muted-foreground hover:bg-muted"
          >
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Copied!" : "Copy message"}
          </button>
          {!hasDirectChannel && (
            <p className="text-xs text-muted-foreground">Contact details for this local are being updated.</p>
          )}
        </div>
      )}
    </div>
  );
}

function ChannelButton({
  href,
  primary = false,
  onClick,
  children,
}: {
  href: string;
  primary?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors",
        primary
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "border border-border bg-background hover:bg-muted",
      )}
    >
      {children}
    </a>
  );
}
