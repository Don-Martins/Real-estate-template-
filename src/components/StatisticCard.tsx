import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatisticCardProps {
  id?: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number; // duration in ms
}

export default function StatisticCard({
  id,
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2000
}: StatisticCardProps) {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true;
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function - easeOutQuad
        const easedProgress = progress * (2 - progress);
        
        setCount(parseFloat((easedProgress * value).toFixed(0)));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(value);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return (
    <motion.div
      id={id}
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-panel border border-white/5 p-8 flex flex-col items-center text-center rounded-2xl relative overflow-hidden group hover:border-gold/30 transition-all duration-700"
    >
      {/* Decorative premium subtle light radial gradient on hover */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.05),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="font-serif text-4xl sm:text-5xl text-gold font-light tracking-tight mb-3 flex items-center justify-center">
        <span>{prefix}</span>
        <span>{count.toLocaleString()}</span>
        <span className="text-white ml-0.5">{suffix}</span>
      </div>
      
      <p className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium font-sans">
        {label}
      </p>
    </motion.div>
  );
}
