'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const faqs = [
  {
    question: 'O Nin. é gratuito?',
    answer:
      'Sim! O cadastro e uso básico do Nin. são totalmente gratuitos. Você pode criar seu perfil, definir preferências e receber matches sem custo algum.',
  },
  {
    question: 'Como funciona o score de compatibilidade?',
    answer:
      'Nosso algoritmo analisa suas preferências de vida, orçamento, tamanho da família e estilo de vida para calcular a compatibilidade com cada imóvel. Quanto maior o score, mais alinhado o imóvel está com o que você procura.',
  },
  {
    question: 'Em quais cidades o Nin. está disponível?',
    answer:
      'Atualmente estamos operando em Matão e Araraquara, no interior de São Paulo. Estamos expandindo rapidamente e em breve teremos mais cidades disponíveis.',
  },
  {
    question: 'Preciso ser corretor para usar?',
    answer:
      'Não! O Nin. foi criado para pessoas que estão buscando seu próximo lar. Se você está procurando um imóvel para morar ou investir, o Nin. é para você.',
  },
  {
    question: 'Como vocês protegem meus dados?',
    answer:
      'Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança. Nunca vendemos ou compartilhamos seus dados pessoais com terceiros. Você tem controle total sobre suas informações.',
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="border-b border-nin-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left hover:text-nin-500 transition-colors"
      >
        <span className="font-heading text-lg font-semibold text-nin-900 pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 bg-nin-100 rounded-full flex items-center justify-center text-nin-500"
        >
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-nin-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="max-w-3xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="font-heading text-4xl font-bold text-center text-nin-900 mb-6"
        >
          Perguntas frequentes
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center text-nin-600 mb-16 max-w-xl mx-auto"
        >
          Tire suas dúvidas sobre o Nin.
        </motion.p>

        <motion.div variants={fadeInUp} className="bg-white rounded-nin shadow-nin p-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
