# Production Deployment & Domain Connection Guide

This guide provides step-by-step instructions for publishing Mohd Ahsan Siddiqui's portfolio to production using **Vercel** or **Netlify**, attaching a custom domain, and configuring Google Services.

---

## Option 1: Deploying to Vercel (Recommended)

Vercel provides native zero-configuration deployments for Vite + React projects, global CDN distribution, automatic HTTPS/SSL, and full support for the configured `vercel.json` security headers and PDF download disposition.

### Method A: Git Integration (Easiest & Automatic CI/CD)
1. Push this directory to your GitHub repository (e.g., `github.com/mohdahsan/portfolio`).
2. Log in to [Vercel](https://vercel.com/).
3. Click **"Add New..."** &rarr; **"Project"**.
4. Select your GitHub repository and click **Import**.
5. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. (Optional) Under **Environment Variables**, add:
   - `VITE_GA_MEASUREMENT_ID`: `G-XXXXXXXXXX` (if using Google Analytics 4)
7. Click **Deploy**. Your site will be live within 30–60 seconds on a `*.vercel.app` domain.

### Method B: Vercel CLI (Direct Terminal Deployment)
```bash
# Install Vercel CLI globally
npm i -g vercel

# Run inside the project directory
vercel

# Deploy directly to production
vercel --prod
```

---

## Option 2: Deploying to Netlify

1. Push your repository to GitHub or GitLab.
2. Sign in to [Netlify](https://www.netlify.com/).
3. Click **"Add new site"** &rarr; **"Import an existing project"**.
4. Select your repository.
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy site**.
*(The included `public/_redirects` file automatically handles SPA deep-linking on Netlify).*

---

## 🌐 Connecting a Custom Domain (e.g., `ahsansiddiqui.com` or `ahsan.law`)

Once your domain is purchased from a registrar (e.g. Cloudflare, Namecheap, Google Domains / Squarespace, GoDaddy):

### In Vercel:
1. Navigate to your project dashboard &rarr; **Settings** &rarr; **Domains**.
2. Enter your domain: `ahsansiddiqui.com` (and `www.ahsansiddiqui.com`).
3. Vercel will display the required DNS records:

| Record Type | Host / Name | Target / Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` (root) | `76.76.21.21` | Automatic / 300 |
| **CNAME** | `www` | `cname.vercel-dns.com` | Automatic / 300 |

### In your Domain Registrar's DNS Manager:
1. Open your DNS records management page.
2. Add the **A Record** pointing `@` to `76.76.21.21`.
3. Add the **CNAME Record** pointing `www` to `cname.vercel-dns.com`.
4. Wait 5–30 minutes for DNS propagation. Vercel will automatically provision a free Let's Encrypt SSL/TLS certificate.

---

## 🔍 Google Search Console & SEO Verification

To ensure the portfolio ranks prominently for recruiters searching your name:

1. Visit [Google Search Console](https://search.google.com/search-console).
2. Choose **Domain** or **URL Prefix** verification:
   - **Domain (Recommended)**: Add the provided TXT record to your DNS settings at your domain registrar.
   - **URL Prefix**: Select "HTML Tag" method. Copy the verification code (`google-site-verification=...`) and paste it into `index.html` inside the `<head>` section:
     ```html
     <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
     ```
3. Once verified, navigate to **Sitemaps** in the left sidebar.
4. Submit: `https://ahsansiddiqui.com/sitemap.xml`.
5. Google will begin crawling and indexing all sections within 24–48 hours.

---

## 📊 Google Analytics 4 (Optional)

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com/).
2. Obtain your **Measurement ID** (format: `G-XXXXXXXXXX`).
3. Set the environment variable in Vercel/Netlify:
   ```text
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Or create a local `.env.production` file:
   ```text
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
The included `src/utils/analytics.ts` script will automatically initialize tracking, respecting the visitor's Do-Not-Track browser settings.

---

## ✅ Live Site Verification Checklist

Before announcing or sharing your portfolio with law firms and recruiters:

- [ ] **First Impression**: Hero section displays your name, NLU Meghalaya credential, and headline cleanly.
- [ ] **Credibility Strip**: Verifies your GPA (8.25/10), GNLU 2nd position, and dual degree.
- [ ] **CV Download**: Click "Download CV" in the header and hero to verify the PDF downloads cleanly as `Mohd_Ahsan_Siddiqui_CV.pdf`.
- [ ] **In-Browser CV Reader**: Click "Preview CV" to verify the interactive document modal opens, displays all two pages with verified dates and chamber details, and closes with `Esc`.
- [ ] **Experience Timeline**: Verify CMS INDUSLAW is marked as `Incoming Intern (Feb 2027)` and filter tabs (Corporate, Litigation, Tech & IP) function smoothly.
- [ ] **Contact Links**:
  - Test clicking `ahsan@nlumeg.ac.in` to launch your email client.
  - Test clicking "Copy" to ensure the address copies to your clipboard.
  - Test the LinkedIn button to ensure it navigates to `https://www.linkedin.com/in/mohd-ahsan-682949223/`.
- [ ] **Mobile Responsiveness**: Test on mobile or resize your browser to ensure the sticky header, hamburger menu, and cards adapt cleanly.
- [ ] **Print Test**: Press `Cmd + P` / `Ctrl + P` to verify the print stylesheet formats your resume for physical print or save-as-PDF without navigation clutter.
