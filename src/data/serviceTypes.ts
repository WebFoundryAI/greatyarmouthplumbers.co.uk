// ──────────────────────────────────────────────
//  Great Yarmouth Plumbers – service definitions
// ──────────────────────────────────────────────

export interface ProcessStep {
  title: string;
  description: string;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface ServiceType {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  priceRange: PriceRange;
  emergency: boolean;
  icon: string;
  image: string;
  processSteps: ProcessStep[];
}

export const serviceTypes: ServiceType[] = [
  // 1 ── Leak Repair
  {
    slug: 'leak-repair',
    name: 'Leak Repair',
    shortDescription:
      'Fast, reliable leak detection and repair for pipes, taps, and fixtures.',
    description:
      'A small leak can quickly turn into a costly problem if left unaddressed. Our team uses modern detection equipment to locate hidden leaks in walls, floors, and ceilings. We carry out lasting repairs so you can have peace of mind that the issue is fully resolved.',
    priceRange: { min: 80, max: 350 },
    emergency: true,
    icon: 'lucide:droplets',
    image: '/images/leak-repair.webp',
    processSteps: [
      {
        title: 'Emergency Assessment',
        description:
          'We arrive promptly, assess the severity of the leak, and take immediate steps to contain any water damage.',
      },
      {
        title: 'Leak Detection',
        description:
          'Using specialist equipment, we pinpoint the exact source of the leak, even behind walls or under floors.',
      },
      {
        title: 'Professional Repair',
        description:
          'We carry out the repair using quality parts, replacing damaged pipe sections, joints, or fittings as needed.',
      },
      {
        title: 'Testing and Clean-up',
        description:
          'We pressure-test the repaired section to confirm a watertight seal and leave the area clean and tidy.',
      },
    ],
  },

  // 2 ── Water Heater Service
  {
    slug: 'water-heater-service',
    name: 'Water Heater Service',
    shortDescription:
      'Installation, repair, and servicing for all types of water heaters and cylinders.',
    description:
      'Whether your hot water has stopped working or you need a new cylinder installed, we can help. We service immersion heaters, unvented cylinders, and electric water heaters from all major manufacturers. Regular servicing helps extend the life of your system and keeps energy bills down.',
    priceRange: { min: 120, max: 500 },
    emergency: false,
    icon: 'lucide:flame',
    image: '/images/water-heater-service.webp',
    processSteps: [
      {
        title: 'Initial Inspection',
        description:
          'We inspect your water heater or cylinder, checking for signs of wear, corrosion, or performance issues.',
      },
      {
        title: 'Diagnosis and Quote',
        description:
          'We explain what needs doing and provide a clear, upfront quote before starting any work.',
      },
      {
        title: 'Repair or Installation',
        description:
          'We carry out the repair or fit a new unit, making sure all connections and safety valves are correct.',
      },
      {
        title: 'System Check',
        description:
          'We run the system, check temperatures and pressure, and make sure hot water is flowing properly throughout.',
      },
    ],
  },

  // 3 ── Drain Cleaning
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    shortDescription:
      'Thorough drain cleaning to remove grease, scale, and debris build-up.',
    description:
      'Over time, drains collect grease, soap, hair, and mineral deposits that slow the flow of water. Our drain cleaning service uses high-pressure water jetting to clear the build-up and restore full drainage. Regular cleaning helps prevent blockages and unpleasant odours.',
    priceRange: { min: 70, max: 250 },
    emergency: false,
    icon: 'lucide:waves',
    image: '/images/drain-cleaning.webp',
    processSteps: [
      {
        title: 'Drain Inspection',
        description:
          'We examine the affected drains and identify where the build-up is worst.',
      },
      {
        title: 'High-Pressure Jetting',
        description:
          'Using professional jetting equipment, we blast away grease, scale, and debris from the pipe walls.',
      },
      {
        title: 'Flow Verification',
        description:
          'We run water through the system to confirm the drains are flowing freely.',
      },
      {
        title: 'Prevention Advice',
        description:
          'We share practical tips to help you keep your drains clear and reduce the chance of future blockages.',
      },
    ],
  },

  // 4 ── Repiping
  {
    slug: 'repiping',
    name: 'Repiping',
    shortDescription:
      'Complete or partial repiping for older properties with worn-out pipework.',
    description:
      'Many homes and commercial properties in Norfolk still have ageing lead or galvanised pipes that are prone to leaks and poor water pressure. We provide full and partial repiping services, replacing old pipework with modern copper or plastic alternatives. This improves water quality, pressure, and reliability for years to come.',
    priceRange: { min: 500, max: 3000 },
    emergency: false,
    icon: 'lucide:wrench',
    image: '/images/repiping.webp',
    processSteps: [
      {
        title: 'Property Survey',
        description:
          'We survey your existing pipework, noting the pipe material, layout, and any problem areas.',
      },
      {
        title: 'Detailed Quotation',
        description:
          'We provide a written quote covering materials, labour, and an estimated timeline for the work.',
      },
      {
        title: 'Repiping Work',
        description:
          'Our plumbers remove the old pipes and install new ones, working room by room to minimise disruption.',
      },
      {
        title: 'Pressure Testing',
        description:
          'We pressure-test the entire system, check every connection, and restore your water supply.',
      },
    ],
  },

  // 5 ── Sewer Line Repair
  {
    slug: 'sewer-line-repair',
    name: 'Sewer Line Repair',
    shortDescription:
      'Expert diagnosis and repair of damaged, blocked, or collapsed sewer lines.',
    description:
      'Sewer line problems can cause bad smells, slow drainage, and even flooding in your garden or property. We use CCTV surveys to find the exact location and cause of the damage, then carry out targeted repairs. From cracked pipes to tree-root intrusion, we have the tools and experience to fix it.',
    priceRange: { min: 300, max: 2500 },
    emergency: true,
    icon: 'lucide:construction',
    image: '/images/sewer-line-repair.webp',
    processSteps: [
      {
        title: 'CCTV Survey',
        description:
          'We send a camera through the sewer line to find cracks, blockages, root intrusion, or collapse points.',
      },
      {
        title: 'Repair Plan',
        description:
          'Based on the survey findings, we explain the best repair method and provide a clear cost estimate.',
      },
      {
        title: 'Excavation and Repair',
        description:
          'We excavate to the damaged section and replace or reline the pipe using durable materials.',
      },
      {
        title: 'Final Inspection',
        description:
          'We carry out a follow-up CCTV check to confirm the repair is sound and water is flowing correctly.',
      },
    ],
  },

  // 6 ── Drain Unblocking
  {
    slug: 'drain-unblocking',
    name: 'Drain Unblocking',
    shortDescription:
      'Rapid drain unblocking for internal and external drains.',
    description:
      'A blocked drain can cause water to back up into your home or overflow outside your property. We respond quickly to unblock drains of all sizes, from kitchen sinks to main external drains. Our team uses rods, plungers, and high-pressure jetting depending on the severity of the blockage.',
    priceRange: { min: 60, max: 200 },
    emergency: true,
    icon: 'lucide:arrow-down-circle',
    image: '/images/drain-unblocking.webp',
    processSteps: [
      {
        title: 'Rapid Response',
        description:
          'We arrive as quickly as possible, assess which drains are affected, and identify the blockage point.',
      },
      {
        title: 'Blockage Removal',
        description:
          'Using drain rods, plungers, or high-pressure jetting, we clear the blockage and restore the flow.',
      },
      {
        title: 'System Flush',
        description:
          'We flush the drain thoroughly to make sure nothing is left behind that could cause a repeat blockage.',
      },
      {
        title: 'Cause Report',
        description:
          'We let you know what caused the blockage and advise on steps to prevent it happening again.',
      },
    ],
  },

  // 7 ── CCTV Drain Survey
  {
    slug: 'cctv-drain-survey',
    name: 'CCTV Drain Survey',
    shortDescription:
      'Detailed CCTV inspections to diagnose drain and sewer problems without digging.',
    description:
      'A CCTV drain survey lets us see exactly what is happening inside your pipes without any excavation. We insert a small camera to inspect for cracks, blockages, root intrusion, and structural damage. You receive a full report with footage, which is also useful for home buyers and insurance claims.',
    priceRange: { min: 150, max: 400 },
    emergency: false,
    icon: 'lucide:camera',
    image: '/images/cctv-drain-survey.webp',
    processSteps: [
      {
        title: 'Access Preparation',
        description:
          'We locate and open the appropriate access points, clearing any surface debris before inserting the camera.',
      },
      {
        title: 'Camera Inspection',
        description:
          'We feed a specialist camera through the drainage system, recording high-definition footage of the pipe interior.',
      },
      {
        title: 'Problem Identification',
        description:
          'We note any defects, blockages, or areas of concern and explain them to you using the live footage.',
      },
      {
        title: 'Written Report',
        description:
          'You receive a detailed report with annotated images and recommendations, suitable for insurance or conveyancing.',
      },
    ],
  },

  // 8 ── Blocked Drains
  {
    slug: 'blocked-drains',
    name: 'Blocked Drains',
    shortDescription:
      'Emergency and routine clearance of blocked drains inside and outside your property.',
    description:
      'Blocked drains are one of the most common plumbing problems in homes and businesses. Warning signs include slow-draining water, gurgling noises, and bad smells. We clear blockages quickly using the right method for the situation, whether that is rodding, jetting, or manual removal.',
    priceRange: { min: 70, max: 300 },
    emergency: true,
    icon: 'lucide:circle-x',
    image: '/images/blocked-drains.webp',
    processSteps: [
      {
        title: 'Site Assessment',
        description:
          'We check which drains are blocked and whether the issue is in the internal or external drainage system.',
      },
      {
        title: 'Clearing the Blockage',
        description:
          'We use professional-grade equipment to break up and remove the blockage as quickly as possible.',
      },
      {
        title: 'Drain Flush',
        description:
          'We flush the drain with water to confirm the blockage is fully cleared and flow has returned to normal.',
      },
      {
        title: 'Follow-up Advice',
        description:
          'We explain the likely cause of the blockage and suggest ways to reduce the risk of it happening again.',
      },
    ],
  },

  // 9 ── Blocked Toilets
  {
    slug: 'blocked-toilets',
    name: 'Blocked Toilets',
    shortDescription:
      'Fast, discreet resolution of blocked and overflowing toilets.',
    description:
      'A blocked toilet is an urgent problem that needs sorting straight away. Whether the blockage is caused by excess tissue, foreign objects, or a deeper issue in the waste pipe, we can fix it. We work quickly and discreetly, leaving everything clean and hygienic.',
    priceRange: { min: 60, max: 200 },
    emergency: true,
    icon: 'lucide:alert-circle',
    image: '/images/blocked-toilets.webp',
    processSteps: [
      {
        title: 'Urgent Arrival',
        description:
          'We prioritise blocked toilet calls and aim to reach you as soon as possible, day or night.',
      },
      {
        title: 'Blockage Diagnosis',
        description:
          'We determine whether the blockage is in the toilet itself or further along the waste pipe.',
      },
      {
        title: 'Clearance',
        description:
          'Using specialist tools, we remove the blockage and restore the toilet to full working order.',
      },
      {
        title: 'Hygiene and Testing',
        description:
          'We sanitise the area, test the flush several times, and make sure everything is draining properly.',
      },
    ],
  },

  // 10 ── Blocked Sinks
  {
    slug: 'blocked-sinks',
    name: 'Blocked Sinks',
    shortDescription:
      'Clearing blocked kitchen and bathroom sinks to restore drainage fast.',
    description:
      'Blocked sinks are usually caused by a build-up of grease, food waste, soap, or hair in the trap or waste pipe. We clear the blockage and clean the trap so water drains away freely. If needed, we can also replace worn-out waste fittings or traps.',
    priceRange: { min: 50, max: 150 },
    emergency: false,
    icon: 'lucide:circle-minus',
    image: '/images/blocked-sinks.webp',
    processSteps: [
      {
        title: 'Inspection',
        description:
          'We check the sink, trap, and waste pipe to find where the blockage is located.',
      },
      {
        title: 'Blockage Removal',
        description:
          'We clear the blockage using appropriate tools, from plungers to drain snakes depending on the situation.',
      },
      {
        title: 'Trap Cleaning',
        description:
          'We remove and clean the trap, clearing out any residual grease or debris that could cause a repeat problem.',
      },
      {
        title: 'Flow Test',
        description:
          'We run the taps to confirm the sink is draining freely and check for any slow spots in the system.',
      },
    ],
  },
];

// ── Helper functions ──────────────────────────

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return serviceTypes.find((s) => s.slug === slug);
}

export function getServiceName(slug: string): string {
  return getServiceBySlug(slug)?.name ?? slug;
}

export function getEmergencyServices(): ServiceType[] {
  return serviceTypes.filter((s) => s.emergency);
}
