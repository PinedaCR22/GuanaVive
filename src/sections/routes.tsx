// src/pages/routes.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalLayout from '../layout/global'
import HomePage from '../pages/homepage'
import GaleriaPage from '../pages/galeria'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          {/* Aquí puedes agregar más rutas hijas */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
