import type { Locale } from "@/lib/locales";

export type LocalizedText = Readonly<Record<Locale, string>>;
export type HttpUrl = `https://${string}` | `http://${string}`;
export type PortfolioContext = "professional" | "academic" | "personal";

export interface Profile {
  name: string;
  location?: string;
  email?: string;
  githubUrl?: HttpUrl;
  linkedinUrl?: HttpUrl;
  image?: PortfolioImage;
}

export type SectionId =
  | "about"
  | "experience"
  | "projects"
  | "ai-work"
  | "skills"
  | "education"
  | "other-projects"
  | "contact";

export interface SectionContent {
  title: string;
  eyebrow?: string;
  body?: string;
}

export interface PortfolioContent {
  metadata: { title: string; description: string };
  common: {
    skipToContent: string;
    languageLabel: string;
    languageNames: Record<Locale, string>;
    pendingContent: string;
    presentLabel: string;
    hoursLabel: string;
    contextLabels: Record<PortfolioContext, string>;
    links: {
      github: string;
      linkedin: string;
      repository: string;
      live: string;
      credential: string;
    };
  };
  navigation: {
    label: string;
    menu: string;
    close: string;
    projects: string;
    about: string;
    experience: string;
    contact: string;
  };
  hero: {
    title: string;
    summary: string;
    projectsLabel: string;
    cvLabel: string;
    cvPending: string;
    domains: readonly string[];
  };
  sections: Record<SectionId, SectionContent>;
  ui: {
    production: string;
    academic: string;
    privateRepository: string;
    previewPending: string;
    previewDescription: string;
    schematic: string;
    details: string;
    previousExperience: string;
    coreTechnologies: string;
    additionalTechnologies: string;
    education: string;
    certification: string;
    emailLabel: string;
    contactTitle: string;
    footer: string;
    backToTop: string;
    aboutCapabilities: readonly { title: string; body: string }[];
  };
}

export interface PortfolioImage {
  src: `/images/${string}`;
  alt: LocalizedText;
  width?: number;
  height?: number;
}

export type ProjectCategory = "full-stack" | "ai-engineering" | "other";
export interface Project {
  id: string;
  slug: string;
  title: LocalizedText;
  shortDescription?: LocalizedText;
  description?: LocalizedText;
  technologies: readonly string[];
  images?: readonly PortfolioImage[];
  repositoryUrl?: HttpUrl;
  repositoryVisibility?: "public" | "private";
  liveUrl?: HttpUrl;
  category: ProjectCategory;
  featured?: boolean;
  year?: number;
  startDate?: string;
  endDate?: string;
  context?: PortfolioContext;
  preview?: {
    steps: readonly LocalizedText[];
    branches?: readonly string[];
    outputFields?: readonly string[];
  };
}

export interface Experience {
  id: string;
  role: LocalizedText;
  organization?: string;
  description?: LocalizedText;
  startDate?: string;
  endDate?: string;
  ongoing?: boolean;
  context?: PortfolioContext;
  highlights?: readonly LocalizedText[];
  technologies?: readonly string[];
}

export interface Education {
  id: string;
  kind: "education" | "certification";
  title: LocalizedText;
  institution?: string;
  description?: LocalizedText;
  year?: number;
  startDate?: string;
  endDate?: string;
  hours?: number;
  credentialUrl?: HttpUrl;
}

export type SkillItem = string | { id: string; label: LocalizedText };
export interface SkillGroup {
  id: string;
  title: LocalizedText;
  items: readonly SkillItem[];
}
