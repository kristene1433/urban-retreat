'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quick: [
      { name: 'Guesthouse', href: '/guesthouse' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Rates', href: '/rates' },
      { name: 'Contact', href: '/contact' },
    ],
    activities: [
      { name: 'City Tours', href: '/activities/city-tours' },
      { name: 'Cultural Experiences', href: '/activities/cultural' },
      { name: 'Food & Dining', href: '/activities/dining' },
      { name: 'Nightlife', href: '/activities/nightlife' },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Booking Policy', href: '/booking-policy' },
      { name: 'Cancellation', href: '/cancellation' },
      { name: 'Support', href: '/support' },
    ],
  }

  return (
    <footer className="bg-urban-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-bold font-montserrat text-gold-500 mb-4">
                Urban Retreat
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Your perfect urban escape in the heart of the city. Experience luxury and comfort with stunning city views.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                  <motion.a
                    key={social}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="w-10 h-10 bg-urban-800 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors duration-300"
                  >
                    <span className="text-sm font-semibold">{social[0]}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold font-montserrat text-gold-500 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {footerLinks.quick.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-gold-500 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold font-montserrat text-gold-500 mb-4">
                Activities
              </h4>
              <ul className="space-y-3">
                {footerLinks.activities.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-gold-500 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold font-montserrat text-gold-500 mb-4">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>123 Urban Street</p>
                    <p>Downtown District</p>
                    <p>City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>+1 (555) 123-4567</p>
                    <p>+1 (555) 123-4568</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>info@urbanretreat.com</p>
                    <p>bookings@urbanretreat.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gold-500 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 10:00 AM - 4:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-urban-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Urban Retreat. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-gold-500 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-gold-500 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-gold-500 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
