import React, { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LightModeContext } from '../../layout/global'

const SponsorsSection: React.FC = () => {
  const { isLightMode } = useContext(LightModeContext)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = ['/images/homepage/Sponsor.jpg']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  const bgClass = isLightMode ? 'bg-white text-gray-900' : 'bg-[#051529] text-white'
  const cardBg = isLightMode ? 'bg-gray-100' : 'bg-[#0e2744]'

  return (
    <motion.section
      className={`w-full py-16 px-4 md:px-12 transition-colors duration-500 ${bgClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className={`flex flex-col md:flex-row w-full max-w-none rounded-xl shadow-xl overflow-hidden ${cardBg}`}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Imagen a la izquierda */}
        <div className="w-full md:w-1/2 aspect-[2/1] md:aspect-auto">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt="Patrocinadores"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>

        {/* Texto a la derecha */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-10 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">
            Este proyecto fue posible gracias al trabajo de Pineda Photography y Visual View Creations
          </h2>
          <p className="text-lg">
            Este proyecto no habría sido posible sin la valiosa colaboración de dos grandes aliados.
Pineda Photography fue el responsable de capturar cada una de las imágenes que reflejan la esencia del folclor guanacasteco.
          </p>
          <p className="text-lg">
            Por su parte, Visual View Creations asumió el desarrollo y diseño de esta plataforma digital, dando vida a una experiencia interactiva, accesible y moderna que permite visibilizar y preservar nuestras tradiciones culturales guanacastecas.
          </p>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default SponsorsSection
