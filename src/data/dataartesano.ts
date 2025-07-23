// ✅ src/data/dataartesano.ts
export interface Artesano {
  id: number
  nombre: string
  imagen: string
  categoria: string
  canton: string
  descripcion: string
  referencias: string[]
}

export const ARTESANOS: Artesano[] = [
  {
    id: 1,
    nombre: 'Ana María Zúñiga',
    imagen: '/images/homepage/CARD1.jpg',
    categoria: 'Cerámica Chorotega',
    canton: 'Nicoya',
    descripcion: 'Reconocida por sus vasijas tradicionales de barro pintado a mano.',
    referencias: ['https://youtu.be/ejemplo1', 'https://youtu.be/ejemplo2']
  },
  {
    id: 2,
    nombre: 'José Luis Quesada',
    imagen: '/images/homepage/CARD2.jpg',
    categoria: 'Talla en madera',
    canton: 'Santa Cruz',
    descripcion: 'Trabaja figuras religiosas y animales típicos en madera de guanacaste.',
    referencias: ['https://youtu.be/ejemplo3']
  },
  {
    id: 3,
    nombre: 'Laura Espinoza',
    imagen: '/images/homepage/CARD3.jpg',
    categoria: 'Textiles tradicionales',
    canton: 'Hojancha',
    descripcion: 'Elabora tejidos y bordados inspirados en la flora guanacasteca.',
    referencias: ['https://youtu.be/ejemplo4']
  },
  {
    id: 4,
    nombre: 'Carlos Moya',
    imagen: '/images/homepage/CARD4.jpg',
    categoria: 'Máscaras',
    canton: 'Liberia',
    descripcion: 'Diseña máscaras tradicionales para festividades populares.',
    referencias: ['https://youtu.be/ejemplo5']
  },
  {
    id: 5,
    nombre: 'María Delgado',
    imagen: '/images/homepage/CARD5.jpg',
    categoria: 'Cestería',
    canton: 'Carrillo',
    descripcion: 'Especialista en cestería natural hecha a mano.',
    referencias: ['https://youtu.be/ejemplo6']
  },
  {
    id: 6,
    nombre: 'Raúl Villalobos',
    imagen: '/images/homepage/CARD6.jpg',
    categoria: 'Alfarería',
    canton: 'Nicoya',
    descripcion: 'Mantiene viva la tradición alfarera heredada de sus abuelos.',
    referencias: ['https://youtu.be/ejemplo7']
  },
  {
    id: 7,
    nombre: 'Lucía Álvarez',
    imagen: '/images/homepage/CARD1.jpg',
    categoria: 'Tejidos de pita',
    canton: 'Santa Cruz',
    descripcion: 'Elabora sombreros y bolsos con fibras de pita.',
    referencias: ['https://youtu.be/ejemplo8']
  },
  {
    id: 8,
    nombre: 'Fernando Díaz',
    imagen: '/images/homepage/CARD2.jpg',
    categoria: 'Ebanistería tradicional',
    canton: 'Bagaces',
    descripcion: 'Construye muebles al estilo colonial guanacasteco.',
    referencias: ['https://youtu.be/ejemplo9']
  },
  {
    id: 9,
    nombre: 'Rosa Pineda',
    imagen: '/images/homepage/CARD3.jpg',
    categoria: 'Bordados típicos',
    canton: 'La Cruz',
    descripcion: 'Decora trajes típicos con bordados a mano.',
    referencias: ['https://youtu.be/ejemplo10']
  },
  {
    id: 10,
    nombre: 'Gabriel Salazar',
    imagen: '/images/homepage/CARD4.jpg',
    categoria: 'Instrumentos musicales',
    canton: 'Nandayure',
    descripcion: 'Fabrica marimbas y tambores típicos.',
    referencias: ['https://youtu.be/ejemplo11']
  },
  {
    id: 11,
    nombre: 'Isabel Moreno',
    imagen: '/images/homepage/CARD5.jpg',
    categoria: 'Trajes típicos',
    canton: 'Santa Cruz',
    descripcion: 'Diseña y confecciona trajes típicos guanacastecos.',
    referencias: ['https://youtu.be/ejemplo12']
  },
  {
    id: 12,
    nombre: 'Andrés Vega',
    imagen: '/images/homepage/CARD6.jpg',
    categoria: 'Pintura popular',
    canton: 'Liberia',
    descripcion: 'Pinta escenas de la vida rural en Guanacaste.',
    referencias: ['https://youtu.be/ejemplo13']
  },
  {
    id: 13,
    nombre: 'Paula Jiménez',
    imagen: '/images/homepage/CARD1.jpg',
    categoria: 'Bisutería artesanal',
    canton: 'Nicoya',
    descripcion: 'Diseña collares y pulseras con semillas naturales.',
    referencias: ['https://youtu.be/ejemplo14']
  },
  {
    id: 14,
    nombre: 'Luis Navarro',
    imagen: '/images/homepage/CARD2.jpg',
    categoria: 'Artesanía reciclada',
    canton: 'Cañas',
    descripcion: 'Crea figuras con materiales reutilizados.',
    referencias: ['https://youtu.be/ejemplo15']
  },
  {
    id: 15,
    nombre: 'Elena Rojas',
    imagen: '/images/homepage/CARD3.jpg',
    categoria: 'Arte indígena',
    canton: 'Hojancha',
    descripcion: 'Preserva técnicas ancestrales en su arte.',
    referencias: ['https://youtu.be/ejemplo16']
  },
]
