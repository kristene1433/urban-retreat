'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star, ArrowLeft } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getReviewById } from '@/lib/reviews'

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

export default function ReviewDetail({ params }: { params: { id: string } }) {
  const review = getReviewById(params.id)
  if (!review) return notFound()

  return (
    <main className="min-h-screen">
      <Navigation onBookNow={() => {}} />

      {/* Header */}
      <section className="relative h-60 md:h-72 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-city.jpg" alt="Review" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-shadow">Guest Review</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <Link href="/reviews" className="inline-flex items-center text-gray-600 hover:text-gold-600 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all reviews
          </Link>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold font-montserrat text-gray-900">{review.title}</h2>
              <Stars rating={review.rating} />
            </div>
            <div className="text-sm text-gray-500 mb-6">
              <span className="font-medium text-gray-700">{review.guestName}</span> • {review.stayDate} • {review.roomType}
            </div>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{review.content}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


