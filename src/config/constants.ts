export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  BLOG: '/blog',
  CONTACT: '/contact'
}

export const COMPANY_INFO = {
  name: 'EcoSolutions',
  slogan: 'Soluciones ambientales para un futuro sostenible',
  description: 'Somos expertos en consultoría ambiental, ofreciendo soluciones integrales para empresas comprometidas con la sostenibilidad.',
  contact: {
    email: 'contacto@ecosolutions.com',
    phone: '+34 900 123 456',
    address: 'Calle Principal 123, 28001 Madrid'
  },
  social: {
    linkedin: 'https://linkedin.com/company/ecosolutions',
    twitter: 'https://twitter.com/ecosolutions',
    facebook: 'https://facebook.com/ecosolutions'
  }
}

export const SERVICES = [
  {
    id: 'water-treatment',
    title: 'Tratamiento de Aguas',
    description: 'Soluciones integrales para el tratamiento y gestión eficiente del agua.',
    icon: 'water_drop'
  },
  {
    id: 'waste-management',
    title: 'Gestión de Residuos',
    description: 'Servicios especializados en la gestión y tratamiento de residuos industriales.',
    icon: 'recycling'
  },
  {
    id: 'environmental-consulting',
    title: 'Consultoría Ambiental',
    description: 'Asesoramiento experto en normativa y gestión ambiental empresarial.',
    icon: 'nature'
  },
  {
    id: 'energy-efficiency',
    title: 'Eficiencia Energética',
    description: 'Optimización del consumo energético y soluciones sostenibles.',
    icon: 'eco'
  }
]

export const NAVIGATION = [
  { name: 'Inicio', path: ROUTES.HOME },
  { name: 'Sobre Nosotros', path: ROUTES.ABOUT },
  { name: 'Servicios', path: ROUTES.SERVICES },
  { name: 'Blog', path: ROUTES.BLOG },
  { name: 'Contacto', path: ROUTES.CONTACT }
] 