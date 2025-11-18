# Diabol AI Audit - Airtable Import Guide

**Audit Date:** November 16, 2025
**Overall Score:** 2.8/10

---

## Quick Import (Manual Entry)

Since the automated script needs `.env` configuration, here's the data to manually add to Airtable:

### 1. Audit Run Record

Add to **"Audit Runs"** table:

| Field | Value |
|-------|-------|
| Brand Name | Diabol AI |
| Domain | diabolai.com |
| Category | AI consulting |
| Audit Date | 2025-11-16 |
| Overall Score | 2.8 |
| Trust Node Coverage % | 28 |
| Citation Quality Score | 5.8 |
| AI Citation Rate % | 0 |
| Status | Complete |

**Key Findings:**
```
Minimal Trust Node Coverage (28%) - Only 8 of 29 critical trust nodes
Zero LLM Visibility - Brand does not appear in any AI-generated responses
Confused with Diabol AB (Swedish DevOps firm)
Missing Wikipedia, major review platforms, all seed sites
Strong technical implementation (Schema.org 8/10) but weak external validation
```

**Priorities:**
- **Priority 1:** Get listed on AI consulting aggregator sites (LeewayHertz, Clutch, The Consulting Report)
- **Priority 2:** Establish review platform presence (G2, Capterra, Trustpilot) - target 10+ reviews
- **Priority 3:** Create SMB-specific content and landing pages (/ai-consulting-for-small-business)

**Targets:**
- **30-Day Target:** Add 5-8 aggregator listings, claim G2/Clutch profiles, publish SMB guide
- **90-Day Target:** Visibility score 4.5/10, trust nodes 52%, 10+ reviews, first LLM mention
- **180-Day Target:** Visibility score 6.0/10, trust nodes 76%, cited by 1 of 3 AI platforms

**Next Audit Date:** 2026-01-15

---

### 2. Trust Node Records

Add to **"Trust Nodes"** table (link to the Audit Run record created above):

#### ✅ Found Nodes (8)

| Trust Node Name | Category | Status | Quality | URL | Notes |
|----------------|----------|--------|---------|-----|-------|
| Crunchbase | Directories | Found | 6 | https://www.crunchbase.com/organization/diabol-ab | Diabol AB profile exists |
| LinkedIn Company | Company Profiles | Found | 6 | https://www.linkedin.com/company/diabol-ab | 550 followers, 3 employees (Diabol AB) |
| G2 | Review Platforms | Partial | 3 | https://www.g2.com/products/diabol-ab | Listing exists but no reviews, shows alternatives page |
| Company Website | News & PR | Found | 8 | https://diabol.se | Strong Schema.org, last updated 2025-05-15 |
| Ants.se Podcast | News & PR | Found | 5 | https://ants.se | Swedish business podcast with Peter Ferm |

#### ❌ Missing Nodes (21)

| Trust Node Name | Category | Status | Quality | Notes |
|----------------|----------|--------|---------|-------|
| Product Hunt | Directories | Missing | 0 | |
| AngelList | Directories | Missing | 0 | |
| Capterra | Review Platforms | Missing | 0 | |
| Trustpilot | Review Platforms | Missing | 0 | |
| Software Advice | Review Platforms | Missing | 0 | |
| GetApp | Review Platforms | Missing | 0 | |
| Wikipedia | Knowledge Graphs | Missing | 0 | Different Peter Ferm (theatre director) exists, not AI consultant |
| Google Knowledge Panel | Knowledge Graphs | Missing | 0 | |
| Wikidata | Knowledge Graphs | Missing | 0 | |
| TechCrunch | Seed Sites | Missing | 0 | |
| Forbes | Seed Sites | Missing | 0 | |
| VentureBeat | Seed Sites | Missing | 0 | |
| Inc.com | Seed Sites | Missing | 0 | |
| Fast Company | Seed Sites | Missing | 0 | |

---

## Automated Import (When .env is configured)

### Setup .env file

Create `/Users/peterferm/Development 2/MyAICoPilot/ai-citation-agent/.env`:

```bash
AIRTABLE_API_KEY=your_api_key_here
AIRTABLE_BASE_ID=your_base_id_here
```

### Run automated import

```bash
cd /Users/peterferm/Development\ 2/MyAICoPilot/ai-citation-agent
node scripts/add-diabol-audit-to-airtable.cjs
```

---

## Key Metrics Summary

### Trust Node Breakdown

| Category | Found | Total | Coverage |
|----------|-------|-------|----------|
| Knowledge Graphs | 0 | 3 | 0% |
| Review Platforms | 1 | 5 | 20% |
| Directories | 2 | 4 | 50% |
| Company Profiles | 1 | 2 | 50% |
| News & PR | 2 | 10 | 20% |
| Seed Sites | 0 | 5 | 0% |
| **TOTAL** | **8** | **29** | **28%** |

### Citation Quality Dimensions

| Dimension | Score | Status |
|-----------|-------|--------|
| Authority | 6/10 | Moderate |
| Data Structure | 8/10 | Strong |
| Brand Alignment | 7/10 | Moderate-Strong |
| Freshness | 8/10 | Strong |
| Cross-Link Signals | 4.5/10 | Weak |
| **AVERAGE** | **5.8/10** | **Moderate** |

### LLM Visibility

| Platform | Cited? | Position | Notes |
|----------|--------|----------|-------|
| Perplexity | ❌ No | N/A | Not mentioned in any queries |
| ChatGPT | Not tested | N/A | - |
| Gemini | Not tested | N/A | - |

**AI Citation Rate:** 0% (0 of 1 platform tested)

---

## Top Priority Actions (From Audit)

### Immediate (This Month)

1. **Aggregator Site Listings**
   - Outreach to LeewayHertz, The Consulting Report, Clutch, GoodFirms
   - Submit to Binariks blog, Spaceo, Markovate, Prismetric
   - Target: 5-8 listings in 30 days

2. **Review Platform Presence**
   - Claim and complete G2 profile
   - Create Clutch, Trustpilot, Capterra profiles
   - Request 5-10 reviews from existing clients
   - Add review CTAs to project completion emails

3. **SMB-Specific Content**
   - Publish "AI Consulting for SMBs: Complete Guide" (2000+ words)
   - Create `/ai-consulting-for-small-business` landing page
   - Write 3-5 case studies (anonymize if needed)
   - Publish on LinkedIn, Medium, company blog

### Strategic (This Quarter)

4. **Build Knowledge Graph Presence**
   - Target: Wikipedia article for Peter Ferm (AI consultant)
   - Prerequisites: Build notability through media coverage
   - Guest author on Forbes, Entrepreneur, Inc
   - Target: 5+ media mentions before Wikipedia attempt

5. **Seed Site Coverage**
   - Submit articles to Forbes, Inc.com
   - Pitch case studies to TechCrunch, VentureBeat
   - Use HARO for expert quotes
   - Target: 2/5 seed sites with mentions

6. **Improve Cross-Link Signals**
   - Guest post on 5-8 industry blogs
   - Participate in AI/consulting podcasts
   - Speak at conferences
   - Publish "State of AI in SMBs" research report

---

## Next Audit: January 15, 2026

**60-Day Goals:**
- Add 7+ trust nodes (focus on review platforms and aggregators)
- Increase citation quality by 0.5-1.0 points
- Achieve first LLM mention (even if not top-ranked)
- Track competitor progress for benchmarking

---

**Source Report:** `/Users/peterferm/Development 2/MyAICoPilot/ai-citation-agent/output/diabol-ai-audit-report-2025-11-16.md`
