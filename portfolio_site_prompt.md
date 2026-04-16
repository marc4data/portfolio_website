# Portfolio Site Build Prompt
**Owner:** Marc Alexander  |  **Created:** 2026-04-14  
**Reference demo:** https://careerportofio.netlify.app/  
**Template source:** https://github.com/emmasons/careerportfolio (Astro + Tailwind)

---

## Project Goal

Build a personalized professional portfolio site for Marc Alexander — a senior data/analytics leader — adapted from the careerportofio.netlify.app Astro template. The site must:

1. Present Marc as a high-caliber analytics executive to recruiters and hiring managers
2. Use a **light, professional theme** (white/light-gray base, navy or slate accents) — not the dark theme in the demo
3. Be deployed to a publicly accessible URL on **Netlify or GitHub Pages** within the same session
4. Support **ongoing content updates without rebuilding** — JSON/Markdown files are the sole content layer

---

## Technology Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Astro** (static site generator) | Same as demo; fast, zero-JS by default |
| Styling | **Tailwind CSS** | Already in template; adapt color palette |
| Content | **JSON + Markdown files** | All data lives in `src/data/` — no touching components to update content |
| Deployment | **Netlify** (preferred) OR GitHub Pages | Netlify: drag-and-drop dist/ folder or Git auto-deploy |
| Version control | **GitHub** | Public repo so Netlify can auto-deploy on push |

---

## Site Sections (mirror the demo structure)

### 1. Hero / Header
- Name: Marc Alexander
- Title: Senior Director · Data & Analytics · Business Intelligence
- Tagline: *"15+ years turning data organizations into business performance engines."*
- CTA buttons: **View Resume** (links to PDF) | **Contact Me** (mailto)
- Profile photo placeholder (update later)

### 2. Career Timeline
Chronological work history — same card-style layout as demo, driven by JSON.

Roles to include (most recent first):

| Company | Title | Dates | Key highlight |
|---|---|---|---|
| MedImpact | Director, Analytics & Data Engineering | 2023–Present | Post-acquisition platform integration; >$1M licensing savings |
| Cue Health | Director, Analytics Engineering | 2021–2023 | Built full modern data stack from scratch; Fivetran/dbt/GCP |
| Zebit | Senior Director, Data & Analytics | 2016–2021 | Led full BI org 5 years; fraud/credit/marketing analytics |
| American Specialty Health | Analytics Manager | 2014–2016 | Turned around Tableau adoption 400%; $50K licensing reduction |
| Bridgepoint Education | Director, BI & Data Warehousing | 2006–2014 | Built EDW + BI org from ground up; supported 300% company growth |

### 3. Skills / Tech Stack
Grid or table of technology categories — driven by JSON:

| Category | Skills |
|---|---|
| BI & Visualization | Tableau, Power BI, Looker, Hex, Superset |
| Data Engineering | dbt, Fivetran, Snowflake, BigQuery, Python, SQL, SSIS |
| Cloud & Platform | GCP, AWS, Azure, Databricks |
| Analytics | Predictive Modeling, Machine Learning, AI/LLM Integration |
| Leadership | Team Building, Data Strategy, Executive Stakeholder Management |

### 4. Projects
Card layout (no blog required — Projects cards are the content vehicle):

| Project | Description | Links |
|---|---|---|
| Portfolio E-Commerce Analytics | End-to-end dbt + BigQuery + Claude API pipeline on TheLook dataset; automated insight generation | [GitHub](https://github.com/marc4data/portfolio-ecomm) |
| MedImpact Platform Consolidation | Case study: unified two legacy SQL Server/Tableau environments post-acquisition | *(narrative only — no public link)* |
| Cue Health Manufacturing Intelligence | Real-time 12-cell manufacturing analytics pipeline; $10M field failure early signal | *(narrative only)* |

### 5. About / Contact
- 2–3 sentence bio (executive voice, not CV language)
- LinkedIn URL: https://linkedin.com/in/marc4data (confirm and update)
- GitHub: https://github.com/marc4data
- Email: marc4data@gmail.com
- Optional: link to downloadable resume PDF

---

## Theme Specification

### Color Palette (override Tailwind defaults)

| Token | Value | Usage |
|---|---|---|
| `brand-navy` | `#1E2F4D` | Primary headings, nav bar, section accents |
| `brand-slate` | `#4A5568` | Body text, secondary headings |
| `brand-teal` | `#2B7A6F` | CTA buttons, hover states, active links |
| `brand-light` | `#F7F8FA` | Page background, alternating section bg |
| `white` | `#FFFFFF` | Cards, header |

### Typography
- Headings: **Inter** or **Nunito Sans** (professional, modern, very readable)
- Body: **Inter**
- Sizes: standard Tailwind scale (no custom sizes needed)

### Layout changes vs. demo
- Switch `bg-gray-900` / dark classes → `bg-white` / `bg-brand-light`
- Replace white text → `text-brand-navy` / `text-brand-slate`
- Card backgrounds: `bg-white` with subtle `shadow-sm` border, not dark glassmorphism
- Timeline line: `border-brand-teal` instead of neon green
- Tech badge chips: `bg-brand-light border border-brand-slate/20 text-brand-slate`
- CTA buttons: `bg-brand-teal text-white hover:bg-brand-navy`

---

## Content Management Workflow

All content lives in JSON/Markdown files in `src/data/`. Marc can update content by editing these files — no touching Astro components.

### File structure

```
src/
  data/
    career.json       ← Timeline entries
    skills.json       ← Tech stack categories + skills
    projects.json     ← Project cards
    about.json        ← Bio, contact info, social links
    site.json         ← Site title, tagline, meta description
```

### career.json schema
```json
[
  {
    "company": "MedImpact",
    "title": "Director, Analytics & Data Engineering",
    "start": "2023",
    "end": "Present",
    "location": "San Diego, CA (Remote)",
    "highlights": [
      "Led post-acquisition BI/data engineering integration; eliminated >$1M in redundant licensing",
      "Architected next-generation Snowflake data warehouse + dbt transformation layer"
    ]
  }
]
```

### projects.json schema
```json
[
  {
    "title": "Portfolio E-Commerce Analytics",
    "description": "End-to-end analytics pipeline on TheLook dataset using dbt, BigQuery, and Claude API for automated insight generation.",
    "tags": ["dbt", "BigQuery", "Python", "Claude API"],
    "github": "https://github.com/marc4data/portfolio-ecomm",
    "demo": null
  }
]
```

### To add a new project or job entry
1. Open the relevant `.json` file
2. Add a new object following the schema
3. Push to GitHub → Netlify auto-deploys in ~60 seconds

---

## Build Instructions for Claude

### Step 1 — Scaffold
```bash
npm create astro@latest marc-alexander-portfolio -- --template minimal
cd marc-alexander-portfolio
npx astro add tailwind
```

### Step 2 — Install dependencies
```bash
npm install
```

### Step 3 — Populate content files
Create `src/data/` directory and populate all JSON files with Marc's content from the spec above.

### Step 4 — Build components
Create Astro components mirroring the demo's section structure:
- `src/components/Hero.astro`
- `src/components/Timeline.astro` (reads `career.json`)
- `src/components/Skills.astro` (reads `skills.json`)
- `src/components/Projects.astro` (reads `projects.json`)
- `src/components/About.astro` (reads `about.json`)
- `src/layouts/Layout.astro` (nav + footer)
- `src/pages/index.astro` (assembles all sections)

### Step 5 — Apply theme
Override Tailwind config with brand color tokens. Replace all dark theme classes with light theme equivalents per the Theme Specification above.

### Step 6 — Build and verify
```bash
npm run build
npm run preview
```
Take a screenshot. Verify: light background, all sections render, no broken links, mobile-responsive layout.

### Step 7 — Deploy to Netlify
Option A (Git-connected, recommended):
1. Push repo to GitHub (public or private)
2. Netlify → New site from Git → connect repo → build command: `npm run build`, publish dir: `dist`
3. Note the auto-generated `.netlify.app` URL

Option B (manual deploy):
```bash
npm run build
# Drag and drop dist/ folder to Netlify's deploy dropzone at app.netlify.com
```

Provide the live URL at the end.

### Step 8 — Custom domain (optional, deferred)
Marc can connect a custom domain (e.g., `marcalexander.io`) via Netlify DNS settings after initial deploy. Not required in this session.

---

## Quality Checks Before Delivering

- [ ] Site loads on the deployed URL without errors
- [ ] All 5 sections visible and populated with Marc's real content
- [ ] Light professional theme — no dark backgrounds on any section
- [ ] Career timeline shows all 5 roles in correct order
- [ ] At least 2 project cards render
- [ ] Tech skills grid renders all 5 categories
- [ ] Contact links (LinkedIn, GitHub, email) work
- [ ] Mobile layout does not break (check at 375px viewport)
- [ ] Page title and meta description set correctly in `site.json` → `<head>`
- [ ] Content JSON files are clean and follow schema — Marc can edit them without touching components

---

## What Marc Needs to Do After Delivery

1. **Update the profile photo** — add headshot to `public/images/` and update `about.json`
2. **Confirm LinkedIn URL** — verify `https://linkedin.com/in/marc4data` or update in `about.json`
3. **Add resume PDF** — drop `marc_alexander_resume.pdf` into `public/` and update the Hero CTA link
4. **Custom domain** (optional) — purchase domain, connect in Netlify DNS settings
5. **Add projects over time** — just edit `src/data/projects.json` and push to GitHub

---

## Out of Scope (defer to future sessions)

- Blog functionality (not needed; Projects cards cover case study content)
- CMS integration (Contentlayer, Sanity, etc.) — JSON files are sufficient for this use case
- Analytics (Google Analytics, Plausible) — add after site is live
- Dark/light mode toggle — light-only is correct for executive audience

---

*This prompt is self-contained. A Claude session starting from this document should be able to build and deploy the complete site without additional context.*
