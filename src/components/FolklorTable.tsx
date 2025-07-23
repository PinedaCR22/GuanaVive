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
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-white text-black">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded w-full sm:w-60"
          />
          <div className="relative">
            <select
              value={filtroCanton || ''}
              onChange={(e) =>
                setFiltroCanton(e.target.value || null)
              }
              className="border border-gray-300 px-4 py-2 rounded bg-white"
            >
              <option value="">Filtrar por cantón</option>
              {CANTONES.map((canton) => (
                <option key={canton} value={canton}>
                  {canton}
                </option>
              ))}
            </select>
          </div>
          <select
            value={orden}
            onChange={(e) =>
              setOrden(e.target.value as 'asc' | 'desc')
            }
            className="border border-gray-300 px-4 py-2 rounded bg-white"
          >
            <option value="asc">Nombre A-Z</option>
            <option value="desc">Nombre Z-A</option>
          </select>
          <button
            onClick={() => window.location.href = '/'}
            className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
          >
            Regresar
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-center">Nombre</th>
              <th className="px-4 py-2 border-b text-center">Cantón</th>
              <th className="px-4 py-2 border-b text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-3 border-b text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-24 h-16 object-cover rounded"
                    />
                    <h3 className="font-semibold">{item.nombre}</h3>
                  </div>
                </td>
                <td className="px-4 py-3 border-b text-center">
                  <span>{item.canton}</span>
                </td>
                <td className="px-4 py-3 border-b text-center">
                  <button
                    onClick={() => setSelected(item)}
                    className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
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
        <div className="mt-8 flex justify-center space-x-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-2 rounded border border-gray-400 bg-white text-black disabled:opacity-50"
          >
            Anterior
          </button>
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`w-8 h-8 flex items-center justify-center rounded border ${
                page === i + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={page === pageCount}
            className="p-2 rounded border border-gray-400 bg-white text-black disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-3xl p-6 relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            <div className="flex flex-col lg:flex-row gap-6">
              <img
                src={selected.imagen}
                alt={selected.nombre}
                className="w-full lg:w-1/2 h-64 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{selected.nombre}</h2>
                <p className="mb-2"><strong>Categoría:</strong> {selected.categoria}</p>
                <p className="mb-2"><strong>Cantón:</strong> {selected.canton}</p>
                <p className="mb-4"><strong>Descripción:</strong><br />{selected.descripcion}</p>
                <p className="font-semibold mb-1">Referencias:</p>
                <ul className="list-disc pl-6 space-y-1 text-blue-600 underline">
                  {selected.referencias.map((ref, idx) => (
                    <li key={idx}>
                      <a href={ref} target="_blank" rel="noopener noreferrer">
                        {ref.includes('http') ? 'Ver enlace externo' : `Archivo ${idx + 1}`}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
