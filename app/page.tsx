'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, Search, ChevronDown } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import WelcomeSection from '@/components/WelcomeSection'
import FeaturesSection from '@/components/FeaturesSection'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Navigation onBookNow={() => setIsBookingOpen(true)} />
      
      <Hero onBookNow={() => setIsBookingOpen(true)} />
      
      <WelcomeSection />
      
      <FeaturesSection />
      
      <Footer />
      
      <BookingForm 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </main>
  )
}
