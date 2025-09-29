'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Lock, ChevronLeft, CheckCircle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BookingPaymentPage() {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    billingAddress: '',
    city: '',
    zipCode: '',
    country: ''
  })

  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setPaymentData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.nameOnCard) {
      alert('Please fill in all required payment fields')
      return
    }

    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsCompleted(true)
    }, 3000)
  }

  if (isCompleted) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation onBookNow={() => {}} />
        
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-lg p-12"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h1 className="text-3xl font-bold font-montserrat text-gray-900 mb-4">
                Booking Confirmed!
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Thank you for your reservation. We've sent a confirmation email to your registered address.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Reservation Details</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Check-in:</span>
                    <span>March 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out:</span>
                    <span>March 18, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Room:</span>
                    <span>Deluxe Suite</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span className="font-semibold">$1,047.00</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Link
                  href="/"
                  className="btn-primary"
                >
                  Back to Home
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation onBookNow={() => {}} />

      {/* Page Header */}
      <section className="bg-gray-50 py-8 pt-20">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <h1 className="text-3xl font-bold font-montserrat text-gray-900">Complete your payment</h1>
              <p className="text-gray-600 mt-2">Secure payment powered by Stripe</p>
            </div>
            <div className="flex items-center gap-3">
              <select className="bg-white border border-gray-300 px-3 py-2 rounded text-gray-700 text-sm">
                <option value="USD">USD - $</option>
                <option value="EUR">EUR - €</option>
                <option value="GBP">GBP - £</option>
              </select>
            </div>
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
              <ChevronLeft className="w-5 h-5 text-gray-400" />
              <Link href="/booking/room" className="flex items-center space-x-2 px-4 py-2 text-green-600 hover:text-green-700">
                <span>Room</span>
              </Link>
              <ChevronLeft className="w-5 h-5 text-gray-400" />
              <Link href="/booking/addons" className="flex items-center space-x-2 px-4 py-2 text-green-600 hover:text-green-700">
                <span>Add-ons</span>
              </Link>
              <ChevronLeft className="w-5 h-5 text-gray-400" />
              <Link href="/booking/contact" className="flex items-center space-x-2 px-4 py-2 text-green-600 hover:text-green-700">
                <span>Contact</span>
              </Link>
              <ChevronLeft className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2 px-4 py-2 bg-gold-500 text-black font-semibold rounded-lg">
                <CreditCard className="w-5 h-5" />
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
                  Payment Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Secure payment powered by Stripe
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number *
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={paymentData.expiryDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={paymentData.cvv}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="123"
                        maxLength={4}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name on Card *
                    </label>
                    <input
                      type="text"
                      name="nameOnCard"
                      value={paymentData.nameOnCard}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Address</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Address *
                        </label>
                        <input
                          type="text"
                          name="billingAddress"
                          value={paymentData.billingAddress}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          placeholder="123 Main Street"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            City *
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={paymentData.city}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                            placeholder="New York"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            ZIP Code *
                          </label>
                          <input
                            type="text"
                            name="zipCode"
                            value={paymentData.zipCode}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                            placeholder="10001"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Country *
                        </label>
                        <select
                          name="country"
                          value={paymentData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        >
                          <option value="">Select Country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="GB">United Kingdom</option>
                          <option value="AU">Australia</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <Lock className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-green-800">
                    Your payment information is secure and encrypted
                  </span>
                </div>

                <div className="flex gap-4 mt-8">
                  <Link
                    href="/booking/contact"
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back to Contact
                  </Link>
                  <button
                    onClick={handleSubmit}
                    disabled={isProcessing}
                    className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? 'Processing...' : 'Complete Booking'}
                    {!isProcessing && <CreditCard className="w-4 h-4" />}
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
                      <CreditCard className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Payment</p>
                      <p className="font-medium text-gray-900">Secure payment</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">i</span>
                      </div>
                      <p className="text-sm text-blue-800">
                        Your card will be charged immediately upon confirmation.
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
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Taxes & Fees</span>
                        <span className="font-medium">$0.00</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-lg font-bold text-gray-900">$1,047.00</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      All prices include applicable taxes
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
