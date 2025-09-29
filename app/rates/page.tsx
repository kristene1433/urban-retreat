'use client'

import { motion } from 'framer-motion'
import { Check, Star, Clock, Shield, Wifi, Car } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function RatesPage() {
  const pricingPlans = [
    {
      name: 'Studio Apartment',
      price: 199,
      period: 'night',
      featured: false,
      features: [
        '1 Queen Bed',
        'Open Plan Living',
        'Kitchenette',
        'City View',
        'High-Speed WiFi',
        'Air Conditioning',
        '24/7 Concierge'
      ]
    },
    {
      name: 'Deluxe Suite',
      price: 299,
      period: 'night',
      featured: true,
      features: [
        '1 King Bed',
        'Separate Living Area',
        'Full Kitchen',
        'Private Balcony',
        'Premium City View',
        'High-Speed WiFi',
        'Air Conditioning',
        '24/7 Concierge',
        'Room Service'
      ]
    },
    {
      name: 'Penthouse',
      price: 499,
      period: 'night',
      featured: false,
      features: [
        '2 King Beds',
        'Spacious Living Area',
        'Gourmet Kitchen',
        'Rooftop Access',
        '360° City Views',
        'High-Speed WiFi',
        'Air Conditioning',
        '24/7 Concierge',
        'Premium Room Service',
        'Private Elevator'
      ]
    }
  ]

  const packages = [
    {
      icon: '💑',
      title: 'Romantic Getaway',
      description: 'Perfect for couples looking for a romantic escape in the city.',
      price: 'From $399/night',
      features: [
        'Champagne on arrival',
        'Rose petal turndown service',
        'Couples massage (1 hour)',
        'Private dinner setup'
      ]
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Package',
      description: 'Great for families with children, includes special amenities.',
      price: 'From $349/night',
      features: [
        'Extra bed for children',
        'Welcome gift for kids',
        'Family activity recommendations',
        'Child-friendly amenities'
      ]
    },
    {
      icon: '💼',
      title: 'Business Package',
      description: 'Ideal for business travelers with work-focused amenities.',
      price: 'From $279/night',
      features: [
        'High-speed business WiFi',
        'Work desk setup',
        'Complimentary coffee service',
        'Late checkout available'
      ]
    }
  ]

  const policies = [
    {
      title: 'Booking Policies',
      icon: <Clock className="w-6 h-6" />,
      items: [
        'Check-in: 3:00 PM',
        'Check-out: 11:00 AM',
        'Minimum stay: 2 nights',
        'Free cancellation up to 48 hours',
        'No smoking policy'
      ]
    },
    {
      title: 'Included Amenities',
      icon: <Wifi className="w-6 h-6" />,
      items: [
        'Complimentary WiFi',
        'Air conditioning',
        '24/7 Concierge service',
        'Valet parking',
        'Fitness center access',
        'Rooftop pool access'
      ]
    },
    {
      title: 'Additional Services',
      icon: <Car className="w-6 h-6" />,
      items: [
        'Airport transfer: $50',
        'Room service: Available',
        'Laundry service: Available',
        'Tour bookings: Available',
        'Restaurant reservations: Available'
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation onBookNow={() => {}} />
      
      {/* Page Header */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/welcome-skyline.jpg" alt="header" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-shadow"
          >
            Rates & Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            Choose the perfect accommodation for your stay
          </motion.p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gradient mb-4">
              Accommodation Rates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. All rates include taxes and service charges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.featured ? 'ring-2 ring-gold-500 scale-105' : ''
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gold-500">$</span>
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.featured
                      ? 'bg-gold-500 text-black hover:bg-gold-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gold-500 hover:text-black'
                  }`}
                >
                  <Link href="/booking" className="btn-primary">
                    Book Now
                  </Link>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gradient mb-4">
              Special Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your stay with our curated packages designed for different occasions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{pkg.icon}</div>
                <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-3">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {pkg.description}
                </p>
                <div className="text-xl font-bold text-gold-500 mb-6">
                  {pkg.price}
                </div>
                
                <ul className="space-y-3 text-left">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-gold-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies & Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gradient mb-4">
              Policies & Information
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about your stay with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="text-gold-500 mr-3">
                    {policy.icon}
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-gray-900">
                    {policy.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {policy.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700 border-b border-gray-200 pb-2 last:border-b-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
