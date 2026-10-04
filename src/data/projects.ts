import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
  {
    id: "icasa",
    slug: "icasa",
    title: { es: "ICASA — Sitio corporativo", en: "ICASA Corporate Website" },
    shortDescription: {
      es: "Sitio corporativo freelance desarrollado y llevado a producción de punta a punta.",
      en: "An end-to-end freelance corporate website project, developed and deployed to production.",
    },
    description: {
      es: "Implementación de una interfaz responsive, galería de proyectos, geolocalización y flujos de contacto con integración de email mediante Resend. El trabajo incluyó configuración de dominio y DNS, deployment en Vercel y puesta en producción.",
      en: "Built a responsive interface, project gallery, geolocation and contact flows with email integration through Resend. The work included domain and DNS configuration, Vercel deployment and production setup.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Resend", "Vercel", "Git", "GitHub"],
    liveUrl: "https://icasa.ar",
    category: "full-stack",
    context: "professional",
    featured: true,
    startDate: "2025",
    endDate: "2026",
  },
  {
    id: "viansa",
    slug: "viansa",
    title: { es: "VIANSA — Sitio bilingüe", en: "VIANSA Bilingual Website" },
    shortDescription: {
      es: "Sitio corporativo bilingüe desarrollado y desplegado en producción.",
      en: "A bilingual corporate website developed and deployed to production.",
    },
    description: {
      es: "Desarrollo de layouts responsive, implementación de la identidad visual de la marca y optimización del contenido multimedia. El proyecto incluyó deployment y configuración del dominio de producción.",
      en: "Developed responsive layouts, implemented the brand's visual identity and optimized media content. The project included deployment and production domain configuration.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Git", "GitHub"],
    liveUrl: "https://viansa.com.ar",
    category: "full-stack",
    context: "professional",
    featured: true,
    year: 2026,
  },
  {
    id: "videogames-app",
    slug: "videogames-app",
    title: { es: "Aplicación de videojuegos", en: "Videogames App" },
    shortDescription: {
      es: "Aplicación académica para consultar, buscar y filtrar videojuegos, e incorporar nuevos títulos.",
      en: "An academic application for browsing, searching and filtering video games, with support for adding new titles.",
    },
    description: {
      es: "Proyecto del bootcamp de Henry que consume información de una API externa y permite registrar videojuegos con sus plataformas y géneros en una base de datos. Desarrollado con React y Redux en el frontend, Node.js y Express en el backend, y PostgreSQL con Sequelize.",
      en: "A Henry bootcamp project that retrieves game information from an external API and lets users add games with their platforms and genres to a database. Built with React and Redux, a Node.js and Express backend, and PostgreSQL with Sequelize.",
    },
    technologies: ["React", "Redux", "CSS", "Node.js", "Express", "PostgreSQL", "Sequelize"],
    category: "full-stack",
    context: "academic",
    startDate: "2023-07",
    endDate: "2023-08",
  },
  {
    id: "descuentos-ya",
    slug: "descuentos-ya",
    title: { es: "Descuentos Ya", en: "Descuentos Ya" },
    shortDescription: {
      es: "Plataforma desarrollada en equipo para conectar comercios y socios de clubes con descuentos exclusivos.",
      en: "A team-built platform connecting businesses and club members through exclusive discounts.",
    },
    description: {
      es: "Proyecto académico realizado con un equipo de estudiantes de Henry. La plataforma facilita el acceso a descuentos exclusivos y contempla una versión móvil con React Native.",
      en: "An academic project developed with a team of Henry students. The platform gives club members access to exclusive discounts and includes a mobile version built with React Native.",
    },
    technologies: ["Next.js", "Express", "PostgreSQL", "Tailwind CSS", "React Native"],
    liveUrl: "https://descuentos-ya.vercel.app/",
    category: "full-stack",
    context: "academic",
    startDate: "2023-08",
  },
];
