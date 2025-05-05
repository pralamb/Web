export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  BLOG: "/blog",
  CONTACT: "/contact",
};

export const IMAGES = {
  hero: "/images/fondo.jpeg",
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
          value: 5,
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
          "PRALAMB S.A.S. es una empresa colombiana de consultoría ambiental conformada por un equipo multidisciplinario de profesionales con más de 13 años de experiencia en el sector público y privado, especialmente en coordinación con autoridades ambientales, rurales y agropecuarias a nivel nacional y regional. Aunque somos una empresa de creación reciente, nuestra trayectoria individual nos respalda con un conocimiento sólido, técnico y estratégico en la gestión ambiental empresarial.",
        achievements: [
          "Experiencia en sectores industrial, minero, agropecuario, empresarial y rural",
          "Estructuración e implementación de Sistemas de Gestión Ambiental bajo ISO 14001:2015",
          "Formulación de Estudios de Impacto Ambiental (EIA) para proyectos estratégicos",
          "Diseño de programas de manejo de residuos, aguas y emisiones",
          "Gestión exitosa de trámites ambientales ante autoridades competentes",
          "Acceso de empresas a incentivos tributarios por inversiones ambientales",
          "Promoción de buenas prácticas en sostenibilidad y cambio climático",
        ],
      },
      values: {
        overline: "NUESTROS VALORES",
        title: "Lo que nos Define",
        description:
          "En PRALAMB S.A.S. creemos en el poder de la consultoría con propósito, donde la técnica, la experiencia y la ética se integran para generar valor ambiental, social y económico.",
        items: [
          {
            title: "Experiencia Técnica",
            description:
              "Más de 13 años de experiencia en gestión ambiental pública y privada.",
            iconColor: "#4CAF50",
            gradientColors: ["#4CAF50", "#496cb3"],
          },
          {
            title: "Compromiso con la Sostenibilidad",
            description:
              "Desarrollamos soluciones que garantizan la sostenibilidad y optimización de recursos.",
            iconColor: "#2196F3",
            gradientColors: ["#2196F3", "#496cb3"],
          },
          {
            title: "Ética Profesional",
            description:
              "Nuestras acciones se basan en la transparencia y el compromiso con nuestros clientes.",
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
      overline: "SERVICIOS PROFESIONALES",
      title: "Soluciones Ambientales Empresariales",
      subtitle:
        "Ofrecemos servicios especializados en gestión ambiental, cumplimiento normativo, trámites y asesoría integral para su empresa.",
      cta: {
        title: "¿Necesita asesoría ambiental profesional?",
        description:
          "Nuestro equipo de expertos está listo para ayudarle a cumplir con la normatividad ambiental y optimizar sus procesos.",
      },
    },
    blog: {
      title: "Nuestro Blog",
      subtitle: "Conocimiento y Experiencia Ambiental",
      description:
        "Descubre artículos, noticias y recursos sobre sostenibilidad, conservación y gestión ambiental.",
      search: {
        placeholder: "Buscar artículos...",
      },
      noResults: "No se encontraron artículos que coincidan con tu búsqueda.",
      date: {
        locale: "es-ES",
        options: {
          year: "numeric",
          month: "long",
          day: "numeric",
        },
      },
    },
    contact: {
      overline: "Contacto",
      title: "¿Tienes alguna pregunta?",
      subtitle:
        "Estamos aquí para ayudarte. Nuestro equipo de expertos está listo para asesorarte en cualquier proyecto ambiental.",
      formSuccess:
        "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.",
      info: {
        title: "Información de contacto",
        schedule: {
          title: "Horario de atención:",
          weekdays: "Lunes a Viernes: 8:00 - 17:00",
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
      { title: "Blog", path: ROUTES.BLOG },
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
        { name: "Blog", path: ROUTES.BLOG },
        { name: "Contacto", path: ROUTES.CONTACT },
      ],
    },
    services: {
      title: "Servicios",
      items: [
        "Gestión Ambiental",
        "Gestión de Residuos",
        "Instrumentos Ambientales",
        "Trámites Ambientales",
        "Reportes Ambientales",
      ],
    },
    contact: {
      title: "Contacto",
      address: {
        street: "Calle 195 No. 20 - 65",
        city: "Bogotá, Colombia",
      },
      phone: "+57 321 4333801",
      email: "proyectos@pralamb.com",
    },
    social: {
      linkedin:
        "https://www.linkedin.com/in/daniela-prada-mu%C3%B1oz-consultoria-ambiental/",
      instagram: "https://instagram.com/PRALAMB",
    },
    copyright: "© {year} PRALAMB. Todos los derechos reservados.",
  },
};

export const COMPANY_INFO = {
  name: "Pralamb",
  slogan: "Soluciones ambientales para un futuro sostenible",
  description:
    "Somos expertos en consultoría ambiental, ofreciendo soluciones integrales para empresas comprometidas con la sostenibilidad.",
  contact: {
    email: "proyectos@pralamb.com",
    phone: "+57 321 433380",
    address: "Calle 195 No. 20 - 65",
    schedule: {
      weekdays: "8:00 - 17:00",
    },
  },
  social: {
    linkedin: "https://linkedin.com/company/pralamb",
  },
};

export const SERVICES = [
  {
    id: "environmental-management",
    title: "Gestión Ambiental Integral",
    description:
      "Implementación de Sistemas de Gestión Ambiental (SGA ISO 14001), herramientas de gestión y auditoría interna.",
    image:
      "https://media.istockphoto.com/id/688582490/photo/hand-with-green-sprout-over-earth-globe-over.jpg?s=2048x2048&w=is&k=20&c=0jrRwhrDlUyKnqLjS70p6_uIGCMESnCFx0otfm9ZWhU=",
    features: [
      "Sistemas de Gestión Ambiental ISO 14001:2015",
      "Herramientas de gestión",
      "Auditoría interna",
      "Cumplimiento normativo",
    ],
  },
  {
    id: "waste-management",
    title: "Gestión de Residuos",
    description:
      "Planes de Gestión Integral de Residuos Sólidos (PGIRS), RESPEL, RCDs, aprovechables y gestión de envases/empaques.",
    image: "https://images.pexels.com/photos/2682462/pexels-photo-2682462.jpeg",
    features: [
      "Planes de Gestión Integral (PGIRS)",
      "Residuos peligrosos (RESPEL)",
      "Residuos de construcción y demolición",
      "Aprovechamiento y gestión de envases",
    ],
  },
  {
    id: "environmental-instruments",
    title: "Instrumentos Ambientales",
    description:
      "Desarrollo e implementación de instrumentos como EIA, PMA, PUEAA, PGRV y otros requeridos por la normatividad.",
    image:
      "https://media.istockphoto.com/id/1439233527/photo/light-bulb-on-green-background-ecological-technology-save-earth-concept.jpg?s=2048x2048&w=is&k=20&c=f-TOyGjPFE06wPfJrkFLjoHwzfBfhoa441y-dqPL4CI=",
    features: [
      "Estudios de Impacto Ambiental (EIA)",
      "Planes de Manejo Ambiental (PMA)",
      "Programa Uso Eficiente de Agua (PUEAA)",
      "Planes de Gestión del Riesgo de Vertimientos",
    ],
  },
  {
    id: "chemical-substances",
    title: "Gestión de Sustancias Químicas",
    description:
      "Consolidación y gestión de sustancias químicas, implementación del Sistema Globalmente Armonizado (SGA).",
    image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
    features: [
      "Inventario y gestión de sustancias químicas",
      "Implementación del SGA",
      "Hojas de seguridad",
      "Gestión de riesgos químicos",
    ],
  },
  {
    id: "environmental-procedures",
    title: "Trámites Ambientales",
    description:
      "Preparación de documentos para permisos, concesiones y registros ante autoridades ambientales.",
    image: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg",
    features: [
      "Documentación para permisos ambientales",
      "Gestión de concesiones",
      "Registros ambientales",
      "Acompañamiento en procesos legales",
    ],
  },
  {
    id: "tax-instruments",
    title: "Instrumentos Tributarios",
    description:
      "Aplicación de beneficios tributarios (IVA, Renta) relacionados con inversiones y proyectos ambientales.",
    image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg",
    features: [
      "Beneficios tributarios en IVA",
      "Beneficios tributarios en Renta",
      "Documentación para aplicación",
      "Asesoría en inversiones ambientales",
    ],
  },
  {
    id: "environmental-reports",
    title: "Reportes Ambientales",
    description:
      "Elaboración y presentación de Informes de Cumplimiento Ambiental (ICA), RUA, RESPEL, PCB's, entre otros.",
    image: "https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg",
    features: [
      "Informes de Cumplimiento Ambiental (ICA)",
      "Registro Único Ambiental (RUA)",
      "Reportes de residuos peligrosos",
      "Reportes de PCB's",
    ],
  },
  {
    id: "sanction-process",
    title: "Proceso Sancionatorio",
    description:
      "Revisión de requerimientos, elaboración de respuestas, documentación de evidencias y planes de acción.",
    image: "https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg",
    features: [
      "Revisión de requerimientos legales",
      "Elaboración de respuestas",
      "Documentación de evidencias",
      "Desarrollo de planes de acción",
    ],
  },
  {
    id: "gis-management",
    title: "Gestión de Información Geográfica",
    description:
      "Gestión y análisis de información geográfica utilizando PostGIS, GeoServer y estructura ANLA, incluyendo elaboración de productos cartográficos y análisis espacial.",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    features: [
      "Análisis con PostGIS y GeoServer",
      "Estructura ANLA",
      "Productos cartográficos",
      "Análisis espacial",
    ],
  },
  {
    id: "rural-property",
    title: "Gestión de Propiedad Rural",
    description:
      "Estudios de títulos, procesos de restitución y regularización de propiedad rural, incluyendo acompañamiento técnico en justicia transicional y derecho de tierras.",
    image: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg",
    features: [
      "Estudios de títulos",
      "Procesos de restitución",
      "Regularización de propiedad rural",
      "Justicia transicional",
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
