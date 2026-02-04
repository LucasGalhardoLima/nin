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
      <section className="min-h-screen flex items-center pt-20 px-6 bg-gradient-to-br from-nin-50 via-white to-sage-50/30 relative overflow-hidden">
        {/* Advanced Decorative elements */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-nin-200/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[5%] right-[-10%] w-[50%] h-[50%] bg-honey-200/10 rounded-full blur-[100px]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto w-full relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nin-100 text-nin-700 text-sm font-medium mb-8"
            >
              <MapPin className="w-4 h-4" />
              Disponível agora em Matão e Araraquara
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-nin-900 mb-8 tracking-tight leading-[1.1]"
            >
              Seu próximo lar, <br />
              <span className="text-nin-500">no seu estilo.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-nin-700 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Cansado de ver anúncios que não fazem sentido? <br className="hidden md:block" />
              O Nin. cruza estilo de vida, orçamento e bairro para mostrar só o que combina com você.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-2 text-xs font-semibold text-nin-600 mb-10"
            >
              <span className="px-3 py-1 rounded-full bg-white border border-nin-200">
                Preferências de vida
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-nin-200">
                Score 0–100
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-nin-200">
                Fontes locais integradas
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div whileHover={hoverScale}>
                <Link href="/onboarding" className="btn btn-primary text-xl px-10 py-5 shadow-xl shadow-nin-500/20">
                  Começar agora
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={hoverScale}>
                <Link href="#como-funciona" className="btn btn-secondary text-xl px-10 py-5">
                  Saiba como
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <section id="como-funciona" className="py-24 px-6 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl font-bold text-center text-nin-900 mb-4"
          >
            A inteligência por trás do match
          </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center text-nin-600 mb-16 max-w-2xl mx-auto"
        >
          Cruzamos dados de segurança, silêncio e proximidade com infraestrutura em todos os bairros.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Perfil de Estilo de Vida"
            description="Defina o que é essencial: silêncio, escolas, comércio, segurança e pets."
          />
          <FeatureCard
            icon={<Heart className="w-8 h-8" />}
            title="Algoritmo de Afinidade"
            description="Cruzamos orçamento, espaço e vizinhança para gerar um score de 0 a 100."
          />
          <FeatureCard
            icon={<MapPin className="w-8 h-8" />}
            title="Curadoria Local"
            description="Reunimos imóveis de fontes locais e atualizamos diariamente."
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
            Começamos em duas cidades do interior paulista
            e estamos crescendo com parcerias locais.
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
      <section className="py-24 px-6 bg-nin-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -ml-48 -mb-48" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-8"
          >
            O próximo capítulo da sua vida começa aqui.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-nin-100 text-xl mb-12 opacity-90 leading-relaxed">
            Comece agora e receba opções realmente alinhadas ao que você procura, sem perder tempo com visitas frustrantes.
          </motion.p>
          <motion.div variants={fadeInUp} whileHover={hoverScale}>
            <Link href="/register" className="btn bg-white text-nin-900 hover:bg-nin-50 text-xl px-12 py-5 shadow-2xl">
              Encontrar meu imóvel agora
              <ArrowRight className="w-6 h-6 ml-2" />
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
