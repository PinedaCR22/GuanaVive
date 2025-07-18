import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'

const HeroSection = () => {
  const scrollToCategories = () => {
    const element = document.getElementById('categories')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/HERO.jpg')" }}>
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Vive Guanacaste</h1>
        <p className="text-lg md:text-xl mb-6">
          Donde el folclor guanacasteco suena, baila y se comparte
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToCategories}
          aria-label="Ir a categorías"
          className="animate-bounce bg-transparent text-white text-2xl"
        >
          <FaArrowDown />
        </motion.button>
      </div>
    </section>
  )
}

export default HeroSection
