import type { Experience } from "@/types/portfolio";

export const experience: readonly Experience[] = [
  {
    id: "programmer-full-stack",
    role: {
      es: "Programador / Desarrollador Full Stack",
      en: "Programmer / Full Stack Developer",
      de: "Programmierer / Full-Stack-Entwickler",
    },
    startDate: "2022",
    ongoing: true,
    context: "professional",
    description: {
      es: "Desarrollo de software y soluciones Full Stack en distintos proyectos, con trabajo directo con clientes desde el análisis de necesidades hasta la implementación y el despliegue.",
      en: "Software and Full Stack development across a range of projects, working directly with clients from understanding their needs through implementation and deployment.",
      de: "Software- und Full-Stack-Entwicklung in verschiedenen Projekten mit direkter Zusammenarbeit mit Kunden – von der Anforderungsanalyse bis zur Implementierung und Bereitstellung.",
    },
    highlights: [
      {
        es: "Integración de servicios, deployment, configuración de dominios y ajustes de producción.",
        en: "Service integrations, deployment, domain setup and production configuration.",
        de: "Integration von Diensten, Deployment, Domainkonfiguration und Anpassungen für den Produktivbetrieb.",
      },
    ],
    technologies: [
      "TypeScript",
      "JavaScript",
      "Python",
      "PHP",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    id: "outlier-ai-trainer-code-reviewer",
    role: {
      es: "AI Trainer / Code Reviewer freelance",
      en: "Freelance AI Trainer / Code Reviewer",
      de: "Freiberuflicher KI-Trainer / Code-Reviewer",
    },
    organization: "Outlier",
    startDate: "2023-12",
    endDate: "2025-04",
    context: "professional",
    description: {
      es: "Participación en proyectos freelance de entrenamiento y evaluación de sistemas de IA, incluyendo evaluación de prompts y respuestas, revisión de código y uso de herramientas.",
      en: "Freelance work on AI training and evaluation projects, including prompt and response evaluation, code review and tool use.",
      de: "Freiberufliche Mitarbeit an Projekten zum Training und zur Bewertung von KI-Systemen, einschließlich der Bewertung von Prompts und Antworten, Code-Reviews und Werkzeugnutzung.",
    },
    highlights: [
      {
        es: "Revisión de código en Python, JavaScript y TypeScript para comprobar corrección, calidad y cumplimiento de las tareas.",
        en: "Reviewed Python, JavaScript and TypeScript code for correctness, quality and adherence to task requirements.",
        de: "Prüfung von Python-, JavaScript- und TypeScript-Code auf Korrektheit, Qualität und Erfüllung der Aufgabenanforderungen.",
      },
      {
        es: "Tareas de evaluación y entrenamiento con uso de herramientas e interacciones con herramientas de Google.",
        en: "Evaluated and trained AI systems on tool-use tasks, including interactions with Google tools.",
        de: "Bewertung und Training von KI-Systemen bei Aufgaben mit Werkzeugnutzung, einschließlich Interaktionen mit Google-Werkzeugen.",
      },
      {
        es: "Coordinación y revisión de trabajo durante 2024.",
        en: "Coordinated and reviewed work during 2024.",
        de: "Koordination und Prüfung von Arbeiten im Jahr 2024.",
      },
    ],
    technologies: ["Python", "JavaScript", "TypeScript"],
  },
  {
    id: "henry-teaching-assistant",
    role: {
      es: "Asistente de enseñanza Full Stack",
      en: "Full Stack Teaching Assistant",
      de: "Lehrassistent für Full-Stack-Entwicklung",
    },
    organization: "Henry",
    startDate: "2023",
    endDate: "2025",
    context: "academic",
    description: {
      es: "Asistencia técnica y coordinación de grupos de estudiantes del bootcamp, con foco en la comunicación, la colaboración y la organización del trabajo.",
      en: "Provided technical support and coordinated groups of bootcamp students, focusing on communication, collaboration and work organization.",
      de: "Technische Unterstützung und Koordination von Studierendengruppen im Bootcamp mit Schwerpunkt auf Kommunikation, Zusammenarbeit und Arbeitsorganisation.",
    },
    highlights: [
      {
        es: "Asistencia en la resolución de problemas y promoción del trabajo colaborativo mediante pair programming.",
        en: "Helped students solve problems and encouraged collaboration through pair programming.",
        de: "Unterstützung bei der Problemlösung und Förderung der Zusammenarbeit durch Pair Programming.",
      },
      {
        es: "Propuestas de mejora para los procesos del bootcamp.",
        en: "Suggested improvements to bootcamp processes.",
        de: "Vorschläge zur Verbesserung der Abläufe im Bootcamp.",
      },
    ],
  },
  {
    id: "property-management",
    role: {
      es: "Administración de propiedades",
      en: "Property Management",
      de: "Immobilienverwaltung",
    },
    startDate: "2019",
    ongoing: true,
    context: "professional",
    secondary: true,
    description: {
      es: "Administración y mantenimiento de propiedades para uso turístico o familiar, con trato directo con clientes, coordinación de tareas y resolución de problemas.",
      en: "Property administration and maintenance for tourist and family use, including direct client contact, task coordination and problem-solving.",
      de: "Verwaltung und Instandhaltung von Immobilien für touristische und familiäre Nutzung, einschließlich direktem Kundenkontakt, Aufgabenkoordination und Problemlösung.",
    },
    highlights: [
      {
        es: "Búsqueda, redacción y negociación de contratos con potenciales clientes e inquilinos.",
        en: "Sourced, drafted and negotiated contracts with prospective clients and tenants.",
        de: "Anbahnung, Ausarbeitung und Verhandlung von Verträgen mit potenziellen Kunden und Mietern.",
      },
      {
        es: "Comunicación entre propietarios e inquilinos, priorizando una buena relación y la calidad del servicio.",
        en: "Managed communication between owners and tenants, with a focus on maintaining good relationships and service quality.",
        de: "Kommunikation zwischen Eigentümern und Mietern mit Schwerpunkt auf guten Beziehungen und hoher Servicequalität.",
      },
    ],
  },
  {
    id: "lfi-el-alargue",
    role: {
      es: "Organización y coordinación de torneos",
      en: "Tournament Organization and Coordination",
      de: "Organisation und Koordination von Turnieren",
    },
    organization: "LFI / El Alargue",
    startDate: "2015",
    endDate: "2016",
    context: "professional",
    secondary: true,
    description: {
      es: "Organización y coordinación general de torneos, contacto con empresas y atención a participantes. Desarrollo y mantenimiento del sitio web, soporte tecnológico y gestión de redes sociales.",
      en: "Organized and coordinated tournaments, liaised with companies and assisted participants. Developed and maintained the website, provided technology support and managed social media.",
      de: "Organisation und Gesamtkoordination von Turnieren, Kontakt zu Unternehmen und Betreuung der Teilnehmenden. Entwicklung und Pflege der Website, technische Unterstützung und Verwaltung der sozialen Medien.",
    },
  },
  {
    id: "blowmax",
    role: {
      es: "Atención al cliente",
      en: "Customer Service",
      de: "Kundenservice",
    },
    organization: "BlowMax",
    startDate: "2017",
    endDate: "2018",
    context: "professional",
    secondary: true,
    description: {
      es: "Atención al público, gestión de stock y manejo de caja.",
      en: "Customer service, stock management and cash handling.",
      de: "Kundenbetreuung, Lagerverwaltung und Kassenführung.",
    },
  },
];
