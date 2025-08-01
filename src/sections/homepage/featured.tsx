import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { GRUPOS_BAILE } from "../../data/databaile"
import { HACIENDAS } from "../../data/datahacienda"
import { MUSICOS } from "../../data/datamusica"
import { RETAHILEROS } from "../../data/dataretahilero"

// Unificamos todos los datos en un solo arreglo con IDs únicos
const allData = [
  ...GRUPOS_BAILE.map(i => ({ ...i, id: i.id })),
  ...HACIENDAS.map(i => ({ ...i, id: 1000 + i.id })),
  ...MUSICOS.map(i => ({ ...i, id: 2000 + i.id })),
  ...RETAHILEROS.map(i => ({ ...i, id: 3000 + i.id }))
]

// Ahora los destacados son referencias directas a allData
const featuredItems = [
  allData.find(i => i.id === 1003)!, // Hacienda La Flor
  allData.find(i => i.id === 1)!,    // Ensamble Floklórico Cafiñastola
  allData.find(i => i.id === 2002)!  // Carlos Leitón
]

export default function FeaturedSection() {
  type DataItem = {
    id: number
    nombre: string
    categoria: string
    canton: string
    descripcion: string
    imagen: string
    referencias: string[]
  }

  const [selected, setSelected] = useState<DataItem | null>(null)

  return (
    <>
      <section className="w-full relative overflow-hidden py-20 px-4 md:px-16 bg-gradient-to-br from-[#e6f0ff] via-white to-[#f0f4ff]">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14 tracking-tight">
          ¡Destacados de la Semana!
        </h2>

        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop
            slidesPerView={1}
            className="rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.25)]"
          >
            {featuredItems.map(item => (
              <SwiperSlide key={item.id}>
                <div className="group relative rounded-3xl overflow-hidden">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-full h-[28rem] object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <h3 className="text-3xl font-bold drop-shadow-md">{item.nombre}</h3>
                    <p className="text-lg opacity-90 drop-shadow-sm">{item.canton}, Guanacaste</p>
                    <button
                      onClick={() => setSelected(item)}
                      className="mt-5 inline-block px-6 py-2 bg-white/90 text-[#1c7ab9] font-semibold rounded-full hover:bg-white transition-all shadow-md"
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl relative overflow-hidden">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-3xl font-bold"
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row">
              <img
                src={selected.imagen}
                alt={selected.nombre}
                className="w-full md:w-1/2 h-80 object-cover rounded-l-3xl"
              />

              <div className="p-6 flex-1 overflow-y-auto max-h-[32rem]">
                <h2 className="text-3xl font-extrabold mb-4 text-blue-900 border-b pb-2">
                  {selected.nombre}
                </h2>

                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold">Categoría:</span> {selected.categoria}</p>
                  <p><span className="font-semibold">Cantón:</span> {selected.canton}</p>
                  <p><span className="font-semibold">Descripción:</span><br />{selected.descripcion}</p>
                </div>

                {selected.referencias.length > 0 && (
                  <div className="mt-4">
                    <h3 className="font-semibold text-blue-800 mb-2">Referencias:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-blue-600 text-sm">
                      {selected.referencias.map((ref, idx) => (
                        <li key={idx}>
                          <a href={ref} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Ver enlace externo
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
