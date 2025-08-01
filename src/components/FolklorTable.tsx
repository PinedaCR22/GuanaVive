import { useState, useMemo } from 'react'

export interface FolklorItem {
  id: number
  imagen: string
  nombre: string
  categoria: string
  canton: string
  descripcion: string
  referencias: string[]
}

interface Props {
  title: string
  data: FolklorItem[]
}

const CANTONES = [
  'Liberia', 'Nicoya', 'Santa Cruz', 'Bagaces', 'Carrillo', 'Cañas',
  'Abangares', 'Tilarán', 'Nandayure', 'La Cruz', 'Hojancha'
]

export default function FolklorTable({ title, data }: Props) {
  const [search, setSearch] = useState('')
  const [filtroCanton, setFiltroCanton] = useState<string | null>(null)
  const [orden, setOrden] = useState<'asc' | 'desc'>('asc')
  const [selected, setSelected] = useState<FolklorItem | null>(null)
  const [page, setPage] = useState(1)
  const perPage = 10

  const filtered = useMemo(() => {
    let result = data.filter(d =>
      d.nombre.toLowerCase().includes(search.toLowerCase())
    )
    if (filtroCanton) {
      result = result.filter(d => d.canton === filtroCanton)
    }
    result = result.sort((a, b) =>
      orden === 'asc'
        ? a.nombre.localeCompare(b.nombre)
        : b.nombre.localeCompare(a.nombre)
    )
    return result
  }, [search, filtroCanton, orden, data])

  const pageCount = Math.ceil(filtered.length / perPage)
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage)

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-900 drop-shadow border-l-4 border-blue-600 pl-4">{title}</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={filtroCanton || ''}
            onChange={(e) => setFiltroCanton(e.target.value || null)}
            className="border border-gray-300 px-4 py-2 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Filtrar por cantón</option>
            {CANTONES.map((canton) => (
              <option key={canton} value={canton}>{canton}</option>
            ))}
          </select>
          <select
            value={orden}
            onChange={(e) => setOrden(e.target.value as 'asc' | 'desc')}
            className="border border-gray-300 px-4 py-2 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="asc">Nombre A-Z</option>
            <option value="desc">Nombre Z-A</option>
          </select>
          <button
            onClick={() => window.location.href = '/'}
            className="px-4 py-2 bg-blue-100 text-blue-800 font-semibold rounded-lg hover:bg-blue-200 shadow"
          >
            Regresar
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="px-6 py-3 text-center text-sm font-semibold">Nombre</th>
              <th className="px-6 py-3 text-center text-sm font-semibold">Cantón</th>
              <th className="px-6 py-3 text-center text-sm font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {pageItems.map((item) => (
              <tr key={item.id} className="border-t border-gray-100 hover:bg-blue-50 transition duration-200">
                <td className="px-6 py-4 text-center">
                  <div className="flex flex-col items-center">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-24 h-16 object-cover rounded shadow-md border border-gray-300"
                    />
                    <h3 className="mt-2 font-semibold text-sm text-blue-900">{item.nombre}</h3>
                  </div>
                </td>
                <td className="px-6 py-4 text-center font-medium text-blue-800">{item.canton}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => setSelected(item)}
                    className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-sm transition"
                  >
                    Ver más
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pageCount > 1 && (
        <div className="mt-10 flex justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            Anterior
          </button>
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`w-8 h-8 rounded-lg font-medium transition ${
                page === i + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={page === pageCount}
            className="px-3 py-1 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl relative overflow-hidden animate-fadeIn border border-gray-300 transition-all">
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
                <h2 className="text-3xl font-extrabold mb-4 text-blue-900 border-b pb-2">{selected.nombre}</h2>

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
                            {ref.includes('http') ? 'Ver enlace externo' : `Archivo ${idx + 1}`}
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
    </section>
  )
}
