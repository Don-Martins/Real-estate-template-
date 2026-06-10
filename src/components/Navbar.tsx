import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY } from '../constants/constant';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  id?: string;
  currentPage: string;
  onChangePage: (page: string) => void;
  onInquireClick: () => void;
}

export default function Navbar({
  id,
  currentPage,
  onChangePage,
  onInquireClick
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Estates Portfolio", id: "properties" },
    { label: "The Brokerage", id: "about" },
    { label: "Private Desk", id: "contact" }
  ];

  const handleNavClick = (pageId: string) => {
    onChangePage(pageId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Top micro-banner for private hotlines */}
      <div className="bg-luxury-black border-b border-white/[0.03] py-2.5 px-6 sm:px-8 text-center relative z-50 text-[10px] sm:text-xs tracking-[0.2em] font-light text-gray-400 flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Global Access Active</span>
        </div>
        <div className="mx-auto sm:mx-0 font-serif italic text-gold/80">
          Curated Private Portfolio Advisory
        </div>
        <div className="hidden sm:flex items-center gap-4 text-xs font-sans tracking-widest">
          <a href={`tel:${COMPANY.phone}`} className="hover:text-gold transition-colors duration-300 flex items-center gap-1.5 font-medium">
            <PhoneCall size={10} /> {COMPANY.phone}
          </a>
        </div>
      </div>

      <header
        id={id}
        className={`fixed top-11 sm:top-10 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? 'mx-0 px-6 sm:px-12 bg-luxury-black/85 backdrop-blur-md shadow-2xl py-4 border-b border-white/[0.04]'
            : 'mx-0 sm:mx-6 px-6 sm:px-8 bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo (Sotheby's Seric Elegance style) */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
          >
            <span className="font-serif text-xl sm:text-2xl font-light text-white tracking-[0.25em] group-hover:text-gold transition-colors duration-500">
              {COMPANY.logo}
            </span>
          </button>

          {/* Large Screen Luxury Menu elements */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = currentPage === item.id || (item.id === 'properties' && currentPage === 'property-details');
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative py-2 text-xs font-sans font-medium tracking-[0.25em] uppercase transition-colors duration-500 focus:outline-none cursor-pointer"
                >
                  <span className={`${isActive ? 'text-gold' : 'text-gray-400 hover:text-white'}`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Action button */}
          <div className="hidden md:flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onInquireClick}
              className="px-6 py-3 border border-gold/30 hover:border-gold bg-gold/5 text-gold text-[10px] font-sans font-bold uppercase tracking-[0.25em] rounded-full transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-lg hover:shadow-gold/5"
            >
              Inquire Privately <ArrowUpRight size={12} className="text-gold" />
            </motion.button>
          </div>

          {/* Mobile screen toggles */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gold p-1 focus:outline-none focus:ring-0 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>

        </div>
      </header>

      {/* Floating full screen viewport slide mobile menu drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-luxury-black/98 z-30 pt-32 pb-12 px-8 flex flex-col justify-between md:hidden"
          >
            {/* Background design accents */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4/5 aspect-square rounded-full bg-gold/5 blur-[90px] pointer-events-none" />

            <div className="flex flex-col gap-8 text-left z-10 relative">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                Navigational Gateways
              </span>
              <div className="flex flex-col gap-6">
                {navItems.map((item, idx) => {
                  const isActive = currentPage === item.id || (item.id === 'properties' && currentPage === 'property-details');
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                      onClick={() => handleNavClick(item.id)}
                      className="text-left font-serif text-3xl font-light tracking-wider flex items-center gap-3 focus:outline-none"
                    >
                      <span className={isActive ? 'text-gold' : 'text-white'}>
                        {item.label}
                      </span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Quick footer connections on Mobile Menu */}
            <div className="space-y-6 z-10 relative">
              <div className="w-full h-[1px] bg-white/5" />
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                  Direct Line
                </p>
                <a href={`tel:${COMPANY.phone}`} className="text-sm font-sans tracking-widest text-white hover:text-gold block">
                  {COMPANY.phone}
                </a>
                <p className="text-xs font-sans text-gray-400 font-light block">
                  {COMPANY.email}
                </p>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsOpen(false);
                  onInquireClick();
                }}
                className="w-full py-4 bg-gold hover:bg-gold-hover text-luxury-black font-semibold text-xs tracking-widest uppercase rounded-full transition-all flex items-center justify-center gap-2"
              >
                Inquire Privately <ArrowUpRight size={14} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
