// src/layout/global.tsx
import { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

interface LightModeContextType {
  isLightMode: boolean
  toggleMode: () => void
}

export const LightModeContext = createContext<LightModeContextType>({
  isLightMode: true,
  toggleMode: () => {},
})

const Layout = () => {
  const [isLightMode, setIsLightMode] = useState(true)
  const toggleMode = () => setIsLightMode((prev) => !prev)

  return (
    <LightModeContext.Provider value={{ isLightMode, toggleMode }}>
      <div
        className={`flex flex-col min-h-screen transition-colors duration-500 ${
          isLightMode ? 'bg-white text-black' : 'bg-gray-900 text-white'
        }`}
      >
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LightModeContext.Provider>
  )
}

export default Layout
