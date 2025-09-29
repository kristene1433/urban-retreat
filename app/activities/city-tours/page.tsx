'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { MapPin, Camera, Utensils, Clock, Ticket } from 'lucide-react'
import Image from 'next/image'

const tours = [
  {
    title: 'Historic Downtown Walking Tour',
    duration: '2.5 hours',
    price: '$39 / person',
    description:
      'Stroll through the historic core with a local guide. Architecture highlights, hidden alleys, and landmark stories.',
    image: '/images/welcome-skyline.jpg',
  },
  {
    title: 'Skyline Night Photo Tour',
    duration: '3 hours',
    price: '$59 / person',
    description:
      'Capture the city after dark from our best viewpoints. Tripods provided; suitable for all skill levels.',
    image: '/images/welcome-skyline.jpg',
  },
  {
    title: 'Taste of the City Food Crawl',
    duration: '3.5 hours',
    price: '$79 / person',
    description:
      'Sample signature bites across 5 acclaimed spots. Vegetarian options available on request.',
    image: '/images/dining.jpg',
  },
]

export default function CityToursPage() {
  return (
    <main className="min-h-screen">
      <Navigation onBookNow={() => {}} />

      {/* Header */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-city.jpg" alt="City Tours" fill className="object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-shadow"
          >
            City Tours
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg opacity-90"
          >
            Explore the best of the city with curated experiences
          </motion.p>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-3">
              <MapPin className="w-6 h-6 text-gold-500" />
              <div>
                <h3 className="font-montserrat font-semibold text-gray-900">Local Guides</h3>
                <p className="text-gray-600">Insider routes and stories you won’t find online.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-3">
              <Camera className="w-6 h-6 text-gold-500" />
              <div>
                <h3 className="font-montserrat font-semibold text-gray-900">Iconic Views</h3>
                <p className="text-gray-600">Photogenic stops timed for great light.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex items-start gap-3">
              <Utensils className="w-6 h-6 text-gold-500" />
              <div>
                <h3 className="font-montserrat font-semibold text-gray-900">Curated Tastes</h3>
                <p className="text-gray-600">Optional food add‑ons with local favorites.</p>
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


