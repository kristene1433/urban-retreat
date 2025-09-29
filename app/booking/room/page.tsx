'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Users, Wifi, Car, Coffee, ChevronRight, ChevronLeft } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const roomTypes = [
  {
    id: 'studio',
    name: 'Studio Apartment',
    price: 199,
    maxGuests: 2,
    image: '/images/interior-deluxe.jpg',
    amenities: ['WiFi', 'Kitchen', 'City View'],
    description: 'Perfect for couples, featuring modern amenities and stunning city views.'
  },
  {
    id: 'deluxe',
    name: 'Deluxe Suite',
    price: 299,
    maxGuests: 4,
    image: '/images/living-area.jpg',
    amenities: ['WiFi', 'Kitchen', 'City View', 'Balcony'],
    description: 'Spacious suite with separate living area and private balcony.'
  },
  {
    id: 'penthouse',
    name: 'Penthouse',
    price: 499,
    maxGuests: 6,
    image: '/images/penthouse.jpg',
    amenities: ['WiFi', 'Kitchen', 'City View', 'Balcony', 'Rooftop Access'],
    description: 'Luxury penthouse with panoramic city views and exclusive rooftop access.'
  }
]

export default function BookingRoomPage() {
  const [selectedRoom, setSelectedRoom] = useState('')

  const handleContinue = () => {
    if (!selectedRoom) {
      alert('Please select a room type')
      return
    }
    // Redirect to add-ons
    window.location.href = '/booking/addons'
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation onBookNow={() => {}} />

      {/* Page Header */}
      <section className="bg-gray-50 py-8 pt-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-montserrat text-gray-900">Select your room</h1>
            <p className="text-gray-600 mt-2">Choose from our available accommodations</p>
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
              <div className="flex items-center space-x-2 px-4 py-2 bg-gold-500 text-black font-semibold rounded-lg">
                <Home className="w-5 h-5" />
                <span>Room</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2 px-4 py-2 text-gray-500">
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
                  Choose Your Room
                </h2>
                
                <div className="space-y-6">
                  {roomTypes.map((room, index) => (
                    <motion.div
                      key={room.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                        selectedRoom === room.id 
                          ? 'border-gold-500 bg-gold-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedRoom(room.id)}
                    >
                      <div className="flex gap-6">
                        <div className="w-32 h-24 relative rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={room.image}
                            alt={room.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-gold-600">${room.price}</div>
                              <div className="text-sm text-gray-500">per night</div>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3">{room.description}</p>
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Users className="w-4 h-4" />
                              <span>{room.maxGuests} guests</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Wifi className="w-4 h-4" />
                              <span>Free WiFi</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {room.amenities.map((amenity, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                              >
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <Link
                    href="/booking/dates"
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back to Dates
                  </Link>
                  <button
                    onClick={handleContinue}
                    disabled={!selectedRoom}
                    className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Add-ons
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
                  {selectedRoom ? (
                    <div className="flex items-center space-x-3 p-3 bg-gold-50 rounded-lg">
                      <div className="w-12 h-12 bg-gold-200 rounded-lg flex items-center justify-center">
                        <Home className="w-6 h-6 text-gold-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Room</p>
                        <p className="font-medium text-gray-900">
                          {roomTypes.find(r => r.id === selectedRoom)?.name}
                        </p>
                        <p className="text-sm text-gold-600">
                          ${roomTypes.find(r => r.id === selectedRoom)?.price}/night
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Home className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Room</p>
                        <p className="font-medium text-gray-900">No room selected</p>
                      </div>
                    </div>
                  )}

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">i</span>
                      </div>
                      <p className="text-sm text-blue-800">
                        You can add extra services in the 'Add-ons' step.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Total</span>
                      <span className="text-lg font-bold text-gray-900">
                        ${selectedRoom ? roomTypes.find(r => r.id === selectedRoom)?.price : 0}.00
                      </span>
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
