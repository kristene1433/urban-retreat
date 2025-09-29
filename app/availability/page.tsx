'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, CheckCircle, XCircle } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const roomTypes = [
  {
    id: 'studio',
    name: 'Studio Apartment',
    price: 199,
    maxGuests: 2,
    available: true
  },
  {
    id: 'deluxe',
    name: 'Deluxe Suite',
    price: 299,
    maxGuests: 4,
    available: true
  },
  {
    id: 'penthouse',
    name: 'Penthouse',
    price: 499,
    maxGuests: 6,
    available: false
  }
]

const availabilityData = [
  { date: '2024-01-15', studio: true, deluxe: true, penthouse: false },
  { date: '2024-01-16', studio: true, deluxe: false, penthouse: false },
  { date: '2024-01-17', studio: false, deluxe: true, penthouse: false },
  { date: '2024-01-18', studio: true, deluxe: true, penthouse: true },
  { date: '2024-01-19', studio: true, deluxe: true, penthouse: false },
  { date: '2024-01-20', studio: false, deluxe: false, penthouse: false },
  { date: '2024-01-21', studio: true, deluxe: true, penthouse: true },
]

export default function AvailabilityPage() {
  const [selectedCheckIn, setSelectedCheckIn] = useState('')
  const [selectedCheckOut, setSelectedCheckOut] = useState('')
  const [selectedGuests, setSelectedGuests] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState('')

  const handleSearch = () => {
    if (!selectedCheckIn || !selectedCheckOut) {
      alert('Please select both check-in and check-out dates')
      return
    }
    // Here you would typically filter availability based on dates
    console.log('Searching for:', { selectedCheckIn, selectedCheckOut, selectedGuests, selectedRoom })
  }

  return (
    <main className="min-h-screen">
      <Navigation onBookNow={() => {}} />

      {/* Header */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-city.jpg" alt="Availability" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-shadow"
          >
            Check Availability
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg opacity-90"
          >
            Find your perfect dates and book your stay
          </motion.p>
        </div>
      </section>

      {/* Search Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold font-montserrat text-gray-900 mb-6 text-center">
              Search Availability
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={selectedCheckIn}
                    onChange={(e) => setSelectedCheckIn(e.target.value)}
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
                    value={selectedCheckOut}
                    onChange={(e) => setSelectedCheckOut(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedGuests}
                    onChange={(e) => setSelectedGuests(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSearch}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Clock className="w-5 h-5" />
                  Search
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Room Availability */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-4">
              Available Rooms
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our available accommodations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  !room.available ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold font-montserrat text-gray-900">
                    {room.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {room.available ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${
                      room.available ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {room.available ? 'Available' : 'Unavailable'}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price per night:</span>
                    <span className="font-semibold text-gray-900">${room.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max guests:</span>
                    <span className="font-semibold text-gray-900">{room.maxGuests}</span>
                  </div>
                </div>

                <Link
                  href={room.available ? '/booking' : '#'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    room.available
                      ? 'bg-gold-500 hover:bg-gold-600 text-black'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {room.available ? 'Book Now' : 'Not Available'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar View */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-4">
              Availability Calendar
            </h2>
            <p className="text-xl text-gray-600">
              View availability for the next 7 days
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Studio</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Deluxe Suite</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Penthouse</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {availabilityData.map((day, index) => (
                    <tr key={day.date} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {new Date(day.date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {day.studio ? (
                          <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {day.deluxe ? (
                          <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {day.penthouse ? (
                          <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
