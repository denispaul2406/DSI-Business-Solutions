# DSI Business Solutions
### Ansari & Co. (Auditors & Tax Consultants) • DSI Estates (Builders & Developers)

A modern, high-performance web platform built for **Amjad Ansari**, integrating **Ansari & Co.** (Auditor and Tax Consultants) and **DSI Estates** (Builders & Developers), based in Bangalore, Karnataka, India.

Designed with an executive dark-luxury aesthetic (Obsidian & Brushed Gold), responsive typography, interactive consultation workflows, and static page optimization.

---

## Table of Contents

- [Executive Summary](#executive-summary)
- [Practice Disciplines](#practice-disciplines)
  - [Division 01: Ansari & Co. (Auditor & Tax Consultants)](#division-01-ansari--co-auditor--tax-consultants)
  - [Division 02: DSI Estates (Builders & Developers)](#division-02-dsi-estates-builders--developers)
- [Site Architecture & Pages](#site-architecture--pages)
- [Client Demonstration Guide (How to Pitch)](#client-demonstration-guide-how-to-pitch)
- [Customizing Company Information](#customizing-company-information)
- [Technology Stack](#technology-stack)
- [Local Development](#local-development)
- [Production Build & Testing](#production-build--testing)
- [Hosting & Deployment Guide](#hosting--deployment-guide)
  - [1. Deploy to Vercel (Recommended)](#1-deploy-to-vercel-recommended)
  - [2. Deploy to Netlify](#2-deploy-to-netlify)
  - [3. Deploy with Docker (Google Cloud Run, AWS, DigitalOcean)](#3-deploy-with-docker)
  - [4. Deploy to Self-Hosted Linux VPS (Ubuntu + PM2 + Nginx)](#4-deploy-to-self-hosted-linux-vps)
  - [5. Static Export (Cloudflare Pages, GitHub Pages)](#5-static-export)
- [Project Structure](#project-structure)
- [License & Fiduciary Notice](#license--fiduciary-notice)

---

## Executive Summary

**DSI Business Solutions** unifies two established practice disciplines led by **Amjad Ansari** in Bangalore:

1. **Ansari & Co.**: Professional auditing, direct and indirect taxation (Income Tax, GST), statutory corporate compliances (ROC, MCA), investments planning, financial planning, and business advisory.
2. **DSI Estates**: Turnkey building construction, property development, 30-year title verification, sale/gift deed execution, and estate succession documentation.

### Operating Pillars
1. **Precision**: Zero-tolerance policy for calculation discrepancies or statutory filing oversights.
2. **Professionalism**: Strict ethical discretion, non-disclosure protocols, and fiduciary integrity.
3. **Reliability**: Proactive compliance calendar management to eliminate late fees and interest penalties.

---

## Practice Disciplines

### Division 01: Accountant Services
A comprehensive 10-point statutory and accounting framework:

| No. | Practice Area | Primary Deliverables |
|:---:|:---|:---|
| **01** | **Payroll Management** | Monthly salary computation, payslips, PF, ESI, PT compliance, TDS deduction & Form 16 issuance. |
| **02** | **Bookkeeping** | Daily transaction recording, general ledger maintenance, bank/credit card reconciliation, MIS reports. |
| **03** | **Accounts Receivable** | Invoicing, debtor aging schedules, systematic collection tracking, and receipt allocation. |
| **04** | **Accounts Payable** | Vendor invoice matching (3-way check), approval workflows, batch disbursement scheduling. |
| **05** | **Bank Reconciliation** | Statement validation, timing discrepancy investigations, fee adjustments, and audit trail records. |
| **06** | **Treasury Management** | Cash flow projections, working capital optimization, and fund transfer liquidity planning. |
| **07** | **Statutory Compliance** | Statutory calendar monitoring, labor welfare filings, audit file preparation, and MCA filings. |
| **08** | **Income Tax Services** | Advance tax estimation, corporate and individual ITR filing, tax planning, scrutiny notice response. |
| **09** | **GST Services** | Monthly/quarterly GSTR-1 & 3B, annual GSTR-9/9C reconciliation, and GSTR-2B Input Tax Credit (ITC) audits. |
| **10** | **ROC Compliance** | Annual filings (AOC-4, MGT-7), Director DIR-3 KYC, share capital alterations, and MCA secretarial registers. |

### Division 02: DSI Estates
Specialized advisory for real estate assets, conveyance, and family legacy documentation:

| No. | Service | Scope & Deliverables |
|:---:|:---|:---|
| **01** | **Property Management** | Lease agreement drafting, tenant KYC administration, rental collection oversight, maintenance reporting. |
| **02** | **Deed Execution** | Sale deed, gift deed, relinquishment drafting, stamp duty assessment, sub-registrar liaison. |
| **03** | **Property Documentation** | Title chain search, Encumbrance Certificate (EC) procurement, Khata / Mutation records. |
| **04** | **Estate Support Services** | Family settlement deeds, power of attorney drafting, partition deeds, and succession facilitation. |

---

## Site Architecture & Pages

The application is structured using the Next.js App Router:

- **`app/page.tsx` (`/`)**: Main landing page with hero, geometric vector schematic, trust badges, dual-division cards, accounting service grid, estates overview, about narrative, vision, reasons to choose DSI, consultation enquiry form, interactive map, and persistent mobile pill.
- **`app/about/page.tsx` (`/about`)**: Detailed institutional narrative, operating pillars, and governance ethos.
- **`app/services/page.tsx` (`/services`)**: Unified directory of all practice areas across both divisions.
- **`app/accounting-services/page.tsx` (`/accounting-services`)**: Dedicated accounting portal featuring category filter tabs (`All`, `Accounting & Books`, `Income Tax & GST`, `ROC & Compliance`).
- **`app/dsi-estates/page.tsx` (`/dsi-estates`)**: Dedicated property advisory portal with deliverable checklists.
- **`app/vision/page.tsx` (`/vision`)**: Long-term operating philosophy and enterprise scale commitments.
- **`app/contact/page.tsx` (`/contact`)**: Direct consultation hub with interactive form, telephone, email, WhatsApp, and office address cards.

---

## Client Demonstration Guide (How to Pitch)

When presenting this website to a client or stakeholder, highlight these key design and functional features:

1. **Executive Visual Standard**: Point out the architectural dark luxury palette (`#0f1114` Obsidian with `#c89f56` brushed gold accents) and geometric vector diagrams reflecting financial balance and precision.
2. **Dual-Division Synergy**: Demonstrate how the site presents both **Accountant Services** and **DSI Estates** as complementary fiduciary disciplines under one brand.
3. **Interactive Filterable Service Grid**: Navigate to `/accounting-services` and click the filter buttons (`Accounting & Books`, `Income Tax & GST`, `ROC & Compliance`) to show smooth instant categorization.
4. **Context-Aware Enquiry Routing**: Click any **"Enquire on this service"** button across the site. Observe how it smoothly routes to the consultation form with that specific service preselected in the dropdown.
5. **Form Validation & One-Click Mail Dispatch**:
   - Fill out the form on `/contact`.
   - Submit the form to show instant validation and the formatted summary card.
   - Click **"Open in Mail App (Pre-filled)"** to show that it automatically opens the user's default email client with all entered consultation details populated.
6. **Mobile Persistent Action Bar**: Resize the browser to mobile viewport to reveal the fixed bottom action pill featuring quick **Call Us**, **WhatsApp**, and **Enquire** buttons.
7. **Compliance Modals**: Scroll to the footer and click **Privacy Policy** and **Terms & Conditions** to show accessible, formatted legal disclosures.

---

## Customizing Company Information

All central firm details, contact numbers, email addresses, and service catalogs are consolidated into a single configuration file:

📁 **[`lib/company-config.ts`](lib/company-config.ts)**

To update firm details for the client:
```typescript
export const COMPANY_CONFIG = {
  FOUNDER_NAME: 'Amjad Ansari',
  COMPANY_NAME: 'DSI Business Solutions',
  TAX_FIRM_NAME: 'Ansari & Co.',
  TAX_FIRM_DESCRIPTOR: 'Auditor and Tax Consultants',
  ESTATES_FIRM_NAME: 'DSI Estates',
  ESTATES_FIRM_DESCRIPTOR: 'Builders & Developers',
  
  // Contact Details from Business Cards
  PHONE: '+91 98867 38434',
  PHONE_TEL: 'tel:+919886738434',
  PHONE_DISPLAY: '+91 98867 38434',
  
  EMAIL: 'amjad.ansari20@yahoomail.com',
  EMAIL_MAILTO: 'mailto:amjad.ansari20@yahoomail.com?subject=Enquiry%20from%20Website',
  EMAIL_DISPLAY: 'amjad.ansari20@yahoomail.com',
  
  ADDRESS: '#21, 3rd Cross, Rahmath Nagar, Bangalore - 560 032',
  ADDRESS_DISPLAY: '#21, 3rd Cross, Rahmath Nagar, Bangalore - 560 032, Karnataka, India',
  MAP_LOCATION: '#21, 3rd Cross, Rahmath Nagar, Bangalore - 560 032',
  MAP_DIRECTIONS_URL: 'https://maps.google.com/?q=%2321+3rd+Cross+Rahmath+Nagar+Bangalore+560032+Karnataka+India',
  
  WHATSAPP: '+91 98867 38434',
  WHATSAPP_URL: 'https://wa.me/919886738434?text=Hello%20Mr.%20Amjad%20Ansari...',
  
  BUSINESS_HOURS: 'Monday – Saturday: 9:30 AM – 7:00 PM IST',
  TIMEZONE: 'IST (UTC+05:30)',
};
```

Updating this single file automatically updates all navigation bars, footers, contact cards, CTA banners, mail links, and dialers across the entire website.

---

## Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Motion](https://motion.dev/)
- **Optimization**: Standalone Node output, static HTML pre-rendering

---

## Local Development

### Prerequisites
- Node.js 18.18+ or 20+ installed
- npm (bundled with Node)

### Installation
```bash
# 1. Clone or navigate to the repository directory
cd "DSI Business Solutions"

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## Production Build & Testing

Validate that the production build compiles cleanly:

```bash
# Build the application
npm run build

# Run production server locally
npm run start
```

All 8 main routes will be statically generated (`○ Static`) for maximum performance and instant page loads.

---

## Hosting & Deployment Guide

This project is 100% prepared for modern hosting platforms. Choose the option that fits your infrastructure:

### 1. Deploy to Vercel (Recommended)
Vercel is the creator of Next.js and provides zero-configuration hosting with global edge caching and free automated SSL.

#### Method A: Git Integration (Easiest)
1. Push this codebase to a GitHub, GitLab, or Bitbucket repository.
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository.
4. Vercel automatically detects Next.js. Leave the default settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
5. Click **"Deploy"**. Your demo URL will be ready in under 2 minutes.

#### Method B: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

---

### 2. Deploy to Netlify
1. Connect your repository in [Netlify](https://app.netlify.com/).
2. Build configuration:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
3. Netlify's `@netlify/plugin-nextjs` will automatically handle server rendering and edge assets.

---

### 3. Deploy with Docker
The repository includes an optimized multi-stage `Dockerfile` and `.dockerignore`.

#### Build and Run Locally:
```bash
# Build the Docker image
docker build -t dsi-business-solutions .

# Run the container on port 3000
docker run -p 3000:3000 dsi-business-solutions
```

#### Deploy to Google Cloud Run:
```bash
# Build with Cloud Build and deploy
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/dsi-business-solutions
gcloud run deploy dsi-business-solutions \
  --image gcr.io/YOUR_PROJECT_ID/dsi-business-solutions \
  --platform managed \
  --region asia-south1 \
  --allow-unauthenticated
```

#### Deploy to AWS App Runner / ECS:
Push the image to Amazon ECR, select Port 3000, and launch a web service.

---

### 4. Deploy to Self-Hosted Linux VPS (Ubuntu + PM2 + Nginx)
For dedicated cloud hosting on DigitalOcean, Linode, AWS EC2, or Hetzner:

1. **Install Node.js & PM2**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs nginx
   sudo npm install -g pm2
   ```

2. **Clone & Build**:
   ```bash
   git clone <REPO_URL> /var/www/dsi-business
   cd /var/www/dsi-business
   npm ci
   npm run build
   ```

3. **Start with PM2**:
   ```bash
   pm2 start npm --name "dsi-business" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx Reverse Proxy** (`/etc/nginx/sites-available/dsibusiness.in`):
   ```nginx
   server {
       server_name dsibusiness.in www.dsibusiness.in;

       location / {
           proxy_pass http://127.0.0.1:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Enable SSL with Certbot**:
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d dsibusiness.in -d www.dsibusiness.in
   ```

---

### 5. Static Export (Cloudflare Pages, GitHub Pages)
If you prefer 100% serverless static file hosting without any Node runtime:
1. In `next.config.ts`, add:
   ```typescript
   output: 'export',
   ```
2. Run `npm run build`. Next.js will generate pure HTML/CSS/JS files inside the `out/` directory.
3. Upload the `out/` folder to GitHub Pages, Cloudflare Pages, or Amazon S3.

---

## Project Structure

```text
DSI Business Solutions/
├── app/
│   ├── about/page.tsx                # About Us page
│   ├── accounting-services/page.tsx   # 10 Accounting Disciplines with filter
│   ├── contact/page.tsx               # Contact & Consultation page
│   ├── dsi-estates/page.tsx           # DSI Estates Property portal
│   ├── services/page.tsx              # Combined Services overview
│   ├── vision/page.tsx                # Vision & Philosophy page
│   ├── globals.css                    # Tailwind CSS v4 directives & reset
│   ├── icon.svg                       # Branded SVG Favicon
│   ├── layout.tsx                     # Root HTML layout, SEO metadata
│   └── page.tsx                       # Master Homepage
├── components/
│   ├── AboutSection.tsx               # Firm history & approach
│   ├── AccountantServicesSection.tsx  # Filterable accounting service cards
│   ├── BrandLogo.tsx                  # Geometric monogram & typography
│   ├── ContactCtaBanner.tsx           # Dark luxury consultation banner
│   ├── ContactForm.tsx                # Interactive enquiry form with validation
│   ├── ContactSection.tsx             # Two-column direct contact hub
│   ├── DsiEstatesSection.tsx          # Real estate division showcase
│   ├── Footer.tsx                     # Full four-column institutional footer
│   ├── Hero.tsx                       # Hero section with vector schematic
│   ├── LegalModal.tsx                 # Privacy Policy & Terms modal
│   ├── MapSection.tsx                 # HQ location panel & architectural map
│   ├── MobileActionPill.tsx           # Fixed bottom mobile CTA bar
│   ├── Navbar.tsx                     # Desktop & mobile responsive header
│   ├── ServicesOverview.tsx           # Dual-discipline feature showcase
│   ├── TrustIntro.tsx                 # Fiduciary foundations grid
│   ├── VisionSection.tsx              # Institutional vision & commitments
│   └── WhyDsiSection.tsx              # Four core firm advantages
├── lib/
│   ├── company-config.ts              # Single source of truth for firm data
│   └── utils.ts                       # Tailwind merge utility
├── public/
│   ├── icon.svg                       # Public favicon asset
│   └── assets/                        # Static media assets
├── Dockerfile                         # Multi-stage production container
├── .dockerignore                      # Docker ignore rules
├── .env.example                       # Environment template
├── next.config.ts                     # Next.js configuration
├── package.json                       # Project dependencies & scripts
├── tsconfig.json                      # TypeScript configuration
└── README.md                          # Project documentation
```

---

## License & Fiduciary Notice

© 2026 DSI Business Solutions. All rights reserved.

*Disclaimers:*
- Submission of web consultation forms does not constitute the formal creation of an auditor-client or consultant-client fiduciary engagement until a written Letter of Engagement is countersigned.
- DSI Estates is a dedicated practice division of DSI Business Solutions focusing on property asset administration and deed conveyance documentation.
