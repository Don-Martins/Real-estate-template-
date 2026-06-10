import { motion } from 'motion/react';
import { Testimonial } from '../types';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  key?: string | number;
  id?: string;
  testimonial: Testimonial;
}

export default function TestimonialCard({ id, testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel text-left p-8 sm:p-10 rounded-3xl relative flex flex-col justify-between border border-white/5 gold-border-hover group"
    >
      {/* Absolute Quote Mark Icon */}
      <div className="absolute top-8 right-8 text-gold/10 group-hover:text-gold/20 transition-colors duration-500">
        <Quote size={56} strokeWidth={1} />
      </div>

      <div>
        {/* Rating Star Row */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={14}
              className={`${
                index < testimonial.rating ? 'fill-gold text-gold' : 'text-white/10'
              }`}
            />
          ))}
        </div>

        {/* Quote Content */}
        <p className="font-serif italic font-light text-base sm:text-lg text-white/95 leading-relaxed tracking-wide mb-8">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author and Profile Info */}
      <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/20 bg-luxury-gray relative flex-shrink-0">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h4 className="text-sm font-medium text-white tracking-wide">
            {testimonial.author}
          </h4>
          <p className="text-xs text-gray-400 font-light mt-0.5">
            {testimonial.role} {testimonial.company ? `at ${testimonial.company}` : ''}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
