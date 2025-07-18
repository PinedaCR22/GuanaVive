// src/pages/routes.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalLayout from '../layout/global'
import HomePage from '../pages/homepage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* Aquí puedes agregar más rutas hijas */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
