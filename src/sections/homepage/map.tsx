// src/pages/map.tsx
import { useNavigate } from 'react-router-dom'

const cantones = [
  { nombre: 'Abangares', left: '52%', top: '37%' },
  { nombre: 'Bagaces', left: '45%', top: '25%' },
  { nombre: 'Cañas', left: '56%', top: '27%' },
  { nombre: 'Carrillo', left: '38%', top: '37%' },
  { nombre: 'Hojancha', left: '38%', top: '65%' },
  { nombre: 'La_Cruz', left: '25%', top: '5%' },
  { nombre: 'Liberia', left: '33%', top: '23%' },
  { nombre: 'Nandayure', left: '52%', top: '63%' },
  { nombre: 'Nicoya', left: '42%', top: '52%' },
  { nombre: 'Santa_Cruz', left: '30%', top: '45%' },
  { nombre: 'Tilaran', left: '60%', top: '13%' },
]

const MapPage = () => {
  const navigate = useNavigate()

  const handleCantonClick = (nombre: string) => {
    navigate(`/canton/${nombre.toLowerCase()}`) // crea luego una ruta dinámica para esto
  }

  return (
    <div className="relative w-full h-[80vh] bg-white dark:bg-[#051529]">
      <img
        src="/images/Mapa_de_Guanacaste.svg"
        alt="Mapa base de Guanacaste"
        className="w-full h-full object-contain"
      />

      {cantones.map((canton) => (
        <img
          key={canton.nombre}
          src={`/images/Costa_Rica_-_Guanacaste_-_${canton.nombre}.svg`}
          alt={`Canton ${canton.nombre}`}
          className="absolute w-[6%] cursor-pointer transition-transform hover:scale-105"
          style={{ top: canton.top, left: canton.left }}
          onClick={() => handleCantonClick(canton.nombre)}
        />
      ))}
    </div>
  )
}

export default MapPage
