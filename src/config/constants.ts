export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  BLOG: "/blog",
  CONTACT: "/contact",
};

export const IMAGES = {
  hero: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg",
};

export const UI_TEXTS = {
  buttons: {
    contact: "Contáctanos",
    ourServices: "Nuestros Servicios",
    readMore: "Leer más",
    sendMessage: "Enviar mensaje",
  },
  sections: {
    about: {
      title: "Sobre Nosotros",
      description:
        "Desde nuestra fundación, nos hemos dedicado a proporcionar soluciones ambientales innovadoras y sostenibles para empresas de todos los sectores. Nuestro compromiso con el medio ambiente y la excelencia técnica nos ha convertido en un referente en el sector de la consultoría ambiental.",
      values: {
        title: "Nuestros Valores",
        items: [
          {
            title: "Sostenibilidad",
            description:
              "Compromiso con el desarrollo sostenible y la protección del medio ambiente.",
          },
          {
            title: "Innovación",
            description:
              "Búsqueda constante de soluciones innovadoras y eficientes.",
          },
          {
            title: "Excelencia",
            description:
              "Máxima calidad en todos nuestros servicios y procesos.",
          },
        ],
      },
      team: {
        title: "Nuestro Equipo",
      },
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones integrales para tu empresa",
      features: {
        title: "Características principales",
      },
      cta: {
        title: "¿Necesitas una solución personalizada?",
        description:
          "Nuestro equipo de expertos está listo para ayudarte a encontrar la mejor solución para tu empresa.",
      },
    },
    blog: {
      title: "Blog y Novedades",
      subtitle:
        "Mantente al día con las últimas noticias y tendencias en sostenibilidad ambiental",
      searchPlaceholder: "Buscar artículos...",
      noResults: "No se encontraron artículos que coincidan con tu búsqueda.",
      search: {
        placeholder: "Buscar artículos...",
      },
      date: {
        locale: "es-ES",
        options: {
          year: "numeric" as const,
          month: "long" as const,
          day: "numeric" as const,
        },
      },
    },
    contact: {
      title: "Contacto",
      subtitle:
        "Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.",
      formSuccess:
        "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.",
      info: {
        title: "Información de contacto",
        schedule: {
          title: "Horario de atención:",
          weekdays: "Lunes a Viernes: 9:00 - 18:00",
          saturday: "Sábados: 9:00 - 13:00",
        },
      },
      form: {
        fields: {
          name: "Nombre",
          email: "Email",
          phone: "Teléfono",
          company: "Empresa",
          message: "Mensaje",
        },
      },
    },
  },
};

export const COMPANY_INFO = {
  name: "Pralamb",
  slogan: "Soluciones ambientales para un futuro sostenible",
  description:
    "Somos expertos en consultoría ambiental, ofreciendo soluciones integrales para empresas comprometidas con la sostenibilidad.",
  contact: {
    email: "contacto@pralamb.com",
    phone: "+34 900 123 456",
    address: "Calle Principal 123, 28001 Madrid",
    schedule: {
      weekdays: "9:00 - 18:00",
      saturday: "9:00 - 13:00",
    },
  },
  social: {
    linkedin: "https://linkedin.com/company/pralamb",
    twitter: "https://twitter.com/pralamb",
    facebook: "https://facebook.com/pralamb",
  },
};

export const SERVICES = [
  {
    id: "water-treatment",
    title: "Tratamiento de Aguas",
    description:
      "Soluciones integrales para el tratamiento y gestión eficiente del agua.",
    image:
      "https://images.pexels.com/photos/15702931/pexels-photo-15702931/free-photo-of-hot-springs-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: [
      "Análisis y diagnóstico de sistemas de tratamiento",
      "Diseño de plantas de tratamiento",
      "Optimización de procesos",
      "Monitoreo y control de calidad",
    ],
  },
  {
    id: "waste-management",
    title: "Gestión de Residuos",
    description:
      "Servicios especializados en la gestión y tratamiento de residuos industriales.",
    image: "https://images.pexels.com/photos/2682462/pexels-photo-2682462.jpeg",
    features: [
      "Gestión integral de residuos",
      "Planes de minimización",
      "Valorización de residuos",
      "Cumplimiento normativo",
    ],
  },
  {
    id: "environmental-consulting",
    title: "Consultoría Ambiental",
    description:
      "Asesoramiento experto en normativa y gestión ambiental empresarial.",
    image: "https://images.pexels.com/photos/5324947/pexels-photo-5324947.jpeg",
    features: [
      "Auditorías ambientales",
      "Estudios de impacto ambiental",
      "Sistemas de gestión ambiental",
      "Asesoría legal ambiental",
    ],
  },
  {
    id: "energy-efficiency",
    title: "Eficiencia Energética",
    description:
      "Optimización del consumo energético y soluciones sostenibles.",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
    features: [
      "Auditorías energéticas",
      "Optimización de consumo",
      "Implementación de energías renovables",
      "Certificación energética",
    ],
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Ana García",
    position: "Directora General",
    description:
      "Experta en gestión ambiental con más de 15 años de experiencia.",
    image: "https://images.pexels.com/photos/5717641/pexels-photo-5717641.jpeg",
  },
  {
    name: "Carlos Rodríguez",
    position: "Director Técnico",
    description: "Ingeniero ambiental especializado en tratamiento de aguas.",
    image: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg",
  },
  {
    name: "Laura Martínez",
    position: "Consultora Senior",
    description: "Especialista en gestión de residuos y economía circular.",
    image: "https://images.pexels.com/photos/5717545/pexels-photo-5717545.jpeg",
  },
];

export const COMPANY_VALUES = [
  {
    title: "Sostenibilidad",
    description:
      "Compromiso con el desarrollo sostenible y la protección del medio ambiente.",
    image: "https://images.pexels.com/photos/5088017/pexels-photo-5088017.jpeg",
  },
  {
    title: "Innovación",
    description: "Búsqueda constante de soluciones innovadoras y eficientes.",
    image: "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg",
  },
  {
    title: "Excelencia",
    description: "Máxima calidad en todos nuestros servicios y procesos.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Innovaciones en el Tratamiento de Aguas Residuales",
    excerpt:
      "Descubre las últimas tecnologías y métodos para el tratamiento eficiente de aguas residuales industriales.",
    image:
      "https://images.pexels.com/photos/15702931/pexels-photo-15702931/free-photo-of-hot-springs-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Tratamiento de Aguas",
    date: "2024-02-20",
  },
  {
    id: 2,
    title: "Economía Circular en la Gestión de Residuos",
    excerpt:
      "Cómo implementar principios de economía circular para optimizar la gestión de residuos empresariales.",
    image: "https://images.pexels.com/photos/2682462/pexels-photo-2682462.jpeg",
    category: "Gestión de Residuos",
    date: "2024-02-15",
  },
  {
    id: 3,
    title: "Certificaciones Ambientales para Empresas",
    excerpt:
      "Guía completa sobre las principales certificaciones ambientales y sus beneficios para tu empresa.",
    image: "https://images.pexels.com/photos/5324947/pexels-photo-5324947.jpeg",
    category: "Gestión Ambiental",
    date: "2024-02-10",
  },
  {
    id: 4,
    title: "Energías Renovables en la Industria",
    excerpt:
      "Análisis de las diferentes opciones de energías renovables y su implementación en el sector industrial.",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
    category: "Eficiencia Energética",
    date: "2024-02-05",
  },
];

export const NAVIGATION = [
  { name: "Inicio", path: ROUTES.HOME },
  { name: "Sobre Nosotros", path: ROUTES.ABOUT },
  { name: "Servicios", path: ROUTES.SERVICES },
  { name: "Blog", path: ROUTES.BLOG },
  { name: "Contacto", path: ROUTES.CONTACT },
];
