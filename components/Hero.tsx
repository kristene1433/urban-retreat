'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  onBookNow: () => void
}

export default function Hero({ onBookNow }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-city.jpg"
          alt="Urban cityscape at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-8 text-shadow"
        >
          Escape to Urban Retreat
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-12 opacity-90"
        >
          Experience luxury and comfort in the heart of the city
        </motion.p>

        {/* Quick Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Date Input */}
            <div className="flex-1 relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Arrival - Departure"
                className="w-full pl-12 pr-4 py-4 bg-white rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all duration-300"
                readOnly
                onClick={onBookNow}
              />
            </div>

            {/* Guest Selector */}
            <div className="flex-1 relative">
              <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold-500 w-5 h-5" />
              <div className="flex items-center justify-between bg-white rounded-xl px-4 py-4">
                <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
                  <span className="text-gray-600 font-semibold">-</span>
                </button>
                <span className="text-gray-800 font-medium">1 Guest</span>
                <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
                  <span className="text-gray-600 font-semibold">+</span>
                </button>
              </div>
            </div>

            {/* Book Now Button */}
            <Link href="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Search className="w-5 h-5" />
                Book Now
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
