export interface Property {
  id: string;
  title: string;
  tagline: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  city: string;
  type: 'Villa' | 'Penthouse' | 'Mansion' | 'Estate' | 'Duplex';
  description: string;
  features: string[];
  images: string[];
  yearBuilt: number;
  status: 'For Sale' | 'Off-Market' | 'Under Offer';
  featured: boolean;
  agent: {
    name: string;
    role: string;
    phone: string;
    email: string;
    image: string;
  };
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  bio: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company?: string;
  rating: number;
  quote: string;
  image: string;
}

export interface Company {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  logo: string;
  favicon: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  youtube: string;
  tiktok: string;
}

export interface HeroConfig {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  image: string;
}

export interface ContactConfig {
  phone: string;
  email: string;
  address: string;
  mapEmbed: string;
}

export interface ImageConfig {
  hero: string;
  about: string;
  properties: Property[];
  agents: Agent[];
  testimonials: Testimonial[];
}
