'use client';

import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const properties = [
  {
    id: 1,
    title: 'Casa em Condomínio',
    location: 'Jardim Europa, Matão',
    price: 'R$ 450.000',
    beds: 3,
    baths: 2,
    area: 180,
    matchScore: 92,
    image: '/images/house-1.jpg',
  },
  {
    id: 2,
    title: 'Apartamento Moderno',
    location: 'Centro, Araraquara',
    price: 'R$ 320.000',
    beds: 2,
    baths: 1,
    area: 85,
    matchScore: 87,
    image: '/images/house-2.jpg',
  },
  {
    id: 3,
    title: 'Sobrado Amplo',
    location: 'Vila Santa Cruz, Matão',
    price: 'R$ 520.000',
    beds: 4,
    baths: 3,
    area: 220,
    matchScore: 78,
    image: '/images/house-3.jpg',
  },
];

function getMatchColor(score: number) {
  if (score >= 90) return 'bg-match-excellent';
  if (score >= 70) return 'bg-match-good';
  if (score >= 50) return 'bg-match-fair';
  return 'bg-match-low';
}

export function PropertyShowcase() {
  return (
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
          Imóveis em destaque
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center text-nin-600 mb-16 max-w-xl mx-auto"
        >
          Veja alguns dos imóveis que estão esperando pelo match perfeito
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="card overflow-hidden group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 -mx-6 -mt-6 mb-4 bg-nin-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-nin-300">
                  <Square className="w-16 h-16" />
                </div>
                {/* Match Score Badge */}
                <div
                  className={`absolute top-4 right-4 ${getMatchColor(
                    property.matchScore
                  )} text-white px-3 py-1 rounded-full text-sm font-bold`}
                >
                  {property.matchScore}% match
                </div>
              </div>

              <h3 className="font-heading text-xl font-semibold text-nin-900 mb-1 group-hover:text-nin-500 transition-colors">
                {property.title}
              </h3>

              <div className="flex items-center gap-1 text-nin-500 text-sm mb-3">
                <MapPin className="w-4 h-4" />
                <span>{property.location}</span>
              </div>

              <p className="font-heading text-2xl font-bold text-nin-900 mb-4">
                {property.price}
              </p>

              <div className="flex items-center gap-4 text-nin-600 text-sm border-t border-nin-100 pt-4 -mx-6 px-6">
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  <span>{property.beds}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  <span>{property.baths}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Square className="w-4 h-4" />
                  <span>{property.area}m²</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center mt-12">
          <Link
            href="/register"
            className="btn btn-primary text-lg inline-flex items-center gap-2"
          >
            Ver todos os imóveis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
