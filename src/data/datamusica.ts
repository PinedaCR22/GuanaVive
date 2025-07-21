// ✅ src/data/datamusica.ts
export interface Musico {
  id: number
  nombre: string
  imagen: string
  categoria: string
  canton: string
  descripcion: string
  referencias: string[]
}

export const MUSICOS: Musico[] = [
  {
    id: 1,
    nombre: 'Marimba Los Guayacanes',
    imagen: '/images/homepage/CARD1.jpg',
    categoria: 'Marimba tradicional',
    canton: 'Santa Cruz',
    descripcion: 'Grupo tradicional que interpreta música folclórica en marimba.',
    referencias: ['https://youtu.be/musica1', 'https://youtu.be/musica2']
  },
  {
    id: 2,
    nombre: 'Grupo Los de la Bajura',
    imagen: '/images/homepage/CARD2.jpg',
    categoria: 'Música folclórica',
    canton: 'Nicoya',
    descripcion: 'Reconocido grupo que interpreta canciones populares guanacastecas.',
    referencias: ['https://youtu.be/musica3']
  },
  {
    id: 3,
    nombre: 'Coro Voces del Sol',
    imagen: '/images/homepage/CARD3.jpg',
    categoria: 'Coro tradicional',
    canton: 'Liberia',
    descripcion: 'Coro infantil que canta piezas típicas de la provincia.',
    referencias: ['https://youtu.be/musica4']
  },
  {
    id: 4,
    nombre: 'Doña Panchita y su guitarra',
    imagen: '/images/homepage/CARD4.jpg',
    categoria: 'Solista',
    canton: 'La Cruz',
    descripcion: 'Cantautora que interpreta coplas y canciones tradicionales.',
    referencias: ['https://youtu.be/musica5']
  },
  {
    id: 5,
    nombre: 'Los Copleros de Nandayure',
    imagen: '/images/homepage/CARD5.jpg',
    categoria: 'Coplas y bombas',
    canton: 'Nandayure',
    descripcion: 'Grupo que mantiene viva la tradición oral a través de la música.',
    referencias: ['https://youtu.be/musica6']
  },
  {
    id: 6,
    nombre: 'Marimba Sol de Oro',
    imagen: '/images/homepage/CARD6.jpg',
    categoria: 'Marimba tradicional',
    canton: 'Santa Cruz',
    descripcion: 'Conjunto de marimba con jóvenes intérpretes de la zona.',
    referencias: ['https://youtu.be/musica7']
  },
  {
    id: 7,
    nombre: 'Los Rancheritos de Cañas',
    imagen: '/images/homepage/CARD1.jpg',
    categoria: 'Grupo ranchero',
    canton: 'Cañas',
    descripcion: 'Grupo familiar que canta música ranchera tradicional.',
    referencias: ['https://youtu.be/musica8']
  },
  {
    id: 8,
    nombre: 'Trío Guanacaste',
    imagen: '/images/homepage/CARD2.jpg',
    categoria: 'Bolero tradicional',
    canton: 'Bagaces',
    descripcion: 'Trío que interpreta boleros y baladas tradicionales.',
    referencias: ['https://youtu.be/musica9']
  },
  {
    id: 9,
    nombre: 'Banda Municipal de Nicoya',
    imagen: '/images/homepage/CARD3.jpg',
    categoria: 'Banda escolar',
    canton: 'Nicoya',
    descripcion: 'Participa en desfiles patrios y actividades culturales.',
    referencias: ['https://youtu.be/musica10']
  },
  {
    id: 10,
    nombre: 'Dúo Alma Tica',
    imagen: '/images/homepage/CARD4.jpg',
    categoria: 'Dúo folclórico',
    canton: 'Hojancha',
    descripcion: 'Dúo que interpreta canciones románticas tradicionales.',
    referencias: ['https://youtu.be/musica11']
  },
  {
    id: 11,
    nombre: 'Tambores del Amanecer',
    imagen: '/images/homepage/CARD5.jpg',
    categoria: 'Percusión',
    canton: 'Abangares',
    descripcion: 'Grupo de tambores que acompaña bailes folclóricos.',
    referencias: ['https://youtu.be/musica12']
  },
  {
    id: 12,
    nombre: 'Doña Chelita y sus Coplas',
    imagen: '/images/homepage/CARD6.jpg',
    categoria: 'Coplas',
    canton: 'Santa Cruz',
    descripcion: 'Reconocida por su creatividad y humor en coplas improvisadas.',
    referencias: ['https://youtu.be/musica13']
  },
  {
    id: 13,
    nombre: 'Marimba Hermanos Espinoza',
    imagen: '/images/homepage/CARD1.jpg',
    categoria: 'Marimba tradicional',
    canton: 'Liberia',
    descripcion: 'Familia dedicada a preservar la tradición marimbística.',
    referencias: ['https://youtu.be/musica14']
  },
  {
    id: 14,
    nombre: 'Coro Voces de la Tierra',
    imagen: '/images/homepage/CARD2.jpg',
    categoria: 'Coro',
    canton: 'La Cruz',
    descripcion: 'Cantan canciones folclóricas y patrióticas.',
    referencias: ['https://youtu.be/musica15']
  },
  {
    id: 15,
    nombre: 'Don Pancho y su Guitarra',
    imagen: '/images/homepage/CARD3.jpg',
    categoria: 'Guitarra tradicional',
    canton: 'Carrillo',
    descripcion: 'Interpreta música tradicional costarricense en guitarra.',
    referencias: ['https://youtu.be/musica16']
  },
]
