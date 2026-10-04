import type { SkillGroup } from "@/types/portfolio";

export const skills: readonly SkillGroup[] = [
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML", "CSS", "Redux"],
  },
  {
    id: "backend",
    title: { es: "Backend", en: "Backend" },
    items: ["Node.js", "Express"],
  },
  {
    id: "databases",
    title: { es: "Bases de datos", en: "Databases" },
    items: ["PostgreSQL", "Prisma", "Sequelize"],
  },
  {
    id: "ai-engineering",
    title: { es: "AI Engineering", en: "AI Engineering" },
    items: [
      "Python", "OpenAI API", "Embeddings", "RAG", "FAISS", "LangChain", "LangGraph",
      { id: "tool-use", label: { es: "Uso de herramientas", en: "Tool Use" } },
      { id: "multi-agent", label: { es: "Sistemas multiagente", en: "Multi-Agent Systems" } },
      { id: "multimodal", label: { es: "Visión y audio multimodales", en: "Multimodal Vision and Audio" } },
      { id: "structured-outputs", label: { es: "Salidas estructuradas", en: "Structured Outputs" } },
      "Pydantic",
    ],
  },
  {
    id: "development-deployment",
    title: { es: "Desarrollo y deployment", en: "Development and Deployment" },
    items: ["Git", "GitHub", "Vercel", "WSL"],
  },
];
