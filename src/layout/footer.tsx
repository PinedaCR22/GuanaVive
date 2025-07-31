import { useContext } from 'react'
import { LightModeContext } from './global'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { isLightMode } = useContext(LightModeContext)
  const { t } = useTranslation('footer')

  return (
    <footer
      className="w-full text-center py-8 text-sm text-white"
      style={{
        background: 'linear-gradient(180deg, #e32636 0%, #ffffff 25%, #1c7ab9 50%, #3bb143 100%)',
        boxShadow: '0 -2px 12px rgba(0,0,0,0.08)'
      }}
    >
      <p style={{textShadow: '0 2px 8px rgba(0,0,0,0.18)'}}>{t('text', '© 2025 Vive Guanacaste. Todos los derechos reservados.')}</p>
    </footer>
  )
}

export default Footer
