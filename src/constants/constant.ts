import { Company, Socials, HeroConfig, ContactConfig, Property, Agent, Testimonial } from '../types';

export const COMPANY: Company = {
  name: "LOGO",
  tagline: "Architectural Masterpieces. Unrivaled Legacies.",
  phone: "+1 (310) 555-0199",
  whatsapp: "+13105550199",
  email: "conciege@aurumestates.com",
  address: "9440 Santa Monica Blvd, Beverly Hills, CA 90210",
  logo: "AURUM",
  favicon: "🏆",
  primaryColor: "#0D0D0D", // Deep Black
  secondaryColor: "#1C1C1C", // Charcoal Gray
  accentColor: "#C5A880" // Premium Luxury Muted Gold
};

export const SOCIALS: Socials = {
  facebook: "https://facebook.com/aurumestates",
  instagram: "https://instagram.com/aurumestates",
  twitter: "https://twitter.com/aurumestates",
  linkedin: "https://linkedin.com/company/aurumestates",
  youtube: "https://youtube.com/aurumestates",
  tiktok: "https://tiktok.com/@aurumestates"
};

export const HERO: HeroConfig = {
  title: "The Pinnacle of High-End ",
  subtitle: "Curating the world’s most iconic estates, ultra-penthouses, and architectural triumphs for discerning individuals of refined taste.",
  ctaPrimary: "Explore Portfolios",
  ctaSecondary: "Inquire Privately",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
};

export const CONTACT: ContactConfig = {
  phone: "+1 (310) 555-0199",
  email: "concierge@aurumestates.com",
  address: "9440 Santa Monica Blvd, Beverly Hills, CA 90210",
  // High-end custom dark styled google map embed centering Beverly Hills Santa Monica Blvd
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.453282436402!2d-118.40356522340443!3d34.06941571680196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc0fcfcb3503%3A0xe67db50d03227aeb!2s9440%20Santa%20Monica%20Blvd%2C%20Beverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
};

export const AGENTS: Agent[] = [
  {
    id: "agent-1",
    name: "Elena Sterling",
    role: "Managing Director & Global Broker",
    phone: "+1 (310) 555-0101",
    email: "elena@aurumestates.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "With over two decades of secure portfolio management for high-net-worth clients, Elena oversees international listings and high-end acquisitions across North America and Europe.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  },
  {
    id: "agent-2",
    name: "Julian Montgomery",
    role: "Senior Partner, Coastal Estates",
    phone: "+1 (310) 555-0102",
    email: "julian@aurumestates.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    bio: "An architectural connoisseur specialized in oceanfront luxury properties, Malibu estates, and private Mediterranean island developments.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram"
  },
  {
    id: "agent-3",
    name: "Victoria Vanderbilt",
    role: "Global Architectural Advisory",
    phone: "+1 (310) 555-0103",
    email: "victoria@aurumestates.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "Master of Fine Arts with deep connections in custom interiors, Victoria helps buyers envision potential remodels and guides elite clients on art-centric home curation.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    author: "Alistair Vance",
    role: "CEO & Founder",
    company: "Vance Credit & Capital",
    rating: 5,
    quote: "Aurum Estates redefined our acquisition process. Their discretion, meticulous standard of design evaluation, and flawless white-glove closing process were truly remarkable.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "t-2",
    author: "Charlotte DuPont",
    role: "Trustee & Art Collector",
    company: "The DuPont Foundation",
    rating: 5,
    quote: "Finding a space that could house our extensive contemporary gallery while preserving coastal light was a challenge. Elena did not just find a home, she found a masterpiece.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "t-3",
    author: "Kenji Takahashi",
    role: "Managing Director",
    company: "Future Horizon Ventures",
    rating: 5,
    quote: "Their focus on high-fidelity visual representations of properties, floorplan integrity, and transparent broker advisory is a league above the traditional luxury brokerage services.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];

export const PROPERTIES: Property[] = [
  {
    id: "prop-1",
    title: "The Obsidian Villa",
    tagline: "Ultra-Modern Architectural Noir",
    price: 32500000,
    beds: 6,
    baths: 8,
    sqft: 14200,
    address: "1098 Meadowbrook Lane",
    city: "Beverly Hills",
    type: "Mansion",
    description: "A breathtaking architectural marvel sculpted from rich structural steel, obsidian basalt tiles, and colossal sheets of non-reflective glass. Perched on a double-lot promontory, it has complete panoramic vistas of the downtown skyline to the Pacific. Fully tailored with a professional automated climate dome, subterranean vehicle gallery, wellness center with dry sauna, cryotank, and a massive 90-foot floating pool with underwater speakers.",
    features: [
      "Subterranean 8-Car Vehicle Gallery",
      "90ft Floating Infinity-Edge Lap Pool",
      "Obsidian Basalt Custom Finishes",
      "State-of-the-art Wellness Spa & Cryo",
      "Professional Automated Climate Dome",
      "24/7 Monitored Multi-Sector Security",
      "Bespoke Italian Kitchen by Boffi",
      "Dual Primary Presidential Suites"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    yearBuilt: 2024,
    status: "For Sale",
    featured: true,
    agent: {
      name: "Elena Sterling",
      role: "Managing Director & Global Broker",
      phone: "+1 (310) 555-0101",
      email: "elena@aurumestates.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "prop-2",
    title: "The Celestia Penthouse",
    tagline: "Sublime Heights & Skyscraping Luxury",
    price: 48000000,
    beds: 4,
    baths: 5,
    sqft: 8600,
    address: "732 Fifth Avenue, Duplex 81",
    city: "New York",
    type: "Penthouse",
    description: "Suspended in the skies above Fifth Avenue, this towering duplex penthouse offers complete 360-degree dramatic views of Central Park, the Hudson River, and the iconic Manhattan skyline. Curated with soaring 20-foot ceilings, book-matched Calacatta Gold marble slabs, hand-laid American walnut floors, and architectural perimeter glass that floods the entire space with sublime northern light. A private elevator foyer unlocks this peerless residence.",
    features: [
      "360-Degree Manhattan Skyline Views",
      "Calacatta Gold Marble Fireplaces",
      "Private 1500sqft Sky Terrace",
      "Double-Height Glass Foyer (20ft)",
      "High-Fidelity Automated Savant Hub",
      "White-Glove 24-Hour Porter Service",
      "Professional Chef's Prep Scullery",
      "Master Suite with Dual Onyx Baths"
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    yearBuilt: 2023,
    status: "For Sale",
    featured: true,
    agent: {
      name: "Victoria Vanderbilt",
      role: "Global Architectural Advisory",
      phone: "+1 (310) 555-0103",
      email: "victoria@aurumestates.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "prop-3",
    title: "Villa Solis",
    tagline: "Serene Waterfront Haven",
    price: 19800000,
    beds: 5,
    baths: 6,
    sqft: 11500,
    address: "42 Golden Beach Drive",
    city: "Miami",
    type: "Villa",
    description: "An elegant masterwork blending sleek mid-century clean geometries with inviting tropical warmth. Villa Solis features a deep deep-water dock accommodating yachts up to 120 feet, direct private beach access, a state-of-the-art teak-wrapped wellness pavilion, and outdoor kitchen. Crafted with imported Portuguese limestone floors, white-oak details, and fully motorized sliding glass walls to merge indoor living with the warm coastal breeze.",
    features: [
      "Deep-Water Private Yacht Slip (120ft)",
      "Exclusive Gated Golden Beach Entry",
      "Imported Portuguese Limestone Floors",
      "Oceanfront Pool & Lounging Cabanas",
      "Professional Outdoor Teak Pavilion",
      "Substandard Noise-Damped Acoustic Den",
      "Master Wing with Panoramic Ocean Balcony",
      "Zero-Edge Saltwater Heated Pool"
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    yearBuilt: 2021,
    status: "Under Offer",
    featured: true,
    agent: {
      name: "Julian Montgomery",
      role: "Senior Partner, Coastal Estates",
      phone: "+1 (310) 555-0102",
      email: "julian@aurumestates.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "prop-4",
    title: "Aurelia Alpine Estate",
    tagline: "Architectural Grandeur in the Peaks",
    price: 26400000,
    beds: 7,
    baths: 9,
    sqft: 16800,
    address: "244 Apex Ridge Drive",
    city: "Aspen",
    type: "Estate",
    description: "A majestic modern mountain fortress of hand-cut local granite, massive cedar structural beams, and hyperthermal triple-paned structural glass. Perched dramatically above Aspen, the estate provides ski-in, ski-out access to direct slopes, an expansive 2000-bottle stone-carved wine cellar, and high-performance automated snow-melt outdoor driveways. Rest in deep warmth by floating bronze hearths and massive glass lookouts.",
    features: [
      "Direct Ski-In / Ski-Out Access",
      "2,000-Bottle Stone-Carved Wine Vault",
      "Triple-Paned Thermal Insulated Glass",
      "Outdoor Heated Spa & Rockfire Lounge",
      "Floating Bronze Panoramic Hearth",
      "Indoor Olympic-Scale Swim Gym",
      "Professional Cinema & Billiards Parlor",
      "Automatic High-Speed Snow-Melt Driveway"
    ],
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80"
    ],
    yearBuilt: 2019,
    status: "For Sale",
    featured: false,
    agent: {
      name: "Elena Sterling",
      role: "Managing Director & Global Broker",
      phone: "+1 (310) 555-0101",
      email: "elena@aurumestates.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "prop-5",
    title: "The Seraphim Duplex",
    tagline: "Edwardian Legacy Redefined",
    price: 15500000,
    beds: 3,
    baths: 4,
    sqft: 5400,
    address: "18 Belgrave Square, Floor 1-2",
    city: "London",
    type: "Duplex",
    description: "A stunning conversion of a classic Belgrave Square architectural townhouse. The Seraphim Duplex seamlessly pairs protected historical plasterwork, soaring sash timber windows, and classical scale with modern luxury. Hand-restored intricate ceiling medallions, solid herringbone chevron flooring, and custom-designed bronze kitchens by Smallbone represent a flawless modern luxury upgrade to a historic monument.",
    features: [
      "Sought-after Square Private Key Access",
      "Hand-Restored Intricate Plasterwork",
      "Bronze Chef Kitchen by Smallbone",
      "Soaring Parlour Ceilings (14.5ft)",
      "Premium Solid Chevron French Oak Floors",
      "Smart-Climate In-Wall Air Conditioning",
      "Dual Dedicated Secure Portico Entryways",
      "Fully Soundproofed Concrete Slab Layering"
    ],
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    yearBuilt: 2022,
    status: "For Sale",
    featured: false,
    agent: {
      name: "Julian Montgomery",
      role: "Senior Partner, Coastal Estates",
      phone: "+1 (310) 555-0102",
      email: "julian@aurumestates.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "prop-6",
    title: "The Luminous Horizon",
    tagline: "Infinity Oceanfront Zenith",
    price: 29900000,
    beds: 5,
    baths: 7,
    sqft: 11200,
    address: "22840 Pacific Coast Highway",
    city: "Malibu",
    type: "Villa",
    description: "Grovelling on Malibu's famous carbon beach stretch, this oceanfront minimalist masterwork designed by a prominent Japanese architect sits suspended on deep architectural pylons. It features massive floor-to-ceiling retractable structural glass panes, an infinity-edge ozone saltwater pool that blends directly with the rising tide, a master suite with floating outdoor glass fire pits, and premium sustainable geothermal cooling.",
    features: [
      "Carbon Beach Deep Pylon Structural Support",
      "Retractable Multi-Slide Dual Glazed Panes",
      "Zero-Edge Ozone Ocean Swimming Pool",
      "Ocean-Facing Glass Thermal Fire Pits",
      "Premium Low-E Geothermal Climate Energy",
      "Professional Soundproof High-Fidelity Cinema",
      "Polished Matte Microcement Floor Sleeks",
      "Gourmet Pantry with Commercial Sub-Zero"
    ],
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ],
    yearBuilt: 2023,
    status: "Off-Market",
    featured: true,
    agent: {
      name: "Julian Montgomery",
      role: "Senior Partner, Coastal Estates",
      phone: "+1 (310) 555-0102",
      email: "julian@aurumestates.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "prop-7",
    title: "Monarch Crest Manor",
    tagline: "Colossal Neoclassical Estate",
    price: 64000000,
    beds: 9,
    baths: 14,
    sqft: 24700,
    address: "624 Bel Air Road",
    city: "Bel Air",
    type: "Mansion",
    description: "A crowning luxury asset of monumental scale scaling the upper ridges of Bel Air. Inspired by neoclassical symmetries yet completely customized for modern elite lifestyles. Featuring an 18-seat ultimate luxury private cinema, authentic Turkish Hammam, glass tennis dome, full-size squash court, and formal lush symmetry gardens framing an awe-inspiring 120-foot negative edge pool. Complete perimeter walls with custom armed secure access gateways.",
    features: [
      "Colossal 24,700sqft Living Horizon",
      "Turkish Hammam and Thermostatic Pools",
      "Private Air-Conditioned Glass Tennis Dome",
      "Formal Symmetry Gardens with Gold Fountains",
      "120ft Negative Edge Horizon Swimming Pool",
      "Highly Fortified Armed Security Boundary Gates",
      "Panoramic 18-Seat Immersive Laser Theater",
      "Primary Suite with Dual Wings and Custom Salon"
    ],
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    yearBuilt: 2022,
    status: "For Sale",
    featured: false,
    agent: {
      name: "Elena Sterling",
      role: "Managing Director & Global Broker",
      phone: "+1 (310) 555-0101",
      email: "elena@aurumestates.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    }
  }
];

export const IMAGES = {
  hero: HERO.image,
  about: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  properties: PROPERTIES,
  agents: AGENTS,
  testimonials: TESTIMONIALS
};
