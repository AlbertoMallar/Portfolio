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
      es: "Formación en RAG, embeddings, agentes con herramientas, LangChain, LangGraph, orquestación multiagente, salidas estructuradas y flujos multimodales de visión y audio.",
      en: "Training in RAG, embeddings, tool-using agents, LangChain, LangGraph, multi-agent orchestration, structured outputs and multimodal vision and audio workflows.",
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
      es: "Tres años de estudios cursados.",
      en: "Completed three years of study.",
    },
  },
  {
    id: "medicine-studies",
    kind: "education",
    title: { es: "Estudios de Medicina", en: "Medicine Studies" },
    institution: "Universidad de Mendoza",
    startDate: "2017",
    endDate: "2021",
    description: {
      es: "Estudios hasta cuarto año.",
      en: "Studies up to the fourth year.",
    },
  },
];
