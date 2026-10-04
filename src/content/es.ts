import type { PortfolioContent } from "@/types/portfolio";

const es = {
  metadata: {
    title: "Desarrollo Full Stack y AI Engineering",
    description:
      "Desarrollo web Full Stack, proyectos freelance llevados a producción y AI Engineering aplicada a RAG, agentes e integraciones multimodales.",
  },
  common: {
    skipToContent: "Saltar al contenido principal",
    languageLabel: "Idioma",
    languageNames: {
      es: "Español",
      en: "English",
    },
    pendingContent: "Contenido pendiente de definir.",
    presentLabel: "Actualidad",
    hoursLabel: "horas de formación",
    contextLabels: {
      professional: "Experiencia profesional",
      academic: "Experiencia académica",
      personal: "Proyecto personal",
    },
    links: {
      github: "GitHub",
      linkedin: "LinkedIn",
      repository: "Ver repositorio",
      live: "Ver sitio",
      credential: "Ver credencial",
    },
  },
  hero: {
    title: "Desarrollador Full Stack + AI Engineering",
    summary:
      "Desarrollo aplicaciones y sitios web modernos, desde la implementación hasta la puesta en producción. Complemento el desarrollo Full Stack con AI Engineering: RAG, agentes e integraciones multimodales.",
    projectsLabel: "Ver proyectos",
    cvLabel: "Descargar CV",
  },
  sections: {
    about: {
      title: "Sobre mí",
      body: "Trabajo con React, Next.js, TypeScript, Node.js y PostgreSQL para desarrollar interfaces, lógica de aplicación e integrar servicios. En proyectos freelance me encargo de la implementación, las integraciones, el deploy, la configuración de dominios y la puesta en producción. Mi formación y mis proyectos de AI Engineering incluyen embeddings, retrieval y RAG, agentes con herramientas, flujos multiagente, salidas estructuradas e integraciones de visión y audio con APIs de IA. También trabajé en evaluación y entrenamiento de modelos, revisión de código y acompañamiento de estudiantes de desarrollo Full Stack.",
    },
    experience: { title: "Experiencia" },
    projects: { title: "Proyectos" },
    skills: { title: "Habilidades y tecnologías" },
    education: { title: "Educación y certificaciones" },
    contact: {
      title: "Contacto",
      body: "Podés contactarme por email o conocer más sobre mi trabajo y trayectoria en GitHub y LinkedIn.",
    },
  },
} satisfies PortfolioContent;

export default es;
