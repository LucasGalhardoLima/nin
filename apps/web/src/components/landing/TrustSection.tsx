'use client';

import { motion } from 'framer-motion';
import { Lock, UserX, Settings, Trash2 } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const trustItems = [
  {
    icon: Lock,
    title: 'Dados criptografados',
    description: 'Suas informações são protegidas com criptografia de ponta',
  },
  {
    icon: UserX,
    title: 'Nunca compartilhamos',
    description: 'Seus dados pessoais nunca são vendidos ou compartilhados',
  },
  {
    icon: Settings,
    title: 'Você controla',
    description: 'Gerencie suas preferências e informações a qualquer momento',
  },
  {
    icon: Trash2,
    title: 'Exclusão garantida',
    description: 'Solicite a exclusão completa dos seus dados quando quiser',
  },
];

export function TrustSection() {
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
          className="font-heading text-4xl font-bold text-center text-nin-900 mb-6"
        >
          Sua privacidade é prioridade
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center text-nin-600 mb-16 max-w-xl mx-auto"
        >
          Construímos o Nin. com segurança e transparência em mente
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-white rounded-nin p-6 text-center shadow-nin"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-sage-100 rounded-full flex items-center justify-center text-sage-600">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-nin-900 mb-2">
                {item.title}
              </h3>
              <p className="text-nin-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
