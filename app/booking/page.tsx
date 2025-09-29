'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Home, Plus, CreditCard, ChevronRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

const steps = [
  { id: 'dates', name: 'Dates', icon: Calendar, href: '/booking/dates' },
  { id: 'room', name: 'Room', icon: Home, href: '/booking/room' },
  { id: 'addons', name: 'Add-ons', icon: Plus, href: '/booking/addons' },
  { id: 'contact', name: 'Contact', icon: Calendar, href: '/booking/contact' },
  { id: 'payment', name: 'Payment', icon: CreditCard, href: '/booking/payment' },
]

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState('dates')
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: '',
    addOns: [],
    contactInfo: {},
    paymentInfo: {}
  })

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation onBookNow={() => {}} />

      {/* Page Header */}
      <section className="bg-gray-50 py-8 pt-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-montserrat text-gray-900">Complete your reservation</h1>
            <p className="text-gray-600 mt-2">Start by selecting your dates and preferences</p>
          </div>
        </div>
      </section>

      {/* Steps Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-center py-6">
            <nav className="flex items-center space-x-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = currentStep === step.id
                const isCompleted = steps.findIndex(s => s.id === currentStep) > index
                
                return (
                  <div key={step.id} className="flex items-center">
                    <Link
                      href={step.href}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'bg-gold-500 text-black font-semibold' 
                          : isCompleted
                          ? 'text-green-600 hover:text-green-700'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{step.name}</span>
                    </Link>
                    {index < steps.length - 1 && (
                      <ChevronRight className="w-5 h-5 text-gray-400 mx-2" />
                    )}
                  </div>
                )
              })}
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Booking Area */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold font-montserrat text-gray-900 mb-6">
                  Select Your Dates
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-in Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="date"
                        value={bookingData.checkIn}
                        onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="date"
                        value={bookingData.checkOut}
                        onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                    <button
                      onClick={() => setBookingData({...bookingData, guests: Math.max(1, bookingData.guests - 1)})}
                      className="px-4 py-3 text-gray-600 hover:text-gray-800"
                    >
                      -
                    </button>
                    <span className="px-6 py-3 font-medium">{bookingData.guests} guest{bookingData.guests !== 1 ? 's' : ''}</span>
                    <button
                      onClick={() => setBookingData({...bookingData, guests: Math.min(6, bookingData.guests + 1)})}
                      className="px-4 py-3 text-gray-600 hover:text-gray-800"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    href="/booking/room"
                    className="btn-primary flex items-center gap-2"
                  >
                    Continue to Room Selection
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    Save for Later
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Reservation Summary Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6 sticky top-8"
              >
                <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-4">
                  Reservation Summary
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Home className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Room</p>
                      <p className="font-medium text-gray-900">No room selected</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">i</span>
                      </div>
                      <p className="text-sm text-blue-800">
                        You will see the summary after selecting a room in the 'Room' step.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Total</span>
                      <span className="text-lg font-bold text-gray-900">$0.00</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Prices include taxes and fees
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
