'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { reviews } from '@/lib/reviews'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen">
      <Navigation onBookNow={() => {}} />

      {/* Header */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/welcome-skyline.jpg" alt="Reviews" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-shadow"
          >
            Guest Reviews
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg opacity-90"
          >
            What our guests are saying about Urban Retreat
          </motion.p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r, index) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 font-montserrat">{r.title}</h3>
                  <Stars rating={r.rating} />
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-4">{r.content}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <span className="font-medium text-gray-700">{r.guestName}</span> • {r.stayDate} • {r.roomType}
                </div>
                <Link
                  href={`/reviews/${r.id}`}
                  className="btn-secondary inline-block"
                >
                  Read full review
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


