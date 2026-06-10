import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROPERTIES } from '../constants/constant';
import { Property } from '../types';
import SectionHeading from '../components/SectionHeading';
import PropertyCard from '../components/PropertyCard';
import { Search, SlidersHorizontal, Delete, RefreshCw, X } from 'lucide-react';

interface PropertiesViewProps {
  id?: string;
  onSelectProperty: (id: string) => void;
}

export default function PropertiesView({ id, onSelectProperty }: PropertiesViewProps) {
  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("All");
  const [selectedBeds, setSelectedBeds] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Constants
  const propertyTypes = ["All", "Villa", "Penthouse", "Mansion", "Estate", "Duplex"];
  
  const priceRanges = [
    { label: "All Values", value: "All" },
    { label: "Under $20M", value: "under-20M" },
    { label: "$20M – $40M", value: "20M-40M" },
    { label: "$40M+", value: "above-40M" }
  ];

  const bedOptions = ["All", "3+", "5+", "7+"];

  // Reset Filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedType("All");
    setSelectedPriceRange("All");
    setSelectedBeds("All");
    setSortBy("featured");
  };

  // Filter & Sort Logic
  const filteredAndSortedProperties = useMemo(() => {
    let result = [...PROPERTIES];

    // Search Query filter (checks title, tagline, address, city, description, features)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.address.toLowerCase().includes(q) ||
          p.features.some((f) => f.toLowerCase().includes(q))
      );
    }

    // Type filter
    if (selectedType !== "All") {
      result = result.filter((p) => p.type === selectedType);
    }

    // Price range filter
    if (selectedPriceRange !== "All") {
      if (selectedPriceRange === "under-20M") {
        result = result.filter((p) => p.price < 20000000);
      } else if (selectedPriceRange === "20M-40M") {
        result = result.filter((p) => p.price >= 20000000 && p.price <= 40000000);
      } else if (selectedPriceRange === "above-40M") {
        result = result.filter((p) => p.price > 40000000);
      }
    }

    // Bed count filter
    if (selectedBeds !== "All") {
      const minBeds = parseInt(selectedBeds.replace("+", ""));
      result = result.filter((p) => p.beds >= minBeds);
    }

    // Sorting
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "sqft-desc") {
      result.sort((a, b) => b.sqft - a.sqft);
    } else if (sortBy === "newest") {
      result.sort((a, b) => b.yearBuilt - a.yearBuilt);
    } else {
      // default: featured first, then sorted by price desc
      result.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.price - a.price;
      });
    }

    return result;
  }, [searchQuery, selectedType, selectedPriceRange, selectedBeds, sortBy]);

  const hasActiveFilters = searchQuery !== "" || selectedType !== "All" || selectedPriceRange !== "All" || selectedBeds !== "All";

  return (
    <div id={id} className="pt-32 pb-24 sm:pb-32 bg-luxury-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Typographic Heading Header */}
        <SectionHeading
          subtitle="EXCLUSIVE PORTFOLIO"
          title="The Curated Holdings"
          description="Sift through exceptional masterpieces globally, categorized with absolute structural and physical exactness."
        />

        {/* Search, Filter, Sort Controls panel */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {/* 1. Styled Search input form */}
            <div className="relative flex-grow flex items-center">
              <Search size={16} className="text-gold/60 absolute left-4.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city, keyword, address, features, architectural style..."
                className="w-full bg-luxury-charcoal/80 border border-white/5 rounded-2xl text-sm pl-12 pr-10 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-gold/40 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4.5 text-zinc-500 hover:text-white transition-colors cursor-pointer"
                  title="Clear search query"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* 2. Sort Selection Selector */}
            <div className="w-full md:w-64">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full h-full bg-luxury-charcoal/80 border border-white/5 rounded-2xl text-xs sm:text-sm px-4 py-4 md:py-0 text-white focus:outline-none focus:border-gold/40 transition-all font-sans"
              >
                <option value="featured">Sort Style: Curated Priority</option>
                <option value="price-desc">Private Value: High to Low</option>
                <option value="price-asc">Private Value: Low to High</option>
                <option value="sqft-desc">Interior Size: Large to Small</option>
                <option value="newest">Structural Year: Modern First</option>
              </select>
            </div>

            {/* 3. Toggle Filters triggers */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-6 py-4 rounded-2xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                showFilters || hasActiveFilters
                  ? 'border-gold text-gold bg-gold/5'
                  : 'border-white/5 text-white hover:border-gold/30'
              }`}
            >
              <SlidersHorizontal size={14} />
              Refine Filters {hasActiveFilters ? `(Active)` : ''}
            </button>
          </div>

          {/* Collapsible Refined Filters drawer */}
          <AnimatePresence>
            {(showFilters || hasActiveFilters) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden bg-luxury-charcoal/40 border border-white/5 rounded-3xl p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  {/* Category Type Filter */}
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold mb-3.5">
                      Property Category
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {propertyTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer font-sans ${
                            selectedType === type
                              ? 'bg-gold text-luxury-black font-semibold'
                              : 'bg-white/5 hover:bg-white/10 text-gray-350 hover:text-white'
                          }`}
                        >
                          {type}s
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Private Value Ranges Filter */}
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold mb-3.5">
                      Value Segments
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.value}
                          onClick={() => setSelectedPriceRange(range.value)}
                          className={`px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer font-sans ${
                            selectedPriceRange === range.value
                              ? 'bg-gold text-luxury-black font-semibold'
                              : 'bg-white/5 hover:bg-white/10 text-gray-350 hover:text-white'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bedrooms count filter */}
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold mb-3.5">
                      Beds Allocation
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {bedOptions.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setSelectedBeds(opt)}
                          className={`px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer font-sans ${
                            selectedBeds === opt
                              ? 'bg-gold text-luxury-black font-semibold'
                              : 'bg-white/5 hover:bg-white/10 text-gray-350 hover:text-white'
                          }`}
                        >
                          {opt === 'All' ? 'All Beds' : `${opt} Beds`}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reset Filters controller row */}
                {hasActiveFilters && (
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <p className="text-xs text-gray-500 font-light font-sans">
                      Filter query returned <strong className="text-white">{filteredAndSortedProperties.length}</strong> matched estates.
                    </p>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={handleResetFilters}
                      className="px-5 py-2.5 bg-red-950/30 text-red-300 hover:text-red-200 border border-red-900/30 hover:border-red-500/40 rounded-xl text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <RefreshCw size={12} className="animate-pulse" /> Clear All Filters
                    </motion.button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Estates Output Grid */}
        <AnimatePresence mode="popLayout" >
          {filteredAndSortedProperties.length > 0 ? (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
            >
              {filteredAndSortedProperties.map((prop) => (
                <PropertyCard
                  key={prop.id}
                  property={prop}
                  onSelect={onSelectProperty}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="glass-panel border border-white/5 rounded-[2.5rem] py-20 px-8 text-center max-w-2xl mx-auto flex flex-col items-center justify-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full border border-gold/10 bg-gold/5 flex items-center justify-center text-gold mb-2">
                <Search size={28} strokeWidth={1} />
              </div>
              <h3 className="font-serif text-2xl text-white font-light tracking-wide">
                No Matched Estates Found
              </h3>
              <p className="text-gray-400 font-sans font-light text-xs sm:text-sm leading-relaxed max-w-sm">
                We currently do not hold unlisted architectural catalogs matching those specific configurations. Try adjusting your value ranges or query words.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-6 py-3 bg-gold hover:bg-gold-hover text-luxury-black font-semibold text-[10px] uppercase tracking-[0.25em] rounded-full transition-colors cursor-pointer"
              >
                Reset Filter Parameters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
