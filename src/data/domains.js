const rawDomains = [
  {
    id: 1,
    title: 'Soil Health & Soil Care',
    tagline: 'Healthy soil, healthy future',
    color: '#2D6A4F',
    focus: 'Understanding soil as a living system.',
    skills: [
      ['Soil observation', 'Identify colour, texture, smell, moisture'],
      ['Soil sampling', 'Collect proper samples for testing'],
      ['Soil health assessment', 'Understand healthy vs degraded soil'],
      ['Soil biodiversity observation', 'Observe earthworms and organic matter'],
      ['Soil mapping', 'Map soil conditions in school/village']
    ],
    keySkill: 'Soil Sampling and Soil Health Observation',
    icon: 'leaf'
  },
  {
    id: 2,
    title: 'Smart Fertilizer & Crop Care',
    tagline: 'Use right, use safe',
    color: '#E76F51',
    focus: 'Reducing excessive fertilizer, pesticide and herbicide use.',
    skills: [
      ['Balanced fertilizer use', 'Apply correct quantity at correct time'],
      ['Fertilizer measurement', 'Avoid overuse and wastage'],
      ['Safe pesticide awareness', 'Understand risks and safe use'],
      ['Smart herbicide use', 'Reduce unnecessary herbicide dependence'],
      ['Safe chemical handling', 'Storage, mixing, spraying safety']
    ],
    keySkill: 'Safe and Balanced Input Use',
    icon: 'bottle'
  },
  {
    id: 3,
    title: 'Organic & Natural Farming Inputs',
    tagline: 'From waste to wealth',
    color: '#2A9D8F',
    focus: 'Reducing chemical dependence.',
    skills: [
      ['Compost preparation', 'Convert waste into soil nutrition'],
      ['Vermicomposting', 'Use earthworms for composting'],
      ['Bio-fertilizer use', 'Apply biological inputs correctly'],
      ['Natural pest control', 'Use safer alternatives like neem-based methods'],
      ['Organic waste management', 'Recycle school/home/farm waste']
    ],
    keySkill: 'Compost Preparation and Natural Pest Solutions',
    icon: 'recycle'
  },
  {
    id: 4,
    title: 'Sustainable Cropping Practices',
    tagline: 'Diverse crops, resilient farms',
    color: '#E9B23B',
    focus: 'Crop diversity and long-term soil health.',
    skills: [
      ['Crop rotation planning', 'Reduce pest and nutrient imbalance'],
      ['Mixed cropping awareness', 'Improve biodiversity and risk reduction'],
      ['Green manuring', 'Improve soil fertility naturally'],
      ['Seasonal crop mapping', 'Understand local crop patterns'],
      ['Pest-reducing crop diversity', 'Reduce chemical dependence']
    ],
    keySkill: 'Crop Rotation and Mixed Cropping Planning',
    icon: 'wheat'
  },
  {
    id: 5,
    title: 'Water & Natural Resource Care',
    tagline: 'Save water, sustain life',
    color: '#3DA5D9',
    focus: 'Right water use and soil-water conservation.',
    skills: [
      ['Water use assessment', 'Observe irrigation practices'],
      ['Efficient irrigation awareness', 'Promote drip, sprinkler, proper timing'],
      ['Soil erosion mapping', 'Identify erosion-prone areas'],
      ['Moisture conservation', 'Use mulching and soil cover'],
      ['Chemical runoff awareness', 'Understand pollution from farm chemicals']
    ],
    keySkill: 'Water Use Assessment and Moisture Conservation',
    icon: 'drop'
  },
  {
    id: 6,
    title: 'Climate-Smart Farming',
    tagline: 'Be prepared, build resilience',
    color: '#588157',
    focus: 'Helping farms adapt to climate stress.',
    skills: [
      ['Weather observation', 'Track rainfall, heat, seasonal changes'],
      ['Crop stress identification', 'Observe heat, drought and water stress'],
      ['Climate risk awareness', 'Understand local farming risks'],
      ['Adaptation planning', 'Identify suitable local practices'],
      ['Soil carbon awareness', 'Link organic matter with climate resilience']
    ],
    keySkill: 'Crop Stress Identification',
    icon: 'cloud'
  },
  {
    id: 7,
    title: 'Biodiversity & Pollinator Protection',
    tagline: 'Protect nature, support life',
    color: '#6A4C93',
    focus: 'Protecting nature systems that support farming.',
    skills: [
      ['Pollinator identification', 'Observe bees, butterflies and insects'],
      ['Beneficial insect awareness', 'Identify natural pest controllers'],
      ['Biodiversity mapping', 'Map trees, birds, insects, plants'],
      ['Pollinator habitat creation', 'Create flowering spaces in schools/farms'],
      ['Pesticide impact awareness', 'Understand effects on pollinators']
    ],
    keySkill: 'Pollinator Observation and Habitat Creation',
    icon: 'bee'
  },
  {
    id: 8,
    title: 'Community Action & Village Sustainability',
    tagline: 'Together for sustainable villages',
    color: '#D6336C',
    focus: 'Students as local change agents.',
    skills: [
      ['Farmer interviewing', 'Learn from farmers'],
      ['Village sustainability survey', 'Collect local farming data'],
      ['Awareness campaigning', 'Promote safe and smart farming'],
      ['Community communication', 'Speak with farmers and households'],
      ['Village report preparation', 'Create village sustainability report']
    ],
    keySkill: 'Village Sustainability Survey',
    icon: 'people'
  },
  {
    id: 9,
    title: 'Farm Innovation & Demonstration',
    tagline: 'Learn, try, improve',
    color: '#1B998B',
    focus: 'Learning through proof and comparison.',
    skills: [
      ['Demo plot documentation', 'Record field changes'],
      ['Comparative observation', 'Compare practices visually'],
      ['Yield tracking', 'Track crop growth and output'],
      ['Photo/video reporting', 'Document evidence'],
      ['Farmer feedback collection', 'Capture farmer learning']
    ],
    keySkill: 'Demo Plot Documentation',
    icon: 'chart'
  },
  {
    id: 10,
    title: 'Leadership & Green Skills',
    tagline: 'Lead today, inspire tomorrow',
    color: '#1D3557',
    focus: 'Youth leadership and behaviour change.',
    skills: [
      ['Team leadership', 'Lead school soil clubs'],
      ['Peer learning', 'Teach other students'],
      ['Farmer communication', 'Share simple messages with farmers'],
      ['Event coordination', 'Organize camps and campaigns'],
      ['Behaviour change communication', 'Influence positive local practices']
    ],
    keySkill: 'Behaviour Change Communication',
    icon: 'lead'
  },
  {
    id: 11,
    title: 'Digital Sustainability Skills',
    tagline: 'Use digital, drive change',
    color: '#A0522D',
    focus: 'Using digital tools for local action.',
    skills: [
      ['Digital activity reporting', 'Upload evidence'],
      ['Survey data collection', 'Use mobile forms'],
      ['Dashboard interpretation', 'Read school/village progress'],
      ['GIS mapping basics', 'Map farms, soil tests, water points'],
      ['Certificate and badge tracking', 'Monitor learning progress']
    ],
    keySkill: 'Digital Activity Reporting',
    icon: 'mobile'
  },
  {
    id: 12,
    title: 'Partnership & Convergence',
    tagline: 'Stronger together, greater impact',
    color: '#E63946',
    focus: 'Building collaboration between schools, communities, institutions and sustainability partners.',
    skills: [
      ['Partnership Mapping', 'Identifying local institutions and stakeholders'],
      ['Community Coordination', 'Working with Panchayats, farmers, SHGs and schools'],
      ['Institutional Collaboration', 'Connecting with KVKs, NGOs and departments'],
      ['Event & Campaign Collaboration', 'Organizing joint village sustainability activities'],
      ['Resource Mobilization', 'Identifying local support, volunteers and resources']
    ],
    keySkill: 'Community & Institutional Coordination',
    icon: 'puzzle'
  }
]

// URL-friendly slug from the domain title, e.g. "Soil Health & Soil Care" -> "soil-health-soil-care"
export const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

export const domains = rawDomains.map(d => ({ ...d, slug: slugify(d.title) }))

export const getDomainBySlug = (slug) => domains.find(d => d.slug === slug)

// Per-domain detail content for the individual domain pages
// (Domain → Skills → Mission → Activity → Evidence → Badge → Community Impact)
export const domainDetails = {
  1: {
    mission: 'Know Your Soil',
    activities: ['Collect a soil sample', 'Observe colour and texture', 'Upload a photo', 'Interview one farmer', 'Complete the soil quiz'],
    badge: 'Soil Explorer',
    communityImpact: 'Schools build a local soil map and help farmers understand soil health, leading to better-informed sowing and input decisions.'
  },
  2: {
    mission: 'Reduce Chemical Overuse',
    activities: ['Interview farmers on fertilizer and pesticide use', 'Identify common overuse patterns', 'Create an awareness poster', 'Attend a safe-input session', 'Upload a report'],
    badge: 'Safe Farming Champion',
    communityImpact: 'Farmers cut fertilizer and pesticide overuse, lowering costs and protecting soil and water from chemical buildup.'
  },
  3: {
    mission: 'Build Compost',
    activities: ['Create a compost pit or bin', 'Upload weekly photos', 'Track waste added', 'Observe compost maturity', 'Share the method with households'],
    badge: 'Compost Champion',
    communityImpact: 'Households and schools turn organic waste into compost, reducing dependence on chemical fertilizers.'
  },
  4: {
    mission: 'Plan a Diverse Crop Cycle',
    activities: ['Map the current cropping pattern', 'Plan a crop rotation', 'Identify mixed-cropping options', 'Document a green-manure plot', 'Share the plan with a farmer'],
    badge: 'Crop Care Leader',
    communityImpact: 'Villages adopt crop rotation and mixed cropping, improving soil fertility and reducing pest pressure.'
  },
  5: {
    mission: 'Save Water on Farms',
    activities: ['Observe irrigation practice', 'Identify water wastage', 'Document mulching / drip / sprinkler examples', 'Prepare a water-saving message', 'Upload village water-use observations'],
    badge: 'Water Smart Leader',
    communityImpact: 'Farms shift to efficient irrigation and moisture conservation, saving water and protecting soil from erosion.'
  },
  6: {
    mission: 'Track Climate Stress',
    activities: ['Record weather over two weeks', 'Identify crop stress signs', 'List local climate risks', 'Suggest one adaptation', 'Upload observations'],
    badge: 'Climate Smart Youth',
    communityImpact: 'Farmers anticipate climate stress and adopt adaptive practices, building resilience to heat and erratic rainfall.'
  },
  7: {
    mission: 'Protect Pollinators',
    activities: ['Identify pollinators', 'Create a flowering corner', 'Document pesticide risks', 'Map biodiversity around school', 'Run a pollinator awareness activity'],
    badge: 'Nature Champion',
    communityImpact: 'Pollinator gardens and reduced pesticide use restore beneficial insects that support local crop yields.'
  },
  8: {
    mission: 'Village Sustainability Survey',
    activities: ['Design a simple survey', 'Interview farmers and households', 'Collect local farming data', 'Analyse the findings', 'Prepare a village report'],
    badge: 'Village Survey Leader',
    communityImpact: 'Students map village sustainability and share findings, helping the panchayat plan local action.'
  },
  9: {
    mission: 'Run a Demo Plot',
    activities: ['Set up a demo plot', 'Document field changes', 'Compare practices visually', 'Track yield and growth', 'Collect farmer feedback'],
    badge: 'Innovation Leader',
    communityImpact: 'Demonstration plots give farmers visible proof of safer, more productive practices.'
  },
  10: {
    mission: 'Lead a Soil Smart Club',
    activities: ['Form a soil club', 'Teach a peer session', 'Share a message with farmers', 'Coordinate a small event', 'Document behaviour change'],
    badge: 'Green Skills Leader',
    communityImpact: 'Student leaders drive behaviour change, spreading safe and sustainable practices across the community.'
  },
  11: {
    mission: 'Report Activity Digitally',
    activities: ['Upload evidence via the app', 'Complete a mobile survey form', 'Read a progress dashboard', 'Map a farm or soil point', 'Track badges earned'],
    badge: 'Digital Reporter',
    communityImpact: 'Digital reporting makes village progress visible and verifiable on shared dashboards.'
  },
  12: {
    mission: 'Map Local Partners',
    activities: ['List local institutions', 'Contact a KVK or NGO', 'Coordinate with the panchayat', 'Plan a joint activity', 'Mobilise local resources'],
    badge: 'Convergence Leader',
    communityImpact: 'Schools connect with KVKs, NGOs and panchayats to scale up village sustainability work.'
  }
}

export const missions = [
  {
    title: 'Know Your Soil',
    badge: 'Soil Explorer',
    color: '#2D6A4F',
    activities: [
      'Collect soil sample',
      'Observe colour and texture',
      'Upload photo',
      'Interview one farmer',
      'Complete soil quiz'
    ]
  },
  {
    title: 'Reduce Chemical Overuse',
    badge: 'Safe Farming Champion',
    color: '#E76F51',
    activities: [
      'Interview farmers on fertilizer and pesticide use',
      'Identify common overuse patterns',
      'Create awareness poster',
      'Attend safe-input session',
      'Upload report'
    ]
  },
  {
    title: 'Build Compost',
    badge: 'Compost Champion',
    color: '#2A9D8F',
    activities: [
      'Create compost pit/bin',
      'Upload weekly photos',
      'Track waste added',
      'Observe compost maturity',
      'Share composting method with households'
    ]
  },
  {
    title: 'Protect Pollinators',
    badge: 'Nature Champion',
    color: '#6A4C93',
    activities: [
      'Identify pollinators',
      'Create flowering corner',
      'Document pesticide risks',
      'Map biodiversity around school',
      'Conduct pollinator awareness activity'
    ]
  },
  {
    title: 'Save Water on Farms',
    badge: 'Water Smart Leader',
    color: '#3DA5D9',
    activities: [
      'Observe irrigation practice',
      'Identify water wastage',
      'Document mulching/drip/sprinkler examples',
      'Prepare water-saving message',
      'Upload village water-use observations'
    ]
  }
]

export const studentBadges = [
  'Soil Explorer',
  'Safe Farming Champion',
  'Compost Champion',
  'Water Smart Leader',
  'Nature Champion',
  'Climate Smart Youth',
  'Village Survey Leader',
  'Digital Reporter',
  'Green Skills Leader'
]

export const schoolRecognition = [
  'Soil Smart School',
  'Safe Farming Awareness School',
  'Composting Champion School',
  'Water Smart School',
  'Biodiversity Friendly School',
  'Sustainable Village Partner School'
]

export const villageRecognition = [
  'Soil Smart Village',
  'Safe Farming Village',
  'Water Smart Village',
  'Biodiversity Friendly Village',
  'Sustainable Farming Village'
]

export const impactStats = [
  { value: '2,400+', label: 'Schools enrolled', color: '#2D6A4F' },
  { value: '48,000+', label: 'Student soil-smart members', color: '#3DA5D9' },
  { value: '1,200+', label: 'Compost units created', color: '#2A9D8F' },
  { value: '320+', label: 'Sustainable villages', color: '#E63946' },
  { value: '15,000+', label: 'Farmer interactions', color: '#E76F51' },
  { value: '60,000+', label: 'Digital activity uploads', color: '#A0522D' }
]
