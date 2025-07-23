import { useState } from "react"
import GalleryImage from "./GalleryImage"
import { galleryImages } from "./GalleryData"

const categories = ["Todas", "Baile", "Música", "Eventos", "Artesanos", "Haciendas"]
const cantones = ["Todos", "Santa Cruz", "Nicoya", "Liberia", "Carrillo", "La Cruz"]

export function GallerySection() {
  const [filterCat, setFilterCat] = useState("Todas")
  const [filterCanton, setFilterCanton] = useState("Todos")

  const filteredImages = galleryImages.filter((img) => {
    const matchCat = filterCat === "Todas" || img.category === filterCat
    const matchCanton = filterCanton === "Todos" || img.canton === filterCanton
    return matchCat && matchCanton
  })

  return (
    <>
      <section
        className="relative w-full h-[400px] md:h-[500px] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/S7fQdsT8/IMG-20250720-WA0040.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">Galería</h1>
          <p className="text-white mt-2 text-lg md:text-xl drop-shadow">
            Donde el folclor guanacasteco cobra vida en imágenes
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {/* Filtro por categoría */}
          <select
            value={filterCat}
            onChange={(e) => setFilterCat(e.target.value)}
            className="border rounded px-4 py-2"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {/* Filtro por cantón */}
          <select
            value={filterCanton}
            onChange={(e) => setFilterCanton(e.target.value)}
            className="border rounded px-4 py-2"
          >
            {cantones.map((canton) => (
              <option key={canton} value={canton}>{canton}</option>
            ))}
          </select>
        </div>

        {/* Galería */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {filteredImages.map((img) => (
            <GalleryImage key={img.id} src={img.src} alt={`${img.category} - ${img.canton}`} />
          ))}
        </div>
      </section>
    </>
  )
}
