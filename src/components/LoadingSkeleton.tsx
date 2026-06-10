import { motion } from 'motion/react';

interface LoadingSkeletonProps {
  id?: string;
  type?: 'card' | 'text' | 'grid' | 'details';
}

export default function LoadingSkeleton({ id, type = 'card' }: LoadingSkeletonProps) {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const skeletonPulse = {
    initial: { opacity: 0.4 },
    animate: {
      opacity: [0.4, 0.7, 0.4],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (type === 'text') {
    return (
      <div id={id} className="space-y-3 w-full">
        <motion.div variants={skeletonPulse} initial="initial" animate="animate" className="h-4 bg-zinc-800 rounded w-1/4" />
        <motion.div variants={skeletonPulse} initial="initial" animate="animate" className="h-8 bg-zinc-800 rounded w-3/4" />
        <motion.div variants={skeletonPulse} initial="initial" animate="animate" className="h-4 bg-zinc-800 rounded w-5/6" />
        <motion.div variants={skeletonPulse} initial="initial" animate="animate" className="h-4 bg-zinc-800 rounded w-1/2" />
      </div>
    );
  }

  if (type === 'grid') {
    return (
      <motion.div
        id={id}
        variants={containerVariants}
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="glass-panel border border-white/5 rounded-3xl overflow-hidden p-4 space-y-6">
            <motion.div variants={skeletonPulse} className="w-full aspect-[4/3] bg-zinc-800 rounded-2xl" />
            <div className="space-y-3 px-2">
              <motion.div variants={skeletonPulse} className="h-3 bg-zinc-800 rounded w-1/3" />
              <motion.div variants={skeletonPulse} className="h-6 bg-zinc-800 rounded w-2/3" />
              <motion.div variants={skeletonPulse} className="h-3 bg-zinc-800 rounded w-full" />
            </div>
            <div className="flex justify-between items-center px-2 pt-4 border-t border-white/5">
              <motion.div variants={skeletonPulse} className="h-8 bg-zinc-800 rounded w-1/3" />
              <motion.div variants={skeletonPulse} className="h-5 bg-zinc-800 rounded w-1/4" />
            </div>
          </div>
        ))}
      </motion.div>
    );
  }

  // Default block is property card skeleton
  return (
    <div id={id} className="glass-panel border border-white/5 rounded-3xl overflow-hidden p-6 space-y-6">
      <motion.div
        variants={skeletonPulse}
        initial="initial"
        animate="animate"
        className="w-full aspect-[4/3] bg-zinc-800 rounded-2xl"
      />
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <motion.div variants={skeletonPulse} initial="initial" animate="animate" className="h-3 bg-zinc-800 rounded w-1/4" />
          <motion.div variants={skeletonPulse} initial="initial" animate="animate" className="h-3 bg-zinc-800 rounded w-1/6" />
        </div>
        <motion.div variants={skeletonPulse} initial="initial" animate="animate" className="h-6 bg-zinc-800 rounded w-3/4" />
        <motion.div variants={skeletonPulse} initial="initial" animate="animate" className="h-4 bg-zinc-800 rounded w-full" />
        <div className="pt-4 border-t border-white/5 flex justify-between items-center">
          <motion.div variants={skeletonPulse} initial="initial" animate="animate" className="h-6 bg-zinc-800 rounded w-1/3" />
          <motion.div variants={skeletonPulse} initial="initial" animate="animate" className="h-4 bg-zinc-800 rounded w-1/4" />
        </div>
      </div>
    </div>
  );
}
