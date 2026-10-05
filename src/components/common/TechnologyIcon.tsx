import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

const logos: Record<string, string> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  Python: "python",
  React: "react",
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  PostgreSQL: "postgresql",
  Docker: "docker",
  PHP: "php",
  Express: "express",
  "Tailwind CSS": "tailwindcss",
  Prisma: "prisma",
  Sequelize: "sequelize",
  Git: "git",
  GitHub: "github",
  Vercel: "vercel",
  LangChain: "langchain",
  LangGraph: "langgraph",
  Pydantic: "pydantic",
};

export function TechnologyIcon({ name }: { name: string }) {
  const slug = logos[name];
  return (
    <span className="technology-icon" aria-hidden="true">
      {slug ? (
        <Image
          src={`/icons/technologies/${slug}.svg`}
          alt=""
          width={24}
          height={24}
          unoptimized
        />
      ) : (
        <Icon
          name={
            ["WSL", "Docker"].includes(name)
              ? "terminal"
              : name.includes("AI") || name.startsWith("Lang")
                ? "brain"
                : "code"
          }
        />
      )}
    </span>
  );
}
