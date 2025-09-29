'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { UtensilsCrossed, Wine, MapPin, Clock, Ticket } from 'lucide-react'
import Image from 'next/image'

const experiences = [
  {
    title: 'Chef’s Tasting Menu',
    duration: '2 hours',
    price: '$95 / person',
    description:
      'Seven seasonal courses at a top-rated bistro. Optional wine pairing available.',
    image: '/images/dining.jpg',
  },
  {
    title: 'Skyline Rooftop Dinner',
    duration: '2.5 hours',
    price: '$120 / person',
    description:
      'Al‑fresco dining with panoramic city views and a modern Mediterranean menu.',
    image: '/images/penthouse.jpg',
  },
  {
    title: 'Hidden Gems Food Walk',
    duration: '3 hours',
    price: '$69 / person',
    description:
      'Taste the city’s favorites across 5 local spots—dessert included.',
    image: '/images/living-area.jpg',
  },
]

export default function DiningPage() {
  return (
    <main className="min-h-screen">
      <Navigation onBookNow={() => {}} />

      {/* Header */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/dining.jpg" alt="Food & Dining" fill className="object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-shadow"
          >
            Food & Dining
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg opacity-90"
          >
            Curated culinary experiences across the city
          </motion.p>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-3">
              <UtensilsCrossed className="w-6 h-6 text-gold-500" />
              <div>
                <h3 className="font-montserrat font-semibold text-gray-900">Top Tables</h3>
                <p className="text-gray-600">Handpicked restaurants and chef partners.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-3">
              <Wine className="w-6 h-6 text-gold-500" />
              <div>
                <h3 className="font-montserrat font-semibold text-gray-900">Pairings</h3>
                <p className="text-gray-600">Thoughtful wine & zero‑proof options.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-3">
              <MapPin className="w-6 h-6 text-gold-500" />
              <div>
                <h3 className="font-montserrat font-semibold text-gray-900">Walkable</h3>
                <p className="text-gray-600">Great spots within minutes of Urban Retreat.</p>
              </div>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-52">
                  <Image src={e.image} alt={e.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">{e.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{e.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-700 mb-4">
                    <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> {e.duration}</span>
                    <span className="inline-flex items-center gap-2"><Ticket className="w-4 h-4" /> {e.price}</span>
                  </div>
                  <a href="#" className="btn-primary inline-block w-full text-center">Request Booking</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


