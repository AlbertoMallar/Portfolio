import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SectionContent, SectionId } from "@/types/portfolio";

type SectionProps = Readonly<{
  id: SectionId;
  content: SectionContent;
  className?: string;
  children: ReactNode;
}>;
export function Section({
  id,
  content,
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`section ${className}`}
    >
      <SectionHeading id={id} content={content} />
      {children}
    </section>
  );
}
