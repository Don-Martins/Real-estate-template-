import { motion } from 'motion/react';
import { Property } from '../types';
import { Bed, Bath, Maximize, MapPin, ArrowUpRight } from 'lucide-react';

interface PropertyCardProps {
  key?: string | number;
  id?: string;
  property: Property;
  onSelect: (id: string) => void;
}

export default function PropertyCard({ id, property, onSelect }: PropertyCardProps) {
  // Format currency nicely
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(property.price);

  const getStatusBg = (status: Property['status']) => {
    switch (status) {
      case 'For Sale':
        return 'bg-gold text-luxury-black font-medium';
      case 'Under Offer':
        return 'bg-amber-600 text-white font-light';
      case 'Off-Market':
        return 'bg-zinc-800 text-zinc-400 font-light';
      default:
        return 'bg-zinc-800 text-white';
    }
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel border border-white/5 rounded-3xl overflow-hidden group relative flex flex-col justify-between cursor-pointer gold-border-hover"
      onClick={() => onSelect(property.id)}
    >
      {/* Visual Image container with elegant badges */}
      <div className="relative overflow-hidden aspect-[4/3] image-zoom-parent bg-luxury-gray">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover select-none"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10 pointer-events-none">
          <span className={`text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full ${getStatusBg(property.status)} shadow-lg`}>
            {property.status}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-black/60 text-white backdrop-blur-md">
            {property.type}
          </span>
        </div>

        {/* Muted Black Overlay on hover to emphasize the Arrow action */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gold text-luxury-black flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500 shadow-xl">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      {/* Property Details Content info */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex-grow">
          {/* Tagline & City */}
          <div className="flex items-center gap-1.5 text-xs text-gold uppercase tracking-[0.2em] font-medium mb-3">
            <span>{property.city}</span>
            <span className="w-1 h-1 rounded-full bg-gold/50" />
            <span className="text-gray-400 font-light lowercase font-sans">{property.tagline}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide mb-3 group-hover:text-gold transition-colors duration-500">
            {property.title}
          </h3>

          {/* Address */}
          <p className="text-xs text-gray-500 font-light flex items-center gap-1.5 mb-6">
            <MapPin size={12} className="text-gold/60" />
            {property.address}, {property.city}
          </p>
        </div>

        {/* Amenities Row */}
        <div className="grid grid-cols-3 gap-2 border-y border-white/5 py-4 mb-6 text-gray-400">
          <div className="flex items-center gap-2">
            <Bed size={15} strokeWidth={1.5} className="text-gold/70" />
            <span className="text-xs font-light tracking-wide">{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2 justify-center border-x border-white/5">
            <Bath size={15} strokeWidth={1.5} className="text-gold/70" />
            <span className="text-xs font-light tracking-wide">{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-2 justify-end">
            <Maximize size={15} strokeWidth={1.5} className="text-gold/70" />
            <span className="text-xs font-light tracking-wide">{property.sqft.toLocaleString()} Sqft</span>
          </div>
        </div>

        {/* Pricing and Action Guide row */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">
              Private Value
            </p>
            <p className="font-serif text-lg sm:text-xl text-white font-medium tracking-wide">
              {formattedPrice}
            </p>
          </div>
          <span className="text-xs text-gold tracking-widest uppercase font-medium flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-500 select-none">
            View Estate <ArrowUpRight size={14} className="text-gold" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
