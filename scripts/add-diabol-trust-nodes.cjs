#!/usr/bin/env node

/**
 * Add trust nodes to existing Diabol AI audit
 * Audit Run ID: recpcOOq6dMMv1zhm
 */

const Airtable = require('airtable');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

const AUDIT_RUN_ID = 'recpcOOq6dMMv1zhm'; // Diabol AI audit from Nov 16

const trustNodes = [
  // Directories (2/4)
  { name: 'Crunchbase', category: 'Directory', status: 'Found', quality: 6, url: 'https://www.crunchbase.com/organization/diabol-ab', notes: 'Diabol AB profile exists' },
  { name: 'LinkedIn Company', category: 'Company Profile', status: 'Found', quality: 6, url: 'https://www.linkedin.com/company/diabol-ab', notes: '550 followers, 3 employees (Diabol AB)' },
  { name: 'Product Hunt', category: 'Directory', status: 'Missing', quality: 0 },
  { name: 'AngelList', category: 'Directory', status: 'Missing', quality: 0 },

  // Review Platforms (1/5)
  { name: 'G2', category: 'Review Platform', status: 'Partial', quality: 3, url: 'https://www.g2.com/products/diabol-ab', notes: 'Listing exists but no reviews, shows alternatives page' },
  { name: 'Capterra', category: 'Review Platform', status: 'Missing', quality: 0 },
  { name: 'Trustpilot', category: 'Review Platform', status: 'Missing', quality: 0 },
  { name: 'Software Advice', category: 'Review Platform', status: 'Missing', quality: 0 },
  { name: 'GetApp', category: 'Review Platform', status: 'Missing', quality: 0 },

  // Knowledge Graphs (0/3)
  { name: 'Wikipedia', category: 'Knowledge Graph', status: 'Missing', quality: 0, notes: 'Different Peter Ferm (theatre director) exists, not AI consultant' },
  { name: 'Google Knowledge Panel', category: 'Knowledge Graph', status: 'Missing', quality: 0 },
  { name: 'Wikidata', category: 'Knowledge Graph', status: 'Missing', quality: 0 },

  // News & PR (2/10)
  { name: 'Company Website', category: 'News & PR', status: 'Found', quality: 8, url: 'https://diabol.se', notes: 'Strong Schema.org, last updated 2025-05-15' },
  { name: 'Ants.se Podcast', category: 'News & PR', status: 'Found', quality: 5, url: 'https://ants.se', notes: 'Swedish business podcast with Peter Ferm' },
  { name: 'TechCrunch', category: 'Seed Site', status: 'Missing', quality: 0 },
  { name: 'Forbes', category: 'Seed Site', status: 'Missing', quality: 0 },
  { name: 'VentureBeat', category: 'Seed Site', status: 'Missing', quality: 0 },
  { name: 'Inc.com', category: 'Seed Site', status: 'Missing', quality: 0 },
  { name: 'Fast Company', category: 'Seed Site', status: 'Missing', quality: 0 }
];

async function addTrustNodes() {
  try {
    console.log('📊 Adding trust nodes to Diabol AI audit...\n');
    console.log(`Audit Run ID: ${AUDIT_RUN_ID}\n`);

    let added = 0;
    let failed = 0;

    for (const node of trustNodes) {
      try {
        await base('Trust_Nodes').create({
          'audit': [AUDIT_RUN_ID],
          'node_name': node.name,
          'category': node.category,
          'present': node.status === 'Found' || node.status === 'Partial',
          'quality_score': node.quality,
          'url': node.url || '',
          'notes': node.notes || ''
        });
        added++;
        process.stdout.write('.');
      } catch (error) {
        failed++;
        console.error(`\n✗ Failed to add ${node.name}: ${error.message}`);
      }
    }

    console.log(`\n\n✅ Trust nodes added: ${added}/${trustNodes.length}`);
    if (failed > 0) {
      console.log(`⚠️  Failed: ${failed}`);
    }

    console.log('\n📊 SUMMARY:');
    console.log(`- Total trust nodes: ${trustNodes.length}`);
    console.log(`- Found: ${trustNodes.filter(n => n.status === 'Found').length}`);
    console.log(`- Partial: ${trustNodes.filter(n => n.status === 'Partial').length}`);
    console.log(`- Missing: ${trustNodes.filter(n => n.status === 'Missing').length}`);
    console.log(`\n✅ Diabol AI audit complete!\n`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.statusCode) {
      console.error(`Status: ${error.statusCode}`);
    }
    process.exit(1);
  }
}

addTrustNodes();
