import HeroSection from '../sections/homepage/hero'
import CategoriesSection from '../sections/homepage/categories'
import FeaturedSection from '../sections/homepage/featured'
import SponsorsSection from '../sections/homepage/sponsors'
import MapPage from '../sections/homepage/map'

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <SponsorsSection />
      <MapPage />
      {/* Aquí puedes agregar más secciones si es necesario */}
    </div>
  )
}

export default Homepage
