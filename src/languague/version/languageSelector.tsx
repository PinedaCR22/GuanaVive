import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang)
    setIsOpen(false)
  }

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botón actual */}
      <button
        onClick={toggleDropdown}
        className="border border-white rounded px-1 py-1 bg-white"
        aria-label="Cambiar idioma"
      >
        <img
          src={i18n.language === 'es' ? '/images/COSTARICA.svg' : '/images/USA.svg'}
          alt="Idioma actual"
          className="w-6 h-6"
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg p-2 z-50 text-black">
          <button
            onClick={() => handleLanguageChange('es')}
            className="flex items-center gap-2 w-full px-2 py-1 hover:bg-gray-200 rounded"
          >
            <img src="/images/COSTARICA.svg" alt="Español" className="w-5 h-5" />
            <span>Español</span>
          </button>
          <button
            onClick={() => handleLanguageChange('en')}
            className="flex items-center gap-2 w-full px-2 py-1 hover:bg-gray-200 rounded"
          >
            <img src="/images/USA.svg" alt="English" className="w-5 h-5" />
            <span>English</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
