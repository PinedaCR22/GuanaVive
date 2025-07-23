// ✅ src/data/databaile.ts
export interface GrupoBaile {
  id: number
  nombre: string
  imagen: string
  categoria: string
  canton: string
  descripcion: string
  referencias: string[]
}

export const GRUPOS_BAILE: GrupoBaile[] = [
  {
    id: 1,
    nombre: 'Grupo Folclórico La Ceiba',
    imagen: '/images/homepage/CARD1.jpg',
    categoria: 'Baile tradicional',
    canton: 'Santa Cruz',
    descripcion: 'Rescata danzas autóctonas y trajes típicos guanacastecos.',
    referencias: ['https://youtu.be/baile1']
  },
  {
    id: 2,
    nombre: 'Danza Viva Guanacaste',
    imagen: '/images/homepage/CARD2.jpg',
    categoria: 'Proyección folclórica',
    canton: 'Nicoya',
    descripcion: 'Grupo juvenil que presenta bailes típicos con música en vivo.',
    referencias: ['https://youtu.be/baile2', 'https://youtu.be/baile3']
  },
  {
    id: 3,
    nombre: 'Corazón Tico',
    imagen: '/images/homepage/CARD3.jpg',
    categoria: 'Danza folclórica',
    canton: 'Liberia',
    descripcion: 'Participan en festivales nacionales representando a la provincia.',
    referencias: ['https://youtu.be/baile4']
  },
  {
    id: 4,
    nombre: 'Amanecer Cultural',
    imagen: '/images/homepage/CARD4.jpg',
    categoria: 'Rescate cultural',
    canton: 'Bagaces',
    descripcion: 'Promueve el rescate de bailes tradicionales de Guanacaste.',
    referencias: ['https://youtu.be/baile5']
  },
  {
    id: 5,
    nombre: 'Raíces de Mi Tierra',
    imagen: '/images/homepage/CARD5.jpg',
    categoria: 'Danza tradicional',
    canton: 'Carrillo',
    descripcion: 'Grupo formado por adultos mayores que mantienen vivas las tradiciones.',
    referencias: ['https://youtu.be/baile6']
  },
  {
    id: 6,
    nombre: 'Tierra Chorotega',
    imagen: '/images/homepage/CARD6.jpg',
    categoria: 'Expresión artística',
    canton: 'Hojancha',
    descripcion: 'Combina teatro y danza para contar historias locales.',
    referencias: ['https://youtu.be/baile7']
  },
  {
    id: 7,
    nombre: 'Tradición Viva',
    imagen: '/images/homepage/CARD1.jpg',
    categoria: 'Baile juvenil',
    canton: 'Nandayure',
    descripcion: 'Grupo de jóvenes que se presentan en escuelas y colegios.',
    referencias: ['https://youtu.be/baile8']
  },
  {
    id: 8,
    nombre: 'Sones de la Sabana',
    imagen: '/images/homepage/CARD2.jpg',
    categoria: 'Danza con marimba',
    canton: 'Tilarán',
    descripcion: 'Coreografías acompañadas de marimba en vivo.',
    referencias: ['https://youtu.be/baile9']
  },
  {
    id: 9,
    nombre: 'Brisas Guanacastecas',
    imagen: '/images/homepage/CARD3.jpg',
    categoria: 'Baile típico',
    canton: 'Abangares',
    descripcion: 'Participación activa en ferias y festivales cantonales.',
    referencias: ['https://youtu.be/baile10']
  },
  {
    id: 10,
    nombre: 'Cultura y Pasión',
    imagen: '/images/homepage/CARD4.jpg',
    categoria: 'Proyección juvenil',
    canton: 'La Cruz',
    descripcion: 'Promueve la danza como medio de identidad cultural.',
    referencias: ['https://youtu.be/baile11']
  },
  {
    id: 11,
    nombre: 'Alma Chorotega',
    imagen: '/images/homepage/CARD5.jpg',
    categoria: 'Proyección estudiantil',
    canton: 'Nicoya',
    descripcion: 'Estudiantes de secundaria que aprenden y presentan danzas tradicionales.',
    referencias: ['https://youtu.be/baile12']
  },
  {
    id: 12,
    nombre: 'Sol y Sombra',
    imagen: '/images/homepage/CARD6.jpg',
    categoria: 'Danza escénica',
    canton: 'Santa Cruz',
    descripcion: 'Fusiona danza folclórica con expresión contemporánea.',
    referencias: ['https://youtu.be/baile13']
  },
  {
    id: 13,
    nombre: 'Aires de Tradición',
    imagen: '/images/homepage/CARD1.jpg',
    categoria: 'Grupos comunales',
    canton: 'Cañas',
    descripcion: 'Vecinos del cantón que se organizan para rescatar tradiciones.',
    referencias: ['https://youtu.be/baile14']
  },
  {
    id: 14,
    nombre: 'Guanacaste por Siempre',
    imagen: '/images/homepage/CARD2.jpg',
    categoria: 'Rescate juvenil',
    canton: 'Santa Cruz',
    descripcion: 'Grupo joven que promueve valores culturales a través de la danza.',
    referencias: ['https://youtu.be/baile15']
  },
  {
    id: 15,
    nombre: 'Pasión Guanacasteca',
    imagen: '/images/homepage/CARD3.jpg',
    categoria: 'Folclor guanacasteco',
    canton: 'Liberia',
    descripcion: 'Enseña a niños y niñas los bailes típicos en centros culturales.',
    referencias: ['https://youtu.be/baile16']
  },
]
