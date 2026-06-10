import { motion } from 'motion/react';
import { COMPANY } from '../constants/constant';
import { ArrowUpRight, MessageSquareCode } from 'lucide-react';

interface CTASectionProps {
  id?: string;
  onInquire: () => void;
  title?: string;
  description?: string;
}

export default function CTASection({
  id,
  onInquire,
  title = "Own an Architectural Work of Art",
  description = "Schedule a confidential consultation to explore our elite portfolio of off-market private estates and skyscraping duplex penthouses globally."
}: CTASectionProps) {
  // WhatsApp Link Helper
  const handleWhatsApp = () => {
    const message = "Hello Aurum Estates, I would like to schedule a private consultation regarding your exclusive luxury portfolio.";
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, '')}?text=${encoded}`, '_blank');
  };

  return (
    <section id={id} className="relative py-24 sm:py-32 overflow-hidden bg-luxury-black">
      {/* Decorative luxury vector lines behind the box */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[30%] -left-[20%] w-[80%] aspect-square rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute -bottom-[40%] -right-[10%] w-[60%] aspect-square rounded-full bg-gold/5 blur-[100px]" />
        
        {/* Subtle geometric lines */}
        <svg className="absolute inset-0 w-full h-full stroke-white/[0.02]" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="30" x2="100" y2="30" strokeWidth="0.1" />
          <line x1="0" y1="70" x2="100" y2="70" strokeWidth="0.1" strokeDasharray="1 2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="glass-panel border border-white/5 rounded-[3rem] p-8 sm:p-16 lg:p-20 text-center relative overflow-hidden gold-border-hover gold-glow">
          {/* Subtle gold grid reflection */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,168,128,0.04),transparent_60%)] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            {/* Top Badge */}
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-bold mb-6 px-4 py-1.5 rounded-full border border-gold/10 bg-gold/5">
              PAVING THE LEGACY
            </span>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-wide leading-tight mb-6">
              {title}
            </h2>

            {/* Subtext description */}
            <p className="text-gray-400 text-sm sm:text-base font-light font-sans tracking-wide leading-relaxed max-w-2xl mb-12">
              {description}
            </p>

            {/* Premium Dual Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              {/* Private Inquire Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onInquire}
                className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-hover text-luxury-black font-semibold text-xs uppercase tracking-[0.2em] rounded-full transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl shadow-gold/10"
              >
                Inquire Privately <ArrowUpRight size={16} />
              </motion.button>

              {/* Direct WhatsApp Call */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:border-gold/30 bg-white/5 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <MessageSquareCode size={16} className="text-gold" />
                WhatsApp Office
              </motion.button>
            </div>
            
            {/* Disclaimer or short quote */}
            <p className="text-gray-600 font-serif italic text-xs mt-8 font-light select-none">
              Discretion is our absolute standard across all transacting sectors.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
