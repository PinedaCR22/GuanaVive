import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './sections/routes'
import './languague/languague' // Inicializa i18next


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)
