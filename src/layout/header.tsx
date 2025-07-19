import { useContext } from 'react'
import { LightModeContext } from './global'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LanguageSelector from '../languague/version/languageSelector'

const navColors = [
  'text-[#1c7ab9]', // azul fuerte
  'text-[#e32636]', // rojo bandera
  'text-[#1c7ab9]', // azul fuerte
  'text-[#e32636]', // rojo bandera
]

const Header = () => {
  const { isLightMode, toggleMode } = useContext(LightModeContext)
  const { t } = useTranslation('header')
  const navLinks = [
    { to: '/descubrir', label: t('descubrir') },
    { to: '/historia', label: t('historia') },
    { to: '/galeria', label: t('galeria') },
    { to: '/contacto', label: t('contacto') },
  ]

  return (
    <header
      className={`w-full px-6 py-8 shadow-md transition-colors duration-300 bg-white`}
    >
      <div className="flex flex-wrap justify-between items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#1c7ab9] via-[#1c7ab9] to-[#e32636] text-transparent bg-clip-text drop-shadow-lg">Vive Guanacaste</h1>
        {/* Navegación */}
        <nav className="flex gap-6 text-base font-semibold">
          {navLinks.map((link, idx) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors duration-200 ${navColors[idx % navColors.length]} hover:underline hover:decoration-2 hover:decoration-[#e32636]`}
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Botones idioma / modo */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMode}
            className="text-[#1c7ab9] hover:text-[#e32636] text-lg"
            aria-label="Cambiar modo"
          >
            {isLightMode ? <FaMoon /> : <FaSun />}
          </button>
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}

export default Header
