import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'

const heroCategories = [
  {
    title: 'Gastronomía',
    desc: 'Sabores únicos de la tierra',
  },
  {
    title: 'Música',
    desc: 'Ritmos del corazón tico',
  },
  {
    title: 'Tradiciones',
    desc: 'Herencia de generaciones',
  },
  {
    title: 'Personajes',
    desc: 'Guardianes de la cultura',
  },
]

const HeroSection = () => {
  const scrollToCategories = () => {
    const element = document.getElementById('categories')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/homepage/CARD5.jpg')" }}>
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-2 drop-shadow-lg">Guanacaste</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#ffe066] drop-shadow-lg">Tierra del Sol y la Cultura</h2>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow">
          Descubre la riqueza cultural de la provincia más auténtica de Costa Rica, donde las tradiciones ancestrales florecen bajo la sombra del majestuoso árbol nacional.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-4xl justify-center">
          {heroCategories.map((cat) => (
            <div
              key={cat.title}
              className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-6 min-w-[200px] border border-white/20 shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#ffe066] mb-2">{cat.title}</h3>
              <p className="text-white text-base">{cat.desc}</p>
            </div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToCategories}
          aria-label="Explorar Nuestra Cultura"
          className="mb-8 px-8 py-4 rounded-full text-lg font-bold text-white shadow-xl bg-gradient-to-r from-[#ff9900] via-[#ffe066] to-[#ff9900] hover:from-[#ffe066] hover:to-[#ff9900] transition-all"
        >
          Explorar Nuestra Cultura
        </motion.button>
        <div className="mt-2 text-sm text-[#ffe066] drop-shadow">
          Bajo la sombra del <i>Enterolobium cyclocarpum</i>
        </div>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToCategories}
          aria-label="Ir a categorías"
          className="mt-6 animate-bounce bg-white/20 rounded-full p-3 text-white text-2xl shadow-lg border border-white/30"
        >
          <FaArrowDown />
        </motion.button>
      </div>
    </section>
  )
}

export default HeroSection
