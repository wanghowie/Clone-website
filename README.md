# Visit Dauin

A local-first travel guide to **Dauin, Negros Oriental, Philippines**. Travellers discover things to do, places to
eat and stay, and message local freelancers — tricycle and van drivers, dive guides, boatmen, yoga teachers and tour
guides — directly on WhatsApp, Messenger or SMS. No accounts, no booking fees, no commission.

Built with Next.js 16, React 19, Tailwind CSS v4 and shadcn/ui.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # lint + typecheck + build
```

## Before launch

Edit `src/data/site.ts`:

| Setting | What it does |
| --- | --- |
| `team.whatsapp` | Your WhatsApp number (e.g. `639171234567`). Locals' join requests are sent here. |
| `team.messenger` | Your Facebook page username for `m.me` links. |
| `team.facebookUrl`, `team.email` | Shown in the footer and used as join channels. |
| `showExampleLocals` | Set to `false` once real locals are listed — hides the example profiles. |
| `bookingAffiliateId` | Optional Booking.com affiliate id appended to hotel links. |
| `contentCheckedAt` | Update whenever prices / fees / hours are re-checked. |

Set `NEXT_PUBLIC_SITE_URL` to the production domain (used in the sitemap and metadata).

## Adding a local

1. Meet them (in person or via Facebook) and get their consent to be listed.
2. Add an entry to `src/data/locals.ts` with their services, languages, barangay and contact
   (`whatsapp`, `messenger` and/or `phone`).
3. Optional: put a photo in `public/images/locals/` and set `photo: "/images/locals/<name>.jpg"`.
4. Set `verified: true` only after meeting them in person — it shows a "Met in person" badge.

Recruitment post templates and the onboarding checklist are in [`docs/FACEBOOK_RECRUITMENT.md`](docs/FACEBOOK_RECRUITMENT.md).

## Content

| File | Content |
| --- | --- |
| `src/data/activities.ts` | Things to do (diving, Apo Island, hot spring, hikes, culture, day trips) |
| `src/data/locals.ts` | Local categories and profiles |
| `src/data/restaurants.ts` | Restaurants, cafés and bars |
| `src/data/stays.ts` | Hostels, resorts and hotels |

Prices and fees are approximate — always phrase them that way and keep `contentCheckedAt` up to date.

## Roadmap

See [`docs/PLAN_VISIT_DAUIN.md`](docs/PLAN_VISIT_DAUIN.md).

## License

MIT — based on the [ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) scaffold.
