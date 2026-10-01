import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Shared social-share card. ImageResponse only understands inline style objects
 * and hex colours, so these mirror the oklch tokens in globals.css.
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
          color: "#f6f1e7",
          backgroundColor: "#0f2233",
          backgroundImage:
            "radial-gradient(circle at 85% 10%, rgba(232,128,74,0.6), transparent 40%), linear-gradient(160deg, #173b52 0%, #0f2233 55%, #0d5a63 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 32, fontWeight: 700 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: "#13707e",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              padding: 8,
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: "#e8804a" }} />
          </div>
          Visit Dauin
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#e8804a", fontWeight: 700 }}>
            {eyebrow}
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 1000 }}>{title}</div>
          {subtitle && (
            <div style={{ fontSize: 30, lineHeight: 1.35, color: "rgba(246,241,231,0.8)", maxWidth: 960 }}>
              {subtitle}
            </div>
          )}
        </div>
      </div>
    ),
    ogSize,
  );
}
