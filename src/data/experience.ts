import type { Experience } from "@/types/portfolio";

export const experience: readonly Experience[] = [
  {
    id: "freelance-full-stack",
    role: {
      es: "Desarrollador Full Stack freelance",
      en: "Freelance Full Stack Developer",
    },
    startDate: "2025",
    ongoing: true,
    context: "professional",
    description: {
      es: "Desarrollo de proyectos web para clientes, desde la implementación de interfaces y lógica de aplicación hasta la puesta en producción.",
      en: "End-to-end web development for clients, from implementing interfaces and application logic to production deployment.",
    },
    highlights: [
      {
        es: "Integración de servicios, deployment, configuración de dominios y ajustes de producción.",
        en: "Service integrations, deployment, domain setup and production configuration.",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
  {
    id: "outlier-ai-trainer-code-reviewer",
    role: {
      es: "AI Trainer / Code Reviewer freelance",
      en: "Freelance AI Trainer / Code Reviewer",
    },
    organization: "Outlier",
    startDate: "2023-12",
    endDate: "2025-04",
    context: "professional",
    description: {
      es: "Participación en distintos proyectos freelance de evaluación y entrenamiento de sistemas de IA y revisión de código.",
      en: "Worked across freelance AI evaluation and training projects, including code review and model interactions with tools.",
    },
    highlights: [
      {
        es: "Revisión de código en Python, JavaScript y TypeScript para comprobar corrección, calidad y cumplimiento de las tareas.",
        en: "Reviewed Python, JavaScript and TypeScript code for correctness, quality and adherence to task requirements.",
      },
      {
        es: "Tareas de evaluación y entrenamiento con uso de herramientas e interacciones con herramientas de Google.",
        en: "Evaluated and trained AI systems on tool-use tasks, including interactions with Google tools.",
      },
    ],
    technologies: ["Python", "JavaScript", "TypeScript"],
  },
  {
    id: "henry-teaching-assistant",
    role: {
      es: "Asistente de enseñanza Full Stack",
      en: "Full Stack Teaching Assistant",
    },
    organization: "Henry",
    startDate: "2023-07",
    ongoing: true,
    context: "academic",
    description: {
      es: "Acompañamiento y coordinación de un grupo de estudiantes del bootcamp, facilitando su integración al equipo de estudio.",
      en: "Supported and coordinated a group of bootcamp students, helping them integrate into their study team.",
    },
    highlights: [
      {
        es: "Asistencia en la resolución de problemas y promoción del trabajo colaborativo mediante pair programming.",
        en: "Helped students solve problems and encouraged collaboration through pair programming.",
      },
      {
        es: "Propuestas de mejora para los procesos del bootcamp.",
        en: "Suggested improvements to bootcamp processes.",
      },
    ],
  },
  {
    id: "property-management",
    role: {
      es: "Administración de propiedades",
      en: "Property Management",
    },
    startDate: "2019-10",
    ongoing: true,
    context: "professional",
    description: {
      es: "Administración y mantenimiento de propiedades para uso turístico o familiar.",
      en: "Property administration and maintenance for tourist and family use.",
    },
    highlights: [
      {
        es: "Búsqueda, redacción y negociación de contratos con potenciales clientes e inquilinos.",
        en: "Sourced, drafted and negotiated contracts with prospective clients and tenants.",
      },
      {
        es: "Comunicación entre propietarios e inquilinos, priorizando una buena relación y la calidad del servicio.",
        en: "Managed communication between owners and tenants, with a focus on maintaining good relationships and service quality.",
      },
    ],
  },
];
