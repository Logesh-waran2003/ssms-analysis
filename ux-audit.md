# SSMS School Website — Full UI/UX Audit
**URL:** https://school.ssms.edu.in/  
**Audit Date:** April 2026  
**Auditor:** Kiro (UI/UX Expert Analysis)

---

## Executive Summary

The website is a WordPress/Elementor build that was functional when launched but has accumulated significant UX debt. It fails on trust-building, mobile experience, information architecture, and visual design — all critical for a school that needs to convert parents into admissions. The site looks like it was built in 2015 and never revisited.

**Overall Score: 3.5 / 10**

---

## 1. CRITICAL ISSUES (Fix First)

### 1.1 Staff Details Page — Completely Empty
- **URL:** `/staff-details/`
- **Problem:** The page exists in the nav but has zero content. No staff names, no photos, no qualifications. Just contact info copy-pasted from the footer.
- **Impact:** Parents visiting to evaluate teachers see nothing. Destroys trust immediately.
- **Fix:** Add staff cards with photo, name, designation, qualification, experience years.

### 1.2 Transport Page — 404 Error
- **URL:** `/stopping-point-2025-26/`
- **Problem:** Returns a 404. This is a primary nav item that parents click daily.
- **Impact:** Parents can't find bus routes. Likely getting calls to the school office instead.
- **Fix:** Restore the page or redirect to the correct URL.

### 1.3 No Embedded Map on Contact Page
- **URL:** `/contact/`
- **Problem:** Contact page has address text but no Google Maps embed. Parents new to the area can't locate the school.
- **Impact:** Friction for first-time visitors, especially during admission season.
- **Fix:** Embed a Google Maps iframe with the school pin.

### 1.4 Admission Flow Sends Users Off-Site
- **URL:** `/onlineapplication-2026-27-jan28_1113/`
- **Problem:** The admission page is a list of 10+ links that redirect to an external portal. No inline form, no guided flow, no progress indicator.
- **Impact:** Parents get confused, drop off, or call the school. The page title is also a raw slug (`onlineapplication-2026-27-jan28_1113`) — unprofessional.
- **Fix:** Clean URL (`/admissions/`), embed or guide the flow inline, add a clear step-by-step process visual.

---

## 2. HIGH SEVERITY — Navigation & Information Architecture

### 2.1 Navigation is Overloaded and Confusing
- Top nav has: Home, About Us, Features (dropdown with 8+ items), Admission, Transport, Careers, Latest News, Contact, Parent's Portal, Alumni Portal
- "Features" is a terrible label for a school — it sounds like a SaaS product. The dropdown mixes Facilities, Programmes, Staff, Textbooks, Annual Report, and Compliance docs under one label.
- **Fix:** Restructure nav:
  ```
  Home | About | Academics | Admissions | Campus Life | Parents | Contact
  ```

### 2.2 No Clear Primary CTA on Homepage
- The "Admission 2026-27" button exists but competes with 10 nav items and multiple sections.
- There's no hero section with a strong value proposition.
- **Fix:** Full-width hero with school tagline, one primary CTA ("Apply for Admission"), and one secondary CTA ("Take a Virtual Tour" or "Download Brochure").

### 2.3 Dropdown Navigation Broken on Mobile
- The nav has deep nested dropdowns (Features → Facilities → sub-items). On mobile, this is nearly unusable.
- **Fix:** Replace with a hamburger menu that opens a full-screen overlay with flat, tappable sections.

### 2.4 Page URLs are Ugly and Unmemorable
- `/onlineapplication-2026-27-jan28_1113/` — raw slug with date and time
- `/stopping-point-2025-26/` — year-specific, breaks every year
- `/latest-news-2/` — the `-2` suffix means there's a duplicate
- **Fix:** Clean, permanent URLs: `/admissions/`, `/transport/`, `/news/`

---

## 3. HIGH SEVERITY — Visual Design

### 3.1 Logo Dimensions are Wrong
- Logo is 1158×130px — extremely wide and flat. On mobile it either gets crushed or overflows.
- **Fix:** Redesign logo to a square/compact format (ideally with icon + text stacked or side-by-side at max 300×80px).

### 3.2 No Visual Hierarchy on Homepage
- The homepage appears to be a stack of WordPress widgets with no clear visual flow.
- No hero image of the actual school campus.
- No student/teacher photos to humanize the brand.
- **Fix:** Add real photography — campus, classrooms, events, students. This is the #1 trust signal for parents.

### 3.3 Typography is Generic and Inconsistent
- Default WordPress/Elementor fonts with no custom type scale.
- Body text likely below 16px in places (triggers iOS auto-zoom on mobile).
- No visual hierarchy between headings and body.
- **Fix:** Choose a clean font pair (e.g., Poppins for headings, Inter for body), set a consistent type scale.

### 3.4 Color Palette is Undefined
- No consistent brand color system. Colors appear to be default theme colors.
- **Fix:** Define a 3-color palette: Primary (school color), Accent (CTA color), Neutral (text/backgrounds). Apply consistently.

### 3.5 Facilities Pages are Text-Heavy with One Image
- Each facility (Audio System, Library, Labs, etc.) has one small image and a paragraph of text.
- No photo galleries, no video walkthroughs, no interactive elements.
- **Fix:** Photo gallery per facility, or a single "Campus Tour" page with a grid of all facilities.

---

## 4. MEDIUM SEVERITY — Content & UX

### 4.1 Latest News is Just a List of PDF Downloads
- News items are links to downloadable documents (circulars, forms).
- No dates shown prominently, no categories, no visual differentiation.
- **Fix:** Card-based news layout with date, category tag (Circular / Event / Result), and a brief description before the download link.

### 4.2 Careers Form is Overwhelming
- The careers application form has 7 sections with dynamic field addition.
- No progress indicator, no save-and-continue, no section headers visible at a glance.
- **Fix:** Multi-step form with a progress bar (Step 1 of 4), or at minimum add visible section dividers and a sticky "Save Draft" option.

### 4.3 About Page Has No Visual Storytelling
- Lists departments and related institutions as plain text.
- No timeline of the school's history, no photos of the founder, no mission statement displayed prominently.
- **Fix:** Add a visual timeline (2012 → present), founder photo, and a "By the Numbers" section (students enrolled, years of excellence, board results).

### 4.4 Annual Report is a PDF Dump
- The annual report page just embeds a PDF with no summary.
- **Fix:** Add a highlights section above the PDF: key stats, achievements, photos from the year.

### 4.5 No Social Proof / Testimonials
- Zero parent testimonials, zero student achievement highlights, zero board exam results displayed.
- **Fix:** Add a testimonials section on the homepage and a dedicated "Results & Achievements" page.

### 4.6 No FAQ Section
- Parents have common questions: fees, admission process, transport, uniform, etc. None are answered on the site.
- **Fix:** Add an FAQ page or accordion sections on the Admission and Contact pages.

---

## 5. MEDIUM SEVERITY — Performance & Technical

### 5.1 No Image Optimization
- Images are served at full resolution (1010×441px, 1158×130px) with no WebP conversion.
- **Fix:** Convert all images to WebP, add `srcset` for responsive sizes, lazy-load below-fold images.

### 5.2 WordPress + Elementor = Heavy Page Load
- Elementor adds significant CSS/JS bloat. The site likely scores poorly on Core Web Vitals.
- **Fix:** Either optimize the current stack (remove unused Elementor widgets, add caching plugin, use CDN) or migrate to a lighter CMS/static site.

### 5.3 No SSL / Security Indicators Visible
- Need to verify HTTPS is properly configured and HSTS is set.

### 5.4 No Structured Data (Schema Markup)
- No `School` schema, no `LocalBusiness` schema, no `FAQPage` schema.
- **Fix:** Add JSON-LD schema for the school — improves Google search appearance with rich results.

---

## 6. ACCESSIBILITY ISSUES

| Issue | Severity | Fix |
|-------|----------|-----|
| Icon-only nav items without aria-labels | High | Add aria-label to all icon buttons |
| Images likely missing alt text | High | Audit all `<img>` tags |
| Form labels on careers page may be placeholder-only | Medium | Add visible `<label>` elements |
| Color contrast likely fails 4.5:1 in places | High | Run contrast audit, fix text colors |
| No skip-to-content link | Medium | Add `<a href="#main">Skip to content</a>` |
| Mobile zoom disabled (likely) | Critical | Never set `user-scalable=no` |

---

## 7. MISSING PAGES / FEATURES

| Missing | Why It Matters |
|---------|---------------|
| Virtual campus tour | Parents can't visit before applying — a photo/video tour converts them |
| Board exam results page | CBSE results are a top search query for school parents |
| Fee structure page | Parents want to know fees before calling — reduces friction |
| Events calendar | Shows the school is active and engaged |
| Photo/video gallery | Social proof, humanizes the school |
| Parent testimonials | #1 trust signal for school admissions |
| WhatsApp contact button | Most Chennai parents prefer WhatsApp over email |
| Online fee payment | If not already on parent portal, this is a major gap |

---

## 8. COMPETITOR BENCHMARK

A modern school website in Chennai (e.g., PSBB, DAV, Chettinad Vidyashram) typically has:
- Professional photography throughout
- Clear admission timeline with deadlines
- Interactive campus map
- Student achievement showcase
- Mobile-first design
- Fast load times (<3s)
- WhatsApp/chat widget

SSMS currently has none of these.

---

## 9. PROPOSED SITEMAP (Redesign)

```
Home
├── About
│   ├── Our Story & Mission
│   ├── Leadership & Management
│   ├── Achievements & Awards
│   └── Mandatory Disclosure
├── Academics
│   ├── Curriculum (CBSE)
│   ├── Faculty
│   └── Results & Board Scores
├── Campus Life
│   ├── Facilities (Gallery)
│   ├── Sports & Activities
│   ├── Events Calendar
│   └── Photo Gallery
├── Admissions
│   ├── Process & Timeline
│   ├── Fee Structure
│   ├── Age Criteria
│   └── Apply Online
├── Parents
│   ├── Parent Portal (login)
│   ├── Transport Routes
│   ├── Circulars & News
│   └── FAQ
├── Careers
└── Contact
```

---

## 10. PRIORITY ROADMAP

### Phase 1 — Quick Wins (1–2 weeks, low cost)
1. Fix 404 on transport page
2. Add Google Maps embed to contact page
3. Add content to staff details page
4. Fix page URLs (redirects from old to new)
5. Add WhatsApp floating button
6. Add alt text to all images

### Phase 2 — Core Redesign (4–6 weeks)
1. New homepage with hero, stats, testimonials, news
2. Restructured navigation
3. Admission page with clear step-by-step flow
4. Faculty page with photos and bios
5. Facilities gallery page
6. Results/achievements page
7. FAQ page

### Phase 3 — Advanced (8–12 weeks)
1. Full site migration to Next.js or clean WordPress theme
2. Image optimization pipeline (WebP, CDN)
3. Schema markup for SEO
4. Events calendar
5. Online fee payment integration
6. Mobile app or PWA for parents

---

## 11. BUSINESS CASE FOR THE CLIENT

**Why invest in a redesign?**

- Admission season is competitive. Parents Google schools and compare websites before calling.
- A professional website signals a professional school — it directly affects enrollment.
- The current site has a broken transport page (404) and empty staff page — these are active trust destroyers.
- A redesigned site with SEO optimization can rank for "CBSE school Chennai" and "school admission Perungalathur" — free organic leads.
- Estimated ROI: If the redesign converts even 10 additional admissions per year at ₹50,000 fees each = ₹5L/year additional revenue from a one-time investment.

---

*Audit conducted by analyzing: Homepage, About, Admissions, Contact, Latest News, Staff Details, Mandatory Disclosure, Facilities, Careers, Annual Report, Transport pages.*
