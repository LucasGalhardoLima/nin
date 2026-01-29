'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp } from '@/lib/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = '',
  variants = fadeInUp,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
