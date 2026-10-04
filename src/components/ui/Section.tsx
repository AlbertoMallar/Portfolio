import type { ReactNode } from "react";
import type { SectionId } from "@/types/portfolio";

type SectionProps = Readonly<{
  id: SectionId;
  title: string;
  emptyMessage: string;
  children?: ReactNode;
}>;

export function Section({ id, title, emptyMessage, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-6">
      <h2 id={`${id}-title`} className="text-xl font-semibold">
        {title}
      </h2>
      <div className="mt-3">{children ?? <p>{emptyMessage}</p>}</div>
    </section>
  );
}
