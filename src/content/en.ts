import type { PortfolioContent } from "@/types/portfolio";

const en = {
  metadata: {
    title: "Software Developer | AI Engineering",
    description:
      "Alberto Mallar's portfolio. Software Developer | AI Engineering: Full Stack Development and applied AI for companies and clients, from need to production.",
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
    hoursLabel: "hours of training (approx.)",
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
    title: "Software Developer | AI Engineering",
    summary:
      "I work with companies and teams to turn real needs into software and applied AI solutions. I combine Full Stack Development, AI Engineering, and direct client experience to take problems from the initial need to a functional, deployed solution.",
    projectsLabel: "Explore projects",
    cvLabel: "Download CV",
    cvPending: "English CV pending",
    domains: ["Full Stack Development", "AI Engineering", "Idea → Production"],
  },
  sections: {
    capabilities: {
      eyebrow: "01 / SOLUTIONS",
      title: "What I can bring",
    },
    projects: {
      eyebrow: "02 / PROFESSIONAL WORK",
      title: "Some of my work",
      body: "Solutions developed for companies and clients, from understanding the need through implementation and production deployment.",
    },
    about: {
      eyebrow: "03 / ABOUT",
      title: "From problem to solution",
      body: "Since 2022, I have worked in software development on technology projects and collaborations for companies including ICASA, VIANSA, ITC, and Sensus3D. My experience covers Full Stack Development with TypeScript, JavaScript, Python, Next.js, React, Node.js, and PostgreSQL, as well as integrations, deployment, and production environments.\n\nMy profile naturally evolved toward AI Engineering, expanding the kinds of problems I can solve through embeddings, RAG, agents, LangChain, LangGraph, structured outputs, Langfuse, and multimodal models. I also worked on AI training and evaluation at Outlier, where I was later selected as a reviewer.\n\nBeyond technical implementation, I have experience working directly with clients, coordinating people, and solving problems. I aim to understand the real need behind a requirement and find a technical solution that makes sense for the people who will use it.",
    },
    experience: {
      eyebrow: "04 / EXPERIENCE",
      title: "Experience across disciplines.",
    },
    evidence: {
      eyebrow: "05 / EVIDENCE",
      title: "Professional evidence",
    },
    "ai-work": {
      eyebrow: "06 / AI ENGINEERING",
      title: "Applied AI: from RAG to agentic and multimodal systems",
      body: "AI Engineering projects focused on knowledge retrieval, agent orchestration, and multimodal processing, developed as a practical progression in complexity and capabilities.",
    },
    skills: {
      eyebrow: "07 / TECHNOLOGIES",
      title: "The stack behind the work.",
    },
    education: {
      eyebrow: "08 / EDUCATION",
      title: "Education and continued learning.",
    },
    "other-projects": {
      eyebrow: "09 / MORE PROJECTS",
      title: "Foundations put into practice.",
      body: "Personal team projects and academic projects that complement my Full Stack and AI Engineering experience.",
    },
    contact: {
      eyebrow: "10 / CONTACT",
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
    footer: "Software Developer | AI Engineering",
    backToTop: "Back to top",
    professionalEvidence: [
      {
        title: "Projects delivered to production",
        body: "ICASA and VIANSA: solutions developed and deployed for real clients.",
      },
      {
        title: "Selected as a reviewer at Outlier",
        body: "Technical review and quality control of work produced by other contributors.",
      },
      {
        title: "Practical progression in AI Engineering",
        body: "RAG → multi-agent systems → multimodal AI.",
      },
    ],
    aboutCapabilities: [
      {
        title: "Full Stack Development",
        body: "Web applications and solutions covering frontend, backend, business logic, APIs, and databases.",
      },
      {
        title: "AI Engineering",
        body: "RAG, embeddings, agents, structured outputs, and multimodal workflows integrated into products and processes.",
      },
      {
        title: "From need to production",
        body: "Requirements discovery, implementation, integrations, deployment, domain configuration, and production adjustments.",
      },
      {
        title: "Clients and teams",
        body: "Requirements understanding, technical communication, coordination, and translating real needs into concrete solutions.",
      },
    ],
  },
} satisfies PortfolioContent;

export default en;
