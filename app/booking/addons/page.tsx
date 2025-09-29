'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Car, Coffee, Wifi, Utensils, ChevronRight, ChevronLeft } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

const addOns = [
  {
    id: 'airport-pickup',
    name: 'Airport Pickup',
    price: 50,
    icon: Car,
    description: 'Private transfer from airport to property'
  },
  {
    id: 'breakfast',
    name: 'Daily Breakfast',
    price: 25,
    icon: Coffee,
    description: 'Continental breakfast delivered to your room'
  },
  {
    id: 'wifi-premium',
    name: 'Premium WiFi',
    price: 15,
    icon: Wifi,
    description: 'High-speed internet for streaming and work'
  },
  {
    id: 'room-service',
    name: 'Room Service',
    price: 35,
    icon: Utensils,
    description: '24/7 room service with local cuisine'
  },
  {
    id: 'late-checkout',
    name: 'Late Checkout',
    price: 30,
    icon: Plus,
    description: 'Check out until 2 PM (subject to availability)'
  },
  {
    id: 'city-tour',
    name: 'City Tour',
    price: 75,
    icon: Car,
    description: 'Guided tour of the city highlights'
  }
]

export default function BookingAddOnsPage() {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    )
  }

  const getTotalPrice = () => {
    return selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId)
      return total + (addOn?.price || 0)
    }, 0)
  }

  const handleContinue = () => {
    // Redirect to contact
    window.location.href = '/booking/contact'
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation onBookNow={() => {}} />

      {/* Page Header */}
      <section className="bg-gray-50 py-8 pt-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-montserrat text-gray-900">Add extra services</h1>
            <p className="text-gray-600 mt-2">Enhance your stay with these optional services</p>
          </div>
        </div>
      </section>

      {/* Steps Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-center py-6">
            <nav className="flex items-center space-x-8">
              <Link href="/booking/dates" className="flex items-center space-x-2 px-4 py-2 text-green-600 hover:text-green-700">
                <span>Dates</span>
              </Link>
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <Link href="/booking/room" className="flex items-center space-x-2 px-4 py-2 text-green-600 hover:text-green-700">
                <span>Room</span>
              </Link>
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2 px-4 py-2 bg-gold-500 text-black font-semibold rounded-lg">
                <Plus className="w-5 h-5" />
                <span>Add-ons</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2 px-4 py-2 text-gray-500">
                <span>Contact</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2 px-4 py-2 text-gray-500">
                <span>Payment</span>
              </div>
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
                  Add Extra Services
                </h2>
                <p className="text-gray-600 mb-8">
                  Enhance your stay with these optional services
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addOns.map((addOn, index) => {
                    const Icon = addOn.icon
                    const isSelected = selectedAddOns.includes(addOn.id)
                    
                    return (
                      <motion.div
                        key={addOn.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                          isSelected 
                            ? 'border-gold-500 bg-gold-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => toggleAddOn(addOn.id)}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            isSelected ? 'bg-gold-500' : 'bg-gray-100'
                          }`}>
                            <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <h3 className="font-semibold text-gray-900">{addOn.name}</h3>
                              <span className="text-lg font-bold text-gold-600">${addOn.price}</span>
                            </div>
                            <p className="text-sm text-gray-600">{addOn.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="flex gap-4 mt-8">
                  <Link
                    href="/booking/room"
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back to Room
                  </Link>
                  <button
                    onClick={handleContinue}
                    className="btn-primary flex items-center gap-2"
                  >
                    Continue to Contact
                    <ChevronRight className="w-4 h-4" />
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
                  <div className="flex items-center space-x-3 p-3 bg-gold-50 rounded-lg">
                    <div className="w-12 h-12 bg-gold-200 rounded-lg flex items-center justify-center">
                      <Plus className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Room</p>
                      <p className="font-medium text-gray-900">Deluxe Suite</p>
                      <p className="text-sm text-gold-600">$299/night</p>
                    </div>
                  </div>

                  {selectedAddOns.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Add-ons:</p>
                      {selectedAddOns.map(addOnId => {
                        const addOn = addOns.find(a => a.id === addOnId)
                        return addOn ? (
                          <div key={addOnId} className="flex justify-between text-sm">
                            <span className="text-gray-600">{addOn.name}</span>
                            <span className="font-medium">${addOn.price}</span>
                          </div>
                        ) : null
                      })}
                    </div>
                  )}

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">i</span>
                      </div>
                      <p className="text-sm text-blue-800">
                        Add-ons can be modified or cancelled up to 24 hours before check-in.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Room (3 nights)</span>
                        <span className="font-medium">$897.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Add-ons</span>
                        <span className="font-medium">${getTotalPrice()}.00</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-lg font-bold text-gray-900">
                          ${897 + getTotalPrice()}.00
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
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
