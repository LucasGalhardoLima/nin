'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { useCountUp } from '@/hooks/useCountUp';

interface StatItemProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function StatItem({ value, prefix = '', suffix = '', label }: StatItemProps) {
  const { formattedCount, ref } = useCountUp({
    end: value,
    prefix,
    suffix,
    duration: 2000,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="text-center"
    >
      <p className="font-heading text-4xl md:text-5xl font-bold text-nin-900 mb-2">
        {formattedCount}
      </p>
      <p className="text-nin-600 text-lg">{label}</p>
    </motion.div>
  );
}

export function StatsSection() {
  const stats = [
    { value: 500, prefix: '+', label: 'Famílias encontraram seu ninho' },
    { value: 1200, prefix: '+', label: 'Imóveis analisados' },
    { value: 98, suffix: '%', label: 'Taxa de satisfação' },
    { value: 2, label: 'Cidades atendidas' },
  ];

  return (
    <section className="py-20 px-6 bg-sage-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-heading text-4xl font-bold text-center text-nin-900 mb-16"
        >
          Nossos Números
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
