import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROPERTIES } from '../constants/constant';
import { Property } from '../types';
import ContactForm from '../components/ContactForm';
import { ArrowLeft, Bed, Bath, Maximize, CalendarRange, Info, ShieldAlert, Phone, Mail, ArrowUpRight, CheckSquare, Layers3 } from 'lucide-react';

interface PropertyDetailsViewProps {
  id?: string;
  propertyId: string;
  onBack: () => void;
  onSelectProperty: (id: string) => void;
}

export default function PropertyDetailsView({
  id,
  propertyId,
  onBack,
  onSelectProperty
}: PropertyDetailsViewProps) {
  // Find current property loaded
  const property = useMemo(() => {
    return PROPERTIES.find(p => p.id === propertyId) || PROPERTIES[0];
  }, [propertyId]);

  // Gallery slider state variable
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Floor plan tab selector
  const [activeFloorPlan, setActiveFloorPlan] = useState<'ground' | 'upper' | 'sub'>('ground');

  // Reset image view index on property ID changes
  useEffect(() => {
    setActiveImageIdx(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [propertyId]);

  // Find related holdings (same category or city, except this property)
  const relatedHoldings = useMemo(() => {
    return PROPERTIES.filter(p => (p.type === property.type || p.city === property.city) && p.id !== property.id).slice(0, 3);
  }, [property]);

  // Format currency nicely
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(property.price);

  return (
    <div id={id} className="pt-32 pb-24 sm:pb-32 bg-luxury-black min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* BACK BUTTON ROW */}
        <div className="mb-10">
          <button
            onClick={onBack}
            className="group px-5 py-2.5 border border-white/5 hover:border-gold/30 bg-luxury-charcoal/40 hover:bg-gold/5 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-gold transition-all duration-300 flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Estates Portfolio
          </button>
        </div>

        {/* 1. ESTATE INTEGRITY INTRO SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs text-gold uppercase tracking-[0.25em] font-medium mb-3">
              <span>{property.city}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
              <span>{property.type}s Portfolio</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-wide leading-tight">
              {property.title}
            </h1>
            <p className="text-sm font-sans text-gray-450 text-gray-400 font-light tracking-wide mt-2">
              {property.address}, {property.city}
            </p>
          </div>

          <div className="lg:text-right flex flex-col items-start lg:items-end">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1.5 font-sans font-medium">
              Private Allocation Valuation
            </span>
            <span className="font-serif text-3xl sm:text-4xl text-gold font-semi-bold tracking-wide">
              {formattedPrice}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] bg-emerald-950/45 text-emerald-400 border border-emerald-900/40 px-3 py-1 rounded-full font-bold mt-2 font-sans">
              Secure {property.status}
            </span>
          </div>
        </div>

        {/* 2. PREMIUM MULTI-IMAGE GALLERY BLOCK */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          {/* Main Display container */}
          <div className="col-span-12 lg:col-span-10 rounded-3xl overflow-hidden aspect-[16/9] border border-white/5 bg-luxury-charcoal relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImageIdx}
                src={property.images[activeImageIdx]}
                alt={`${property.title} detailed architectural display`}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>

            {/* Direct Image Indicators */}
            <div className="absolute bottom-5 right-5 z-10 px-4 py-2 rounded-full bg-black/60 text-[10px] uppercase tracking-widest text-white backdrop-blur-md font-sans">
              Image {activeImageIdx + 1} of {property.images.length}
            </div>
          </div>

          {/* Quick selectors rail for Desktop views */}
          <div className="col-span-12 lg:col-span-2 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-none justify-start">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`flex-shrink-0 w-24 sm:w-28 lg:w-full aspect-[4/3] rounded-2xl overflow-hidden border transition-all duration-300 relative focus:outline-none cursor-pointer ${
                  activeImageIdx === idx
                    ? 'border-gold scale-103 shadow-lg'
                    : 'border-white/5 opacity-55 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt="Thumbnail"
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        </div>

        {/* 3. HARDWARE SPECIFICS & DESCRIPTION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start mb-20">
          
          <div className="lg:col-span-7 space-y-12">
            
            {/* Core parameters metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-luxury-charcoal/45 border border-white/5 rounded-3xl p-6 sm:p-8">
              <div className="text-left">
                <span className="flex items-center gap-1.5 text-gold mb-2.5">
                  <Bed size={16} />
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-gray-500 font-bold">Beds</span>
                </span>
                <p className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide">{property.beds} Bedrooms</p>
              </div>
              
              <div className="text-left border-l border-white/5 pl-4 sm:pl-6">
                <span className="flex items-center gap-1.5 text-gold mb-2.5">
                  <Bath size={16} />
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-gray-500 font-bold">Baths</span>
                </span>
                <p className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide">{property.baths} Bathrooms</p>
              </div>

              <div className="text-left border-l border-white/5 pl-4 sm:pl-6">
                <span className="flex items-center gap-1.5 text-gold mb-2.5">
                  <Maximize size={16} />
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-gray-500 font-bold">Size</span>
                </span>
                <p className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide">{property.sqft.toLocaleString()} <span className="text-xs sm:text-sm font-sans text-gray-400 font-light">Sqft</span></p>
              </div>

              <div className="text-left border-l border-white/5 pl-4 sm:pl-6">
                <span className="flex items-center gap-1.5 text-gold mb-2.5">
                  <CalendarRange size={16} />
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-gray-500 font-bold">Year</span>
                </span>
                <p className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide">Built {property.yearBuilt}</p>
              </div>
            </div>

            {/* In-depth writeup text block */}
            <div className="space-y-6 text-left">
              <h3 className="font-serif text-2xl text-white font-light tracking-wide">
                Architectural Summary
              </h3>
              <p className="text-gray-400 font-sans font-light leading-relaxed text-sm sm:text-base">
                {property.description}
              </p>
            </div>

            {/* Features list bullet points */}
            <div className="space-y-6 text-left pt-4">
              <h3 className="font-serif text-2xl text-white font-light tracking-wide">
                Bespoke Specifications & Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-luxury-charcoal/30 border border-white/5 rounded-2xl p-4">
                    <div className="w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                      <CheckSquare size={12} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs text-gray-300 font-light tracking-wide font-sans">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. HIGH-END INTERACTIVE BLUEPRINT FLOOR PLAN DISPLAY */}
            <div className="space-y-6 text-left pt-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h3 className="font-serif text-2xl text-white font-light tracking-wide flex items-center gap-2">
                  <Layers3 size={20} className="text-gold" />
                  Bespoke Structural Blueprints
                </h3>

                {/* Sub-level selectors */}
                <div className="flex gap-1 bg-luxury-charcoal/80 border border-white/5 p-1 rounded-full self-start sm:self-auto uppercase tracking-wider text-[10px] font-bold">
                  {[
                    { key: 'ground', label: 'Main Level' },
                    { key: 'upper', label: 'Upper Level' },
                    { key: 'sub', label: 'Basement Vault' }
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveFloorPlan(tab.key as any)}
                      className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                        activeFloorPlan === tab.key
                          ? 'bg-gold text-luxury-black font-extrabold'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* simulated Blueprint Schematic vector panel */}
              <div className="glass-panel border border-white/5 bg-luxury-black rounded-3xl p-8 aspect-[16/10] flex flex-col justify-between relative overflow-hidden group">
                {/* Thin technical alignment grid layer */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(197,168,128,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(197,168,128,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFloorPlan}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="z-10 relative flex-grow flex flex-col justify-between"
                  >
                    {/* Architectural parameters badges */}
                    <div className="flex justify-between items-start text-xs font-mono text-gold/80 uppercase">
                      <div>
                        <p className="font-sans font-light tracking-widest text-[9px] text-zinc-500">SCHEMATIC ID</p>
                        <p className="mt-0.5">AE-{property.id.toUpperCase()}-{activeFloorPlan.toUpperCase()}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-sans font-light tracking-widest text-[9px] text-zinc-500">SURFACE SPACE</p>
                        <p className="mt-0.5">
                          {activeFloorPlan === 'ground' ? (property.sqft * 0.45).toFixed(0) : activeFloorPlan === 'upper' ? (property.sqft * 0.35).toFixed(0) : (property.sqft * 0.20).toFixed(0)} SQFT
                        </p>
                      </div>
                    </div>

                    {/* Highly stylish vector shapes simulating blueprint layout blocks */}
                    <div className="my-6 border border-gold/25 bg-gold/5 flex-grow rounded-2xl flex items-center justify-center p-6 relative select-none">
                      
                      {activeFloorPlan === 'ground' && (
                        <div className="w-full h-full relative border border-dashed border-gold/30 rounded flex flex-wrap content-center justify-center gap-4 text-[10px] font-mono text-zinc-400 uppercase">
                          <div className="p-4 border border-gold/20 bg-luxury-charcoal/60 rounded text-center w-1/3">
                            <p className="text-white text-xs">{property.beds - 2 > 0 ? property.beds - 2 : 1} Master Suite</p>
                            <p className="text-[9px] text-gold mt-1">22' × 18'</p>
                          </div>
                          <div className="p-4 border border-gold/20 bg-luxury-charcoal/60 rounded text-center w-5/12">
                            <p className="text-white text-xs">Grand Salon & Rotunda</p>
                            <p className="text-[9px] text-gold mt-1">38' × 24'</p>
                          </div>
                          <div className="p-4 border border-gold/20 bg-luxury-charcoal/60 rounded text-center w-1/2">
                            <p className="text-white text-xs">Pristine Italian Boffi Kitchen</p>
                            <p className="text-[9px] text-gold mt-1">20' × 16'</p>
                          </div>
                          <div className="p-4 border border-gold/20 bg-luxury-charcoal/60 rounded text-center w-1/3">
                            <p className="text-white text-xs">Foyer Entrance</p>
                            <p className="text-[9px] text-gold mt-1">14' × 12'</p>
                          </div>
                        </div>
                      )}

                      {activeFloorPlan === 'upper' && (
                        <div className="w-full h-full relative border border-dashed border-gold/30 rounded flex flex-wrap content-center justify-center gap-4 text-[10px] font-mono text-zinc-400 uppercase">
                          <div className="p-4 border border-gold/20 bg-luxury-charcoal/60 rounded text-center w-10/12">
                            <p className="text-white text-xs">Presidential Crown Wing & Onyx Spa</p>
                            <p className="text-[9px] text-gold mt-1">45' × 22'</p>
                          </div>
                          <div className="p-4 border border-gold/20 bg-luxury-charcoal/60 rounded text-center w-5/12">
                            <p className="text-white text-xs">Secondary Bedroom</p>
                            <p className="text-[9px] text-gold mt-1">18' × 16'</p>
                          </div>
                          <div className="p-4 border border-gold/20 bg-luxury-charcoal/60 rounded text-center w-5/12">
                            <p className="text-white text-xs">Skyline Library Loft</p>
                            <p className="text-[9px] text-gold mt-1">20' × 15'</p>
                          </div>
                        </div>
                      )}

                      {activeFloorPlan === 'sub' && (
                        <div className="w-full h-full relative border border-dashed border-gold/30 rounded flex flex-wrap content-center justify-center gap-4 text-[10px] font-mono text-zinc-400 uppercase">
                          <div className="p-4 border border-gold/20 bg-luxury-charcoal/60 rounded text-center w-7/12">
                            <p className="text-white text-xs">Subterranean Vehicle Gallery</p>
                            <p className="text-[9px] text-gold mt-1">90' × 36'</p>
                          </div>
                          <div className="p-4 border border-gold/20 bg-luxury-charcoal/60 rounded text-center w-4/12">
                            <p className="text-white text-xs">Cinema Laser Sanctuary</p>
                            <p className="text-[9px] text-gold mt-1">26' × 22'</p>
                          </div>
                          <div className="p-4 border border-gold/20 bg-luxury-charcoal/60 rounded text-center w-1/3">
                            <p className="text-white text-xs">Bespoke Vault / Cellar</p>
                            <p className="text-[9px] text-gold mt-1">18' × 14'</p>
                          </div>
                          <div className="p-4 border border-gold/20 bg-luxury-charcoal/60 rounded text-center w-7/12">
                            <p className="text-white text-xs">Mechanical Dome Hub</p>
                            <p className="text-[9px] text-gold mt-1">16' × 12'</p>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Bottom blueprint footer guidelines */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 select-none">
                      <p>NORTH CALIBRATION 0.42" W</p>
                      <p className="hidden sm:block">AURUM ESTATES DESIGN TEAM PROTOCOLS</p>
                      <p>REV. 2026.06</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Structured Google Map simulated Location Block */}
            <div className="space-y-6 text-left pt-6">
              <h3 className="font-serif text-2xl text-white font-light tracking-wide">
                Location & Coordinates
              </h3>
              <div className="rounded-3xl overflow-hidden aspect-[16/8] border border-white/5 relative bg-luxury-charcoal">
                <iframe
                  title={`${property.title} high-contrast styled google location map`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1652.2!2d-118.40!3d34.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA0JzI0LjAiTiAxMTjCsDI0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1700"
                  className="w-full h-full border-0 grayscale invert opacity-75 contrast-125"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay exact technical parameters coordinates floating badge */}
                <span className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2 bg-luxury-black/90 text-gold text-[10px] font-mono border border-gold/20 rounded-xl z-20 backdrop-blur-md">
                  LON: 118.403° W // LAT: 34.069° N
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: AGENT CARD & SECURE CONTACT FORMS */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-8">
            
            {/* Matching Property Dedicated Agent Profile details Card */}
            <div className="glass-panel border border-white/5 bg-luxury-charcoal/50 rounded-3xl p-6 sm:p-8 text-left space-y-6 relative overflow-hidden group hover:border-gold/20 transition-colors duration-500">
              
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-gold/20 bg-luxury-black">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold font-sans">DEDICATED PORTFOLIO BROKER</span>
                  <h4 className="font-serif text-lg text-white font-light tracking-wide mt-0.5">{property.agent.name}</h4>
                  <p className="text-xs text-gray-400 font-light mt-0.5">{property.agent.role}</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/5" />

              <div className="grid grid-cols-2 gap-4 text-xs">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="px-4 py-3 bg-white/[0.02] hover:bg-gold/5 border border-white/5 rounded-xl text-center text-gray-300 hover:text-gold transition-all duration-300 flex items-center justify-center gap-1.5 font-sans"
                >
                  <Phone size={12} /> Direct Line
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="px-4 py-3 bg-white/[0.02] hover:bg-gold/5 border border-white/5 rounded-xl text-center text-gray-300 hover:text-gold transition-all duration-300 flex items-center justify-center gap-1.5 font-sans"
                >
                  <Mail size={12} /> Secure Mail
                </a>
              </div>

              {/* Secure Notice disclosure text */}
              <div className="flex gap-2 text-[10px] text-zinc-500 font-light font-sans bg-black/45 p-3.5 rounded-xl border border-zinc-900 leading-relaxed">
                <ShieldAlert size={16} className="text-zinc-500 flex-shrink-0" />
                <span>Interactions on this hotline are encrypted utilizing zero-telemetry protocols to guarantee client private records.</span>
              </div>

            </div>

            {/* Direct Inquiry Form (preloaded with direct property ID!) */}
            <ContactForm
              prefilledPropertyId={property.id}
              title={`Inquire About ${property.title}`}
            />

          </div>
        </div>

        {/* 5. RELATED HOLDINGS PORTFOLIOS recommendations slider/grid */}
        {relatedHoldings.length > 0 && (
          <div className="border-t border-white/5 pt-16 mt-20 space-y-10 text-left">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold block mb-2">PORTFOLIO OPTIONS</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide">Related Architectural Holdings</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedHoldings.map((related) => (
                <div
                  key={related.id}
                  onClick={() => onSelectProperty(related.id)}
                  className="glass-panel border border-white/5 rounded-3xl overflow-hidden group cursor-pointer hover:border-gold/30 transition-all duration-500 flex flex-col justify-between"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-luxury-gray relative">
                    <img
                      src={related.images[0]}
                      alt={related.title}
                      className="w-full h-full object-cover select-none group-hover:scale-104 transition-all duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.2em] bg-black/70 text-white px-3 py-1.5 rounded-full backdrop-blur-md">
                      {related.city} • {related.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <h4 className="font-serif text-lg text-white font-light group-hover:text-gold transition-colors duration-500 truncate mb-1">
                      {related.title}
                    </h4>
                    <p className="text-xs text-gold font-sans font-light tracking-wide uppercase">
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(related.price)}
                    </p>
                    <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest font-sans font-semibold">
                      <span>Explore Estate</span>
                      <ArrowUpRight size={12} className="text-gold group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
