import HeroSection from '../sections/homepage/hero'
import CategoriesSection from '../sections/homepage/categories'
import FeaturedSection from '../sections/homepage/featured'
import SponsorsSection from '../sections/homepage/sponsors'
import MapPage from '../sections/homepage/map'
import EstoEsGuanacaste from '../sections/homepage/estoesguanacaste'
import ConoceMasSobreGuanacaste from '../sections/homepage/conocemassobreguanacaste.tsx'
import GalleryPreview from '../sections/galeria/GalleryPreview.tsx'
const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <EstoEsGuanacaste />
      <ConoceMasSobreGuanacaste />
      <CategoriesSection />
      <FeaturedSection />
      <GalleryPreview />
      <SponsorsSection />
      <MapPage />
      {/* Aquí puedes agregar más secciones si es necesario */}
    </div>
  )
}

export default Homepage
