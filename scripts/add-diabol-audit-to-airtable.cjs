#!/usr/bin/env node

/**
 * Add Diabol AI audit data (Nov 16, 2025) to Airtable
 * Based on: diabol-ai-audit-report-2025-11-16.md
 */

const Airtable = require('airtable');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

const auditData = {
  brandName: 'Diabol AI',
  domain: 'diabolai.com',
  category: 'AI consulting',
  auditDate: '2025-11-16',
  overallScore: 2.8,
  trustNodeCoverage: 28, // 8/29 nodes = 28%
  citationQuality: 5.8,
  aiCitationRate: 0, // 0% - not cited by any AI platforms

  // Trust node breakdown
  trustNodesFound: 8,
  trustNodesTotal: 29,

  knowledgeGraphs: 0,
  reviewPlatforms: 1,
  directories: 2,
  companyProfiles: 1,
  newsPR: 2,
  seedSites: 0,

  // Citation quality dimensions
  authorityScore: 6,
  dataStructureScore: 8,
  brandAlignmentScore: 7,
  freshnessScore: 8,
  crossLinkScore: 4.5,

  // LLM visibility
  perplexityCited: false,
  chatgptCited: false,
  geminiCited: false,

  // Key findings
  keyFindings: [
    'Minimal Trust Node Coverage (28%) - Only 8 of 29 critical trust nodes',
    'Zero LLM Visibility - Brand does not appear in any AI-generated responses',
    'Confused with Diabol AB (Swedish DevOps firm)',
    'Missing Wikipedia, major review platforms, all seed sites',
    'Strong technical implementation (Schema.org 8/10) but weak external validation'
  ].join('\n'),

  // Top 3 priorities
  priority1: 'Get listed on AI consulting aggregator sites (LeewayHertz, Clutch, The Consulting Report)',
  priority2: 'Establish review platform presence (G2, Capterra, Trustpilot) - target 10+ reviews',
  priority3: 'Create SMB-specific content and landing pages (/ai-consulting-for-small-business)',

  // Targets
  target30Day: 'Add 5-8 aggregator listings, claim G2/Clutch profiles, publish SMB guide',
  target90Day: 'Visibility score 4.5/10, trust nodes 52%, 10+ reviews, first LLM mention',
  target180Day: 'Visibility score 6.0/10, trust nodes 76%, cited by 1 of 3 AI platforms',

  nextAuditDate: '2026-01-15'
};

async function addAudit() {
  try {
    console.log('📊 Adding Diabol AI audit to Airtable...\n');

    // 1. Create audit run record
    console.log('Creating audit run record...');
    const auditRun = await base('Audit_Runs').create({
      'brand_name': auditData.brandName,
      'category': auditData.category,
      'audit_date': auditData.auditDate,
      'overall_score': auditData.overallScore,
      'trust_node_coverage': auditData.trustNodesFound,
      'trust_node_percentage': auditData.trustNodeCoverage / 100, // Convert to decimal for percent field
      'citation_quality': auditData.citationQuality,
      'ai_citation_rate': auditData.aiCitationRate / 100, // Convert to decimal for percent field
      'perplexity_cited': auditData.perplexityCited,
      'chatgpt_cited': auditData.chatgptCited,
      'gemini_cited': auditData.geminiCited,
      'status': 'Complete',
      'executive_summary': auditData.keyFindings,
      'top_priority_1': auditData.priority1,
      'top_priority_2': auditData.priority2,
      'top_priority_3': auditData.priority3,
      'next_audit_date': auditData.nextAuditDate
    });

    console.log(`✅ Audit run created: ${auditRun.id}\n`);

    // 2. Create trust node records
    console.log('Creating trust node records...');

    const trustNodes = [
      // Directories (2/4)
      { name: 'Crunchbase', category: 'Directories', status: 'Found', quality: 6, url: 'https://www.crunchbase.com/organization/diabol-ab', notes: 'Diabol AB profile exists' },
      { name: 'LinkedIn Company', category: 'Company Profiles', status: 'Found', quality: 6, url: 'https://www.linkedin.com/company/diabol-ab', notes: '550 followers, 3 employees (Diabol AB)' },
      { name: 'Product Hunt', category: 'Directories', status: 'Missing', quality: 0 },
      { name: 'AngelList', category: 'Directories', status: 'Missing', quality: 0 },

      // Review Platforms (1/5)
      { name: 'G2', category: 'Review Platforms', status: 'Partial', quality: 3, url: 'https://www.g2.com/products/diabol-ab', notes: 'Listing exists but no reviews, shows alternatives page' },
      { name: 'Capterra', category: 'Review Platforms', status: 'Missing', quality: 0 },
      { name: 'Trustpilot', category: 'Review Platforms', status: 'Missing', quality: 0 },
      { name: 'Software Advice', category: 'Review Platforms', status: 'Missing', quality: 0 },
      { name: 'GetApp', category: 'Review Platforms', status: 'Missing', quality: 0 },

      // Knowledge Graphs (0/3)
      { name: 'Wikipedia', category: 'Knowledge Graphs', status: 'Missing', quality: 0, notes: 'Different Peter Ferm (theatre director) exists, not AI consultant' },
      { name: 'Google Knowledge Panel', category: 'Knowledge Graphs', status: 'Missing', quality: 0 },
      { name: 'Wikidata', category: 'Knowledge Graphs', status: 'Missing', quality: 0 },

      // News & PR (2/10)
      { name: 'Company Website', category: 'News & PR', status: 'Found', quality: 8, url: 'https://diabol.se', notes: 'Strong Schema.org, last updated 2025-05-15' },
      { name: 'Ants.se Podcast', category: 'News & PR', status: 'Found', quality: 5, url: 'https://ants.se', notes: 'Swedish business podcast with Peter Ferm' },
      { name: 'TechCrunch', category: 'Seed Sites', status: 'Missing', quality: 0 },
      { name: 'Forbes', category: 'Seed Sites', status: 'Missing', quality: 0 },
      { name: 'VentureBeat', category: 'Seed Sites', status: 'Missing', quality: 0 },
      { name: 'Inc.com', category: 'Seed Sites', status: 'Missing', quality: 0 },
      { name: 'Fast Company', category: 'Seed Sites', status: 'Missing', quality: 0 }
    ];

    for (const node of trustNodes) {
      await base('Trust_Nodes').create({
        'audit': [auditRun.id],
        'node_name': node.name,
        'category': node.category,
        'present': node.status === 'Found' || node.status === 'Partial',
        'quality_score': node.quality,
        'url': node.url || '',
        'notes': node.notes || ''
      });
    }

    console.log(`✅ Created ${trustNodes.length} trust node records\n`);

    // 3. Summary
    console.log('📋 AUDIT SUMMARY');
    console.log('================');
    console.log(`Brand: ${auditData.brandName}`);
    console.log(`Domain: ${auditData.domain}`);
    console.log(`Date: ${auditData.auditDate}`);
    console.log(`Overall Score: ${auditData.overallScore}/10`);
    console.log(`Trust Nodes: ${auditData.trustNodesFound}/${auditData.trustNodesTotal} (${auditData.trustNodeCoverage}%)`);
    console.log(`Citation Quality: ${auditData.citationQuality}/10`);
    console.log(`AI Citation Rate: ${auditData.aiCitationRate}%`);
    console.log(`\nNext Audit: ${auditData.nextAuditDate}`);
    console.log('\n✅ Diabol AI audit successfully added to Airtable!\n');

  } catch (error) {
    console.error('❌ Error adding audit:', error.message);
    if (error.statusCode) {
      console.error(`Status: ${error.statusCode}`);
    }
    if (error.error) {
      console.error('Details:', JSON.stringify(error.error, null, 2));
    }
    process.exit(1);
  }
}

addAudit();
