import type { Activity, ActivityCategory } from "@/types";

export const activityCategories: Record<ActivityCategory, { label: string; description: string }> = {
  diving: { label: "Diving & snorkelling", description: "Macro critters, sanctuaries and house reefs" },
  island: { label: "Apo Island", description: "Turtles, walls and a fishing village" },
  nature: { label: "Nature & hiking", description: "Hot springs, volcano trails and black sand" },
  culture: { label: "Culture & history", description: "Spanish-era church, watchtowers and markets" },
  wellness: { label: "Yoga & wellness", description: "Daily classes and slow mornings" },
  "day-trip": { label: "Day trips", description: "Dumaguete, markets and waterfalls nearby" },
  nearby: {
    label: "Negros & nearby islands",
    description: "Whale sharks in Oslob, Siquijor's waterfalls and the white sandbar of Bais",
  },
};

export const activities: Activity[] = [
  {
    slug: "muck-diving",
    title: "Muck diving the Dauin coast",
    category: "diving",
    summary:
      "Dauin is one of the world's best-known muck diving spots — frogfish, flamboyant cuttlefish, mimic octopus and ghost pipefish live on its black volcanic sand.",
    description: [
      "Muck diving means searching the sandy bottom for small, strange creatures, and Dauin's coastline is famous for it. Underwater photographers come from all over the world for macro life you rarely see elsewhere.",
      "Most dives are shore or short boat dives from the resorts along the beach, so you can do two or three a day without long boat rides. Well-known sites include Mainit, where warm water from a hot spring seeps through the sand, and Cars, an artificial reef built from sunken car bodies.",
      "Freediving and snorkelling are popular too, and many dive centres run beginner courses.",
    ],
    highlights: [
      "Frogfish, seahorses, ghost pipefish and nudibranchs",
      "Flamboyant cuttlefish and mimic octopus",
      "Warm-sand hot spring site at Mainit",
      "Easy shore entries and short boat rides",
    ],
    goodToKnow: [
      "A local dive guide with sharp eyes makes the difference — critters are tiny and camouflaged.",
      "Sanctuaries charge a small diving / entrance fee collected by the municipality or barangay.",
      "Visibility and conditions change with the season; ask your guide the day before.",
    ],
    duration: "Half day per 2 dives",
    budget: "Varies by dive centre — ask for a fun-dive or course quote",
    bestFor: ["Certified divers", "Underwater photographers", "Beginners doing a course"],
    location: "Dauin coastline, from Bulak to Masaplod Sur",
    mapQuery: "Dauin dive sites Negros Oriental",
    localHelp: ["dive-guide", "boatman"],
  },
  {
    slug: "marine-sanctuaries",
    title: "Snorkel the marine sanctuaries",
    category: "diving",
    summary:
      "Dauin protects several stretches of reef as no-fishing sanctuaries — Masaplod, Dauin, Mainit and Luca among them. Swim straight off the beach into healthy coral.",
    description: [
      "The municipality has set aside several marine sanctuaries where fishing and boating are prohibited. The result is busy reefs with schools of fish, sea turtles, triggerfish and parrotfish, often just a short swim from shore.",
      "You don't need to be a diver: snorkelling the sanctuaries is one of the best free-ish things to do in Dauin.",
    ],
    highlights: [
      "Coral and fish life right off the beach",
      "Regular sea turtle sightings",
      "Good for families and non-divers",
    ],
    goodToKnow: [
      "Pay the sanctuary fee at the guard hut — it funds the rangers who protect the reef.",
      "Don't touch or stand on coral, and don't feed fish.",
      "Use reef-safe sunscreen or a rash guard.",
    ],
    duration: "1–3 hours",
    budget: "Small sanctuary fee + gear rental",
    bestFor: ["Snorkellers", "Families", "Non-divers"],
    location: "Masaplod Norte / Sur, Poblacion, Mainit, Luca",
    mapQuery: "Masaplod Marine Sanctuary Dauin",
    localHelp: ["dive-guide", "tricycle"],
  },
  {
    slug: "apo-island-day-trip",
    title: "Apo Island day trip",
    category: "island",
    summary:
      "A small volcanic island off the Dauin coast — and part of Dauin municipality. Snorkel with sea turtles, dive coral walls and hike up to the lighthouse.",
    description: [
      "Apo Island is one of the Philippines' best-known community-run marine reserves. Green sea turtles graze in the shallows, and the reef walls are among the most colourful in the Visayas.",
      "Most visitors hire a local boat (a bangka) for the day. On the island you can snorkel with a local guide, hike to the lighthouse and viewpoint, and eat at the small family-run restaurants.",
    ],
    highlights: [
      "Snorkelling with green sea turtles",
      "Wall dives and pristine sanctuary reef",
      "Lighthouse hike and island viewpoints",
      "Life in a small fishing community",
    ],
    goodToKnow: [
      "Recent reports put a private round-trip bangka at roughly ₱3,500 for a small boat (3–4 people) and around ₱5,000 for a larger boat (up to ~9). Prices vary — confirm with your boatman.",
      "Environmental fee reported at ₱100 for Filipinos and ₱300 for foreigners; snorkelling with a required local guide around ₱300.",
      "Sea can be rough in the afternoon and during the habagat (southwest monsoon). Leave early.",
      "Bring cash — there are no ATMs on the island.",
    ],
    duration: "Full day",
    budget: "₱1,500–₱2,500 per person on a shared tour, more for a private boat",
    bestFor: ["Snorkellers", "Divers", "Groups who can share a boat"],
    location: "Apo Island, off the coast of Dauin",
    mapQuery: "Apo Island Dauin Negros Oriental",
    localHelp: ["boatman", "dive-guide", "tour-guide"],
  },
  {
    slug: "baslay-hot-spring",
    title: "Soak in Baslay Hot Spring",
    category: "nature",
    summary:
      "Natural sulphur hot spring pools in the cool hills of Barangay Baslay, about a 10 km ride up from the town centre.",
    description: [
      "Baslay sits on the slopes of Mt. Talinis, the volcanic mountain behind Dauin. The hot spring pools are fed by sulphur-rich water that locals believe is good for the skin and tired muscles.",
      "The ride up through farms and forest is half the fun — hire a tricycle or habal-habal (motorbike taxi) for a round trip and ask the driver to wait.",
    ],
    highlights: [
      "Warm sulphur pools in the hills",
      "Cooler mountain air and views",
      "Combine with other upland spots on the same ride",
    ],
    goodToKnow: [
      "The road is steep in places — agree the round-trip price and waiting time before you go.",
      "Bring small cash for the entrance fee and snacks.",
    ],
    duration: "Half day",
    budget: "Entrance fee + round-trip ride",
    bestFor: ["Relaxing after diving", "Rainy days", "Couples"],
    location: "Barangay Baslay, Dauin",
    mapQuery: "Baslay Hot Spring Dauin",
    localHelp: ["tricycle", "tour-guide"],
  },
  {
    slug: "mt-talinis-hike",
    title: "Hike Mt. Talinis (Cuernos de Negros)",
    category: "nature",
    summary:
      "A tough but rewarding climb through mossy forest and crater lakes. The steeper Bediao Trail starts in Dauin.",
    description: [
      "Mt. Talinis — also called Cuernos de Negros, the 'Horns of Negros' — is a dormant volcano rising behind Dauin. Part of the Mt. Talinis geothermal reserve, including hot springs and sulphur vents, lies within Dauin.",
      "The Bediao Trail on the Dauin side is the shorter, steeper route; the longer Apolong Trail starts in neighbouring Valencia. Many hikers traverse from one to the other.",
    ],
    highlights: ["Mossy forest and crater lakes", "Sulphur vents", "Summit views over the Visayas"],
    goodToKnow: [
      "This is a serious hike — typically 2–3 days to summit and back. Go with a registered local guide.",
      "Register with the barangay / trail office before you start and check whether the trail is open.",
      "Bring rain gear; the summit is cold and wet much of the year.",
    ],
    duration: "2–3 days",
    budget: "Guide + porter fees, registration, food",
    bestFor: ["Experienced hikers", "Backpackers with time"],
    location: "Bediao Trail, Dauin",
    mapQuery: "Mount Talinis Bediao trail Dauin",
    localHelp: ["tour-guide", "tricycle"],
  },
  {
    slug: "black-sand-sunset",
    title: "Black-sand beaches & sunset",
    category: "nature",
    summary:
      "Dauin's beaches are fine dark volcanic sand. Walk the shore at golden hour, watch the fishing boats come in and the sun set over Apo Island.",
    description: [
      "The coastline faces south-east toward Apo Island, and late afternoon is when the beach comes alive — kids swimming, fishermen pulling bangkas up the sand and beach bars switching on their lights.",
    ],
    highlights: ["Volcanic black sand", "Views to Apo Island", "Beach bars at sundown"],
    goodToKnow: [
      "Dark sand gets very hot by midday — bring sandals.",
      "Much of the beachfront is owned by resorts; use public access paths in the barangays.",
    ],
    duration: "1–2 hours",
    budget: "Free",
    bestFor: ["Everyone"],
    location: "Poblacion and Masaplod beaches",
    mapQuery: "Dauin beach Poblacion",
    localHelp: ["tricycle"],
  },
  {
    slug: "dauin-church-watchtowers",
    title: "Dauin Church & the old watchtowers",
    category: "culture",
    summary:
      "The Spanish-era San Nicolas de Tolentino church — one of the oldest in Negros Oriental — and the stone watchtowers built to spot pirate raids.",
    description: [
      "In the town centre stands the church of San Nicolas de Tolentino, among the oldest churches in the province. In front of it and along the beach are the ruins of dome-shaped watchtowers (baluarte), said to have been used to warn townspeople of approaching pirates.",
      "It's a short, easy stop — combine it with lunch and a walk through the poblacion and market.",
    ],
    highlights: ["Spanish colonial church", "Coral-stone watchtower ruins", "Town plaza and market"],
    goodToKnow: [
      "Dress modestly when going inside the church, especially during Mass.",
      "Dauin's town fiesta honours its patron saint — ask locals for this year's dates and events.",
    ],
    duration: "1 hour",
    budget: "Free",
    bestFor: ["History lovers", "Rainy days", "Families"],
    location: "Poblacion, Dauin",
    mapQuery: "Dauin Church San Nicolas de Tolentino",
    localHelp: ["tour-guide", "tricycle"],
  },
  {
    slug: "yoga-in-dauin",
    title: "Yoga by the sea",
    category: "wellness",
    summary:
      "Daily drop-in classes in town and open-air platforms at the resorts — the perfect counterweight to early dive mornings.",
    description: [
      "Dauin has a small but lively yoga scene. anahaw, a yoga studio and vegetarian café in the poblacion, runs several classes a day, seven days a week — vinyasa, yin, hatha and more.",
      "Several resorts also offer yoga, including Atmosphere Resorts & Spa with its treetop platform and aerial yoga, and Liquid Dive Resort. Independent teachers offer private and small-group sessions — find them in our local directory.",
    ],
    highlights: ["Daily drop-in classes", "Sunrise sessions by the beach", "Private lessons with local teachers"],
    goodToKnow: [
      "Don't fly or freedive deep straight after intense breathwork classes — ask your teacher.",
      "Class passes are usually cheaper than drop-ins if you're staying a week or more.",
    ],
    duration: "60–90 minutes",
    budget: "Drop-in or class pass — check with the studio",
    bestFor: ["Digital nomads", "Divers on surface days", "Solo travellers"],
    location: "Poblacion and beachfront resorts",
    mapQuery: "anahaw yoga Dauin",
    localHelp: ["yoga"],
  },
  {
    slug: "malatapay-market",
    title: "Malatapay Wednesday market",
    category: "day-trip",
    summary:
      "A lively weekly market just south in Zamboanguita — farmers, fishermen, livestock trading and famous lechon (roast pig).",
    description: [
      "Every Wednesday, farmers and fishermen from the surrounding hills and coast gather at Malatapay. It's one of the best places to see rural Negros life — and to eat freshly roasted lechon for breakfast.",
      "Boats to Apo Island also leave from Malatapay, so you can combine the two.",
    ],
    highlights: ["Lechon and local snacks", "Livestock and produce trading", "Boats to Apo Island"],
    goodToKnow: ["Go early — the market is busiest in the morning.", "Bring small bills and coins."],
    duration: "Half day",
    budget: "Ride + snacks",
    bestFor: ["Food lovers", "Photographers", "Culture seekers"],
    location: "Malatapay, Zamboanguita (next town south)",
    mapQuery: "Malatapay Market Zamboanguita",
    localHelp: ["tricycle", "van-bus", "tour-guide"],
  },
  {
    slug: "dumaguete-day-trip",
    title: "Day trip to Dumaguete",
    category: "day-trip",
    summary:
      "The friendly university city 20–30 minutes north — Rizal Boulevard, the bell tower, cafés, malls and the best bakeries in the province.",
    description: [
      "Dumaguete is the provincial capital and where you'll arrive by plane or ferry. It's an easy half-day trip for shopping, ATMs, pharmacies and a stroll along Rizal Boulevard at sunset.",
    ],
    highlights: ["Rizal Boulevard seafront", "Campanario (bell tower)", "Cafés, malls and markets"],
    goodToKnow: [
      "Ceres buses and jeepneys run up and down the coast road all day.",
      "Book a van or private car if you're a group or have dive gear.",
    ],
    duration: "Half to full day",
    budget: "Bus ₱50–₱70 each way, or a private ride",
    bestFor: ["Errands", "Rainy days", "Food and coffee"],
    location: "Dumaguete City, ~15 km north",
    mapQuery: "Rizal Boulevard Dumaguete",
    localHelp: ["van-bus", "tricycle", "tour-guide"],
  },
  {
    slug: "valencia-waterfalls",
    title: "Waterfalls in the Valencia hills",
    category: "day-trip",
    summary:
      "Next door in Valencia, Casaroro Falls and other jungle waterfalls make a great cool-down day in the mountains.",
    description: [
      "The hills of Mt. Talinis are full of rivers and waterfalls. Casaroro Falls in Valencia is the best known — reaching it means steps and a rocky river walk, rewarded by a tall, narrow fall in a green canyon.",
      "A local driver can combine waterfalls, hot springs and a mountain lunch into one day.",
    ],
    highlights: ["Casaroro Falls", "Jungle river walks", "Cool mountain air"],
    goodToKnow: [
      "Trails are slippery after rain and rivers can rise quickly — go with a guide.",
      "Wear shoes you can get wet.",
    ],
    duration: "Half to full day",
    budget: "Entrance fees + driver for the day",
    bestFor: ["Adventurous travellers", "Groups"],
    location: "Valencia, ~30–45 min from Dauin",
    mapQuery: "Casaroro Falls Valencia Negros Oriental",
    localHelp: ["van-bus", "tour-guide", "tricycle"],
  },
  {
    slug: "oslob-whale-sharks",
    title: "Oslob whale sharks (Cebu)",
    category: "nearby",
    summary:
      "Cross the strait to southern Cebu to snorkel beside whale sharks in Oslob — the most popular day trip from the Dumaguete area.",
    description: [
      "Oslob is just across the Tañon Strait from Negros. Every morning whale sharks — the largest fish in the sea — gather off Barangay Tan-awan, where you can watch from a boat or snorkel alongside them.",
      "From Dauin, ride north to Sibulan port, take the short ferry to Liloan port in Santander, Cebu, and it's about 15 minutes by road to Tan-awan. Many travellers add Tumalog Falls nearby on the way back.",
      "The encounters rely on fishermen feeding the sharks, which marine scientists criticise because it changes their natural behaviour. Decide for yourself — and if you go, follow the rules strictly.",
    ],
    highlights: [
      "Snorkel with whale sharks",
      "Short ferry hop from Negros to Cebu",
      "Combine with Tumalog Falls",
    ],
    goodToKnow: [
      "Viewing runs in the morning only (roughly 6:30am to 12:30pm) — leave Dauin before dawn.",
      "Reported fees as of 2025: around ₱1,000 for foreigners and ₱500 for Filipinos, plus extra for snorkelling. Confirm on the day.",
      "Ferries from Sibulan to Liloan take about 30 minutes and run frequently; fares are a few hundred pesos or less.",
      "Don't touch the sharks, keep your distance, no flash photography and no sunscreen in the water.",
      "Bring your passport or ID — needed for the ferry and to prove local or foreign rates.",
    ],
    duration: "Full day (early start)",
    budget: "Fees + ferry + transport, or a pre-arranged tour from Dumaguete",
    bestFor: ["Snorkellers", "Bucket-listers", "Groups sharing a driver"],
    location: "Tan-awan, Oslob, Cebu — via Sibulan–Liloan ferry",
    mapQuery: "Oslob Whale Shark Watching Tan-awan",
    localHelp: ["van-bus", "tour-guide", "tricycle"],
  },
  {
    slug: "siquijor-island",
    title: "Siquijor island",
    category: "nearby",
    summary:
      "The 'mystic island' off Dumaguete — turquoise waterfalls, white-sand beaches, ancient balete trees and a slow, friendly pace. Go for a day or stay a few.",
    description: [
      "Siquijor is famous across the Philippines for its folk healers and legends, but most visitors come for the scenery. Cambugahay Falls, a three-tiered turquoise waterfall with rope swings, is the star; Paliton Beach is the classic sunset spot.",
      "Ferries leave Dumaguete port several times a day. The easiest way around the island is a hired tricycle or motorbike — a full loop of the coastal road takes most of a day.",
    ],
    highlights: [
      "Cambugahay Falls swimming holes",
      "Paliton Beach sunset",
      "Centuries-old balete tree with fish spa",
      "Spanish-era churches and quiet coastal roads",
    ],
    goodToKnow: [
      "Ferries from Dumaguete take roughly 45 minutes to 2 hours depending on the boat; fast-craft fares start around ₱400. Check the last boat back if you're day-tripping.",
      "Cambugahay has a few hundred steps down to the falls and a small entrance fee.",
      "Many travellers find a day too short — consider staying one or two nights.",
    ],
    duration: "Full day or 2–3 days",
    budget: "Ferry + island tour or motorbike rental + entrance fees",
    bestFor: ["Backpackers", "Beach lovers", "Waterfall chasers"],
    location: "Siquijor, ferry from Dumaguete port",
    mapQuery: "Cambugahay Falls Siquijor",
    localHelp: ["tricycle", "tour-guide"],
  },
  {
    slug: "bais-manjuyod-sandbar",
    title: "Bais dolphins & Manjuyod white sandbar",
    category: "nearby",
    summary:
      "Spot dolphins in the Tañon Strait, then wade out onto a long white sandbar in the middle of the sea, lined with houses on stilts.",
    description: [
      "Bais City, north of Dumaguete, is the jumping-off point for boat trips into Tañon Strait, a protected seascape where dolphins are regularly seen in the morning.",
      "The highlight for most people is the Manjuyod Sandbar — a strip of fine white sand that appears at low tide, far from shore. At high tide you swim and snorkel around it instead.",
    ],
    highlights: [
      "Dolphin watching in Tañon Strait",
      "Manjuyod white sandbar and stilt houses",
      "Swimming and lunch on the boat",
    ],
    goodToKnow: [
      "Check the tide table — the sandbar is most impressive at low tide.",
      "Dolphins are most often seen in the morning, but sightings aren't guaranteed.",
      "Shared (joiner) tours from Dumaguete are reported at around ₱1,500–₱2,500 per person including boat, fees and lunch; a private boat runs about ₱3,500–₱5,000. Prices vary.",
      "Bring sun protection — there is almost no shade on the sandbar.",
    ],
    duration: "Full day",
    budget: "Joiner tour, or private boat + transport to Bais",
    bestFor: ["Families", "Groups", "Photographers"],
    location: "Bais City & Manjuyod, ~1.5 hours north of Dauin",
    mapQuery: "Manjuyod Sandbar",
    localHelp: ["van-bus", "tour-guide"],
  },
];

export function getActivity(slug: string) {
  return activities.find((activity) => activity.slug === slug);
}
