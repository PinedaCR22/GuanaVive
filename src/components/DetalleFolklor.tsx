import { useParams, useNavigate } from "react-router-dom"
import { GRUPOS_BAILE } from "../data/databaile"
import { HACIENDAS } from "../data/datahacienda"
import { MUSICOS } from "../data/datamusica"
import { RETAHILEROS } from "../data/dataretahilero"

export default function DetalleFolklor() {
  const { id } = useParams()
  const navigate = useNavigate()
  const allData = [
    ...GRUPOS_BAILE.map(i => ({ ...i, id: i.id })),
    ...HACIENDAS.map(i => ({ ...i, id: 1000 + i.id })),
    ...MUSICOS.map(i => ({ ...i, id: 2000 + i.id })),
    ...RETAHILEROS.map(i => ({ ...i, id: 3000 + i.id }))
  ]

  const item = allData.find(i => i.id === Number(id))

  if (!item) {
    return <p className="text-center py-20">No se encontró el elemento</p>
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl relative overflow-hidden">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-3xl font-bold"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row">
          <img
            src={item.imagen}
            alt={item.nombre}
            className="w-full md:w-1/2 h-80 object-cover rounded-l-3xl"
          />

          <div className="p-6 flex-1 overflow-y-auto max-h-[32rem]">
            <h2 className="text-3xl font-extrabold mb-4 text-blue-900 border-b pb-2">
              {item.nombre}
            </h2>

            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Categoría:</span> {item.categoria}</p>
              <p><span className="font-semibold">Cantón:</span> {item.canton}</p>
              <p><span className="font-semibold">Descripción:</span><br />{item.descripcion}</p>
            </div>

            {item.referencias.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold text-blue-800 mb-2">Referencias:</h3>
                <ul className="list-disc pl-5 space-y-1 text-blue-600 text-sm">
                  {item.referencias.map((ref, idx) => (
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
  )
}
