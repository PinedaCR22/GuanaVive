import { Link } from "react-router-dom"
import { galleryImages } from "./GalleryData"
import { motion } from "framer-motion"

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6)

  return (
    <section className="relative w-full py-16 bg-gray-100 overflow-hidden">
      {/* SVG animado tipo onda / bandera moviéndose */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute w-full h-full animate-[wave_10s_ease-in-out_infinite] opacity-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1e3a8a"
            d="M0,64L48,101.3C96,139,192,213,288,229.3C384,245,480,203,576,192C672,181,768,203,864,202.7C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-10 relative">
          Galería Cultural
          <span className="block w-20 h-1 bg-blue-700 mx-auto mt-3 rounded-full" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((img, index) => (
            <motion.div
              key={img.id}
              className="relative overflow-hidden rounded-2xl shadow-lg group transition-all hover:shadow-2xl bg-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={img.src}
                alt={img.category}
                className="w-full h-60 object-cover rounded-2xl transition duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:shadow-xl"
                style={{ filter: "contrast(1.15) saturate(1.25)" }}
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 bg-white/80 text-sm text-blue-900 font-semibold px-3 py-1 rounded-lg shadow">
                {img.category}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/galeria">
            <button className="inline-block px-8 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 hover:scale-105 transition-all font-semibold shadow-lg">
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
