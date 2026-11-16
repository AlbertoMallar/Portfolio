import type { Experience } from "@/types/portfolio";

export const experience: readonly Experience[] = [
  {
    id: "programmer-full-stack",
    role: {
      es: "Software Developer",
      en: "Software Developer",
      de: "Software Developer",
    },
    organization: "Freelance",
    startDate: "2022",
    ongoing: true,
    context: "professional",
    technologies: ["TypeScript", "JavaScript", "Next.js", "React", "Node.js", "PostgreSQL", "PHP", "REST APIs"],
    description: {
      es: "Desarrollo soluciones de software para empresas y clientes, trabajando desde el relevamiento de necesidades hasta la implementación, despliegue y puesta en producción.",
      en: "I develop software solutions for companies and clients, working from requirements discovery through implementation, deployment, and production setup.",
      de: "Ich entwickle Softwarelösungen für Unternehmen und Kunden, von der Anforderungsanalyse über die Implementierung und Bereitstellung bis zur Inbetriebnahme.",
    },
    highlights: [
      {
        es: "Desarrollé aplicaciones y soluciones web con TypeScript, JavaScript, Next.js, React, Node.js, PostgreSQL, PHP y APIs REST, adaptando arquitectura y herramientas a las necesidades de cada proyecto.",
        en: "Developed web applications and solutions with TypeScript, JavaScript, Next.js, React, Node.js, PostgreSQL, PHP, and REST APIs, adapting architecture and tools to the needs of each project.",
        de: "Entwicklung von Webanwendungen und Lösungen mit TypeScript, JavaScript, Next.js, React, Node.js, PostgreSQL, PHP und REST-APIs, wobei Architektur und Werkzeuge an die Anforderungen des jeweiligen Projekts angepasst wurden.",
      },
      {
        es: "Trabajé en proyectos y colaboraciones para empresas como ICASA, VIANSA y Sensus3D.",
        en: "Worked on projects and collaborations for companies including ICASA, VIANSA, and Sensus3D.",
        de: "Mitarbeit an Projekten und Kooperationen für Unternehmen wie ICASA, VIANSA und Sensus3D.",
      },
      {
        es: "Entregué proyectos de punta a punta, incluyendo interfaces, lógica de aplicación, integración de servicios, bases de datos, despliegue y configuración de dominios y DNS.",
        en: "Delivered projects end to end, including interfaces, application logic, service integration, databases, deployment, and domain and DNS configuration.",
        de: "Umsetzung von Projekten von Anfang bis Ende: Benutzeroberflächen, Anwendungslogik, Dienstintegration, Datenbanken, Deployment sowie Domain- und DNS-Konfiguration.",
      },
      {
        es: "Amplié progresivamente mi trabajo hacia AI Engineering mediante proyectos con RAG, agentes, structured outputs y modelos multimodales.",
        en: "Progressively expanded my work toward AI Engineering through projects with RAG, agents, structured outputs, and multimodal models.",
        de: "Schrittweise Erweiterung meiner Arbeit in Richtung AI Engineering durch Projekte mit RAG, Agenten, strukturierten Ausgaben und multimodalen Modellen.",
      },
    ],
  },
  {
    id: "itc-software-developer",
    role: {
      es: "Software Developer",
      en: "Software Developer",
      de: "Software Developer",
    },
    organization: "ITC",
    startDate: "2025-04",
    endDate: "2025-05",
    context: "professional",
    technologies: ["PHP"],
    description: {
      es: "Colaboré en el desarrollo de una herramienta interna destinada a facilitar el trabajo operativo de técnicos de campo de una empresa de telecomunicaciones.",
      en: "Contributed to the development of an internal tool intended to support the operational work of field technicians at a telecommunications company.",
      de: "Mitarbeit an der Entwicklung eines internen Werkzeugs zur Unterstützung der operativen Arbeit von Außendiensttechnikern eines Telekommunikationsunternehmens.",
    },
    highlights: [
      {
        es: "Desarrollé funcionalidades en PHP orientadas al registro y seguimiento de cambios de equipos, visitas y futuras instalaciones.",
        en: "Developed PHP functionality for recording and tracking equipment changes, visits, and future installations.",
        de: "Entwicklung von PHP-Funktionen zur Erfassung und Nachverfolgung von Gerätewechseln, Besuchen und künftigen Installationen.",
      },
      {
        es: "Organicé información operativa y prioridades para facilitar el seguimiento de direcciones, tareas pendientes e incidencias técnicas.",
        en: "Organized operational information and priorities to help track addresses, pending tasks, and technical issues.",
        de: "Organisation operativer Informationen und Prioritäten zur Nachverfolgung von Adressen, offenen Aufgaben und technischen Vorfällen.",
      },
      {
        es: "Adapté la solución a necesidades surgidas del trabajo cotidiano de los operadores, priorizando simplicidad de uso y acceso rápido a la información relevante.",
        en: "Adapted the solution to needs arising from operators' daily work, prioritizing ease of use and quick access to relevant information.",
        de: "Anpassung der Lösung an Anforderungen aus dem Arbeitsalltag der Mitarbeiter, mit Schwerpunkt auf einfacher Bedienung und schnellem Zugriff auf relevante Informationen.",
      },
    ],
  },
  {
    id: "outlier-ai-trainer-code-reviewer",
    role: {
      es: "AI Trainer / Code Reviewer",
      en: "AI Trainer / Code Reviewer",
      de: "KI-Trainer / Code-Reviewer",
    },
    organization: "Outlier",
    startDate: "2023-12",
    endDate: "2025-04",
    context: "professional",
    technologies: ["Python", "JavaScript", "TypeScript"],
    description: {
      es: "Trabajé en distintos proyectos de entrenamiento, evaluación y revisión de sistemas de inteligencia artificial.",
      en: "Worked on various projects involving the training, evaluation, and review of artificial intelligence systems.",
      de: "Mitarbeit an verschiedenen Projekten zum Training, zur Bewertung und zur Überprüfung von KI-Systemen.",
    },
    highlights: [
      {
        es: "Evalué y revisé resultados generados por modelos en tareas de Python, JavaScript y TypeScript.",
        en: "Evaluated and reviewed model-generated results in Python, JavaScript, and TypeScript tasks.",
        de: "Bewertung und Prüfung modellgenerierter Ergebnisse bei Aufgaben in Python, JavaScript und TypeScript.",
      },
      {
        es: "Participé en proyectos relacionados con interpretación de prompts, evaluación de modelos y uso de herramientas externas.",
        en: "Participated in projects related to prompt interpretation, model evaluation, and the use of external tools.",
        de: "Teilnahme an Projekten zur Interpretation von Prompts, Modellbewertung und Nutzung externer Werkzeuge.",
      },
      {
        es: "Fui seleccionado como reviewer durante 2024 a partir de mi desempeño, revisando trabajo realizado por otros contributors.",
        en: "Was selected as a reviewer during 2024 based on my performance, reviewing work produced by other contributors.",
        de: "Im Jahr 2024 aufgrund meiner Leistung als Reviewer ausgewählt, um die Arbeit anderer Contributors zu prüfen.",
      },
      {
        es: "Colaboré en reuniones orientadas a mejorar la interpretación de tareas, calidad de las entregas y alineación entre colaboradores.",
        en: "Contributed to meetings aimed at improving task interpretation, delivery quality, and alignment among collaborators.",
        de: "Mitarbeit in Besprechungen zur Verbesserung der Aufgabeninterpretation, der Qualität der Ergebnisse und der Abstimmung zwischen Mitarbeitenden.",
      },
    ],
  },
  {
    id: "henry-teaching-assistant",
    role: {
      es: "Full Stack Teaching Assistant",
      en: "Full Stack Teaching Assistant",
      de: "Lehrassistent für Full-Stack-Entwicklung",
    },
    organization: "Henry",
    startDate: "2023",
    endDate: "2025",
    context: "academic",
    description: {
      es: "Acompañé grupos de estudiantes durante su formación Full Stack, facilitando la resolución de problemas técnicos y el trabajo colaborativo.",
      en: "Supported groups of students during their Full Stack training, helping them solve technical problems and work collaboratively.",
      de: "Begleitung von Studierendengruppen während ihrer Full-Stack-Ausbildung, mit Unterstützung bei technischen Problemen und der Zusammenarbeit.",
    },
    highlights: [
      {
        es: "Coordiné grupos de estudiantes durante ejercicios y proyectos.",
        en: "Coordinated groups of students during exercises and projects.",
        de: "Koordination von Studierendengruppen während Übungen und Projekten.",
      },
      {
        es: "Asistí en la resolución de problemas técnicos y promoví Pair Programming.",
        en: "Helped resolve technical problems and encouraged Pair Programming.",
        de: "Unterstützung bei der Lösung technischer Probleme und Förderung von Pair Programming.",
      },
      {
        es: "Expliqué conceptos y enfoques de resolución adaptándolos a distintos niveles de comprensión.",
        en: "Explained concepts and approaches to problem-solving, adapting them to different levels of understanding.",
        de: "Erklärung von Konzepten und Lösungsansätzen, angepasst an unterschiedliche Verständnisniveaus.",
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
    startDate: "2019-10",
    ongoing: true,
    context: "professional",
    secondary: true,
    description: {
      es: "Gestiono propiedades residenciales y la relación cotidiana entre propietarios, inquilinos y proveedores.",
      en: "I manage residential properties and the day-to-day relationship between owners, tenants, and service providers.",
      de: "Ich verwalte Wohnimmobilien und die tägliche Beziehung zwischen Eigentümern, Mietern und Dienstleistern.",
    },
    highlights: [
      {
        es: "Coordino contratos, pagos, mantenimiento y resolución de incidencias.",
        en: "Coordinate contracts, payments, maintenance, and issue resolution.",
        de: "Koordination von Verträgen, Zahlungen, Instandhaltung und der Behebung von Problemen.",
      },
      {
        es: "Gestiono comunicación y negociación entre distintas partes.",
        en: "Manage communication and negotiation between different parties.",
        de: "Kommunikation und Verhandlungen zwischen verschiedenen Beteiligten.",
      },
      {
        es: "Organizo múltiples tareas y responsabilidades en paralelo manteniendo relaciones con clientes de largo plazo.",
        en: "Organize multiple tasks and responsibilities in parallel while maintaining long-term client relationships.",
        de: "Parallele Organisation mehrerer Aufgaben und Verantwortlichkeiten bei langfristiger Pflege von Kundenbeziehungen.",
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
    startDate: "2015-07",
    endDate: "2016-11",
    context: "professional",
    secondary: true,
    description: {
      es: "Organización y coordinación general de torneos, contacto con empresas y atención a participantes. Desarrollo y mantenimiento del sitio web, soporte tecnológico y gestión de redes sociales.",
      en: "Organized and coordinated tournaments, liaised with companies and assisted participants. Developed and maintained the website, provided technology support and managed social media.",
      de: "Organisation und Gesamtkoordination von Turnieren, Kontakt zu Unternehmen und Betreuung der Teilnehmenden. Entwicklung und Pflege der Website, technische Unterstützung und Verwaltung der sozialen Medien.",
    },
  },
];
