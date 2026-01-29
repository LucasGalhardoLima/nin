'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Heart, MapPin, Users, ArrowRight } from 'lucide-react';
import {
  StatsSection,
  MatchingDiagram,
  PropertyShowcase,
  ComparisonTable,
  TestimonialsSection,
  TrustSection,
  FAQAccordion,
  WaveDivider,
} from '@/components/landing';
import { fadeInUp, staggerContainer, hoverScale } from '@/lib/animations';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-nin-50/80 backdrop-blur-md border-b border-nin-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 bg-nin-500 rounded-full flex items-center justify-center"
            >
              <Home className="w-5 h-5 text-white" />
            </motion.div>
            <span className="font-heading text-2xl font-bold text-nin-900">Nin.</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/login" className="btn btn-secondary">
              Entrar
            </Link>
            <motion.div whileHover={hoverScale}>
              <Link href="/onboarding" className="btn btn-primary">
                Começar
              </Link>
            </motion.div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-nin-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-sage-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-honey-100 rounded-full opacity-15 blur-3xl" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-5xl md:text-6xl font-bold text-nin-900 mb-6 text-balance"
            >
              Encontre seu{' '}
              <span className="text-nin-500">ninho perfeito</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-nin-700 mb-10 text-balance"
            >
              Não procure imóveis. Deixe que eles encontrem você.
              O Nin. combina suas preferências de vida com propriedades
              em Matão e Araraquara.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
            <motion.div whileHover={hoverScale}>
                <Link href="/onboarding" className="btn btn-primary text-lg px-8 py-4">
                  Encontrar meu ninho
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={hoverScale}>
                <Link href="#como-funciona" className="btn btn-secondary text-lg px-8 py-4">
                  Como funciona
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <section id="como-funciona" className="py-20 px-6 bg-white">
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
            Como o Nin. funciona
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Conte sobre você"
              description="Tamanho da família, pets, crianças, orçamento. Tudo para entender suas necessidades."
            />
            <FeatureCard
              icon={<Heart className="w-8 h-8" />}
              title="Defina seu estilo de vida"
              description="Prefere tranquilidade? Perto de escolas? Fácil acesso a transporte? Você decide os pesos."
            />
            <FeatureCard
              icon={<MapPin className="w-8 h-8" />}
              title="Receba matches perfeitos"
              description="Imóveis ordenados por compatibilidade. Quanto maior o score, mais perfeito para você."
            />
          </div>
        </motion.div>
      </section>

      {/* Matching Diagram */}
      <MatchingDiagram />

      {/* Property Showcase */}
      <PropertyShowcase />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Cities Section */}
      <section className="py-20 px-6 bg-white">
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
            Disponível em
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-nin-600 mb-12 max-w-xl mx-auto"
          >
            Começamos em duas cidades do interior paulista,
            mas estamos crescendo rapidamente.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
            <CityCard name="Matão" state="SP" />
            <CityCard name="Araraquara" state="SP" />
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Trust Section */}
      <TrustSection />

      {/* FAQ */}
      <FAQAccordion />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-nin-500">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl font-bold text-white mb-6"
          >
            Pronto para encontrar seu ninho?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-nin-100 text-lg mb-10">
            Cadastre-se gratuitamente e comece a receber matches de imóveis
            personalizados para o seu estilo de vida.
          </motion.p>
          <motion.div variants={fadeInUp} whileHover={hoverScale}>
            <Link href="/register" className="btn bg-white text-nin-900 hover:bg-nin-50 text-lg px-8 py-4">
              Criar minha conta grátis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-nin-900 text-nin-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-nin-500 rounded-full flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="font-heading text-xl font-bold text-white">Nin.</span>
          </div>
          <p className="text-nin-400 text-sm">
            © 2024 Nin. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(61, 35, 20, 0.12)' }}
      className="card text-center transition-shadow"
    >
      <div className="w-16 h-16 bg-nin-100 rounded-full flex items-center justify-center mx-auto mb-6 text-nin-500">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-semibold text-nin-900 mb-3">
        {title}
      </h3>
      <p className="text-nin-600">
        {description}
      </p>
    </motion.div>
  );
}

function CityCard({ name, state }: { name: string; state: string }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(61, 35, 20, 0.12)' }}
      className="card flex items-center gap-4 transition-shadow"
    >
      <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center text-sage-500">
        <MapPin className="w-6 h-6" />
      </div>
      <div>
        <p className="font-heading text-xl font-semibold text-nin-900">{name}</p>
        <p className="text-nin-500 text-sm">{state}</p>
      </div>
    </motion.div>
  );
}
