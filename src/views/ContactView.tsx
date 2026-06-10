import { motion } from 'motion/react';
import { COMPANY, CONTACT, SOCIALS } from '../constants/constant';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, ShieldCheck, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';

interface ContactViewProps {
  id?: string;
}

export default function ContactView({ id }: ContactViewProps) {
  // Direct WhatsApp Launcher
  const handleWhatsAppClick = () => {
    const textMsg = "Hello Aurum Estates, I am reaching out to schedule a confidential property discussion or listing inquiry.";
    window.open(`https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(textMsg)}`, '_blank');
  };

  const contactCards = [
    {
      icon: <Phone size={18} />,
      label: "Direct Private Hotline",
      val: CONTACT.phone,
      sub: "Mon - Sun • 24 Hours Active",
      href: `tel:${CONTACT.phone}`
    },
    {
      icon: <Mail size={18} />,
      label: "Discretionary Email",
      val: CONTACT.email,
      sub: "GPG Encrypted Gateways Active",
      href: `mailto:${CONTACT.email}`
    },
    {
      icon: <MapPin size={18} />,
      label: "Beverly Hills Guild Office",
      val: CONTACT.address,
      sub: "Prior Appointments Only Required",
      href: "#maps"
    }
  ];

  return (
    <div id={id} className="pt-32 pb-24 sm:pb-32 bg-luxury-black min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* 1. TYPOGRAPHIC HEADING SECTION */}
        <SectionHeading
          subtitle="SECURE COMMUNICATION DESC"
          title="The Private Desk"
          description="Initiate encrypted discourse with our portfolio associates. All interactions remain wrapped under strict zero-telemetry covenants."
        />

        {/* 2. CONTACT DETAILS & MOBILE CONNECTS RAIL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactCards.map((card, idx) => (
            <motion.a
              key={idx}
              href={card.href}
              target={card.href.startsWith('http') || card.href.startsWith('mailto') || card.href.startsWith('tel') ? '_blank' : '_self'}
              rel="noreferrer"
              whileHover={{ y: -4 }}
              className="glass-panel border border-white/5 bg-luxury-charcoal/45 rounded-3xl p-8 flex flex-col justify-between group hover:border-gold/30 transition-all duration-500"
            >
              <div className="space-y-6">
                <div className="w-10 h-10 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center text-gold">
                  {card.icon}
                </div>
                
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-sans tracking-wider text-gray-500 font-bold block">
                    {card.label}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl text-white font-light group-hover:text-gold transition-colors duration-500 leading-snug">
                    {card.val}
                  </h4>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-widest font-sans font-semibold">
                <span>{card.sub}</span>
                <ArrowUpRight size={12} className="text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* 3. COLOSSAL BLOCK: FORM & DETAILS ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start mb-20">
          
          {/* Column A: Explanation, Instructions, and WhatsApp Trigger */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">DISCLOSURE POLICIES</span>
            <h3 className="font-serif text-3xl text-white font-light tracking-wide leading-tight">
              Prestige Communication Guidelines
            </h3>
            <div className="w-16 h-[2px] bg-gold/40" />

            <p className="text-gray-405 text-gray-400 font-sans font-light leading-relaxed text-sm sm:text-base">
              Discourse with Aurum Estates is subject to standard non-solicitation filters. We treat your search data with sovereign levels of safety-integrity. No third-party trace loops are written during active inquiries.
            </p>

            {/* Quick specifications highlights */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-luxury-charcoal/30 border border-white/5 p-4 rounded-2xl">
                <ShieldCheck size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="text-sm font-sans font-medium text-white tracking-wide">Client Trust Encryption</h5>
                  <p className="text-xs text-gray-500 font-light font-sans mt-0.5 leading-relaxed">
                    Message logs are continuously cleaned from communication buffers after property tours complete.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-luxury-charcoal/30 border border-white/5 p-4 rounded-2xl">
                <Clock size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="text-sm font-sans font-medium text-white tracking-wide">Bespoke Associate Timelines</h5>
                  <p className="text-xs text-gray-500 font-light font-sans mt-0.5 leading-relaxed">
                    Once dispatched, your private concierge agent responds inside a certified 60-minute interval window.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive WhatsApp Connection Panel Banner */}
            <div className="glass-panel border border-white/5 bg-gradient-to-br from-luxury-charcoal/80 to-transparent p-6 sm:p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 text-gold/5 pointer-events-none group-hover:text-gold/10 transition-colors">
                <MessageSquare size={100} strokeWidth={1} />
              </div>

              <h4 className="font-serif text-xl text-white font-light tracking-wide mb-2">Immediate Dispatch Desk</h4>
              <p className="text-xs text-gray-400 font-light font-sans leading-relaxed mb-6">
                Connect dynamically with our executive broker on duty via direct encrypted mobile chat over WhatsApp channels.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-widest rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/20"
              >
                Initiate Secure WhatsApp Chat <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Column B: Full Interactive Inquiries Form */}
          <div className="lg:col-span-7">
            <ContactForm
              title="Secure Portfolio Request Desk"
            />
          </div>

        </div>

        {/* 4. DESIGN DETAILS: MAP CONTAINER PANEL */}
        <div id="maps" className="space-y-6 pt-10">
          <div className="text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">GEOGRAPHIC SEGMENT</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide mt-1.5">Guild Office Headquarters</h3>
            <p className="font-sans text-xs text-gray-500 font-light mt-1 tracking-wide">9440 Santa Monica Blvd, Beverly Hills, CA 90210</p>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden aspect-[16/7] border border-white/5 relative bg-luxury-charcoal">
            <iframe
              title="Aurum Estates Headquarters Map Location Pin"
              src={CONTACT.mapEmbed}
              className="w-full h-full border-0 grayscale invert opacity-75 contrast-125 select-none"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
