# SarkariMVP – Day 1-2 MVP

Simple, fast static website focused on:

- **Latest Jobs**
- **Admit Cards**
- **Results**
- **Answer Keys**

Exam coverage (only these two for MVP):

- **SSC CGL 2026**
- **Bank Clerk** (IBPS Clerk CRP CSA-XVI + SBI Clerk/Junior Associate)

## How to run

Just open `index.html` in any modern browser.  
No build step, no server required (works offline too).

Or serve locally:

```bash
cd sarkari-mvp
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Structure

```
sarkari-mvp/
├── index.html              # Home – latest updates dashboard
├── pages/
│   ├── jobs.html
│   ├── admit-cards.html
│   ├── results.html
│   ├── answer-keys.html
│   ├── ssc-cgl.html        # Dedicated SSC CGL page
│   └── bank-clerk.html     # Dedicated Bank Clerk page
└── README.md
```

## Tech

- Pure HTML + Tailwind CSS (CDN)
- Responsive, mobile-friendly
- No JavaScript frameworks
- Data hardcoded from public sources (Oct 2026)

## Next steps (out of scope for this MVP)

- Add more exams (CHSL, MTS, Railway, State PSCs…)
- Auto-fetch / scrape official data
- Search & filters
- Dark mode
- PWA / notifications

Built as a clean foundation for rapid iteration.
