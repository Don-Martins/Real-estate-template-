import React, { useState } from 'react';
import { COMPANY, SOCIALS } from '../constants/constant';
import { Mail, ArrowRight, Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FooterProps {
  id?: string;
  onChangePage: (pageId: string) => void;
}

export default function Footer({ id, onChangePage }: FooterProps) {
  const [email, setEmail] = useState("");
  const [newsStatus, setNewsStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState("");

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg("Please provide an email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please provide a valid email address.");
      return;
    }

    setErrorMsg("");
    setNewsStatus('loading');

    setTimeout(() => {
      setNewsStatus('success');
      setEmail("");
    }, 1500);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id={id} className="bg-luxury-black border-t border-white/5 pt-20 pb-10 px-6 sm:px-12 relative overflow-hidden">
      {/* Footer background luxury gradient reflections */}
      <div className="absolute bottom-0 right-0 w-1/3 aspect-square rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Logo & Tagline column */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-light text-white tracking-[0.25em]">
              {COMPANY.logo}
            </h3>
            <p className="text-gray-400 font-sans font-light text-xs sm:text-sm leading-relaxed max-w-xs">
              {COMPANY.tagline}
            </p>
            <div className="space-y-2 text-xs sm:text-sm font-sans font-light text-gray-500">
              <p>{COMPANY.address}</p>
              <p className="hover:text-gold transition-colors"><a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a></p>
              <p className="hover:text-gold transition-colors"><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-medium text-gold">
              Navigational Gateways
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-sans font-light text-gray-450">
              {[
                { label: "Home", page: "home" },
                { label: "Estates Portfolio", page: "properties" },
                { label: "The Brokerage", page: "about" },
                { label: "Private Desk", page: "contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onChangePage(link.page)}
                    className="hover:text-gold text-gray-400 hover:translate-x-1.5 transition-transform duration-300 text-left cursor-pointer focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social connections column */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-medium text-gold">
              Social Handlers
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs sm:text-sm font-sans font-light">
              {Object.entries(SOCIALS).map(([key, val]) => (
                <a
                  key={key}
                  href={val}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-450 hover:text-gold text-gray-400 capitalize hover:scale-103 transition-all inline-block truncate"
                >
                  {key}
                </a>
              ))}
            </div>
          </div>

          {/* Luxury Newsletter Column */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-medium text-gold">
              The Aurum Gazette
            </h4>
            <p className="text-gray-400 font-sans font-light text-xs sm:text-sm leading-relaxed">
              Subscribe to obtain direct releases of high-performance off-market estates and market reports.
            </p>

            <AnimatePresence mode="wait">
              {newsStatus === 'success' ? (
                <motion.div
                  key="news-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-gold text-xs font-medium py-3 border border-gold/10 bg-gold/5 px-4 rounded-xl"
                >
                  <Check size={16} /> Subscription Registered Securely
                </motion.div>
              ) : (
                <motion.form
                  key="news-form"
                  onSubmit={handleNewsSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-2.5"
                >
                  <div className="relative flex items-center">
                    <Mail size={14} className="text-gold/60 absolute left-4 pointer-events-none" />
                    <input
                      type="email"
                      placeholder="private@entity.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrorMsg("");
                      }}
                      className="w-full bg-luxury-charcoal hover:bg-neutral-900 focus:bg-neutral-900 border border-white/5 rounded-xl text-xs px-11 py-3 text-white focus:outline-none focus:border-gold/50 transition-all font-sans"
                    />
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="absolute right-2 p-1.5 text-gold hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                      title="Subscribe to Newsletter"
                    >
                      {newsStatus === 'loading' ? (
                        <Loader2 className="animate-spin" size={14} />
                      ) : (
                        <ArrowRight size={14} />
                      )}
                    </motion.button>
                  </div>
                  {errorMsg && (
                    <p className="text-[10px] text-red-400 font-light tracking-wide">{errorMsg}</p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom regulatory and licensing bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between text-[10px] sm:text-xs text-gray-500 font-sans font-light gap-6">
          <p className="tracking-wide">
            &copy; {currentYear} {COMPANY.name}. All Rights Reserved. Cataloged in California & Globally.
          </p>
          <div className="flex flex-wrap gap-5 sm:gap-8 justify-center tracking-wide">
            <span className="hover:text-gold transition-colors leading-none cursor-pointer">Regulatory License Broker ID #019-9440</span>
            <span className="hover:text-gold transition-colors leading-none cursor-pointer">Privacy Charter</span>
            <span className="hover:text-gold transition-colors leading-none cursor-pointer">Terms & Trusts</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
