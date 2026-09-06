# DESIGN_SPEC — Shaner Auto Detailing LLC Website (Pitch Mockup)

**Builder:** Iron Prairie (Team Iron Prairie via Kanban) · **Date:** 2026-09-06
**Status:** PRE-LAUNCH PROTOTYPE — client has NOT signed. Everything is a pitch
mockup. Guessing is authorized (Dave 09-06) where client data is unconfirmed;
GUESS items are flagged and get swapped at launch.
**Provenance:** Jacobson Construction mockup formula (2026-08-24) + 3 Team Iron
Prairie research lanes (e-gift cards, booking, 2026 detailing benchmark).

---

## 1. Verified business facts (from public listings, 2026-09-06)

- **Business:** Shaner Auto Detailing LLC — auto detailing / paint correction /
  ceramic coating / PPF (shop + future mobile possible)
- **Owner:** Brandon Shaner (family-owned & operated voice)
- **Shop address:** 2160 Truman Ave, Owatonna, MN 55060 (Steele County)
- **Phone:** (507) 456-6119 → every tel href MUST be `tel:+15074566119`
  (11 digits). If redaction shows asterisks, compose href from concatenated
  digit strings. NEVER write tel:+PHONE_REPLACE_ME.
- **Google:** 5.0 rating (4 reviews) — show as "5.0★ on Google"
- **Hours (GBP):** Fri 7:30a–3p, Sat 7:30a–2p, closed Sun–Thu. GUESS: real
  shop runs by appointment — lead copy with "By appointment" and show Fri/Sat
  window as listed. Contact page shows both.
- **Specialty:** certified paint-correction / ceramic coating installer
- **Real service evidence (Facebook):** 1-step buff/polish, 2-step polish
  "extreme gloss", ceramic coating (3-yr and 6-yr), coating specials, interior
  detail, motorcycles (Harley) and "daily driver or hardest-working equipment"
  (trucks / farm equipment / boats) — Owatonna is farm country: equipment+truck
  angle is a real differentiator.

## 2. GUESSES (prototype only — swap at launch, per Dave)

- [TOWN] = Owatonna, MN · [COUNTY] = Steele County · Service area towns:
  Owatonna, Medford, Blooming Prairie, Ellendale, Waseca, Faribault (GUESS list)
- Package names/prices: SAMPLE researched menu (below) — replace with Shaner's
  real menu + prices once confirmed.
- Product brands used: GUESS generic "professional-grade products" — do NOT
  invent brand names (no XPEL/Chemical Guys claims unless true).
- Years in business / vehicles detailed: DO NOT invent numbers. Stat band uses
  only: "5.0★ Google rating", "Family-owned & operated", "Owatonna, MN",
  "Certified paint-correction specialist".
- Testimonials: SAMPLE only — label exactly:
  "Sample testimonials — your real reviews will take their place after launch."
  Do NOT invent named reviews.

## 3. The sell (Dave's mandate)

Shaner contacted Dave 09-05. Site must be FUCKING AWESOME — better than every
detailing site in the region. Local competitors (Midwest Shine Caledonia, Geerts
Fox Cities) hide prices, use stock photos and builder templates. Shaner's site
shows 71 REAL work photos + REAL prices + premium dark/Shaner-yellow design → wins the
same search results instantly. This mockup locks the sale; the client previews
the GitHub Pages URL BEFORE anything is live.

## 4. Design language (Jacobson formula — benchmark-validated)

- **Palette:** near-black charcoal `#0D0F12`, deep graphite `#15181C`; warm
  Shaner-yellow accent `#FBE905` (sampled from his logo; hover `#E4D600`) — differentiates from Iron Prairie orange; off-white `#F5F2EC`; muted gray
  `#9AA0A6`. Amber ONLY for interactive elements (CTA, phone, links, active
  nav). Dark sections only behind REAL photos. Light sections for pricing cards
  and body readability. Alternate dark proof sections with light content.
- **Type:** Google Fonts — Barlow Condensed (700/800, tight tracking, ALL-CAPS
  eyebrows) for display; Inter (400/500/600) for body. No scripts, no extra
  families.
- **Hero (HARD RULE, Dave):** real Shaner logo IMAGE, big and centered,
  `width:min(500px,90vw)`, yellow glow — NOT a text wordmark. Logo source: among
  the 71 photos (vision scan running; if a logo/shop-sign photo is identified
  use it; else use a clean text-lockup "SHANER AUTO DETAILING" wordmark and
  swap at launch). Tagline h1 below logo: transformation voice, e.g.
  "Showroom shine. Delivered in Owatonna." Then 2 CTAs: primary yellow **Book
  Now**, secondary ghost **View Services & Pricing**. Trust ribbon under CTAs.
- **Photography:** the 71 real photos (`images/IMG_63xx.JPG`). Consistent dark
  grading. NEVER stock cars.
- **Mobile:** sticky header + persistent bottom bar (Book Now | Call). All
  photos lazy-loaded, responsive gallery.

## 5. Components (shared classes — defined in css/styles.css)

- `.btn`, `.btn--primary` (yellow), `.btn--ghost`, `.btn-book`
- `.topbar` (slim gift-card announcement strip on Home — "Gift Cards Available —
  the perfect present for a fresh ride →")
- `header.site` sticky w/ logo wordmark + nav + Book Now; `nav a.active`
- `.hero` (dark, real bg photo), `.hero-logo img`, `.hero h1`, `.hero-ctas`
- `.trust-ribbon` (5.0★ · Family-owned · Owatonna MN · Certified)
- `.stat-band` (3-4 honest stats)
- `.pillars` (3 cards: CLEAN / CORRECT / PROTECT)
- `.pkg-cards` + `.pkg-card` (+ `--popular` w/ yellow "MOST POPULAR" ribbon;
  name, big from-price, checkmark includes, duration, vehicle note, Book CTA)
- `.addons` (compact à-la-carte price menu)
- `.beforeafter` (one interactive drag slider — see scripts.js)
- `.proof-grid` (labeled real-photo grid w/ captions: vehicle+service)
- `.reviews` (SAMPLE testimonials, labeled; star row)
- `.guarantee` band
- `.cta-band` (closing: "Ready for a showroom shine?" + Book Now + phone)
- `.faq` (details/summary; 5-8 Qs w/ duration/pricing/policy answers)
- `.demo-badge` (amber outline chip: "DEMO — activates at launch")
- `.gift-denoms` (amount cards $25/$50/$100/Any)
- `footer.site` (NAP block, hours, links, guarantee + insured line)
- `.sr-only`, `.container`, `.section`, `.section--dark`, eyebrow `.eyebrow`

## 6. Page map (8 pages — one clear job each; all lowercase filenames)

| File | Page | Job |
|---|---|---|
| index.html | Home | Flagship: hero(logo+tagline+CTAs) → trust ribbon → before/after slider or proof band → pillars Clean/Correct/Protect → 3 package cards (Most Popular) → add-ons teaser → gallery preview → specials teaser → sample reviews → guarantee → FAQ (4) → CTA band |
| services-pricing.html | Services & Pricing | Full menu: 3-4 package cards + vehicle note + add-on price menu + "Which package is right for me?" + policy line + CTA |
| gallery.html | Gallery | Filterable tabs (Exterior / Interior / Correction & Coating / Trucks & Equipment), real photos w/ vehicle+service captions, lightbox, "Book this service" per item, load ~40-50 of 71 best |
| book.html | Book Now | DEMO booking preview: package recap w/ prices → sample calendar grid → customer fields, big `.demo-badge` "Demo preview — online booking activates at launch", sell line "customers book 24/7 with automatic text reminders", plus "Not ready? Text us a photo for a fast quote" |
| specials.html | Specials | ONE hero offer w/ name, real price math, deadline + 1-2 add-on/mini offers + referral offer ("refer a neighbor — you both get $15 off") + "Book online & save $10" nudge |
| gift-cards.html | Gift Cards | Denomination cards ($25/$50/$100/Any), "emailed instantly, redeemable at Shaner Auto Detailing", demo modal preview of checkout (amount→recipient email→message) with demo badge; note "Online checkout activates at launch" |
| about.html | About | Brandon's story (plain-spoken small-town voice), shop, craft standards, honest qualification line, guarantee, sample-review strip |
| contact.html | Contact | NAP, phone (tap-to-call), hours (Fri/Sat + by appointment), Google Map embed of 2160 Truman Ave, "text us a photo" lead capture, GBP link, CTA band |

Shared on EVERY page: sticky header w/ Book Now, footer w/ NAP + links, mobile
bottom bar (Book Now | Call 507-456-6119), closing `.cta-band` (never end on
dead text).

## 7. Sample pricing (RESELL at launch — mark as sample only in a subtle page
footnote: "Sample menu for preview — Shaner's finalized pricing appears at
launch." Do NOT show that line to the client as a defect; it is honest staging.)

- **Express Shine** — from $99 sedans · $129 trucks/SUVs — exterior wash+hand
  dry, interior vacuum, windows, tire dressing — ~1.5–2 hrs
- **Full Showroom Detail** — from $199 sedans · $249 trucks/SUVs — **MOST
  POPULAR** — express + clay bar + wax/sealant, full interior shampoo, door
  jambs, trim — ~3–4 hrs
- **Interior Detail** — from $150 — full vacuum, shampoo seats/carpets, leather
  clean+condition, dash/console detail, odor treatment — ~2–3 hrs
- **Paint Correction (1-step)** — from $350 — swirl/scratch removal, machine
  polish, wax — ~4–5 hrs
- **Ceramic Coating (3-yr)** — from $650 — 1-step correction + 3-yr coating —
  ~1 day
- **Ceramic Coating (6-yr / extreme gloss)** — from $1,150 — 2-step correction
  + 6-yr coating — ~1–2 days (his FB signature job)
- **Add-ons:** pet hair removal +$60 · headlight restoration +$80 · engine bay
  +$75 · mat deep-clean +$40 · ceramic wax +$60 · odor removal +$50

## 8. Copy rules (transformation voice, plain-spoken, NO spa-flowers)

- Sell the after-state: "showroom shine", "looks better than the day you bought
  it", "make your neighbors ask what you did to your truck."
- Local-problem framing: Minnesota road salt, hard water, spring pollen, farm
  dust — "winter is over, your floor mats aren't."
- Protection angle for coating tiers: "protect your investment", resale value.
- Risk reversal: "If you're not happy with the result, we'll make it right."
- Honest qualification where true: "If the clear coat is gone, a wax isn't the
  fix."
- Never claim: #1, unprovable stats, brand products not confirmed, fake reviews.

## 9. Acceptance criteria (every page)

1. One h1; nav matches 8 pages; Book Now CTA on every page incl. header.
2. tel hrefs all `tel:+15074566119` (11 digits, no `*`, no placeholders).
3. Every image src exists in `images/`; hero uses logo/wordmark per rule; real
   photos only — zero stock/lorem/placeholder pix.
4. Sample testimonials carry the exact label from §2.
5. Demo layers (book + gift card) visibly badged `.demo-badge`; no real third-
   party iframes/links that could take real bookings/payments.
6. Mobile: bottom bar visible; gallery responsive; no horizontal scroll.
7. Footer NAP: Shaner Auto Detailing LLC · 2160 Truman Ave, Owatonna, MN 55060
   · (507) 456-6119.
8. Styles/classes: use ONLY classes defined in css/styles.css; if a needed
   style is missing, note it in NOTES.md (orchestrator adds it) — NEVER inline
   styles, NEVER edit css/js.
9. Out of scope: no repo writes (write to your workspace dir only); no css/js
   edits; no fabricated data; no lorem ipsum.

## 10. Build partition (distinct files = no races)

- **Worker A (wide-glide):** index.html, book.html
- **Worker B (v-rod):** services-pricing.html, about.html, contact.html
- **Worker C (knucklehead):** gallery.html, specials.html, gift-cards.html
- QC: Ironhead, gated on all build cards. Every worker: read DESIGN_SPEC.md +
  css/styles.css + scripts.js FIRST; output to
  `~/.hermes/workspace/shaner-build/<role>/`; SAVE INCREMENTALLY (partial files
  + NOTES.md if near limits; NEVER restart from scratch).

## 11. Post-build (orchestrator)

Validate (h1 count, img srcs, 8-page hrefs, classes exist, tel integrity),
run verify_tel.py, integrate into repo root, push → Pages ~40-60s → curl
verify, Ironhead QC v1 → fixes → QC v2 FINAL on live state → hand URL to Dave
→ Dave pitches Shaner. At sign: Square Gift Cards + Square Appointments
provisioning (research lane deliverables), real menu/prices/logo swaps, one-
swoop host deploy per client-website-delivery model.
