// src/pages/routes.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalLayout from '../layout/global'
import HomePage from '../pages/homepage'
import ArtesanoPage from '../pages/artesano'
import BailePage from '../pages/baile'
import MusicaPage from '../pages/musica'
import RetahileroPage from '../pages/retahilero'
import HaciendaPage from '../pages/hacienda'
import EventoPage from '../pages/evento'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* Aquí puedes agregar más rutas hijas */}
          <Route path="/artesano" element={<ArtesanoPage />} />
          <Route path="/baile" element={<BailePage />} />
          <Route path="/musica" element={<MusicaPage />} />
          <Route path="/retahilero" element={<RetahileroPage />} />
          <Route path="/hacienda" element={<HaciendaPage />} />
          <Route path="/evento" element={<EventoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
