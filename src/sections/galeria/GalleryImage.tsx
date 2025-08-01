import { useState } from "react"

interface Props {
  src: string
  alt: string
}

export default function GalleryImage({ src, alt }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Imagen de la galería */}
      <div
        className="overflow-hidden rounded-xl shadow-md break-inside-avoid group relative transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        <span className="absolute bottom-2 left-2 text-white text-sm font-semibold bg-red-600 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          {alt}
        </span>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative">
            <img
              src={src}
              alt={alt}
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl transition-transform duration-300 scale-100 hover:scale-105"
              onClick={(e) => e.stopPropagation()} // Evita cerrar si se hace click en la imagen
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-400"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}
