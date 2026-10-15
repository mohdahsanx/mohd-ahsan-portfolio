# Mohd Ahsan Siddiqui — Personal Portfolio Website

A bespoke, production-ready personal portfolio website for **Mohd Ahsan Siddiqui**, third-year **B.Sc. (Data Science) LL.B.** student at **National Law University Meghalaya**.

Designed with an elegant, editorial aesthetic inspired by Tier-1 law firms, modern academic institutions, and high-end legal technology publications.

---

## 🏛️ Positioning & Core Objective

This portfolio positions Ahsan at the intersection of **Law, Technology, and Digital Business**:
- **Intellectual Property** (Madrid Protocol, cross-border trademark clearance across 5 Nice Classes)
- **Data Privacy & Governance** (DPDP Act 2023, GDPR, CCPA)
- **Corporate & Commercial Law** (M&A due diligence, fast-track mergers under Companies Act 2013)
- **Litigation Analytics & Statutory Drafting** (Audit of 959 banking matters, GNLU Legislative Drafting runners-up)
- **Academic Appointments** (Research Assistant at CLST, IIT Guwahati; Simultaneous Elections Project)

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 18 with TypeScript
- **Bundler & Tooling**: Vite 5
- **Styling**: Tailwind CSS with custom editorial design system (Warm canvas `#FAF9F6`, Executive Navy `#0F233A`, Warm Bronze `#876228`)
- **Typography**: `Newsreader` (Editorial Serif) paired with `Plus Jakarta Sans`
- **Iconography**: `lucide-react` with custom SVG brand icons
- **Document Management**: Verified 2-page Curriculum Vitae in PDF format with integrated in-browser modal viewer and direct download
- **SEO & Metadata**: Semantic HTML5, Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt`, and Schema.org JSON-LD Person markup

---

## 📁 Project Structure

```text
mohd-ahsan-portfolio/
├── dist/                      # Production build output
├── public/
│   ├── documents/
│   │   ├── mohd-ahsan-siddiqui-cv.pdf  # Official verified CV PDF
│   │   └── ahsan-siddiqui-cv.pdf       # Alternate permalink alias
│   ├── _redirects             # Netlify/Cloudflare SPA redirect
│   ├── robots.txt             # Search engine crawler directives
│   └── sitemap.xml            # XML sitemap for Google Search Console
├── src/
│   ├── components/
│   │   ├── About.tsx          # Narrative, dual degree context & education
│   │   ├── Achievements.tsx   # GNLU & Intra Moot podium distinctions
│   │   ├── Contact.tsx        # Direct email, LinkedIn & mailto helper
│   │   ├── CredibilityStrip.tsx# High-level verified qualifications
│   │   ├── CvModal.tsx        # In-browser interactive CV reader
│   │   ├── Experience.tsx     # Filterable timeline (CMS Induslaw, SolvLegal, etc.)
│   │   ├── Footer.tsx         # Typographic mark, BCI disclaimer, back-to-top
│   │   ├── Hero.tsx           # Primary statement & dual CTAs
│   │   ├── Icons.tsx          # Official vector brand icons
│   │   ├── Leadership.tsx     # Legal Aid VP, Moot Society, IDIA Chapter
│   │   ├── Navbar.tsx         # Sticky header with active scroll spy
│   │   └── Skills.tsx         # Categorized legal & tech capabilities
│   ├── data/
│   │   └── portfolioData.ts   # Single source of truth for verified CV data
│   ├── utils/
│   │   └── analytics.ts       # Privacy-conscious GA4 helper (respects DNT)
│   ├── App.tsx                # Main view composition
│   ├── index.css              # Custom design tokens, print CSS, focus rings
│   ├── main.tsx               # Application entry point
│   └── types.ts               # TypeScript data interfaces
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json                # Vercel deployment & security headers
└── vite.config.ts
```

---

## ⚡ Quick Start (Local Development)

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
```
Generates a pre-optimized production bundle in `dist/`.

### 4. Preview production build locally
```bash
npm run preview
```

---

## 📄 Updating the CV PDF

To update your CV:
1. Export your latest resume as a PDF.
2. Name the file `mohd-ahsan-siddiqui-cv.pdf`.
3. Drop it into:
   ```text
   public/documents/mohd-ahsan-siddiqui-cv.pdf
   ```
4. Rebuild the website (`npm run build`). The website's download button, in-browser viewer, and direct links will instantly reflect the updated document!
