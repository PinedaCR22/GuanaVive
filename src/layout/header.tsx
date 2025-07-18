import { useContext } from 'react'
import { LightModeContext } from './global'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LanguageSelector from '../languague/version/languageSelector'


const Header = () => {
  const { isLightMode, toggleMode } = useContext(LightModeContext)
  const { t } = useTranslation('header')

  return (
    <header
      className={`w-full px-6 py-8 shadow-md transition-colors duration-300 ${
        isLightMode ? 'bg-[#B91C1C]' : 'bg-[#7F1D1D]'
      }`}
    >
      <div className="flex flex-wrap justify-between items-center text-white gap-4">
        <h1 className="text-xl font-bold">Vive Guanacaste</h1>

        {/* Navegación */}
        <nav className="flex gap-4 text-sm font-medium">
          <Link to="/descubrir" className="hover:text-[#10B981] transition-colors">
            {t('descubrir')}
          </Link>
          <Link to="/historia" className="hover:text-[#10B981] transition-colors">
            {t('historia')}
          </Link>
          <Link to="/galeria" className="hover:text-[#10B981] transition-colors">
            {t('galeria')}
          </Link>
          <Link to="/contacto" className="hover:text-[#10B981] transition-colors">
            {t('contacto')}
          </Link>
        </nav>

        {/* Botones idioma / modo */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMode}
            className="text-white hover:text-[#10B981] text-lg"
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
