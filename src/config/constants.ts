export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  BLOG: "/blog",
  CONTACT: "/contact",
  BLOG_POST: "/blog/:id",
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
    image: "/services/services1.jpg",
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
    image: "/services/services2.jpeg",
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
    image: "/services/services3.jpg",
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
    image: "/services/services4.jpeg",
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
    image: "/services/services5.jpeg",
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
    image: "/services/services6.jpeg",
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
    image: "/services/services7.jpeg",
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
    image: "/services/services8.jpeg",
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
    image: "/services/services9.jpeg",
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
    image: "/services/services10.jpeg",
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
    image: "/blog/autor.png",
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
    title: "Economía Circular: De la Teoría a la Acción Empresarial Sostenible",
    excerpt:
      "¿Qué pasaría si los residuos dejaran de existir? La economía circular propone un modelo productivo donde los materiales se reutilizan, regeneran o revalorizan.",
    content: `¿Qué pasaría si los residuos dejaran de existir?
La economía circular propone un modelo productivo donde los materiales se reutilizan, regeneran o revalorizan, reduciendo el desperdicio y maximizando la eficiencia. No se trata solo de reciclar: es rediseñar procesos, productos y servicios con un enfoque regenerativo.

🔄 ¿Qué puede hacer tu empresa?
Adoptar la economía circular implica un cambio de mentalidad. Desde rediseñar empaques sostenibles hasta implementar logística inversa, pasando por la valorización de subproductos industriales. No es solo una obligación ambiental, ¡es una estrategia competitiva!

🌱 Ventajas concretas:
• Reducción de costos de materia prima y disposición final.
• Cumplimiento normativo y posicionamiento de marca sostenible.
• Acceso a incentivos y nuevos mercados verdes.

En PRALAMB SAS, acompañamos a las empresas en la implementación de modelos circulares reales, medibles y alineados con su contexto operativo y regulatorio.

💬 ¿Tu empresa ya está dando pasos hacia la circularidad? Conversemos.

Referencias:
• DNP. (2022). Estrategia Nacional de Economía Circular - ENEC.`,
    image: "/blog/economia-circular.jpg",
    category: "Economía Circular",
    date: "2024-05-04",
    author: {
      name: "Daniela Prada",
      role: "Consultora Ambiental",
      avatar: "/blog/autor.png",
    },
    readingTime: "4 min",
    tags: [
      "Economía Circular",
      "Sostenibilidad",
      "Gestión de Residuos",
      "Innovación",
    ],
  },
  {
    id: 2,
    title:
      "ISO 14001:2026 ¿Estás Listo para el Cambio en los Sistemas de Gestión Ambiental?",
    excerpt:
      "La ISO 14001:2015, referente internacional para la gestión ambiental, se encuentra en proceso de actualización. Conoce los nuevos cambios que llegarán con la versión 2026.",
    content: `La ISO 14001:2015, referente internacional para la gestión ambiental, se encuentra en proceso de actualización. La nueva versión ISO 14001:2026 ya está en etapa de borrador y se espera su publicación oficial dentro del próximo año.

📈 ¿Qué trae de nuevo esta actualización?
• Enfoque más profundo en resiliencia climática.
• Integración de economía circular en los sistemas de gestión.
• Inclusión de digitalización ambiental y análisis del ciclo de vida ampliado.

🔍 ¿Por qué es relevante para tu empresa?
El contexto normativo está cambiando rápidamente y las organizaciones que se preparen desde ya tendrán una ventaja competitiva clara. El nuevo enfoque busca alinear la gestión ambiental con los retos globales del cambio climático y la sostenibilidad.

En PRALAMB SAS, realizamos diagnósticos de brechas, actualizamos la documentación del SGA y formamos a tus equipos para afrontar los nuevos requisitos con solidez.

📢 ¡Es el momento de anticiparse al cambio!

Referencias:
• ICONTEC. (2024). Revisión proyectada ISO 14001:2026 – Avances y contexto.`,
    image: "/blog/iso-14001.jpg",
    category: "Gestión Ambiental",
    date: "2024-05-03",
    author: {
      name: "Daniela Prada",
      role: "Consultora Ambiental",
      avatar: "/blog/autor.png",
    },
    readingTime: "5 min",
    tags: [
      "ISO 14001",
      "Gestión Ambiental",
      "Certificaciones",
      "Actualización",
    ],
  },
  {
    id: 3,
    title:
      "Parques Ecoindustriales: La Nueva Frontera de la Sostenibilidad Empresarial",
    excerpt:
      "Descubre cómo la NTC 6720:2023 establece los lineamientos para el desarrollo de parques ecoindustriales en Colombia.",
    content: `¿Sabías que Colombia ya cuenta con una norma técnica que establece los lineamientos para el desarrollo de parques ecoindustriales?

La NTC 6720:2023 plantea criterios claros para planear, implementar y certificar espacios industriales sostenibles donde las empresas colaboran para compartir recursos, minimizar residuos y generar impacto colectivo positivo.

🏭 ¿Qué es un Parque Ecoindustrial?
Un entorno planificado donde múltiples empresas cooperan para optimizar el uso de recursos, energía, agua y materiales, generando sinergias productivas, sociales y ambientales.

🔧 Beneficios clave:
• Mayor eficiencia energética e hídrica.
• Reducción de costos operativos.
• Mejor reputación corporativa y acceso a incentivos gubernamentales.

En PRALAMB SAS, acompañamos procesos de transición hacia modelos ecoindustriales, desde el diagnóstico de oportunidades hasta el desarrollo de estrategias de sinergia y reportes de desempeño ambiental.

🌍 La sostenibilidad no se construye sola. Se crea en red.

Referencias:
• ICONTEC. (2023). NTC 6720: Requisitos para el establecimiento de Parques Ecoindustriales.
• UNIDO. (2021). International Framework for Eco-Industrial Parks.`,
    image: "/blog/parques-ecoindustriales.jpg",
    category: "Desarrollo Sostenible",
    date: "2024-05-02",
    author: {
      name: "Daniela Prada",
      role: "Consultora Ambiental",
      avatar: "/blog/autor.png",
    },
    readingTime: "6 min",
    tags: [
      "Parques Ecoindustriales",
      "Sostenibilidad",
      "NTC 6720",
      "Innovación Industrial",
    ],
  },
  {
    id: 4,
    title:
      "Gestión del Recurso Hídrico: Deber Ambiental y Prioridad Estratégica",
    excerpt:
      "El agua es un bien estratégico y su gestión una responsabilidad compartida. Conoce las nuevas prioridades y exigencias en la gestión del recurso hídrico.",
    content: `💧El agua es un bien estratégico. Y su gestión, una responsabilidad compartida entre el Estado, la ciudadanía y, por supuesto, el sector empresarial.

En Colombia, proyectos como el Plan Nacional para el Manejo Integral del Recurso Hídrico, las Soluciones Basadas en la Naturaleza (SBN) y los nuevos planes de ordenamiento del recurso hídrico (PORH) están transformando el panorama.

📍 A nivel distrital y nacional se prioriza:
• La protección de fuentes hídricas.
• La implementación de tecnologías limpias.
• El monitoreo eficiente del uso y calidad del agua.
• El control a vertimientos y aprovechamientos ineficientes.

🚨 Para las empresas esto significa:
• Mayores exigencias normativas.
• Necesidad de fortalecer sus planes de uso eficiente y ahorro del agua (PUEAA).
• Oportunidades de inversión en infraestructura verde y circularidad del recurso.

Desde PRALAMB SAS, ayudamos a las empresas a diseñar, ajustar y optimizar sus estrategias hídricas, alineadas con los nuevos marcos regulatorios y de sostenibilidad.

💡 Gestionar el agua hoy es asegurar el futuro del negocio.

Referencias:
• MinAmbiente. (2023). Plan Nacional para el Manejo del Recurso Hídrico.
• CAR Cundinamarca. (2024). Lineamientos técnicos para planes de ordenamiento del recurso hídrico – PORH.
• Banco Mundial. (2022). Gestión integrada del recurso hídrico en América Latina.`,
    image: "/blog/gestion-hidrica.jpg",
    category: "Gestión Hídrica",
    date: "2024-05-01",
    author: {
      name: "Daniela Prada",
      role: "Consultora Ambiental",
      avatar: "/blog/autor.png",
    },
    readingTime: "7 min",
    tags: ["Recurso Hídrico", "Sostenibilidad", "Gestión Ambiental", "PUEAA"],
  },
];

export const NAVIGATION = [
  { name: "Inicio", path: ROUTES.HOME },
  { name: "Sobre Nosotros", path: ROUTES.ABOUT },
  { name: "Servicios", path: ROUTES.SERVICES },
  { name: "Blog", path: ROUTES.BLOG },
  { name: "Contacto", path: ROUTES.CONTACT },
];
