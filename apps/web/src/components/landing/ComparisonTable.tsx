'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const comparisons = [
  {
    traditional: 'Filtros genéricos',
    nin: 'Preferências de vida',
  },
  {
    traditional: 'Horas navegando',
    nin: 'Matches instantâneos',
  },
  {
    traditional: 'Resultados irrelevantes',
    nin: 'Ordenado por compatibilidade',
  },
  {
    traditional: 'Sem considerar bairro',
    nin: 'Análise de vizinhança',
  },
  {
    traditional: 'Busca cansativa',
    nin: 'Experiência personalizada',
  },
];

export function ComparisonTable() {
  return (
    <section className="py-20 px-6 bg-sage-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-heading text-4xl font-bold text-center text-nin-900 mb-6"
        >
          Busca tradicional vs Nin.
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center text-nin-600 mb-16 max-w-xl mx-auto"
        >
          Por que continuar perdendo tempo com buscas que não entendem você?
        </motion.p>

        <motion.div variants={fadeInUp} className="bg-white rounded-nin shadow-nin overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 bg-nin-100">
            <div className="p-4 md:p-6 text-center border-r border-nin-200">
              <p className="font-heading text-lg font-semibold text-nin-600">
                Busca Tradicional
              </p>
            </div>
            <div className="p-4 md:p-6 text-center bg-nin-500">
              <p className="font-heading text-lg font-semibold text-white">
                Com o Nin.
              </p>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`grid grid-cols-2 ${
                index !== comparisons.length - 1 ? 'border-b border-nin-100' : ''
              }`}
            >
              <div className="p-4 md:p-6 flex items-center gap-3 border-r border-nin-100">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-nin-600 text-sm md:text-base">{row.traditional}</span>
              </div>
              <div className="p-4 md:p-6 flex items-center gap-3 bg-nin-50/50">
                <div className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-sage-600" />
                </div>
                <span className="text-nin-900 font-medium text-sm md:text-base">{row.nin}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
