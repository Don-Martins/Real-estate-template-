import { motion } from 'motion/react';
import { COMPANY, AGENTS } from '../constants/constant';
import SectionHeading from '../components/SectionHeading';
import StatisticCard from '../components/StatisticCard';
import { ShieldAlert, Award, Compass, HeartHandshake, Eye, Linkedin, Instagram } from 'lucide-react';

interface AboutViewProps {
  id?: string;
  onNavigate: (pageId: string) => void;
}

export default function AboutView({ id, onNavigate }: AboutViewProps) {
  // Core achievements array
  const achievements = [
    { year: "2004", title: "Establishment in BH", description: "Launched as an exclusive discretionary boutique trust matching elite historical listings across Beverly Hills." },
    { year: "2011", title: "New York Duplex Desk", description: "Opened Manhattan private advisory offices, overseeing high-net-worth acquisitions across lower Manhattan." },
    { year: "2018", title: "$10B Transacted Threshold", description: "Exceeded aggregate portfolio trade volumes of $10 Billion globally, specializing in sovereign transfers." },
    { year: "2024", title: "Bespoke Renovations Unit", description: "Integrated an internal design and engineering division to facilitate immediate custom property updates." }
  ];

  // Corporate values array
  const coreValues = [
    { icon: <Eye size={20} />, label: "Absolute Transparency", text: "We deliver full structural audits. No hidden faults, plain layouts, and unfiltered facts on every holding." },
    { icon: <Compass size={20} />, label: "Architectural Integrity", text: "We represent holdings of genuine design significance and permanence, prioritizing durability in construction." },
    { icon: <HeartHandshake size={20} />, label: "Folkloric Loyalty", text: "Our connections span generations. We operate as legacy advisors, protecting client private interests permanently." }
  ];

  return (
    <div id={id} className="pt-32 pb-24 sm:pb-32 bg-luxury-black text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* 1. TYPOGRAPHIC SECTION HEADING */}
        <SectionHeading
          subtitle="OUR STORY & PHILOSOPHY"
          title="The Brokerage Charter"
          description="A devotion to architectural permanence, sovereign discretion, and transparent structural evaluation."
        />

        {/* 2. STORY AND IMAGE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide">
              Forging Legacies Since 2004
            </h3>
            <div className="w-16 h-[2px] bg-gold/40" />
            <p className="text-gray-400 font-sans font-light leading-relaxed text-sm sm:text-base">
              Aurum Estates was established under a singular, uncompromising mandate: to redefine luxury real estate acquisitions through the lens of structural engineering excellence and absolute client privacy. 
            </p>
            <p className="text-gray-400 font-sans font-light leading-relaxed text-sm sm:text-base">
              Unlike traditional brokerage firms, we operate on a private advisory tier. We do not mass-market listings; instead, we curates unlisted architectural monuments, matching them with absolute discretion to individuals of refined taste.
            </p>
            <p className="text-gray-400 font-sans font-light leading-relaxed text-sm sm:text-base">
              Under the stewardship of our global senior partners, we analyze physical and economic vulnerabilities, providing detailed portfolios to shield your investable legacy.
            </p>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden aspect-[4/3] border border-white/5 relative bg-luxury-charcoal">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury modern foyer architecture representating engineering precision"
              className="w-full h-full object-cover select-none pointer-events-none"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
          </div>
        </div>

        {/* 3. MISSION AND VISION BENTO PANEL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28 text-left">
          {/* Mission card */}
          <div className="glass-panel border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden group hover:border-gold/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 text-gold/5 pointer-events-none group-hover:text-gold/10 transition-colors">
              <Compass size={120} strokeWidth={0.5} />
            </div>
            
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4 block">
              OUR TARGET MISSION
            </span>
            <h4 className="font-serif text-2xl text-white font-light tracking-wide mb-6">
              Engineering Secure Transfers
            </h4>
            <p className="text-gray-400 font-sans font-light leading-relaxed text-sm sm:text-base">
              To identify, secure, and deliver the world's most structurally superior residential holdings. We verify every asset's physical durability and compliance layers to guarantee that your acquisition remains an unshakeable store of long-term capital and a sanctuary of architectural heritage.
            </p>
          </div>

          {/* Vision card */}
          <div className="glass-panel border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden group hover:border-gold/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 text-gold/5 pointer-events-none group-hover:text-gold/10 transition-colors">
              <Award size={120} strokeWidth={0.5} />
            </div>

            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4 block">
              OUR MOUNTING VISION
            </span>
            <h4 className="font-serif text-2xl text-white font-light tracking-wide mb-6">
              Establishing Design Permanence
            </h4>
            <p className="text-gray-400 font-sans font-light leading-relaxed text-sm sm:text-base">
              To stand eternally as the global standard for prestigious real estate mediation, proving that a home's value stems not from public noise, but from architectural precision, geometric beauty, premium raw materials, and flawless discretionary handoffs.
            </p>
          </div>
        </div>

        {/* 4. STATISTICS WRAPPER CARDS */}
        <div className="mb-28 bg-luxury-charcoal/45 border border-white/5 rounded-[2.5rem] p-8 sm:p-12">
          <div className="text-center mb-10 max-w-xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">SOLID METRICS</span>
            <h3 className="font-serif text-2xl text-white font-light tracking-wide mt-1.5">Unshakeable Legacy Performance</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatisticCard
              value={100}
              suffix="%"
              label="DISCRETION AGREEMENT INTEGRITY"
              duration={1500}
            />
            <StatisticCard
              value={99}
              prefix="$"
              suffix="M+"
              label="HIGHEST PRIVATE ASSET MATED"
              duration={1800}
            />
            <StatisticCard
              value={20}
              suffix=" Yrs"
              label="RECORD OF FLAWLESS STANDARDS"
              duration={1200}
            />
          </div>
        </div>

        {/* 5. ACHIEVEMENTS TIMELINE BLOCK */}
        <div className="mb-28 text-left">
          <div className="mb-14 text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">RECORDED CHRONOLOGY</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide mt-2">Historic Landmarks & Acquisitions</h3>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-32 pl-8 md:pl-16 space-y-12">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative space-y-2 group"
              >
                {/* Floating Chrono Badge */}
                <div className="absolute -left-12 md:-left-28 top-0 select-none">
                  <span className="font-serif text-xl sm:text-2xl text-gold font-semibold tracking-wide block leading-none">
                    {item.year}
                  </span>
                </div>

                {/* Timeline Dot highlight */}
                <div className="absolute -left-[37px] md:-left-[69px] top-1.5 w-3.5 h-3.5 rounded-full bg-luxury-black border-2 border-gold group-hover:bg-gold transition-colors duration-300" />

                <h4 className="font-serif text-lg text-white font-light tracking-wide group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 font-light font-sans max-w-2xl leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 6. OUR EXECUTIVE DEDICATED PARTNERS (AGENTS) */}
        <div className="mb-28 text-left">
          <div className="mb-14 text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">FACILITATION LEADERS</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide mt-2">The Managing Advisory</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {AGENTS.map((agent) => (
              <motion.div
                key={agent.id}
                whileHover={{ y: -6 }}
                className="glass-panel border border-white/5 rounded-3xl overflow-hidden group flex flex-col justify-between"
              >
                {/* Portrait container image */}
                <div className="aspect-[4/3] overflow-hidden bg-luxury-gray relative">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover select-none group-hover:scale-103 transition-transform duration-[1.2s]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent opacity-80" />
                </div>

                {/* Agent details info */}
                <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between text-left">
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-widest text-gold font-bold font-sans">
                      {agent.role}
                    </span>
                    <h4 className="font-serif text-xl text-white font-light tracking-wide">
                      {agent.name}
                    </h4>
                    <p className="text-gray-400 font-sans font-light text-xs sm:text-sm leading-relaxed line-clamp-3 pt-2">
                      {agent.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500 font-mono tracking-wider font-light">
                      BH ADVISORY GROUP
                    </span>

                    {/* Social networks references */}
                    <div className="flex gap-3 text-gold/75">
                      <a href={agent.linkedin} target="_blank" rel="noreferrer" title="LinkedIn Profile" className="hover:text-white transition-colors">
                        <Linkedin size={14} />
                      </a>
                      <a href={agent.instagram} target="_blank" rel="noreferrer" title="Instagram Feed" className="hover:text-white transition-colors">
                        <Instagram size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 7. PHILOSOPHY CORE VALUES ROWS */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">OPERATING CORE</span>
            <h3 className="font-serif text-2xl text-white font-light tracking-wide mt-1">Our Non-Negotiable Tenets</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="glass-panel border border-white/5 p-8 rounded-3xl text-left bg-luxury-charcoal/30 relative overflow-hidden"
              >
                {/* Micro accent block gradient */}
                <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="w-10 h-10 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center text-gold mb-6">
                  {val.icon}
                </div>
                <h4 className="font-serif text-lg text-white font-light mb-3 tracking-wide">{val.label}</h4>
                <p className="text-gray-400 text-xs sm:text-sm font-light font-sans leading-relaxed">
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* secure call to action triggers */}
        <div className="text-center pt-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate("contact")}
            className="px-10 py-4 bg-gold hover:bg-gold-hover text-luxury-black font-semibold text-xs tracking-widest uppercase rounded-full transition-colors cursor-pointer"
          >
            Schedule a Private Consultation
          </motion.button>
        </div>

      </div>
    </div>
  );
}
