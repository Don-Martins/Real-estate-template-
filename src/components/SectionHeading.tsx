import { motion } from 'motion/react';

interface SectionHeadingProps {
  id?: string;
  subtitle: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SectionHeading({
  id,
  subtitle,
  title,
  description,
  align = 'center'
}: SectionHeadingProps) {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end'
  }[align];

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col mb-16 max-w-3xl ${alignmentClass}`}
    >
      <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3">
        {subtitle}
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-wide leading-tight">
        {title}
      </h2>
      <div className="w-16 h-[1px] bg-gold/40 mt-6 mb-6" />
      {description && (
        <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed tracking-wide">
          {description}
        </p>
      )}
    </motion.div>
  );
}
