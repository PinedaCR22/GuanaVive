import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const categories = [
  {
    title: 'Bailes',
    image: '/images/homepage/CARD2.jpg',
    description: 'Expresiones de identidad y tradición a través del movimiento.',
    path: '/baile',
  },
  {
    title: 'Música',
    image: '/images/homepage/CARD1.jpg',
    description: 'Sonidos que cuentan la historia viva del folclor guanacasteco.',
    path: '/musica',
  },
  {
    title: 'Retahileros',
    image: '/images/homepage/CARD4.jpg',
    description: 'Narradores populares que preservan nuestras raíces.',
    path: '/retahilero',
  },
  {
    title: 'Eventos',
    image: '/images/homepage/CARD6.jpg',
    description: 'Escenarios donde se vive la historia y tradición.',
    path: '/evento', // ✅ corregido
  },
  {
    title: 'Artesanos',
    image: '/images/homepage/CARD3.jpg',
    description: 'Manos que transforman cultura en piezas únicas.',
    path: '/artesano', // ✅ corregido
  },
  {
    title: 'Haciendas',
    image: '/images/homepage/CARD5.jpg',
    description: 'Escenarios donde se vive la historia y tradición.',
    path: '/hacienda',
  },
]


const CategoriesSection = () => {
  return (
    <section id="categories" className="px-4 py-16 w-full bg-gray-100 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{cat.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{cat.description}</p>
                <Link
                  to={cat.path}
                  className="inline-block px-4 py-2 bg-[#e6f4fa] text-[#1c7ab9] rounded-full shadow-md hover:bg-[#1c7ab9] hover:text-white transition"
                >
                  Ver más
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection