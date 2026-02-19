// ──────────────────────────────────────────────
//  Great Yarmouth Plumbers – SEO content helpers
// ──────────────────────────────────────────────

import type { ServiceArea } from './serviceAreas';
import type { ServiceType } from './serviceTypes';

// Local constants (duplicated from business.ts to avoid circular imports)
const BUSINESS_NAME = 'Great Yarmouth Plumbers';
const OWNER_NAME = 'Sam Altman';
const PHONE = '01493 334000';
const LICENSE = '';
const YEAR_ESTABLISHED = 2020;

function yearsInBusiness(): number {
  return new Date().getFullYear() - YEAR_ESTABLISHED;
}

// ── FAQ generation ────────────────────────────

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Generates 5 FAQ items tailored to the given area and optional service.
 * Questions and answers reference real business data so every page has
 * unique, locally relevant content.
 */
export function generateFaqs(
  area: ServiceArea,
  service?: ServiceType,
): FaqItem[] {
  const serviceName = service?.name ?? 'plumbing services';
  const serviceNameLower = service?.name?.toLowerCase() ?? 'plumbing services';
  const nearbyList = area.nearby
    .map((s) => s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()))
    .join(', ');

  const priceAnswer = service
    ? `Typical costs for ${serviceNameLower} in ${area.name} range from \u00a3${service.priceRange.min} to \u00a3${service.priceRange.max}, depending on the complexity of the job. ${BUSINESS_NAME} always provides a clear quote before any work begins, so there are no surprises. Call us on ${PHONE} for a free estimate.`
    : `The cost depends on the type of work required. ${BUSINESS_NAME} provides transparent, upfront pricing for every job in ${area.name}. Call us on ${PHONE} to discuss your needs and get a no-obligation quote.`;

  const responseAnswer = `Our typical response time to ${area.name} is approximately ${area.responseTime}. For emergencies we aim to arrive even sooner. ${BUSINESS_NAME} covers ${area.name} and the wider ${area.county} area, so help is never far away.`;

  const licenceAnswer = LICENSE
    ? `Yes. ${BUSINESS_NAME} is fully insured and holds Gas Safe registration number ${LICENSE}. Our plumbers have ${yearsInBusiness()} years of experience serving ${area.name} and surrounding areas. You can verify our credentials at any time.`
    : `Yes. ${BUSINESS_NAME} is fully insured and our plumbers have ${yearsInBusiness()} years of experience serving ${area.name} and the surrounding ${area.county} area. We are happy to provide proof of insurance on request.`;

  const emergencyAnswer = service?.emergency
    ? `Absolutely. ${serviceName} is one of our 24/7 emergency services. If you have an urgent ${serviceNameLower} problem in ${area.name}, call ${BUSINESS_NAME} on ${PHONE} and we will get to you as quickly as possible.`
    : `Yes, ${BUSINESS_NAME} offers 24/7 emergency plumbing services across ${area.name}. Whether it is a burst pipe, a blocked drain, or a flooding emergency, call us on ${PHONE} any time of day or night.`;

  const nearbyAnswer = `In addition to ${area.name}, ${BUSINESS_NAME} serves ${nearbyList} and other communities across ${area.county}. We cover a 20-mile radius from Great Yarmouth, so wherever you are in the area, we can help.`;

  return [
    {
      question: `How much does ${serviceNameLower} cost in ${area.name}?`,
      answer: priceAnswer,
    },
    {
      question: `How quickly can a plumber reach ${area.name}?`,
      answer: responseAnswer,
    },
    {
      question: `Is ${BUSINESS_NAME} fully licensed and insured?`,
      answer: licenceAnswer,
    },
    {
      question: `Do you offer emergency ${serviceNameLower} in ${area.name}?`,
      answer: emergencyAnswer,
    },
    {
      question: `What other areas near ${area.name} do you cover?`,
      answer: nearbyAnswer,
    },
  ];
}

// ── Reviews / Testimonials ────────────────────

export interface Review {
  author: string;
  date: string;
  rating: number;
  text: string;
  area?: string;
  service?: string;
}

/**
 * PLACEHOLDER: Replace with real customer reviews when available.
 * Each review should reference a specific service slug and/or area slug
 * so the getReviewsForPage function can match them to the right pages.
 */
export const reviews: Review[] = [
  // PLACEHOLDER – add genuine reviews here, for example:
  // {
  //   author: 'Jane D.',
  //   date: '2025-10-14',
  //   rating: 5,
  //   text: 'Called about a burst pipe on a Sunday evening...',
  //   area: 'great-yarmouth',
  //   service: 'leak-repair',
  // },
];

/**
 * Returns the most relevant reviews for a given page.
 *
 * Scoring logic:
 *  - +2 if the review's area matches the requested area
 *  - +2 if the review's service matches the requested service
 *  - +1 if the review has no area/service (generic, mildly relevant everywhere)
 *
 * Results are sorted by score (descending), then by date (newest first).
 */
export function getReviewsForPage(
  areaSlug?: string,
  serviceSlug?: string,
  count: number = 3,
): Review[] {
  const scored = reviews.map((review) => {
    let score = 0;
    if (areaSlug && review.area === areaSlug) score += 2;
    if (serviceSlug && review.service === serviceSlug) score += 2;
    if (!review.area && !review.service) score += 1;
    return { review, score };
  });

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return new Date(b.review.date).getTime() - new Date(a.review.date).getTime();
  });

  return scored.slice(0, count).map((s) => s.review);
}
