export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  BLOG: "/blog",
  CONTACT: "/contact",
};

export const IMAGES = {
  hero: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg",
  leafPattern: "/leaf-pattern.png",
};

export const UI_TEXTS = {
  buttons: {
    contact: "Contáctanos",
    ourServices: "Nuestros Servicios",
    readMore: "Leer más",
    sendMessage: "Enviar mensaje",
    exploreService: "Explorar Servicio",
  },
  sections: {
    hero: {
      overline: "SOLUCIONES SOSTENIBLES",
      title: {
        part1: "Servicios",
        part2: "Ambientales",
        part3: "Integrales",
      },
      description:
        "Comprometidos con el futuro de nuestro planeta, desarrollamos soluciones innovadoras para la conservación y gestión sostenible del medio ambiente.",
    },
    services: {
      overline: "NUESTRAS SOLUCIONES",
      title: "Servicios Ambientales",
      description:
        "Soluciones innovadoras y sostenibles para proteger nuestro planeta y construir un futuro más verde",
    },
    stats: {
      overline: "NUESTRO IMPACTO",
      title: "Resultados que Hablan",
      description:
        "Nuestro compromiso con el medio ambiente se refleja en números concretos y resultados tangibles.",
      items: [
        {
          value: 100,
          suffix: "+",
          label: "Proyectos",
          description: "Proyectos ambientales completados con éxito",
        },
        {
          value: 50,
          suffix: "K",
          label: "Árboles",
          description: "Árboles plantados en proyectos de reforestación",
        },
        {
          value: 25,
          suffix: "+",
          label: "Países",
          description: "Países donde hemos implementado soluciones",
        },
        {
          value: 95,
          suffix: "%",
          label: "Satisfacción",
          description: "Clientes satisfechos con nuestros servicios",
        },
      ],
    },
    benefits: {
      overline: "NUESTRO COMPROMISO",
      title: "Comprometidos con el Medio Ambiente",
      description:
        "Nuestro compromiso es crear un impacto positivo en el medio ambiente a través de soluciones innovadoras y sostenibles que beneficien tanto a la naturaleza como a la sociedad.",
      items: [
        {
          title: "Conservación Ambiental",
          description:
            "Desarrollamos estrategias efectivas para la preservación de ecosistemas y recursos naturales.",
          color: "#4CAF50",
          gradient: "linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)",
        },
        {
          title: "Gestión del Agua",
          description:
            "Implementamos soluciones innovadoras para el tratamiento y conservación del agua.",
          color: "#2196F3",
          gradient: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)",
        },
        {
          title: "Economía Circular",
          description:
            "Promovemos prácticas sostenibles y la reutilización eficiente de recursos.",
          color: "#8BC34A",
          gradient: "linear-gradient(135deg, #8BC34A 0%, #7CB342 100%)",
        },
      ],
    },
    about: {
      title: "Comprometidos con el Medio Ambiente",
      overline: "NUESTRA HISTORIA",
      history: {
        description:
          "Desde nuestra fundación, hemos estado a la vanguardia de la consultoría ambiental, trabajando incansablemente para crear un futuro más sostenible. Nuestra trayectoria está marcada por el compromiso con la innovación y la excelencia en cada proyecto que emprendemos.",
        achievements: [
          "Más de 100 proyectos de impacto ambiental completados con éxito",
          "Reconocimiento internacional por nuestras prácticas sostenibles",
          "Certificación ISO 14001 en Gestión Ambiental",
          "Premio Nacional a la Innovación en Sostenibilidad 2023",
        ],
      },
      values: {
        overline: "NUESTROS VALORES",
        title: "Lo que nos Define",
        description:
          "Nuestros valores fundamentales guían cada acción y decisión que tomamos en nuestro compromiso con el medio ambiente.",
        items: [
          {
            title: "Sostenibilidad",
            description:
              "Promovemos prácticas que garantizan un futuro sostenible para las próximas generaciones.",
            iconColor: "#4CAF50",
            gradientColors: ["#4CAF50", "#496cb3"],
          },
          {
            title: "Innovación",
            description:
              "Buscamos constantemente nuevas soluciones para los desafíos ambientales actuales.",
            iconColor: "#2196F3",
            gradientColors: ["#2196F3", "#496cb3"],
          },
          {
            title: "Responsabilidad",
            description:
              "Asumimos el compromiso de proteger y preservar nuestro entorno natural.",
            iconColor: "#496cb3",
            gradientColors: ["#8BC34A", "#496cb3"],
          },
        ],
      },
      team: {
        overline: "NUESTRO EQUIPO",
        title: "Expertos Comprometidos",
        description:
          "Nuestro equipo de profesionales trabaja incansablemente para crear un impacto positivo en el medio ambiente.",
      },
    },
    servicesPage: {
      overline: "NUESTROS SERVICIOS",
      title: "Soluciones Ambientales Integrales",
      subtitle:
        "Ofrecemos una amplia gama de servicios especializados en gestión ambiental y desarrollo sostenible.",
      cta: {
        title: "¿Necesitas una Solución Ambiental?",
        description:
          "Contáctanos hoy mismo para discutir cómo podemos ayudarte a alcanzar tus objetivos de sostenibilidad.",
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
        title: "Envíanos un mensaje",
        description:
          "Completa el formulario y nos pondremos en contacto contigo.",
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
  navigation: {
    brand: "PRALAMB",
    items: [
      { title: "Inicio", path: ROUTES.HOME },
      { title: "Servicios", path: ROUTES.SERVICES },
      { title: "Sobre Nosotros", path: ROUTES.ABOUT },
      { title: "Contacto", path: ROUTES.CONTACT },
    ],
  },
  footer: {
    company: {
      name: "PRALAMB",
      description:
        "Comprometidos con el medio ambiente y el desarrollo sostenible. Ofrecemos soluciones integrales para la gestión ambiental y la conservación de recursos naturales.",
    },
    quickLinks: {
      title: "Enlaces Rápidos",
      items: [
        { name: "Inicio", path: ROUTES.HOME },
        { name: "Servicios", path: ROUTES.SERVICES },
        { name: "Sobre Nosotros", path: ROUTES.ABOUT },
        { name: "Contacto", path: ROUTES.CONTACT },
      ],
    },
    services: {
      title: "Servicios",
      items: [
        "Consultoría Ambiental",
        "Gestión de Residuos",
        "Energías Renovables",
        "Estudios de Impacto",
        "Educación Ambiental",
      ],
    },
    contact: {
      title: "Contacto",
      address: {
        street: "Calle Principal #123",
        city: "Ciudad, País",
      },
      phone: "+1 234 567 890",
      email: "info@PRALAMB.com",
    },
    social: {
      facebook: "https://facebook.com/PRALAMB",
      twitter: "https://twitter.com/PRALAMB",
      linkedin: "https://linkedin.com/company/PRALAMB",
      instagram: "https://instagram.com/PRALAMB",
    },
    copyright: "© {year} PRALAMB. Todos los derechos reservados.",
  },
};

export const THEME = {
  colors: {
    primary: "#4A5D4B",
    primaryDark: "#2C3E2D",
    primaryDarker: "#1F2B1F",
    secondary: "#A7B8A1",
    accent: "#8FA891",
    background: {
      light: "#ffffff",
      dark: "linear-gradient(135deg, #2C3E2D 0%, #1F2B1F 100%)",
    },
    text: {
      light: "#ffffff",
      dark: "#4A5D4B",
      muted: "rgba(255,255,255,0.7)",
    },
  },
  gradients: {
    primary: "linear-gradient(45deg, #4A5D4B 0%, #8FA891 100%)",
    primaryHover: "linear-gradient(45deg, #8FA891 0%, #4A5D4B 100%)",
    background: "linear-gradient(135deg, #2C3E2D 0%, #1F2B1F 100%)",
    text: "linear-gradient(90deg, #ffffff 0%, #A7B8A1 100%)",
  },
  effects: {
    glassmorphism: {
      backdropFilter: "blur(10px)",
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
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
    name: "Ana Martínez",
    position: "Directora de Proyectos Ambientales",
    description:
      "Especialista en gestión ambiental con más de 10 años de experiencia en el sector.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ana@example.com",
    },
  },
  {
    name: "Carlos Rodríguez",
    position: "Consultor Senior de Sostenibilidad",
    description:
      "Experto en energías renovables y desarrollo sostenible con amplia experiencia internacional.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "carlos@example.com",
    },
  },
  {
    name: "Laura Sánchez",
    position: "Especialista en Impacto Ambiental",
    description:
      "Dedicada a la evaluación y mitigación de impactos ambientales en proyectos de gran escala.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "laura@example.com",
    },
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
