import type { Education } from "@/types/portfolio";

export const education: readonly Education[] = [
  {
    id: "henry-full-stack",
    kind: "education",
    title: { es: "Desarrollo Web Full Stack", en: "Full Stack Web Developer" },
    institution: "Henry",
    year: 2023,
    hours: 800,
    description: {
      es: "Bootcamp con formación teórica y práctica en desarrollo web Full Stack.",
      en: "Full Stack web development bootcamp with theoretical and practical coursework.",
    },
  },
  {
    id: "henry-ai-engineering",
    kind: "education",
    title: { es: "AI Engineering", en: "AI Engineering" },
    institution: "Henry",
    year: 2026,
    description: {
      es: "Programa completado exitosamente con desempeño destacado. Formación en RAG, embeddings, agentes con herramientas, LangChain, LangGraph, orquestación multiagente, salidas estructuradas y flujos multimodales de visión y audio.",
      en: "Successfully completed with outstanding performance. Training in RAG, embeddings, tool-using agents, LangChain, LangGraph, multi-agent orchestration, structured outputs and multimodal vision and audio workflows.",
    },
  },
  {
    id: "outlieredu-prompt-engineering",
    kind: "certification",
    title: {
      es: "Certificado en Prompt Engineering",
      en: "Prompt Engineering Certificate",
    },
    institution: "OutlierEDU",
  },
  {
    id: "python-programming-course",
    kind: "education",
    year: 2022,
    title: {
      es: "Curso de Programación en Python",
      en: "Python Programming Course",
    },
  },
  {
    id: "computer-engineering-studies",
    kind: "education",
    title: {
      es: "Estudios de Ingeniería en Computación",
      en: "Computer Engineering Studies",
    },
    institution: "Universidad de Mendoza",
    startDate: "2010",
    endDate: "2013",
    description: {
      es: "Cuatro años cursados; carrera no finalizada.",
      en: "Four years of study; degree not completed.",
    },
  },
  {
    id: "ef-set-english",
    kind: "certification",
    title: { es: "Certificado de inglés — C1", en: "English Certificate — C1" },
    institution: "EF SET",
  },
];
