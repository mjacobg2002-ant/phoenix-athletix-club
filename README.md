# Phoenix Athletix Club — Website

Coach-led strength & conditioning brand + homepage for **Phoenix Athletix Club** (Vienna, VA).
Static site — plain HTML/CSS/JS, no build step. Deploys to Vercel (or any static host) as-is.

## Files
```
index.html     # Full responsive homepage (all sections)
styles.css     # Design system + responsive styles
script.js      # Nav, goal chips, form validation, scroll reveal
assets/logo.png# Official Phoenix Athletix Club logo
vercel.json    # Static hosting config
```

## Deploy to Vercel
1. Import this repo at https://vercel.com/new
2. Framework preset: **Other** (no build command, output = repo root)
3. Deploy. That's it — it's a static site.

## ⚠️ OWNER VERIFICATION REQUIRED — read before going live
Business details were pulled from **third-party directories** (Yelp, Groupon, Chamber of
Commerce). The build brief warns these may be outdated. Every unverified item is tagged
`[VERIFY]` in the page and marked here. **Confirm before treating the site as live:**

| Item | Value found (verify) | Where |
|------|----------------------|-------|
| Address | 234 Dominion Rd NE, Vienna, VA 22180 | hero, location, footer, schema |
| Phone | (703) 389-9682 | location, start, schema |
| Hours | Mon–Fri 6:00a–7:30p · Sat 9–11a · Sun closed | location, schema |
| Rating | 4.8★ (aggregate) | "Why members train here" |
| Programs | S&C, PT, Group, HIIT, Youth, Athlete | programs section |
| Amenities | Red light therapy, showers, kids space, A/C | amenities section |
| Coaches | Names / roles / certs — **placeholders** | coaches section |
| Social handles | Instagram / Facebook — **placeholders** | footer |

## To finish the build
- **Photos** — the site ships with professional stock fitness photography (Unsplash, free
  license, no identifiable business branding) placed to match each section
  (`assets/hero.jpg`, `beginner.jpg`, `coaching.jpg`, `community-1..4.jpg`,
  `facility-1..6.jpg`, `coach-1..3.jpg`). These are stand-ins — **swap them for real
  Phoenix Athletix photos** when available (same filenames = no code changes). Only the
  location **map** is still a placeholder, pending a verified address.
- **Lead form** — connect `#leadForm` in `script.js` to your provider (Formspree, GoHighLevel,
  Netlify Forms…). It currently validates and shows a confirmation only, no data is sent.
- **Map** — embed Google Maps in `.location-map` once the address is confirmed.
- **Coaches** — add real names, roles, bios, and verified certifications. Do not invent.

## Brand
- Positioning: **"Rise Stronger."** — coach-led, beginner-friendly, community-driven.
- Palette: black / charcoal foundation, ember-red accent (`--ember: #d1341f`).
- Type: Anton (display), Barlow Condensed (headings), Inter (body).
