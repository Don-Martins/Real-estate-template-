import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY } from './constants/constant';

// Import Views
import HomeView from './views/HomeView';
import PropertiesView from './views/PropertiesView';
import PropertyDetailsView from './views/PropertyDetailsView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';

// Import Shared Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Icons
import { ArrowUp, MessageSquare } from 'lucide-react';

export default function App() {
  // Navigation Routing States
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor URL params for standard deep-linking support
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');
    const estateParam = params.get('estate');

    if (pageParam) {
      if (pageParam === 'property-details' && estateParam) {
        setSelectedPropertyId(estateParam);
        setCurrentPage('property-details');
      } else if (['home', 'properties', 'about', 'contact'].includes(pageParam)) {
        setCurrentPage(pageParam);
      }
    }
  }, []);

  // Update Dynamic SEO document titles and descriptors dynamically at runtime
  useEffect(() => {
    let titleStr = `${COMPANY.name} | ${COMPANY.tagline}`;
    let descStr = "Curating the world’s most iconic estates, ultra-penthouses, and architectural triumphs with sovereign discretion.";

    switch (currentPage) {
      case 'properties':
        titleStr = `Estates Portfolio | Curated Collection | ${COMPANY.name}`;
        descStr = "Sift through exceptional masterpieces globally, categorized with absolute structural and physical exactness.";
        break;
      case 'property-details':
        titleStr = `Architectural Holding | Details Desk | ${COMPANY.name}`;
        descStr = "Explore in-depth specifications, interactive floorplans, and private value segments of this premium estate.";
        break;
      case 'about':
        titleStr = `The Brokerage | Philosophy & Story | ${COMPANY.name}`;
        descStr = "A devotion to architectural permanence, sovereign discretion, and transparent structural evaluation.";
        break;
      case 'contact':
        titleStr = `The Private Desk | Encrypted Channels | ${COMPANY.name}`;
        descStr = "Initiate secure discourse with our portfolio associates. Zero-telemetry safeguards active.";
        break;
      default:
        break;
    }

    document.title = titleStr;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', descStr);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descStr;
      document.head.appendChild(meta);
    }
  }, [currentPage]);

  // Monitor window coordinates for scroll-to-top button reveals
  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    setSelectedPropertyId("");
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL query parameters silently
    const url = new URL(window.location.href);
    url.searchParams.set('page', pageId);
    url.searchParams.delete('estate');
    window.history.pushState({}, '', url);
  };

  const handleSelectProperty = (id: string) => {
    setSelectedPropertyId(id);
    setCurrentPage("property-details");
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL query parameters silently
    const url = new URL(window.location.href);
    url.searchParams.set('page', 'property-details');
    url.searchParams.set('estate', id);
    window.history.pushState({}, '', url);
  };

  const scrollBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct WhatsApp Connection
  const handleWhatsAppAction = () => {
    const textMsg = "Hello Aurum Estates, I am browsing your portfolio and would like to trigger a secure discussion regarding exclusive luxury assets.";
    window.open(`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(textMsg)}`, '_blank');
  };

  return (
    <div id="application-root" className="min-h-screen bg-luxury-black font-sans text-stone-200 antialiased relative">
      
      {/* Dynamic Grid Background Accent Lines */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5 flex justify-between max-w-7xl mx-auto px-12 md:px-24">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden sm:block" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white hidden lg:block" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      {/* STICKY GLASS NAVBAR */}
      <Navbar
        currentPage={currentPage}
        onChangePage={handlePageChange}
        onInquireClick={() => handlePageChange("contact")}
      />

      {/* IMPRESSED VIEW ROUTING MECHANICS */}
      <main className="relative z-10 select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage === 'property-details' ? `details-${selectedPropertyId}` : currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentPage === 'home' && (
              <HomeView
                onSelectProperty={handleSelectProperty}
                onNavigate={handlePageChange}
              />
            )}
            {currentPage === 'properties' && (
              <PropertiesView
                onSelectProperty={handleSelectProperty}
              />
            )}
            {currentPage === 'property-details' && (
              <PropertyDetailsView
                propertyId={selectedPropertyId}
                onBack={() => handlePageChange("properties")}
                onSelectProperty={handleSelectProperty}
              />
            )}
            {currentPage === 'about' && (
              <AboutView
                onNavigate={handlePageChange}
              />
            )}
            {currentPage === 'contact' && (
              <ContactView />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* MULTI-STRUCTURE REGULATORY FOOTER */}
      <Footer
        onChangePage={handlePageChange}
      />

      {/* FLOATING ACTION BUOY: BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scrollTopBtn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollBackToTop}
            className="fixed bottom-8 left-8 z-30 w-11 h-11 rounded-full bg-luxury-charcoal/90 border border-white/10 hover:border-gold/55 text-stone-400 hover:text-gold flex items-center justify-center cursor-pointer shadow-2xl backdrop-blur-md transition-colors"
            title="Scroll Back To Top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* FLOATING ACTION BUOY: WHATSAPP DIRECT CALL */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppAction}
        className="fixed bottom-8 right-8 z-30 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center cursor-pointer shadow-2xl shadow-emerald-900/30 hover:bg-emerald-500 transition-colors group"
        title="Immediate WhatsApp Dispatch Line"
      >
        {/* Subtle pulsating emerald rings behind the button to draw premium attention */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 -z-10 animate-ping" />
        <MessageSquare size={18} className="transition-transform group-hover:rotate-12" />
      </motion.button>

    </div>
  );
}
