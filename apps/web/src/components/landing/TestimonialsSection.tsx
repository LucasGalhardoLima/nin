'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const testimonials = [
  {
    quote:
      'Em pouco tempo encontrei o apartamento certo para minha família. O score fez muito sentido.',
    name: 'Maria Silva',
    city: 'Matão, SP',
    initials: 'MS',
  },
  {
    quote:
      'Foi direto ao ponto. Coloquei pets e escola perto, e o Nin. trouxe opções realmente alinhadas.',
    name: 'João Santos',
    city: 'Araraquara, SP',
    initials: 'JS',
  },
  {
    quote:
      'A melhor parte foi não navegar por centenas de imóveis. Os matches já vinham por compatibilidade.',
    name: 'Ana Costa',
    city: 'Matão, SP',
    initials: 'AC',
  },
];

export function TestimonialsSection() {
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
          O que dizem nossos usuários
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center text-nin-600 mb-16 max-w-xl mx-auto"
        >
          Histórias de quem encontrou o lugar ideal com menos esforço
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="card relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-nin-200" />

              <p className="text-nin-700 mb-6 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-nin-500 flex items-center justify-center text-white font-semibold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-nin-900">{testimonial.name}</p>
                  <p className="text-nin-500 text-sm">{testimonial.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
