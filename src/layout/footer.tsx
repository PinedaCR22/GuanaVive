import { useContext } from 'react'
import { LightModeContext } from './global'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { isLightMode } = useContext(LightModeContext)
  const { t } = useTranslation('footer')

  return (
    <footer
      className={`w-full text-center py-8 text-sm text-white transition-colors duration-300 ${
        isLightMode ? 'bg-[#B91C1C]' : 'bg-[#7F1D1D]'
      }`}
    >
      <p>{t('text', '© 2025 Vive Guanacaste. Todos los derechos reservados.')}</p>
    </footer>
  )
}

export default Footer
