import { notFound } from "next/navigation";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { coreTechnologies, skills } from "@/data/skills";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/locales";
import { getCvHref } from "@/lib/assets";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";

export default async function PortfolioPage({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = await getDictionary(locale);
  return (
    <main id="main-content" tabIndex={-1} className="site-container">
      <Hero
        profile={profile}
        locale={locale}
        content={content.hero}
        common={content.common}
        cvHref={getCvHref(locale)}
      />
      <Projects
        locale={locale}
        content={content}
        items={projects.filter(
          (project) => project.featured && project.context === "professional",
        )}
      />
      <About content={content} />
      <Experience locale={locale} content={content} items={experience} />
      <Projects
        id="ai-work"
        locale={locale}
        content={content}
        items={projects.filter(
          (project) =>
            project.featured && project.category === "ai-engineering",
        )}
      />
      <Skills
        locale={locale}
        content={content}
        core={coreTechnologies}
        items={skills}
      />
      <Education locale={locale} content={content} items={education} />
      <Projects
        id="other-projects"
        locale={locale}
        content={content}
        compact
        items={projects.filter((project) => !project.featured)}
      />
      <Contact profile={profile} content={content} />
    </main>
  );
}
