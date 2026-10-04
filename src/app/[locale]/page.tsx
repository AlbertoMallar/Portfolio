import { notFound } from "next/navigation";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
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

export default async function PortfolioPage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const content = await getDictionary(locale);
  const emptyMessage = content.common.pendingContent;

  return (
    <main id="main-content" tabIndex={-1} className="mx-auto max-w-4xl px-6 pb-6">
      <Hero profile={profile} content={content.hero} common={content.common} cvHref={getCvHref(locale)} />
      <About content={content.sections.about} emptyMessage={emptyMessage} />
      <Experience
        locale={locale}
        content={content.sections.experience}
        common={content.common}
        items={experience}
      />
      <Projects
        locale={locale}
        content={content.sections.projects}
        common={content.common}
        items={projects}
      />
      <Skills
        locale={locale}
        content={content.sections.skills}
        emptyMessage={emptyMessage}
        items={skills}
      />
      <Education
        locale={locale}
        content={content.sections.education}
        common={content.common}
        items={education}
      />
      <Contact profile={profile} content={content.sections.contact} common={content.common} />
    </main>
  );
}
