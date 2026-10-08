import type { PortfolioContent } from "@/types/portfolio";

const en = {
  metadata: {
    title: "Software & AI Engineering",
    description:
      "Alberto Mallar's portfolio. Software & AI Engineering: technology solutions, software modernization and AI integration for companies and teams.",
  },
  common: {
    skipToContent: "Skip to main content",
    languageLabel: "Language",
    languageNames: {
      es: "Español",
      en: "English",
      de: "Deutsch",
    },
    pendingContent: "Content to be defined.",
    presentLabel: "Present",
    hoursLabel: "hours of training",
    contextLabels: {
      professional: "Professional",
      academic: "Academic",
      personal: "Personal",
    },
    links: {
      github: "GitHub",
      linkedin: "LinkedIn",
      repository: "View code",
      live: "Visit website",
      credential: "View credential",
    },
  },
  navigation: {
    label: "Main navigation",
    menu: "Open menu",
    close: "Close menu",
    projects: "Projects",
    about: "About",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    title: "Software & AI Engineering",
    summary:
      "I work with companies and teams to turn real needs into technology solutions, modernizing software and incorporating AI where it adds value. I combine technical judgment with clear communication, teamwork, team coordination, agile methodologies and direct client experience, in both Spanish and English.",
    projectsLabel: "Explore projects",
    cvLabel: "Download CV",
    cvPending: "English CV pending",
    domains: ["Full Stack", "AI Engineering", "Idea → production"],
  },
  sections: {
    projects: {
      eyebrow: "01 / SELECTED WORK",
      title: "Some of my work",
      body: "Completed professional work for clients, from understanding their needs to delivering the solution.",
    },
    about: {
      eyebrow: "02 / ABOUT",
      title: "From problem to product.",
      body: "I work with React, Next.js, TypeScript, Node.js and PostgreSQL to build interfaces, implement application logic and integrate services. My freelance work covers implementation, integrations, deployment, domain configuration and production setup.\n\nMy AI engineering training and projects include embeddings, retrieval and RAG, tool-using agents, multi-agent workflows, structured outputs and vision and audio integrations through AI APIs. I have also worked on model evaluation and training, code review and mentoring Full Stack development students.",
    },
    experience: {
      eyebrow: "03 / EXPERIENCE",
      title: "Experience across disciplines.",
    },
    "ai-work": {
      eyebrow: "04 / AI ENGINEERING",
      title: "From retrieval to agents.",
      body: "Henry academic projects: evidence-grounded RAG, multi-agent orchestration and multimodal analysis.",
    },
    skills: {
      eyebrow: "05 / TECHNOLOGIES",
      title: "The stack behind the work.",
    },
    education: {
      eyebrow: "06 / EDUCATION",
      title: "Education and continued learning.",
    },
    "other-projects": {
      eyebrow: "07 / MORE PROJECTS",
      title: "Foundations put into practice.",
      body: "Academic and learning projects that complement the selected work.",
    },
    contact: {
      eyebrow: "08 / CONTACT",
      title: "Let's build something useful.",
      body: "Reach me by email or explore my work and professional background on GitHub and LinkedIn.",
    },
  },
  ui: {
    production: "In production",
    academic: "Academic project",
    privateRepository: "Private repository",
    previewPending: "Screenshot pending",
    previewDescription: "Reserved for a real screenshot of the website.",
    schematic: "Conceptual workflow",
    details: "More about this project",
    previousExperience: "Additional experience",
    coreTechnologies: "Core technologies",
    additionalTechnologies: "Additional tools and capabilities",
    education: "Education",
    certification: "Certification",
    emailLabel: "Email me",
    contactTitle: "Have a project in mind?",
    footer: "Software & AI Engineering",
    backToTop: "Back to top",
    aboutCapabilities: [
      {
        title: "Build and deploy",
        body: "Interfaces, application logic, integrations and production web products.",
      },
      {
        title: "Integrate intelligence",
        body: "RAG, agents and multimodal workflows with AI APIs.",
      },
      {
        title: "Review and evaluate",
        body: "Code and model responses; freelance experience with Outlier.",
      },
    ],
  },
} satisfies PortfolioContent;

export default en;
