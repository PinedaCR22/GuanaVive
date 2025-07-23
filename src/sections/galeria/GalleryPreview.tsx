import { Link } from "react-router-dom"
import { galleryImages } from "./GalleryData"
import { motion } from "framer-motion"

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6)

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Galería Cultural
        </h2>

        {/* Masonry-style collage grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {preview.map((img, index) => (
            <motion.div
              key={img.id}
              className="relative overflow-hidden rounded-xl shadow-md break-inside-avoid transition-all hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Optional category badge */}
              <div className="absolute top-2 left-2 bg-white/80 text-xs font-medium text-gray-800 px-2 py-1 rounded shadow">
                {img.category}
              </div>

              <img
                src={img.src}
                alt={img.category}
                className="w-full object-cover rounded-xl transition duration-300 hover:scale-105 hover:brightness-105"
                style={{ filter: "contrast(1.02) saturate(1.1)" }}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/galeria">
            <button className="inline-block px-5 py-2 bg-[#1c7ab9] text-white rounded hover:bg-[#10649c] transition">
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
