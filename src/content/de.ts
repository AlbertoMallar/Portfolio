import type { PortfolioContent } from "@/types/portfolio";

const de = {
  metadata: {
    title: "Software & AI Engineering",
    description:
      "Portfolio von Alberto Mallar. Software & AI Engineering: Technologielösungen, Softwaremodernisierung und KI-Integration für Unternehmen und Teams.",
  },
  common: {
    skipToContent: "Zum Hauptinhalt springen",
    languageLabel: "Sprache",
    languageNames: {
      es: "Español",
      en: "English",
      de: "Deutsch",
    },
    pendingContent: "Inhalt folgt.",
    presentLabel: "Heute",
    hoursLabel: "Ausbildungsstunden",
    contextLabels: {
      professional: "Beruflich",
      academic: "Ausbildung",
      personal: "Privat",
    },
    links: {
      github: "GitHub",
      linkedin: "LinkedIn",
      repository: "Code ansehen",
      live: "Website besuchen",
      credential: "Zertifikat ansehen",
    },
  },
  navigation: {
    label: "Hauptnavigation",
    menu: "Menü öffnen",
    close: "Menü schließen",
    projects: "Projekte",
    about: "Über mich",
    experience: "Erfahrung",
    contact: "Kontakt",
  },
  hero: {
    title: "Software & AI Engineering",
    summary:
      "Ich arbeite mit Unternehmen und Teams daran, konkrete Anforderungen in Technologielösungen umzusetzen, Software zu modernisieren und KI dort einzusetzen, wo sie einen Mehrwert bietet. Dabei verbinde ich technisches Urteilsvermögen mit klarer Kommunikation, Zusammenarbeit, Teamkoordination, agilen Methoden und direkter Kundenerfahrung – auf Spanisch und Englisch.",
    projectsLabel: "Projekte entdecken",
    cvLabel: "Lebenslauf herunterladen",
    cvPending: "Deutscher Lebenslauf folgt",
    domains: ["Full Stack", "AI Engineering", "Idee → Produktion"],
  },
  sections: {
    projects: {
      eyebrow: "01 / AUSGEWÄHLTE ARBEITEN",
      title: "Einige meiner Arbeiten",
      body: "Abgeschlossene berufliche Projekte für Kunden – vom Verständnis ihrer Anforderungen bis zur fertigen Lösung.",
    },
    about: {
      eyebrow: "02 / ÜBER MICH",
      title: "Vom Problem zum Produkt.",
      body: "Ich arbeite mit React, Next.js, TypeScript, Node.js und PostgreSQL, um Benutzeroberflächen zu entwickeln, Anwendungslogik umzusetzen und Dienste zu integrieren. In meinen freiberuflichen Projekten übernehme ich die Implementierung, Integrationen, das Deployment, die Domainkonfiguration und die Inbetriebnahme.\n\nMeine Ausbildung und Projekte im Bereich AI Engineering umfassen Embeddings, Retrieval und RAG, Agenten mit Werkzeugzugriff, Multi-Agenten-Workflows, strukturierte Ausgaben sowie Bild- und Audiointegrationen über KI-APIs. Außerdem habe ich an der Bewertung und dem Training von Modellen, an Code-Reviews und an der Betreuung von Studierenden der Full-Stack-Entwicklung gearbeitet.",
    },
    experience: {
      eyebrow: "03 / ERFAHRUNG",
      title: "Erfahrung, die Disziplinen verbindet.",
    },
    "ai-work": {
      eyebrow: "04 / AI ENGINEERING",
      title: "Von Retrieval zu Agenten.",
      body: "Ausbildungsprojekte bei Henry: RAG mit Quellenbelegen, Multi-Agenten-Orchestrierung und multimodale Analyse.",
    },
    skills: {
      eyebrow: "05 / TECHNOLOGIEN",
      title: "Der Stack hinter meiner Arbeit.",
    },
    education: {
      eyebrow: "06 / AUSBILDUNG",
      title: "Ausbildung und kontinuierliches Lernen.",
    },
    "other-projects": {
      eyebrow: "07 / WEITERE PROJEKTE",
      title: "Grundlagen in der Praxis.",
      body: "Ausbildungs- und Lernprojekte, die die ausgewählten Arbeiten ergänzen.",
    },
    contact: {
      eyebrow: "08 / KONTAKT",
      title: "Lassen Sie uns etwas Nützliches entwickeln.",
      body: "Kontaktieren Sie mich per E-Mail oder erfahren Sie auf GitHub und LinkedIn mehr über meine Arbeit und meinen beruflichen Werdegang.",
    },
  },
  ui: {
    production: "Im Produktivbetrieb",
    academic: "Ausbildungsprojekt",
    privateRepository: "Privates Repository",
    previewPending: "Screenshot folgt",
    previewDescription: "Platzhalter für einen echten Screenshot der Website.",
    schematic: "Konzeptioneller Ablauf",
    details: "Mehr über dieses Projekt",
    previousExperience: "Weitere Erfahrung",
    coreTechnologies: "Haupttechnologien",
    additionalTechnologies: "Weitere Werkzeuge und Fähigkeiten",
    education: "Ausbildung",
    certification: "Zertifizierung",
    emailLabel: "E-Mail schreiben",
    contactTitle: "Haben Sie ein Projekt im Sinn?",
    footer: "Software & AI Engineering",
    backToTop: "Zurück nach oben",
    aboutCapabilities: [
      {
        title: "Entwickeln und bereitstellen",
        body: "Benutzeroberflächen, Anwendungslogik, Integrationen und Webprodukte im Produktivbetrieb.",
      },
      {
        title: "KI integrieren",
        body: "RAG, Agenten und multimodale Workflows mit KI-APIs.",
      },
      {
        title: "Prüfen und bewerten",
        body: "Code und Modellantworten; freiberufliche Erfahrung bei Outlier.",
      },
    ],
  },
} satisfies PortfolioContent;

export default de;
