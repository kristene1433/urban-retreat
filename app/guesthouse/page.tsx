'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Wifi, Car, Dumbbell, Coffee, Shield, Star } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function GuesthousePage() {
  const amenities = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'High-Speed WiFi',
      description: 'Complimentary high-speed internet throughout the property'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Valet Parking',
      description: 'Complimentary valet parking for all guests'
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Fitness Center',
      description: 'State-of-the-art fitness equipment available 24/7'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Gourmet Kitchen',
      description: 'Fully equipped kitchen with premium appliances and cookware'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '24/7 Security',
      description: 'Round-the-clock security and concierge services'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Premium Service',
      description: 'Luxury amenities and personalized service for every guest'
    }
  ]

  const roomTypes = [
    {
      image: '/images/interior-deluxe.jpg',
      title: 'Deluxe Suite',
      description: 'Spacious 1-bedroom suite with city views, kitchenette, and premium amenities.',
      features: ['1 King Bed', 'City View', 'Kitchenette', 'Private Balcony']
    },
    {
      image: '/images/penthouse.jpg',
      title: 'Penthouse',
      description: 'Luxurious 2-bedroom penthouse with panoramic views and premium finishes.',
      features: ['2 King Beds', '360° City Views', 'Full Kitchen', 'Rooftop Access']
    },
    {
      image: '/images/living-area.jpg',
      title: 'Studio Apartment',
      description: 'Modern studio with open-plan living and all essential amenities.',
      features: ['1 Queen Bed', 'Open Plan', 'Kitchenette', 'City View']
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation onBookNow={() => {}} />
      
      {/* Page Header */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/interior-deluxe.jpg"
            alt="Luxury apartment interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-shadow"
          >
            Our Guesthouse
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            Experience luxury and comfort in the heart of the city
          </motion.p>
        </div>
      </section>

      {/* Amenities Section */}
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
              Luxury Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every detail has been carefully crafted to ensure your stay is nothing short of extraordinary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="text-gold-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-semibold font-montserrat text-gray-900 mb-3">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types Section */}
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
              Accommodation Options
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully designed accommodation options, each offering unique experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-3">
                    {room.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {room.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
