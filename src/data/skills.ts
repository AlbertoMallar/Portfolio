import type { SkillGroup } from "@/types/portfolio";

// Tecnologías principales del perfil profesional.
export const coreTechnologies = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
] as const;

export const skills: readonly SkillGroup[] = [
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend", de: "Frontend" },
    items: ["Tailwind CSS", "HTML", "CSS", "Redux", "Redux Toolkit"],
  },
  {
    id: "backend",
    title: { es: "Backend", en: "Backend", de: "Backend" },
    items: [
      "Express",
      "PHP",
      {
        id: "rest-apis",
        label: { es: "APIs REST", en: "REST APIs", de: "REST-APIs" },
      },
    ],
  },
  {
    id: "databases",
    title: { es: "Datos", en: "Data", de: "Daten" },
    items: ["Prisma", "Sequelize", "Chroma", "FAISS"],
  },
  {
    id: "ai-engineering",
    title: { es: "AI Engineering", en: "AI Engineering", de: "AI Engineering" },
    items: [
      "OpenAI APIs",
      "LangChain",
      "LangGraph",
      "Langfuse",
      "Pydantic",
      "Embeddings",
      "RAG",
      {
        id: "agents",
        label: {
          es: "Agentes de IA",
          en: "AI Agents",
          de: "KI-Agenten",
        },
      },
      {
        id: "multi-agent",
        label: {
          es: "Sistemas multiagente",
          en: "Multi-Agent Systems",
          de: "Multi-Agenten-Systeme",
        },
      },
      {
        id: "multimodal",
        label: {
          es: "IA multimodal",
          en: "Multimodal AI",
          de: "Multimodale KI",
        },
      },
      {
        id: "structured-outputs",
        label: {
          es: "Salidas estructuradas",
          en: "Structured Outputs",
          de: "Strukturierte Ausgaben",
        },
      },
    ],
  },
  {
    id: "development-deployment",
    title: {
      es: "Desarrollo y deployment",
      en: "Development and Deployment",
      de: "Entwicklung und Deployment",
    },
    items: ["Docker", "Git", "GitHub", "Vercel", "WSL"],
  },
];
