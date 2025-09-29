'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Landmark, Music, Theater, Clock, Ticket } from 'lucide-react'
import Image from 'next/image'

const tours = [
  {
    title: 'Museum Mile Highlights',
    duration: '3 hours',
    price: '$49 / person',
    description:
      'Guided walk through the city’s premier museums with curated stops and skip‑the‑line entry.',
    image: '/images/interior-deluxe.jpg',
  },
  {
    title: 'Live Music & Arts District',
    duration: '2.5 hours',
    price: '$45 / person',
    description:
      'Discover indie galleries, street art, and an intimate live set in a local venue.',
    image: '/images/living-area.jpg',
  },
  {
    title: 'Theatre Backstage Experience',
    duration: '2 hours',
    price: '$69 / person',
    description:
      'Go behind the curtain with a theatre professional and see how productions come to life.',
    image: '/images/hero-city.jpg',
  },
]

export default function CulturalToursPage() {
  return (
    <main className="min-h-screen">
      <Navigation onBookNow={() => {}} />

      {/* Header */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/welcome-skyline.jpg" alt="Cultural Tours" fill className="object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-shadow"
          >
            Cultural Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg opacity-90"
          >
            Immerse yourself in the city’s arts, history, and heritage
          </motion.p>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-3">
              <Landmark className="w-6 h-6 text-gold-500" />
              <div>
                <h3 className="font-montserrat font-semibold text-gray-900">World‑class Museums</h3>
                <p className="text-gray-600">Curated routes with expert commentary.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-3">
              <Music className="w-6 h-6 text-gold-500" />
              <div>
                <h3 className="font-montserrat font-semibold text-gray-900">Live Music</h3>
                <p className="text-gray-600">From jazz lounges to indie stages.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-3">
              <Theater className="w-6 h-6 text-gold-500" />
              <div>
                <h3 className="font-montserrat font-semibold text-gray-900">Theatre & Backstage</h3>
                <p className="text-gray-600">Unique access and insider stories.</p>
              </div>
            </div>
          </div>

          {/* Tour Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-52">
                  <Image src={t.image} alt={t.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">{t.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{t.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-700 mb-4">
                    <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> {t.duration}</span>
                    <span className="inline-flex items-center gap-2"><Ticket className="w-4 h-4" /> {t.price}</span>
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


