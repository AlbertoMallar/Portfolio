import type { PortfolioContent } from "@/types/portfolio";

const es = {
  metadata: {
    title: "Software Developer | AI Engineering",
    description:
      "Portfolio de Alberto Mallar. Software Developer | AI Engineering: desarrollo Full Stack e IA aplicada para empresas y clientes, desde la necesidad hasta producción.",
  },
  common: {
    skipToContent: "Saltar al contenido principal",
    languageLabel: "Idioma",
    languageNames: {
      es: "Español",
      en: "English",
      de: "Deutsch",
    },
    pendingContent: "Contenido pendiente de definir.",
    presentLabel: "Actualidad",
    hoursLabel: "horas de formación (aprox.)",
    contextLabels: {
      professional: "Profesional",
      academic: "Académico",
      personal: "Personal",
    },
    links: {
      github: "GitHub",
      linkedin: "LinkedIn",
      repository: "Ver código",
      live: "Visitar sitio",
      credential: "Ver credencial",
    },
  },
  navigation: {
    label: "Navegación principal",
    menu: "Abrir menú",
    close: "Cerrar menú",
    projects: "Proyectos",
    about: "Sobre mí",
    experience: "Experiencia",
    contact: "Contacto",
  },
  hero: {
    title: "Software Developer | AI Engineering",
    summary:
      "Trabajo con empresas y equipos para transformar necesidades reales en soluciones de software e IA aplicada. Combino desarrollo Full Stack, AI Engineering y experiencia directa con clientes para llevar problemas desde la necesidad inicial hasta una solución funcional y desplegada.",
    projectsLabel: "Explorar proyectos",
    cvViewLabel: "Ver CV",
    cvDownloadLabel: "Descargar CV",
    cvPending: "CV en español pendiente",
    domains: ["Full Stack Development", "AI Engineering", "Idea → Producción"],
  },
  sections: {
    capabilities: {
      eyebrow: "01 / SOLUCIONES",
      title: "Qué puedo aportar",
    },
    projects: {
      eyebrow: "02 / TRABAJO PROFESIONAL",
      title: "Algunos de mis trabajos",
      body: "Soluciones desarrolladas para empresas y clientes, desde la comprensión de la necesidad hasta la implementación y puesta en producción.",
    },
    about: {
      eyebrow: "03 / SOBRE MÍ",
      title: "Del problema a la solución",
      body: "Desde 2022 trabajo en desarrollo de software, participando en proyectos y colaboraciones tecnológicas para empresas como ICASA, VIANSA, ITC y Sensus3D. Mi experiencia abarca desarrollo Full Stack con TypeScript, JavaScript, Python, Next.js, React, Node.js y PostgreSQL, además de integraciones, deployment y puesta en producción.\n\nMi perfil evolucionó naturalmente hacia AI Engineering, ampliando el tipo de problemas que puedo resolver mediante embeddings, RAG, agentes, LangChain, LangGraph, structured outputs, Langfuse y modelos multimodales. También trabajé en entrenamiento y evaluación de sistemas de IA en Outlier, donde posteriormente fui seleccionado como reviewer.\n\nAdemás del trabajo técnico, tengo experiencia directa con clientes, coordinación de personas y resolución de problemas. Mi objetivo es entender la necesidad detrás de un requerimiento y encontrar una solución tecnológica que tenga sentido para quien la va a utilizar.",
    },
    experience: {
      eyebrow: "04 / TRAYECTORIA",
      title: "Experiencia que conecta disciplinas.",
    },
    evidence: {
      eyebrow: "05 / EVIDENCIA",
      title: "Evidencia profesional",
    },
    "ai-work": {
      eyebrow: "06 / AI ENGINEERING",
      title: "IA aplicada: de RAG a sistemas agentic y multimodales",
      body: "Proyectos de AI Engineering enfocados en recuperación de conocimiento, orquestación de agentes y procesamiento multimodal, desarrollados como una progresión práctica de complejidad y capacidades.",
    },
    skills: {
      eyebrow: "07 / TECNOLOGÍAS",
      title: "El stack detrás del trabajo.",
    },
    education: {
      eyebrow: "08 / FORMACIÓN",
      title: "Formación y aprendizaje continuo.",
    },
    "other-projects": {
      eyebrow: "09 / OTROS PROYECTOS",
      title: "Fundamentos puestos en práctica.",
      body: "Proyectos personales en equipo y académicos que complementan mi experiencia en Full Stack y AI Engineering.",
    },
    contact: {
      eyebrow: "10 / CONTACTO",
      title: "Construyamos algo útil.",
      body: "Podés contactarme por email o conocer más sobre mi trabajo y trayectoria en GitHub y LinkedIn.",
    },
  },
  ui: {
    production: "En producción",
    academic: "Proyecto académico",
    privateRepository: "Repositorio privado",
    previewPending: "Screenshot pendiente",
    previewDescription: "Espacio reservado para una captura real del sitio.",
    schematic: "Esquema conceptual",
    details: "Más sobre este proyecto",
    previousExperience: "Experiencia complementaria",
    coreTechnologies: "Tecnologías principales",
    additionalTechnologies: "Herramientas y capacidades complementarias",
    education: "Formación",
    certification: "Certificación",
    emailLabel: "Escribime",
    contactTitle: "¿Tenés un proyecto en mente?",
    footer: "Software Developer | AI Engineering",
    backToTop: "Volver al inicio",
    professionalEvidence: [
      {
        title: "Proyectos llevados a producción",
        body: "ICASA y VIANSA: soluciones desarrolladas y desplegadas para clientes reales.",
      },
      {
        title: "Seleccionado como reviewer en Outlier",
        body: "Revisión técnica y control de calidad del trabajo realizado por otros contributors.",
      },
      {
        title: "Evolución práctica en AI Engineering",
        body: "RAG → sistemas multiagente → IA multimodal.",
      },
    ],
    aboutCapabilities: [
      {
        title: "Desarrollo Full Stack",
        body: "Aplicaciones y soluciones web con frontend, backend, lógica de negocio, APIs y bases de datos.",
      },
      {
        title: "AI Engineering",
        body: "RAG, embeddings, agentes, structured outputs y workflows multimodales integrados a productos y procesos.",
      },
      {
        title: "De la necesidad a producción",
        body: "Relevamiento, implementación, integraciones, deployment, configuración de dominios y ajustes en producción.",
      },
      {
        title: "Clientes y equipos",
        body: "Comprensión de requerimientos, comunicación técnica, coordinación y traducción de necesidades reales a soluciones concretas.",
      },
    ],
  },
} satisfies PortfolioContent;

export default es;
