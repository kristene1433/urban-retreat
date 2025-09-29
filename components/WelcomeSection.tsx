'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WelcomeSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gradient">
              Welcome to Urban Retreat
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Urban Retreat is a modern vacation rental website template with full-screen hero images to impress potential guests, a light design and a top navigation menu.
              </p>
              
              <p>
                Urban Retreat is optimized for single and multi-property websites. Urban Retreat is mobile-friendly using responsive web design. Urban Retreat is a vacation rental website template by{' '}
                <a href="#" className="text-gold-500 hover:text-gold-600 underline transition-colors duration-200">
                  Lodgify.com
                </a>
                . Create your own vacation rental website{' '}
                <a href="#" className="text-gold-500 hover:text-gold-600 underline transition-colors duration-200">
                  here
                </a>
                .
              </p>
              
              <p>
                Vivamus ullamcorper eu enim dapibus interdum. Integer lorem purus, cursus eget aliquam quis, ultricies sed tortor. Vestibulum sodales ligula eget lorem elementum, non rhoncus dolor.
              </p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/welcome-skyline.jpg"
                alt="Urban skyline at sunset"
                width={600}
                height={400}
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500 font-montserrat">4.9</div>
                <div className="text-sm text-gray-600">Guest Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
