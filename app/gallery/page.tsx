'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: '/images/interior-deluxe.jpg',
      category: 'rooms',
      title: 'Luxury Bedroom',
      description: 'Spacious bedroom with city views'
    },
    {
      id: 2,
      src: '/images/rooftop-pool.jpg',
      category: 'amenities',
      title: 'Rooftop Pool',
      description: 'Stunning pool with panoramic views'
    },
    {
      id: 3,
      src: '/images/hero-city.jpg',
      category: 'views',
      title: 'City Skyline',
      description: 'Breathtaking views from our windows'
    },
    {
      id: 4,
      src: '/images/living-area.jpg',
      category: 'common',
      title: 'Modern Living Area',
      description: 'Open concept living space'
    },
    {
      id: 5,
      src: '/images/penthouse.jpg',
      category: 'rooms',
      title: 'Penthouse Suite',
      description: 'Luxurious accommodation option'
    },
    {
      id: 6,
      src: '/images/fitness.jpg',
      category: 'amenities',
      title: 'Fitness Center',
      description: 'State-of-the-art equipment'
    },
    {
      id: 7,
      src: '/images/dining.jpg',
      category: 'common',
      title: 'Dining Area',
      description: 'Elegant dining space'
    },
    {
      id: 8,
      src: '/images/welcome-skyline.jpg',
      category: 'views',
      title: 'Sunset View',
      description: 'Spectacular evening views'
    },
    {
      id: 9,
      src: '/images/bathroom.jpg',
      category: 'rooms',
      title: 'Luxury Bathroom',
      description: 'Premium bathroom amenities'
    }
  ]


  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
      const nextIndex = (currentIndex + 1) % galleryImages.length
      setSelectedImage(galleryImages[nextIndex].id)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
      const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
      setSelectedImage(galleryImages[prevIndex].id)
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation onBookNow={() => {}} />
      
      {/* Page Header */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-city.jpg"
            alt="Urban cityscape"
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
            Photo Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            Take a virtual tour of our beautiful urban retreat
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="relative h-64">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-semibold font-montserrat mb-1">
                        {image.title}
                      </h3>
                      <p className="text-sm opacity-90">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 text-white hover:text-gold-500 transition-colors duration-200"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gold-500 transition-colors duration-200"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gold-500 transition-colors duration-200"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const image = galleryImages.find(img => img.id === selectedImage)
                  return image ? (
                    <>
                      <Image
                        src={image.src}
                        alt={image.title}
                        width={800}
                        height={600}
                        className="w-full h-auto max-h-[80vh] object-contain"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                        <h3 className="text-2xl font-bold font-montserrat mb-2">
                          {image.title}
                        </h3>
                        <p className="text-lg opacity-90">
                          {image.description}
                        </p>
                      </div>
                    </>
                  ) : null
                })()}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}
