// ✅ src/data/datahacienda.ts
export interface Hacienda {
  id: number
  nombre: string
  imagen: string
  categoria: string
  canton: string
  descripcion: string
  referencias: string[]
}

export const HACIENDAS: Hacienda[] = [
  {
    id: 1,
    nombre: 'Hacienda La Pacifica',
    imagen: '/images/homepage/CARD1.jpg',
    categoria: 'Histórica',
    canton: 'Cañas',
    descripcion: 'Una de las haciendas más antiguas de Guanacaste, conocida por su historia cafetalera y ganadera.',
    referencias: ['https://youtu.be/hacienda1', 'https://youtu.be/hacienda-extra']
  },
  {
    id: 2,
    nombre: 'Hacienda El Viejo',
    imagen: '/images/homepage/CARD2.jpg',
    categoria: 'Turismo cultural',
    canton: 'Liberia',
    descripcion: 'Ofrece experiencias culturales, senderismo y vistas del Volcán Rincón de la Vieja.',
    referencias: ['https://youtu.be/hacienda2']
  },
  {
    id: 3,
    nombre: 'Hacienda La Flor',
    imagen: '/images/homepage/CARD3.jpg',
    categoria: 'Producción agrícola',
    canton: 'Santa Cruz',
    descripcion: 'Produce caña de azúcar y otros cultivos tradicionales de la región.',
    referencias: ['https://youtu.be/hacienda3']
  },
  {
    id: 4,
    nombre: 'Hacienda San Blas',
    imagen: '/images/homepage/CARD4.jpg',
    categoria: 'Conservación',
    canton: 'Bagaces',
    descripcion: 'Combina ganadería sostenible con conservación ambiental.',
    referencias: ['https://youtu.be/hacienda4']
  },
  {
    id: 5,
    nombre: 'Hacienda Santa Rosa',
    imagen: '/images/homepage/CARD5.jpg',
    categoria: 'Histórica',
    canton: 'La Cruz',
    descripcion: 'Emblemático sitio de la Campaña Nacional de 1856, parte del Parque Nacional Santa Rosa.',
    referencias: ['https://youtu.be/hacienda5']
  },
  {
    id: 6,
    nombre: 'Hacienda El Roble',
    imagen: '/images/homepage/CARD6.jpg',
    categoria: 'Ganadera',
    canton: 'Cañas',
    descripcion: 'Importante en la producción de leche y carne de res.',
    referencias: ['https://youtu.be/hacienda6']
  },
  {
    id: 7,
    nombre: 'Hacienda Miravalles',
    imagen: '/images/homepage/CARD1.jpg',
    categoria: 'Ecológica',
    canton: 'Bagaces',
    descripcion: 'Proyecto agrícola ecológico cerca del volcán Miravalles.',
    referencias: ['https://youtu.be/hacienda7']
  },
  {
    id: 8,
    nombre: 'Hacienda Los Almendros',
    imagen: '/images/homepage/CARD2.jpg',
    categoria: 'Cultural',
    canton: 'Santa Cruz',
    descripcion: 'Conserva arquitectura típica y promueve eventos culturales locales.',
    referencias: ['https://youtu.be/hacienda8']
  },
  {
    id: 9,
    nombre: 'Hacienda El Trapiche',
    imagen: '/images/homepage/CARD3.jpg',
    categoria: 'Caña de azúcar',
    canton: 'Nandayure',
    descripcion: 'Tradicional producción de tapa de dulce y jugos naturales.',
    referencias: ['https://youtu.be/hacienda9']
  },
  {
    id: 10,
    nombre: 'Hacienda La Esperanza',
    imagen: '/images/homepage/CARD4.jpg',
    categoria: 'Educativa',
    canton: 'Nicoya',
    descripcion: 'Brinda talleres y visitas guiadas sobre agricultura sostenible.',
    referencias: ['https://youtu.be/hacienda10']
  },
  {
    id: 11,
    nombre: 'Hacienda La Casona',
    imagen: '/images/homepage/CARD5.jpg',
    categoria: 'Colonial',
    canton: 'Liberia',
    descripcion: 'Construcción colonial con historia familiar centenaria.',
    referencias: ['https://youtu.be/hacienda11']
  },
  {
    id: 12,
    nombre: 'Hacienda Las Lomas',
    imagen: '/images/homepage/CARD6.jpg',
    categoria: 'Ganadera',
    canton: 'Carrillo',
    descripcion: 'Rodeada de colinas y usada para pastoreo de ganado.',
    referencias: ['https://youtu.be/hacienda12']
  },
  {
    id: 13,
    nombre: 'Hacienda El Rosario',
    imagen: '/images/homepage/CARD1.jpg',
    categoria: 'Turística',
    canton: 'Santa Cruz',
    descripcion: 'Promueve turismo rural y experiencias guanacastecas auténticas.',
    referencias: ['https://youtu.be/hacienda13']
  },
  {
    id: 14,
    nombre: 'Hacienda Azul',
    imagen: '/images/homepage/CARD2.jpg',
    categoria: 'Floricultura',
    canton: 'Cañas',
    descripcion: 'Especializada en producción de flores tropicales.',
    referencias: ['https://youtu.be/hacienda14']
  },
  {
    id: 15,
    nombre: 'Hacienda San Martín',
    imagen: '/images/homepage/CARD3.jpg',
    categoria: 'Agroturismo',
    canton: 'Hojancha',
    descripcion: 'Permite a los visitantes participar en actividades agrícolas.',
    referencias: ['https://youtu.be/hacienda15']
  }
]
