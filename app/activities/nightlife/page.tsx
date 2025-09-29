'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Music, Wine, MapPin, Clock, Ticket } from 'lucide-react'
import Image from 'next/image'

const experiences = [
  {
    title: 'Rooftop Cocktail Hour',
    duration: '2 hours',
    price: '$45 / person',
    description:
      'Sunset drinks with city views. Craft cocktails and small plates on our private rooftop.',
    image: '/images/rooftop-pool.jpg',
  },
  {
    title: 'Jazz Lounge Experience',
    duration: '3 hours',
    price: '$65 / person',
    description:
      'Intimate live jazz in a speakeasy setting. Table service and premium spirits included.',
    image: '/images/living-area.jpg',
  },
  {
    title: 'Nightlife District Tour',
    duration: '4 hours',
    price: '$89 / person',
    description:
      'Hit the best bars and clubs with a local guide. Skip lines and VIP access included.',
    image: '/images/hero-city.jpg',
  },
]

export default function NightlifePage() {
  return (
    <main className="min-h-screen">
      <Navigation onBookNow={() => {}} />

      {/* Header */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-city.jpg" alt="Nightlife" fill className="object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-shadow"
          >
            Nightlife
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg opacity-90"
          >
            Experience the city after dark with exclusive access
          </motion.p>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-3">
              <Wine className="w-6 h-6 text-gold-500" />
              <div>
                <h3 className="font-montserrat font-semibold text-gray-900">Exclusive Access</h3>
                <p className="text-gray-600">Skip lines and enjoy VIP treatment.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-3">
              <Music className="w-6 h-6 text-gold-500" />
              <div>
                <h3 className="font-montserrat font-semibold text-gray-900">Live Music</h3>
                <p className="text-gray-600">From jazz lounges to rooftop DJs.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-3">
              <MapPin className="w-6 h-6 text-gold-500" />
              <div>
                <h3 className="font-montserrat font-semibold text-gray-900">Safe & Secure</h3>
                <p className="text-gray-600">Concierge assistance and safe transport.</p>
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
