'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/interior-deluxe.jpg"
                alt="Luxurious urban apartment interior"
                width={600}
                height={400}
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Feature Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -top-6 -left-6 bg-gold-500 text-black rounded-xl shadow-lg p-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold font-montserrat">Luxury</div>
                <div className="text-sm font-medium">Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gradient">
              Built to maximize bookings and revenue
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Our platform combines powerful booking tools with conversion-optimized design to turn visitors into paying guests. Every feature is designed to reduce friction in the booking process and showcase your property's unique value.
              </p>
              
              <p>
                From dynamic pricing displays to instant availability updates, our system works 24/7 to capture bookings even while you sleep. The integrated review system builds social proof, while our SEO-optimized structure helps you rank higher in search results and attract more organic traffic.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Instant Booking</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Mobile Optimized</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">SEO Ready</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Secure Payments</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
