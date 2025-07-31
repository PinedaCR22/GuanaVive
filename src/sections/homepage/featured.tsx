import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const featuredItems = [
  {
    title: 'Ensamble Floklórico Cañafistola',
    location: 'Santa Cruz, Guanacaste',
    image: '/images/homepage/CARD6.jpg'
  },
  {
    title: 'Carlos Leitón',
    location: 'Nicoya, Guanacaste',
    image: '/images/homepage/CARD4.jpg'
  },
  {
    title: 'Asociación Folklórica Paso Tempisque',
    location: 'Carrillo, Guanacaste',
    image: '/images/homepage/CARD3.jpg'
  }
]

const FeaturedSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-10">¡Destacados de la Semana!</h2>

      <div className="relative max-w-4xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          slidesPerView={1}
          className="rounded-xl"
        >
          {featuredItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg text-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.location}</p>
                  <button className="inline-block px-4 py-2 bg-[#e6f4fa] text-[#1c7ab9] rounded-full shadow-md hover:bg-[#1c7ab9] hover:text-white transition">
                    Ver más
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default FeaturedSection
