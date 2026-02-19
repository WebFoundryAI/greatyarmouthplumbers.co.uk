// ──────────────────────────────────────────────
//  Great Yarmouth Plumbers – service areas
// ──────────────────────────────────────────────

export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  population: number;
  priority: 'primary' | 'secondary' | 'tertiary';
  lat: number;
  lng: number;
  nearby: string[];
  description: string;
  zipCodes: string[];
  responseTime: string;
}

export const serviceAreas: ServiceArea[] = [
  // 1 ── Great Yarmouth (primary)
  {
    slug: 'great-yarmouth',
    name: 'Great Yarmouth',
    county: 'Norfolk',
    population: 40000,
    priority: 'primary',
    lat: 52.6039,
    lng: 1.7278,
    nearby: ['gorleston-on-sea', 'caister-on-sea', 'bradwell', 'belton'],
    description:
      'Great Yarmouth is a bustling seaside town with a mix of Victorian terraces, holiday properties, and modern housing estates. Older pipework and proximity to the coast mean that leak repairs, drain unblocking, and corrosion-related plumbing issues are common here.',
    zipCodes: ['NR30', 'NR31'],
    responseTime: '15 minutes',
  },

  // 2 ── Gorleston-on-Sea (primary)
  {
    slug: 'gorleston-on-sea',
    name: 'Gorleston-on-Sea',
    county: 'Norfolk',
    population: 25000,
    priority: 'primary',
    lat: 52.5753,
    lng: 1.7237,
    nearby: ['great-yarmouth', 'bradwell', 'belton', 'hopton-on-sea'],
    description:
      'Gorleston-on-Sea sits just south of Great Yarmouth and is known for its award-winning beach and traditional high street. The town has a large stock of 1930s and post-war homes where ageing pipework and water heater problems are frequently reported.',
    zipCodes: ['NR31'],
    responseTime: '10 minutes',
  },

  // 3 ── Caister-on-Sea (primary)
  {
    slug: 'caister-on-sea',
    name: 'Caister-on-Sea',
    county: 'Norfolk',
    population: 8500,
    priority: 'primary',
    lat: 52.6340,
    lng: 1.7340,
    nearby: ['great-yarmouth', 'hemsby', 'martham', 'bradwell'],
    description:
      'Caister-on-Sea is a popular residential village just north of Great Yarmouth, home to a large holiday park and growing number of new-build estates. Residents here often need help with blocked drains, new installations, and general plumbing maintenance.',
    zipCodes: ['NR30'],
    responseTime: '15 minutes',
  },

  // 4 ── Bradwell (primary)
  {
    slug: 'bradwell',
    name: 'Bradwell',
    county: 'Norfolk',
    population: 10000,
    priority: 'primary',
    lat: 52.5895,
    lng: 1.6990,
    nearby: ['great-yarmouth', 'gorleston-on-sea', 'belton', 'caister-on-sea'],
    description:
      'Bradwell is a large village on the western edge of Great Yarmouth with a mixture of housing from the 1960s onwards. Common plumbing needs include water heater servicing, sink and toilet blockages, and drain cleaning for properties with older external drainage.',
    zipCodes: ['NR31'],
    responseTime: '15 minutes',
  },

  // 5 ── Hemsby (secondary)
  {
    slug: 'hemsby',
    name: 'Hemsby',
    county: 'Norfolk',
    population: 3000,
    priority: 'secondary',
    lat: 52.6660,
    lng: 1.6920,
    nearby: ['caister-on-sea', 'great-yarmouth', 'martham'],
    description:
      'Hemsby is a coastal village popular with holidaymakers, with many caravans, chalets, and bungalows. Seasonal properties often develop plumbing problems over winter, and burst pipes after cold spells are a regular call-out for us here.',
    zipCodes: ['NR29'],
    responseTime: '20 minutes',
  },

  // 6 ── Belton (secondary)
  {
    slug: 'belton',
    name: 'Belton',
    county: 'Norfolk',
    population: 4000,
    priority: 'secondary',
    lat: 52.5690,
    lng: 1.6850,
    nearby: ['gorleston-on-sea', 'bradwell', 'great-yarmouth', 'hopton-on-sea'],
    description:
      'Belton is a village just south-west of Great Yarmouth, close to Fritton Lake and the Norfolk Broads. Many homes here rely on older drainage systems that benefit from regular cleaning and CCTV surveys to prevent blockages.',
    zipCodes: ['NR31'],
    responseTime: '20 minutes',
  },

  // 7 ── Acle (secondary)
  {
    slug: 'acle',
    name: 'Acle',
    county: 'Norfolk',
    population: 3000,
    priority: 'secondary',
    lat: 52.6310,
    lng: 1.5410,
    nearby: ['martham', 'great-yarmouth', 'stalham'],
    description:
      'Acle is a small market town on the River Bure, serving as a gateway to the Norfolk Broads. Properties near the river can experience higher ground-water levels, making sewer line and drainage issues more common.',
    zipCodes: ['NR13'],
    responseTime: '25 minutes',
  },

  // 8 ── Lowestoft (secondary)
  {
    slug: 'lowestoft',
    name: 'Lowestoft',
    county: 'Suffolk',
    population: 70000,
    priority: 'secondary',
    lat: 52.4751,
    lng: 1.7500,
    nearby: ['gorleston-on-sea', 'hopton-on-sea', 'beccles'],
    description:
      'Lowestoft is the most easterly town in the UK and the largest urban centre in the Waveney district. With a wide variety of housing from Victorian terraces to modern estates, plumbing needs range from repiping ageing systems to clearing blocked external drains.',
    zipCodes: ['NR32', 'NR33'],
    responseTime: '30 minutes',
  },

  // 9 ── Martham (secondary)
  {
    slug: 'martham',
    name: 'Martham',
    county: 'Norfolk',
    population: 3500,
    priority: 'secondary',
    lat: 52.6700,
    lng: 1.6350,
    nearby: ['caister-on-sea', 'hemsby', 'stalham', 'acle'],
    description:
      'Martham is a village at the northern edge of our service area, close to the Broads and Martham Broad nature reserve. Many homes here use private drainage systems that need regular maintenance and occasional repair.',
    zipCodes: ['NR29'],
    responseTime: '25 minutes',
  },

  // 10 ── Hopton-on-Sea (secondary)
  {
    slug: 'hopton-on-sea',
    name: 'Hopton-on-Sea',
    county: 'Norfolk',
    population: 4000,
    priority: 'secondary',
    lat: 52.5430,
    lng: 1.7310,
    nearby: ['gorleston-on-sea', 'belton', 'lowestoft', 'great-yarmouth'],
    description:
      'Hopton-on-Sea is a coastal village on the Norfolk-Suffolk border, home to a major holiday village and several caravan parks. Holiday lets and seasonal properties frequently require emergency plumbing work, especially during the busy summer months.',
    zipCodes: ['NR31'],
    responseTime: '20 minutes',
  },

  // 11 ── Stalham (tertiary)
  {
    slug: 'stalham',
    name: 'Stalham',
    county: 'Norfolk',
    population: 4000,
    priority: 'tertiary',
    lat: 52.7640,
    lng: 1.5200,
    nearby: ['martham', 'acle', 'hemsby'],
    description:
      'Stalham is a small town in the heart of the Norfolk Broads, known for its boating connections and weekly market. Older cottages and rural properties here often need repiping, water heater replacement, and septic-related drainage work.',
    zipCodes: ['NR12'],
    responseTime: '35 minutes',
  },

  // 12 ── Beccles (tertiary)
  {
    slug: 'beccles',
    name: 'Beccles',
    county: 'Suffolk',
    population: 11000,
    priority: 'tertiary',
    lat: 52.4590,
    lng: 1.5640,
    nearby: ['lowestoft', 'hopton-on-sea', 'belton'],
    description:
      'Beccles is a historic market town on the River Waveney in north Suffolk. The town centre features many period properties with original plumbing that benefits from modern upgrades, and we regularly attend callouts for leak repairs and drain surveys here.',
    zipCodes: ['NR34'],
    responseTime: '35 minutes',
  },
];

// ── Helper functions ──────────────────────────

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}

export function getNearbyAreas(area: ServiceArea): ServiceArea[] {
  return area.nearby
    .map((slug) => getAreaBySlug(slug))
    .filter((a): a is ServiceArea => a !== undefined);
}

export function getAreaName(slug: string): string {
  return getAreaBySlug(slug)?.name ?? slug;
}
