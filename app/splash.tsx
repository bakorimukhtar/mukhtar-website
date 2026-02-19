'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Splash() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-50 dark:bg-neutral-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="h-12 w-12 border-4 border-violet-200 border-t-violet-600 rounded-full"
      />
      <span className="ml-4 font-semibold text-lg text-neutral-700 dark:text-neutral-300">Loading...</span>
    </motion.div>
  );
}
