import type { PortfolioContent } from "@/types/portfolio";

const es = {
  metadata: {
    title: "Software & AI Engineering",
    description:
      "Portfolio de Alberto Mallar. Software & AI Engineering: soluciones tecnológicas, modernización de software e integración de IA para empresas y equipos.",
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
    hoursLabel: "horas de formación",
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
    title: "Software & AI Engineering",
    summary:
      "Trabajo con empresas y equipos para transformar necesidades reales en soluciones tecnológicas, modernizando software e incorporando IA cuando aporta valor. Combino criterio técnico con comunicación clara, trabajo colaborativo, coordinación de equipos, metodologías ágiles y experiencia directa con clientes, tanto en español como en inglés.",
    projectsLabel: "Explorar proyectos",
    cvLabel: "Descargar CV",
    cvPending: "CV en español pendiente",
    domains: ["Full Stack", "AI Engineering", "Idea → producción"],
  },
  sections: {
    projects: {
      eyebrow: "01 / TRABAJO SELECCIONADO",
      title: "Algunos de mis trabajos",
      body: "Trabajos profesionales desarrollados y finalizados para clientes, desde sus necesidades hasta la solución entregada.",
    },
    about: {
      eyebrow: "02 / SOBRE MÍ",
      title: "Del problema al producto.",
      body: "Trabajo con React, Next.js, TypeScript, Node.js y PostgreSQL para desarrollar interfaces, lógica de aplicación e integrar servicios. En proyectos freelance me encargo de la implementación, las integraciones, el deploy, la configuración de dominios y la puesta en producción.\n\nMi formación y mis proyectos de AI Engineering incluyen embeddings, retrieval y RAG, agentes con herramientas, flujos multiagente, salidas estructuradas e integraciones de visión y audio con APIs de IA. También trabajé en evaluación y entrenamiento de modelos, revisión de código y acompañamiento de estudiantes de desarrollo Full Stack.",
    },
    experience: {
      eyebrow: "03 / TRAYECTORIA",
      title: "Experiencia que conecta disciplinas.",
    },
    "ai-work": {
      eyebrow: "04 / AI ENGINEERING",
      title: "De la recuperación a los agentes.",
      body: "Proyectos académicos de Henry: RAG con evidencia, orquestación multiagente y análisis multimodal.",
    },
    skills: {
      eyebrow: "05 / TECNOLOGÍAS",
      title: "El stack detrás del trabajo.",
    },
    education: {
      eyebrow: "06 / FORMACIÓN",
      title: "Formación y aprendizaje continuo.",
    },
    "other-projects": {
      eyebrow: "07 / OTROS PROYECTOS",
      title: "Fundamentos puestos en práctica.",
      body: "Proyectos académicos y de aprendizaje que complementan el trabajo seleccionado.",
    },
    contact: {
      eyebrow: "08 / CONTACTO",
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
    footer: "Software & AI Engineering",
    backToTop: "Volver al inicio",
    aboutCapabilities: [
      {
        title: "Desarrollar y desplegar",
        body: "Interfaces, lógica, integraciones y productos web en producción.",
      },
      {
        title: "Integrar inteligencia",
        body: "RAG, agentes y flujos multimodales con APIs de IA.",
      },
      {
        title: "Revisar y evaluar",
        body: "Código y respuestas de modelos; experiencia freelance en Outlier.",
      },
    ],
  },
} satisfies PortfolioContent;

export default es;
