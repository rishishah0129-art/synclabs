/* Application Data & Datasets - Ultra-Modern Indian Interior & Digital Products */

const INTERIOR_DATA = {
  bhkPresets: [
    { id: '1bhk', label: '1 BHK Flat', baseSqFt: 650, baseCost: 380000 },
    { id: '2bhk', label: '2 BHK Apartment', baseSqFt: 1050, baseCost: 650000 },
    { id: '3bhk', label: '3 BHK Premium', baseSqFt: 1550, baseCost: 980000 },
    { id: '4bhk', label: '4 BHK / Penthouse', baseSqFt: 2400, baseCost: 1550000 }
  ],
  finishTiers: [
    { id: 'standard', label: 'Modern Standard', multiplier: 1.0, desc: 'Commercial Plywood + Matte Laminates' },
    { id: 'premium', label: 'Ultra-Modern Premium', multiplier: 1.35, desc: 'BWP Marine Ply + Handleless High Gloss Acrylic' },
    { id: 'luxury', label: 'Signature Modern Luxury', multiplier: 1.75, desc: 'Fluted Teak Panels + Concealed LED + Quartz Tops' }
  ],
  roomOptions: [
    { id: 'kitchen', label: 'Handleless Modular Kitchen (Quartz Island + Tandem Boxes)', cost: 180000, default: true },
    { id: 'masterBed', label: 'Master Bedroom Wardrobe & Fluted Wood Accent Wall', cost: 140000, default: true },
    { id: 'livingRoom', label: 'Minimalist Living Room Floating TV Console & Bar', cost: 95000, default: true },
    { id: 'falseCeiling', label: 'Architectural Cove False Ceiling & Recessed LED Lights', cost: 75000, default: false },
    { id: 'crockery', label: 'Glass Tinted Crockery Showcase & Minimal Mandir', cost: 65000, default: false },
    { id: 'balcony', label: 'Balcony Decking & Vertical Planters', cost: 45000, default: false }
  ],
  designers: [
    { id: 'd1', name: 'Aarav Sharma', role: 'Principal Architect', exp: '11+ Yrs Exp', projects: '140+ Modern Homes Delivered', rating: '4.95', img: 'assets/living_room.png' },
    { id: 'd2', name: 'Ananya Deshmukh', role: 'Senior Interior Stylist', exp: '8+ Yrs Exp', projects: '95+ Homes Delivered', rating: '4.92', img: 'assets/kitchen.png' },
    { id: 'd3', name: 'Vikramaditya Roy', role: 'Modular Space Specialist', exp: '14+ Yrs Exp', projects: '210+ Homes Delivered', rating: '4.98', img: 'assets/bedroom.png' }
  ],
  portfolio: [
    { id: 'p1', title: 'Ultra-Modern Minimalist Living Room', category: 'Living Room', area: '1450 SqFt (3 BHK)', img: 'assets/living_room.png', style: 'Ultra-Modern Teak' },
    { id: 'p2', title: 'Handleless Matte & Quartz Modular Kitchen', category: 'Kitchen', area: '1050 SqFt (2 BHK)', img: 'assets/kitchen.png', style: 'Modern Quartz' },
    { id: 'p3', title: 'Fluted Panel & Tinted Glass Master Suite', category: 'Bedroom', area: '1850 SqFt (3 BHK)', img: 'assets/bedroom.png', style: 'Contemporary Luxury' },
    { id: 'p4', title: 'Architectural LED & Floating Console Lounge', category: 'Dining', area: '2200 SqFt (Penthouse)', img: 'assets/living_room.png', style: 'Modern Loft' }
  ]
};

const DIGITAL_DATA = {
  projectTypes: [
    { id: 'webApp', label: 'SaaS / Web App', baseCost: 4500, time: '3-5 Weeks' },
    { id: 'mobileApp', label: 'Mobile App (iOS/Android)', baseCost: 5500, time: '4-6 Weeks' },
    { id: 'designSystem', label: 'Design System & UI Kit', baseCost: 3500, time: '2-3 Weeks' },
    { id: 'landing', label: 'High-Converting Website', baseCost: 2400, time: '1-2 Weeks' }
  ],
  scopes: [
    { id: 'mvp', label: 'MVP / Core Features', multiplier: 1.0, desc: 'Essential screens & component specs' },
    { id: 'full', label: 'Full Product Platform', multiplier: 1.6, desc: 'End-to-end design, design system & prototypes' },
    { id: 'enterprise', label: 'Enterprise & Multi-Platform', multiplier: 2.3, desc: 'Multi-role portals, micro-interactions & dev handoff' }
  ],
  marketplace: [
    { id: 'm1', title: 'Apex Analytics - SaaS UI Kit', category: 'SaaS & Dashboard', price: 79, format: 'Figma File + React Components', rating: 4.9, img: 'assets/saas_dashboard.png', desc: '140+ Responsive dark-mode dashboard cards, charts, and table components.' },
    { id: 'm2', title: 'Nova Crypto Mobile UI Kit', category: 'Mobile App', price: 69, format: 'Figma File + iOS Tokens', rating: 4.8, img: 'assets/mobile_ui.png', desc: 'Sleek wallet, trading screen & biometric security UI flows.' },
    { id: 'm3', title: 'Synclabs Design System Pro', category: 'Design Systems', price: 129, format: 'Figma + Tailwind CSS Tokens', rating: 5.0, img: 'assets/design_system.png', desc: 'Comprehensive tokenized UI kit with auto-layout v5.0 support.' },
    { id: 'm4', title: 'Lumina Webflow & Next Template', category: 'Websites', price: 59, format: 'Figma + Webflow / Next.js', rating: 4.9, img: 'assets/saas_dashboard.png', desc: 'Ultra-fast landing page template for tech startups.' }
  ],
  caseStudies: [
    { id: 'c1', client: 'FinPulse SaaS Platform', metric: '+280% Conversion', impact: 'Redesigned core onboarding flow and introduced modular dashboard UI.', img: 'assets/saas_dashboard.png' },
    { id: 'c2', client: 'Aether Mobile Crypto App', metric: '4.9 App Store Rating', impact: 'Built dark-mode aesthetic with frictionless 1-click token swaps.', img: 'assets/mobile_ui.png' },
    { id: 'c3', client: 'CloudScale Enterprise', metric: '60% Faster Dev Handoff', impact: 'Created unified design system across 4 cross-platform products.', img: 'assets/design_system.png' }
  ],
  techStack: [
    { name: 'Figma', category: 'UI/UX Design' },
    { name: 'Framer', category: 'Web & Animation' },
    { name: 'React', category: 'Frontend Dev' },
    { name: 'Next.js', category: 'Fullstack App' },
    { name: 'Spline 3D', category: 'Interactive 3D' },
    { name: 'Tailwind CSS', category: 'Styling Engine' }
  ]
};
