import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import headerEs from './version/spanish/header.json'
import footerEs from './version/spanish/footer.json'
import headerEn from './version/english/header.json'
import footerEn from './version/english/footer.json'

i18n.use(initReactI18next).init({
  resources: {
    es: {
      header: headerEs,
      footer: footerEs,
    },
    en: {
      header: headerEn,
      footer: footerEn,
    },
  },
  lng: 'es',
  fallbackLng: 'es',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
