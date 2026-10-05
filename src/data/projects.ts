import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
  {
    id: "icasa",
    slug: "icasa",
    title: { es: "ICASA", en: "ICASA" },
    images: [
      {
        src: "/images/projects/icasa-home.png",
        alt: {
          es: "Captura de la página de inicio de ICASA, con navegación y una imagen industrial en el Hero.",
          en: "Screenshot of ICASA's homepage, with navigation and an industrial hero image.",
        },
        width: 1895,
        height: 906,
      },
    ],
    shortDescription: {
      es: "Sitio corporativo freelance desarrollado y llevado a producción de punta a punta.",
      en: "An end-to-end freelance corporate website project, developed and deployed to production.",
    },
    description: {
      es: "Implementación de una interfaz responsive, galería de proyectos, geolocalización y flujos de contacto con integración de email mediante Resend. El trabajo incluyó configuración de dominio y DNS, deployment en Vercel y puesta en producción.",
      en: "Built a responsive interface, project gallery, geolocation and contact flows with email integration through Resend. The work included domain and DNS configuration, Vercel deployment and production setup.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Resend",
      "Vercel",
      "Git",
      "GitHub",
    ],
    liveUrl: "https://icasa.ar",
    category: "full-stack",
    repositoryVisibility: "private",
    context: "professional",
    featured: true,
    startDate: "2025",
    endDate: "2026",
  },
  {
    id: "viansa",
    slug: "viansa",
    title: { es: "VIANSA", en: "VIANSA" },
    images: [
      {
        src: "/images/projects/viansa-home.jpeg",
        alt: {
          es: "Captura de la página de inicio de VIANSA, con navegación bilingüe y una vista del cultivo.",
          en: "Screenshot of VIANSA's homepage, with bilingual navigation and a view of the crop fields.",
        },
        width: 1600,
        height: 748,
      },
    ],
    shortDescription: {
      es: "Sitio corporativo bilingüe desarrollado y desplegado en producción.",
      en: "A bilingual corporate website developed and deployed to production.",
    },
    description: {
      es: "Desarrollo de layouts responsive, implementación de la identidad visual de la marca y optimización del contenido multimedia. El proyecto incluyó deployment y configuración del dominio de producción.",
      en: "Developed responsive layouts, implemented the brand's visual identity and optimized media content. The project included deployment and production domain configuration.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Git",
      "GitHub",
    ],
    liveUrl: "https://viansa.com.ar",
    category: "full-stack",
    repositoryVisibility: "private",
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
    technologies: [
      "React",
      "Redux",
      "CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
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
    technologies: [
      "Next.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "React Native",
    ],
    liveUrl: "https://descuentos-ya.vercel.app/",
    repositoryVisibility: "private",
    category: "full-stack",
    context: "academic",
    startDate: "2023-08",
  },
  {
    id: "m2-faq-rag",
    slug: "peopleflow-faq-rag",
    title: {
      es: "PeopleFlow FAQ RAG",
      en: "PeopleFlow FAQ RAG",
    },
    shortDescription: {
      es: "Respuestas de Recursos Humanos basadas en evidencia recuperada, con trazabilidad a sus fuentes.",
      en: "HR answers grounded in retrieved evidence, with traceability to source documents.",
    },
    description: {
      es: "Proyecto integrador M2 de Henry sobre una knowledge base ficticia de PeopleFlow. Implementa ingesta, chunking semántico y por tokens, embeddings, persistencia en Chroma y retrieval Top-K. La respuesta estructurada incluye user_question, system_answer y chunks_related. Incluye evaluación de retrieval y tests.",
      en: "Henry M2 project built around a fictional PeopleFlow knowledge base. Implements ingestion, semantic and token-aware chunking, embeddings, persistent Chroma storage and Top-K retrieval. Structured responses contain user_question, system_answer and chunks_related. Includes retrieval evaluation and tests.",
    },
    technologies: ["Python", "OpenAI", "Chroma", "RAG"],
    repositoryUrl: "https://github.com/AlbertoMallar/m2-faq-rag",
    repositoryVisibility: "public",
    category: "ai-engineering",
    context: "academic",
    featured: true,
    preview: {
      steps: [
        {
          es: "Consulta",
          en: "Query",
        },
        {
          es: "Retrieval",
          en: "Retrieval",
        },
        {
          es: "Respuesta",
          en: "Answer",
        },
      ],
      outputFields: ["user_question", "system_answer", "chunks_related"],
    },
  },
  {
    id: "m3-agents",
    slug: "multi-agent-support",
    title: {
      es: "Multi-Agent Support System",
      en: "Multi-Agent Support System",
    },
    shortDescription: {
      es: "Un orquestador dirige cada consulta a un especialista con su propia base de conocimiento.",
      en: "An orchestrator routes each query to a specialist with its own knowledge base.",
    },
    description: {
      es: "Proyecto integrador M3 de Henry para el soporte de una empresa SaaS ficticia. LangGraph gestiona estado tipado y routing condicional hacia HR, Tech, Finance u out_of_scope. Cada especialista usa RAG con Chroma. Incluye CLI, evaluator opcional, tests y observabilidad con Langfuse.",
      en: "Henry M3 project for support at a fictional SaaS company. LangGraph manages typed state and conditional routing to HR, Tech, Finance or out_of_scope. Each specialist uses RAG with Chroma. Includes a CLI, optional evaluator, tests and Langfuse observability.",
    },
    technologies: ["Python", "LangGraph", "LangChain", "Chroma", "Langfuse"],
    repositoryUrl: "https://github.com/AlbertoMallar/m3-agents",
    repositoryVisibility: "public",
    category: "ai-engineering",
    context: "academic",
    featured: true,
    preview: {
      steps: [
        {
          es: "Consulta",
          en: "Query",
        },
        {
          es: "Orquestador",
          en: "Orchestrator",
        },
        {
          es: "Especialista",
          en: "Specialist",
        },
      ],
      branches: ["HR", "Tech", "Finance", "out_of_scope"],
    },
  },
  {
    id: "m4-contract-comparison",
    slug: "contract-comparison",
    title: {
      es: "Autonomous Contract Comparison Agent",
      en: "Autonomous Contract Comparison Agent",
    },
    shortDescription: {
      es: "Visión y agentes para comparar un contrato y su adenda, con cambios en una salida estructurada.",
      en: "Vision and agents compare a contract and its amendment, returning changes as structured output.",
    },
    description: {
      es: "Proyecto integrador M4 de Henry. GPT-4o transcribe una imagen de cada documento; un agente contextualiza los textos y otro extrae modificaciones, eliminaciones y adiciones. La orquestación es secuencial con LangChain. Pydantic valida ContractChangeOutput y Langfuse registra las etapas. Incluye escenarios de referencia para comparación manual.",
      en: "Henry M4 project. GPT-4o transcribes one image per document; one agent contextualizes the texts and another extracts modifications, removals and additions. Orchestration uses sequential LangChain calls. Pydantic validates ContractChangeOutput and Langfuse traces the stages. Includes reference scenarios for manual comparison.",
    },
    technologies: [
      "Python",
      "GPT-4o Vision",
      "LangChain",
      "Pydantic",
      "Langfuse",
    ],
    repositoryUrl: "https://github.com/AlbertoMallar/multiagent-vision-project",
    repositoryVisibility: "public",
    category: "ai-engineering",
    context: "academic",
    featured: true,
    preview: {
      steps: [
        {
          es: "Imágenes",
          en: "Images",
        },
        {
          es: "Agentes",
          en: "Agents",
        },
        {
          es: "Cambios",
          en: "Changes",
        },
      ],
      outputFields: [
        "sections_changed",
        "topics_touched",
        "summary_of_the_change",
      ],
    },
  },
  {
    id: "m1-support-assistant",
    slug: "ai-support-assistant",
    title: {
      es: "AI Support Assistant",
      en: "AI Support Assistant",
    },
    shortDescription: {
      es: "CLI de soporte con respuestas JSON, validación, métricas de uso y persistencia CSV.",
      en: "A support CLI with JSON responses, validation, usage metrics and CSV persistence.",
    },
    description: {
      es: "Proyecto integrador M1 de Henry. Python y OpenAI generan respuestas con answer, confidence y actions. Incluye variantes zero-shot y few-shot, tests con pytest y una guardia heurística local para entrada, redacción de datos detectables y fallback de salida.",
      en: "Henry M1 project. Python and OpenAI generate responses containing answer, confidence and actions. Includes zero-shot and few-shot variants, pytest tests and a local heuristic guard for input, detectable sensitive-data redaction and output fallback.",
    },
    technologies: ["Python", "OpenAI", "pytest"],
    repositoryUrl:
      "https://github.com/AlbertoMallar/ai-engineering-m1-support-assistant",
    repositoryVisibility: "public",
    category: "ai-engineering",
    context: "academic",
    featured: false,
  },
];
