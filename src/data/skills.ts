import type { SkillGroup } from "@/types/portfolio";

// Tecnologías principales confirmadas en el perfil y la solicitud visual.
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
    title: { es: "Frontend", en: "Frontend" },
    items: ["Tailwind CSS", "HTML", "CSS", "Redux"],
  },
  {
    id: "backend",
    title: { es: "Backend", en: "Backend" },
    items: [
      "Express",
      "PHP",
      { id: "rest-apis", label: { es: "APIs REST", en: "REST APIs" } },
    ],
  },
  {
    id: "databases",
    title: { es: "Datos", en: "Data" },
    items: ["Prisma", "Sequelize", "FAISS"],
  },
  {
    id: "ai-engineering",
    title: { es: "AI Engineering", en: "AI Engineering" },
    items: [
      "OpenAI APIs",
      "LangChain",
      "LangGraph",
      "Langfuse",
      "Pydantic",
      "Embeddings",
      "RAG",
      { id: "tool-use", label: { es: "Uso de herramientas", en: "Tool Use" } },
      {
        id: "multi-agent",
        label: { es: "Sistemas multiagente", en: "Multi-Agent Systems" },
      },
      {
        id: "multimodal",
        label: {
          es: "Visión y audio multimodales",
          en: "Multimodal Vision and Audio",
        },
      },
      {
        id: "structured-outputs",
        label: { es: "Salidas estructuradas", en: "Structured Outputs" },
      },
    ],
  },
  {
    id: "development-deployment",
    title: { es: "Desarrollo y deployment", en: "Development and Deployment" },
    items: ["Docker", "Git", "GitHub", "Vercel", "WSL"],
  },
];
