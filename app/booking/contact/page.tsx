'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Phone, ChevronRight, ChevronLeft } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BookingContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleContinue = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields')
      return
    }
    // Redirect to payment
    window.location.href = '/booking/payment'
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation onBookNow={() => {}} />

      {/* Page Header */}
      <section className="bg-gray-50 py-8 pt-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-montserrat text-gray-900">Contact information</h1>
            <p className="text-gray-600 mt-2">Please provide your contact details for the reservation</p>
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
              <Link href="/booking/addons" className="flex items-center space-x-2 px-4 py-2 text-green-600 hover:text-green-700">
                <span>Add-ons</span>
              </Link>
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2 px-4 py-2 bg-gold-500 text-black font-semibold rounded-lg">
                <User className="w-5 h-5" />
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
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Please provide your contact details for the reservation
                </p>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          placeholder="Enter your first name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Any special requests or notes for your stay..."
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <Link
                    href="/booking/addons"
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back to Add-ons
                  </Link>
                  <button
                    onClick={handleContinue}
                    className="btn-primary flex items-center gap-2"
                  >
                    Continue to Payment
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
                      <User className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Guest</p>
                      <p className="font-medium text-gray-900">
                        {formData.firstName && formData.lastName 
                          ? `${formData.firstName} ${formData.lastName}`
                          : 'Contact information needed'
                        }
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">i</span>
                      </div>
                      <p className="text-sm text-blue-800">
                        We'll use this information to send you confirmation and updates about your stay.
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
                        <span className="font-medium">$150.00</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-lg font-bold text-gray-900">$1,047.00</span>
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
