import type { PortfolioContent } from "@/types/portfolio";

const en = {
  metadata: {
    title: "Full Stack Development and AI Engineering",
    description:
      "Full Stack web development, end-to-end freelance projects and applied AI engineering with RAG, agents and multimodal integrations.",
  },
  common: {
    skipToContent: "Skip to main content",
    languageLabel: "Language",
    languageNames: {
      es: "Español",
      en: "English",
    },
    pendingContent: "Content to be defined.",
    presentLabel: "Present",
    hoursLabel: "hours of training",
    contextLabels: {
      professional: "Professional experience",
      academic: "Academic experience",
      personal: "Personal project",
    },
    links: {
      github: "GitHub",
      linkedin: "LinkedIn",
      repository: "View repository",
      live: "View website",
      credential: "View credential",
    },
  },
  hero: {
    title: "Full Stack Developer + AI Engineering",
    summary:
      "I build modern web applications and websites, taking them from implementation to production. I combine Full Stack development with applied AI engineering, including RAG, agents and multimodal integrations.",
    projectsLabel: "View projects",
    cvLabel: "Download CV",
  },
  sections: {
    about: {
      title: "About",
      body: "I work with React, Next.js, TypeScript, Node.js and PostgreSQL to build interfaces, implement application logic and integrate services. My freelance work covers implementation, service integrations, deployment, domain configuration and production setup. My AI engineering training and projects include embeddings, retrieval and RAG, tool-using agents, multi-agent workflows, structured outputs and vision and audio integrations through AI APIs. I have also worked on model evaluation and training, code review and mentoring Full Stack development students.",
    },
    experience: { title: "Experience" },
    projects: { title: "Projects" },
    skills: { title: "Skills and technologies" },
    education: { title: "Education and certifications" },
    contact: {
      title: "Contact",
      body: "You can reach me by email or explore my work and professional background on GitHub and LinkedIn.",
    },
  },
} satisfies PortfolioContent;

export default en;
