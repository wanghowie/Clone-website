import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Shared social-share card. ImageResponse only understands inline style objects
 * and hex colours, so these approximate the oklch tokens in globals.css.
 */
export function renderOgImage({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#13233a",
          backgroundColor: "#ffd84d",
          border: "12px solid #13233a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 32, fontWeight: 700 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: "#ffd84d",
              border: "4px solid #13233a",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              padding: 8,
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: "#f26b3a" }} />
          </div>
          Visit Dauin
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#0e7c86", fontWeight: 700 }}>
            {eyebrow}
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 1000 }}>{title}</div>
          {subtitle && (
            <div style={{ fontSize: 30, lineHeight: 1.35, color: "rgba(19,35,58,0.8)", maxWidth: 960 }}>
              {subtitle}
            </div>
          )}
        </div>
      </div>
    ),
    ogSize,
  );
}
