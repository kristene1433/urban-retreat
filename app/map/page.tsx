'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { MapPin, Phone, Mail, Navigation as NavIcon } from 'lucide-react'

export default function MapPage() {
  // You can replace these with your real coordinates and address
  const address = {
    line1: '123 Urban Street',
    line2: 'Downtown District',
    city: 'City, State 12345',
    lat: 40.758701,
    lng: -73.9857,
  }

  const googleEmbed = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24185.93513592288!2d${address.lng}!3d${address.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v${Date.now()}`

  return (
    <main className="min-h-screen">
      <Navigation onBookNow={() => {}} />

      {/* Page Header */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-city.jpg" alt="Map header" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-shadow"
          >
            Map & Directions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg opacity-90"
          >
            Find the fastest way to reach Urban Retreat
          </motion.p>
        </div>
      </section>

      {/* Map + Details */}
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
              <div className="relative pt-[56.25%]">{/* 16:9 ratio */}
                <iframe
                  src={googleEmbed}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Urban Retreat Location"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl font-bold font-montserrat text-gray-900">Our Location</h2>

            <div className="space-y-4 bg-gray-50 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-1" />
                <div className="text-gray-700">
                  <p>{address.line1}</p>
                  <p>{address.line2}</p>
                  <p>{address.city}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500" />
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-500" />
                <p className="text-gray-700">info@urbanretreat.com</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${address.lat},${address.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center flex items-center justify-center gap-2"
              >
                <NavIcon className="w-5 h-5" />
                Open in Google Maps
              </a>
              <a
                href={`https://maps.apple.com/?daddr=${address.lat},${address.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                Open in Apple Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


