// ✅ src/data/dataretahilero.ts
export interface Retahilero {
  id: number
  nombre: string
  imagen: string
  categoria: string
  canton: string
  descripcion: string
  referencias: string[]
}

export const RETAHILEROS: Retahilero[] = [
  {
    id: 1,
    nombre: 'Don Pedro Araya',
    imagen: '/images/homepage/CARD1.jpg',
    categoria: 'Retahilero tradicional',
    canton: 'Nicoya',
    descripcion: 'Conocido por sus versos improvisados en festivales populares.',
    referencias: ['https://youtu.be/ret1', 'https://youtu.be/ret2']
  },
  {
    id: 2,
    nombre: 'María Chavarría',
    imagen: '/images/homepage/CARD2.jpg',
    categoria: 'Narración oral',
    canton: 'Santa Cruz',
    descripcion: 'Especialista en retahílas con enfoque educativo.',
    referencias: ['https://youtu.be/ret3']
  },
  {
    id: 3,
    nombre: 'Juan Carlos Mora',
    imagen: '/images/homepage/CARD3.jpg',
    categoria: 'Retahilero moderno',
    canton: 'Bagaces',
    descripcion: 'Combina rimas tradicionales con temáticas contemporáneas.',
    referencias: ['https://youtu.be/ret4']
  },
  {
    id: 4,
    nombre: 'Lucía Hernández',
    imagen: '/images/homepage/CARD4.jpg',
    categoria: 'Retahílas infantiles',
    canton: 'Liberia',
    descripcion: 'Recrea juegos tradicionales con rimas para niños.',
    referencias: ['https://youtu.be/ret5']
  },
  {
    id: 5,
    nombre: 'Carlos Segura',
    imagen: '/images/homepage/CARD5.jpg',
    categoria: 'Improvisador',
    canton: 'Cañas',
    descripcion: 'Participa en concursos nacionales de retahílas.',
    referencias: ['https://youtu.be/ret6']
  },
  {
    id: 6,
    nombre: 'María del Mar Vargas',
    imagen: '/images/homepage/CARD6.jpg',
    categoria: 'Narradora popular',
    canton: 'Carrillo',
    descripcion: 'Transmite oralmente cuentos tradicionales acompañados de retahílas.',
    referencias: ['https://youtu.be/ret7']
  },
  {
    id: 7,
    nombre: 'José Pablo Soto',
    imagen: '/images/homepage/CARD1.jpg',
    categoria: 'Verso tradicional',
    canton: 'La Cruz',
    descripcion: 'Preserva la tradición de rimas campesinas.',
    referencias: ['https://youtu.be/ret8']
  },
  {
    id: 8,
    nombre: 'Sandra Céspedes',
    imagen: '/images/homepage/CARD2.jpg',
    categoria: 'Retahílas en décimas',
    canton: 'Tilarán',
    descripcion: 'Utiliza estructuras poéticas para sus narraciones.',
    referencias: ['https://youtu.be/ret9']
  },
  {
    id: 9,
    nombre: 'Luis Moya',
    imagen: '/images/homepage/CARD3.jpg',
    categoria: 'Poeta oral',
    canton: 'Abangares',
    descripcion: 'Famoso por su agilidad para crear rimas al instante.',
    referencias: ['https://youtu.be/ret10']
  },
  {
    id: 10,
    nombre: 'Rosa Calderón',
    imagen: '/images/homepage/CARD4.jpg',
    categoria: 'Educadora cultural',
    canton: 'Santa Cruz',
    descripcion: 'Promueve el uso de retahílas en la educación primaria.',
    referencias: ['https://youtu.be/ret11']
  },
  {
    id: 11,
    nombre: 'Andrés López',
    imagen: '/images/homepage/CARD5.jpg',
    categoria: 'Improvisador festivo',
    canton: 'Nicoya',
    descripcion: 'Acompaña retahílas con marimba y otros instrumentos.',
    referencias: ['https://youtu.be/ret12']
  },
  {
    id: 12,
    nombre: 'Patricia Jiménez',
    imagen: '/images/homepage/CARD6.jpg',
    categoria: 'Oralidad popular',
    canton: 'Hojancha',
    descripcion: 'Narradora destacada en festivales culturales.',
    referencias: ['https://youtu.be/ret13']
  },
  {
    id: 13,
    nombre: 'Gerardo Méndez',
    imagen: '/images/homepage/CARD1.jpg',
    categoria: 'Tradición oral',
    canton: 'Santa Cruz',
    descripcion: 'Sus retahílas rescatan vocabulario y modismos antiguos.',
    referencias: ['https://youtu.be/ret14']
  },
  {
    id: 14,
    nombre: 'Estela Vargas',
    imagen: '/images/homepage/CARD2.jpg',
    categoria: 'Narradora de leyendas',
    canton: 'Nandayure',
    descripcion: 'Combina historias legendarias con versos rimados.',
    referencias: ['https://youtu.be/ret15']
  },
  {
    id: 15,
    nombre: 'Miguel Obando',
    imagen: '/images/homepage/CARD3.jpg',
    categoria: 'Creador de coplas',
    canton: 'Bagaces',
    descripcion: 'Autor de coplas costumbristas con enfoque cómico.',
    referencias: ['https://youtu.be/ret16']
  }
]
