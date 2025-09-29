'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

interface NavigationProps {
  onBookNow: () => void
}

export default function Navigation({ onBookNow }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Guesthouse', href: '/guesthouse' },
    { name: 'Map', href: '/map' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Rates', href: '/rates' },
    { name: 'Availability', href: '/availability' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ]

  const activitiesItems = [
    { name: 'City Tours', href: '/activities/city-tours' },
    { name: 'Cultural Experiences', href: '/activities/cultural' },
    { name: 'Food & Dining', href: '/activities/dining' },
    { name: 'Nightlife', href: '/activities/nightlife' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg' 
          : 'bg-black/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white font-montserrat italic"
            >
              Urban Retreat
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-gold-500'
                    : 'text-white hover:text-gold-500'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-500"
                  />
                )}
              </Link>
            ))}
            
            {/* Activities Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsActivitiesOpen(!isActivitiesOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-white hover:text-gold-500 transition-colors duration-300"
              >
                <span>Activities</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  isActivitiesOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <AnimatePresence>
                {isActivitiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                  >
                    {activitiesItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setIsActivitiesOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center gap-3 mr-4">
            <select className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-700 text-sm">
              <option value="EN">EN</option>
              <option value="ES">ES</option>
              <option value="FR">FR</option>
            </select>
          </div>

          {/* Book Now Button */}
          <Link href="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block btn-primary"
            >
              Book Now
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white rounded-lg mt-2 p-4 space-y-4"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-sm font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-gold-500'
                      : 'text-gray-700 hover:text-gold-500'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700 mb-2">Activities</p>
                {activitiesItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-gray-600 hover:text-gold-500 transition-colors duration-200 ml-4 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary mt-4"
                >
                  Book Now
                </motion.button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
