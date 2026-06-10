import { motion } from 'motion/react';
import { HERO, PROPERTIES, TESTIMONIALS, COMPANY } from '../constants/constant';
import SectionHeading from '../components/SectionHeading';
import PropertyCard from '../components/PropertyCard';
import StatisticCard from '../components/StatisticCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import { ArrowUpRight, ShieldCheck, Gem, UserCheck, Eye, Compass, Hourglass } from 'lucide-react';

interface HomeViewProps {
  id?: string;
  onSelectProperty: (id: string) => void;
  onNavigate: (pageId: string) => void;
}

export default function HomeView({ id, onSelectProperty, onNavigate }: HomeViewProps) {
  // Filter only featured properties
  const featuredProperties = PROPERTIES.filter(p => p.featured);

  // Group properties into categories with image backdrops
  const categories = [
    { name: "Villa", label: "Villas Portfolio", count: PROPERTIES.filter(p => p.type === 'Villa').length, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" },
    { name: "Penthouse", label: "Penthouses", count: PROPERTIES.filter(p => p.type === 'Penthouse').length, image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80" },
    { name: "Mansion", label: "Prime Mansions", count: PROPERTIES.filter(p => p.type === 'Mansion').length, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" },
    { name: "Estate", label: "Grand Estates", count: PROPERTIES.filter(p => p.type === 'Estate').length, image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <div id={id} className="pt-0">
      {/* 1. IMMERSIVE HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black">
        {/* Parallax Image Backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/55 to-luxury-black/30 z-10" />
          <motion.img
            src={HERO.image}
            alt="Luxury Architecture Hero backdrop"
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 0.65 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="w-full h-full object-cover select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Hero content elements */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-20 text-center flex flex-col justify-center items-center mt-20">
          {/* Top Micro Line Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold font-bold mb-6 block"
          >
            THE TRUSTED PRIVATE BROKERAGE
          </motion.span>

          {/* Sizable Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-wide leading-[1.1] max-w-4xl mb-8"
          >
            {HERO.title}
          </motion.h1>

          {/* Supporting Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 font-sans font-light text-sm sm:text-lg max-w-2xl leading-relaxed mb-12 tracking-wide"
          >
            {HERO.subtitle}
          </motion.p>

          {/* Luxury dual navigation triggers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto"
          >
            {/* Primary Action Button */}
            <button
              onClick={() => onNavigate("properties")}
              className="w-full sm:w-auto px-10 py-4.5 bg-gold hover:bg-gold-hover text-luxury-black font-semibold text-xs uppercase tracking-[0.25em] rounded-full transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-2xl shadow-gold/15"
            >
              {HERO.ctaPrimary} <ArrowUpRight size={16} />
            </button>

            {/* Secondary Action button */}
            <button
              onClick={() => onNavigate("contact")}
              className="w-full sm:w-auto px-10 py-4.5 border border-white/20 hover:border-gold/50 bg-white/5 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-[0.25em] rounded-full transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              {HERO.ctaSecondary}
            </button>
          </motion.div>
        </div>

        {/* Bottom soft gradient blending overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-luxury-black to-transparent pointer-events-none" />
      </section>

      {/* 2. FEATURED PROPERTIES ROW */}
      <section className="bg-luxury-black py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          {/* Typographic Title Header */}
          <SectionHeading
            subtitle="EXCEPTIONAL HOLDINGS"
            title="Sought-After Masterpieces"
            description="Explore our elite selections of private, luxury residences optimized for legacy curation and ultimate architectural longevity."
          />

          {/* Property Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {featuredProperties.map((prop) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                onSelect={onSelectProperty}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate("properties")}
              className="px-8 py-4 border border-white/10 hover:border-gold/30 rounded-full text-white hover:text-gold text-xs uppercase tracking-[0.25em] font-semibold hover:bg-white/5 transition-all cursor-pointer"
            >
              View Full Collection ({PROPERTIES.length} Estates)
            </motion.button>
          </div>
        </div>
      </section>

      {/* 3. ABOUT BRIEF & BENTO VALUE GRID */}
      <section className="bg-luxury-black py-24 sm:py-32 border-t border-white/[0.03] relative overflow-hidden">
        {/* Abstract blur background glow */}
        <div className="absolute top-1/2 left-0 w-[40%] aspect-square rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28">
            {/* Visual Brand Image Frame */}
            <div className="lg:col-span-5 relative group order-last lg:order-first">
              <div className="absolute inset-0 border border-gold/20 translate-x-5 translate-y-5 rounded-3xl -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-700" />
              <div className="rounded-3xl overflow-hidden aspect-[4/5] relative border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
                  alt="Fine Art Foyer entrance representing high-end aesthetics"
                  className="w-full h-full object-cover scale-103 group-hover:scale-100 transition-all duration-[1.5s]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-left">
                  <p className="font-serif italic text-gold text-lg mb-1">"Discretion is our signature."</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-450 font-medium">Elena Sterling, Managing Broker</p>
                </div>
              </div>
            </div>

            {/* Explanatory Brand brief */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">
                THE BROKERAGE CHARTER
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-wide leading-tight">
                Curating Refined Legacies Since 2004
              </h2>
              <div className="w-16 h-[2px] bg-gold/40" />
              <p className="text-gray-400 font-sans font-light leading-relaxed text-sm sm:text-base">
                Aurum Estates stands at the direct intersection of historical architectural preservation, ultra-modern structural physics, and sovereign discretionary transactions. We facilitate elite property handoffs with a profound devotion to design analysis, ensuring every asset chosen matches a caliber of architectural permanence.
              </p>
              <p className="text-gray-400 font-sans font-light leading-relaxed text-sm sm:text-base">
                Discourse with our partners is wrapped in zero-telemetry protocols. Whether acquiring a penthouse duplex overlooking Central Park Manhattan or a deep-water yacht domain in Miami, your timeline remains fully confidential.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate("about")}
                  className="px-8 py-3.5 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 border border-white/10 hover:border-gold/50 rounded-full text-white text-xs uppercase tracking-widest transition-all cursor-pointer"
                >
                  Our Philosophy & Story
                </button>
              </div>
            </div>
          </div>

          {/* Why Choose Us - Bento layout of features */}
          <div className="space-y-12 mb-30">
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Bespoke Intermediation</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide mt-2">Our Operating Safeguards</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Absolute Discretion */}
              <div className="glass-panel border border-white/5 p-8 sm:p-10 rounded-3xl text-left space-y-6 hover:border-gold/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center text-gold">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="font-serif text-xl text-white font-light tracking-wide">Confidential Protocol</h4>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                  We leverage customized non-disclosure charters and highly safe transaction frameworks, protecting client private trust records completely.
                </p>
              </div>

              {/* Card 2: 0.1% Curation */}
              <div className="glass-panel border border-white/5 p-8 sm:p-10 rounded-3xl text-left space-y-6 hover:border-gold/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center text-gold">
                  <Gem size={20} />
                </div>
                <h4 className="font-serif text-xl text-white font-light tracking-wide">Architectural Curation</h4>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                  Every estate is exhaustively audited by structural professionals. We select less than half a percent of luxury listings reviewed.
                </p>
              </div>

              {/* Card 3: Elite Concierge Advisory */}
              <div className="glass-panel border border-white/5 p-8 sm:p-10 rounded-3xl text-left space-y-6 hover:border-gold/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center text-gold">
                  <UserCheck size={20} />
                </div>
                <h4 className="font-serif text-xl text-white font-light tracking-wide">Elite Private Desk</h4>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                  Unblock access to bespoke renovations, tax-efficient trusts, private jet transfers, and secure property management teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS COUNTERS SECTION */}
      <section className="bg-luxury-charcoal border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatisticCard
              value={19}
              suffix="B+"
              prefix="$"
              label="TRANSACTED VOLUME"
            />
            <StatisticCard
              value={150}
              suffix="+"
              label="ICONIC RETREATS SOLD"
            />
            <StatisticCard
              value={99}
              suffix="%"
              label="CLIENT DISCRETION RATING"
            />
            <StatisticCard
              value={22}
              suffix=""
              label="GLOBAL OFFICE JUNCTURES"
            />
          </div>
        </div>
      </section>

      {/* 5. PROPERTY CATEGORIES CAROUSEL/GRID */}
      <section className="bg-luxury-black py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
          <SectionHeading
            subtitle="GLOBAL COLLECTIONS"
            title="Architectural Sectors"
            description="Our structural categories represent targeted asset formats, matched to physical lifestyle priorities."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                onClick={() => onNavigate("properties")}
                className="rounded-2xl overflow-hidden aspect-[4/5] relative border border-white/5 group cursor-pointer"
              >
                {/* Image background layer */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent z-10" />
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-106 select-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Text overlay layer info */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between text-left">
                  <span className="text-[9px] uppercase tracking-[0.25em] bg-gold text-luxury-black py-1 px-3 rounded-full font-bold self-start shadow-md">
                    {cat.count} listings
                  </span>

                  <div>
                    <h4 className="font-serif text-2xl text-white font-light mb-1.5 tracking-wide group-hover:text-gold transition-colors duration-300">
                      {cat.name}s
                    </h4>
                    <p className="text-[10px] text-gray-400 tracking-widest uppercase font-medium flex items-center gap-1">
                      See Listings <ArrowUpRight size={10} className="text-gold" />
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTIONS */}
      <section className="bg-luxury-black py-24 sm:py-32 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <SectionHeading
            subtitle="CLIENT ELEVATIONS"
            title="Sovereign Client Testimony"
            description="Our buyers and sellers represent institutional leaders, design critics, and legacy families. Read their thoughts anonymously configured."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test) => (
              <TestimonialCard
                key={test.id}
                testimonial={test}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECURE CONVERSION BANNER */}
      <CTASection
        onInquire={() => onNavigate("contact")}
      />
    </div>
  );
}
