import HeroSection from '../sections/homepage/hero'
import CategoriesSection from '../sections/homepage/categories'
import FeaturedSection from '../sections/homepage/featured'
import SponsorsSection from '../sections/homepage/sponsors'
import EstoEsGuanacaste from '../sections/homepage/estoesguanacaste'
import ConoceMasSobreGuanacaste from '../sections/homepage/conocemassobreguanacaste.tsx'
import GalleryPreview from '../sections/galeria/GalleryPreview.tsx'
const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <ConoceMasSobreGuanacaste />
      <EstoEsGuanacaste />
      <GalleryPreview />
      <SponsorsSection />
    </div>
  )
}

export default Homepage
