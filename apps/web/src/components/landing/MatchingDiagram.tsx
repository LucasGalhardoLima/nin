'use client';

import { motion } from 'framer-motion';
import { Users, Search, Calculator, Home } from 'lucide-react';
import { staggerContainer, fadeInUp, drawLine } from '@/lib/animations';

const steps = [
  {
    icon: Users,
    number: '1',
    title: 'Perfil',
    description: 'Defina o que importa no seu dia a dia',
  },
  {
    icon: Search,
    number: '2',
    title: 'Análise',
    description: 'Cruzamos com bairros, preços e infraestrutura',
  },
  {
    icon: Calculator,
    number: '3',
    title: 'Score',
    description: 'Pontuamos compatibilidade de 0 a 100',
  },
  {
    icon: Home,
    number: '4',
    title: 'Matches',
    description: 'Receba opções ordenadas por afinidade',
  },
];

export function MatchingDiagram() {
  return (
    <section className="py-20 px-6 bg-nin-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-heading text-4xl font-bold text-center text-nin-900 mb-6"
        >
          Como encontramos seu match
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center text-nin-600 mb-16 max-w-xl mx-auto"
        >
          Um processo simples e inteligente para encontrar o imóvel certo para você
        </motion.p>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-1">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
              className="h-full bg-nin-200 origin-left rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                custom={index}
                className="relative text-center"
              >
                {/* Step Circle */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-nin flex items-center justify-center relative z-10"
                >
                  <div className="w-20 h-20 bg-nin-100 rounded-full flex items-center justify-center text-nin-500">
                    <step.icon className="w-10 h-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-nin-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </motion.div>

                <h3 className="font-heading text-xl font-semibold text-nin-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-nin-600 text-sm">{step.description}</p>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-1 h-8 bg-nin-200 mx-auto my-4 rounded-full" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
