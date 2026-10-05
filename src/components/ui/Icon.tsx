import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "arrow"
  | "external"
  | "download"
  | "github"
  | "linkedin"
  | "menu"
  | "close"
  | "mail"
  | "pin"
  | "code"
  | "brain"
  | "layers"
  | "monitor"
  | "graduation"
  | "chevron"
  | "terminal";
const paths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  external: (
    <>
      <path d="M14 3h7v7M21 3l-9 9M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4" />
    </>
  ),
  github: (
    <>
      <path
        d="M9 19c-4 1-4-2-6-2m13 5v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.7-1.6 6.7-7.3a5.7 5.7 0 0 0-1.6-4 5.3 5.3 0 0 0-.1-4s-1.3-.4-4.2 1.5a14.6 14.6 0 0 0-7.6 0C5.3-.4 4 .1 4 .1a5.3 5.3 0 0 0-.1 4A5.7 5.7 0 0 0 2.3 8c0 5.7 3.4 6.9 6.7 7.3A3.5 3.5 0 0 0 8 18v4"
        transform="translate(1 1) scale(.9)"
      />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M6 18 18 6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  code: (
    <>
      <path d="m8 5-7 7 7 7m8-14 7 7-7 7m-3-15-2 18" />
    </>
  ),
  brain: (
    <>
      <path d="M12 4c-3-5-9 0-7 4-4 2-2 8 1 8-1 4 4 6 6 3m0-15c3-5 9 0 7 4 4 2 2 8-1 8 1 4-4 6-6 3M12 4v15m-6-9 3 2m9-2-3 2M6 16l3-2m9 2-3-2" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 10 5-10 5L2 8l10-5Zm-10 10 10 5 10-5M2 18l10 5 10-5" />
    </>
  ),
  monitor: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 22h8m-4-5v5" />
    </>
  ),
  graduation: (
    <>
      <path d="m2 8 10-5 10 5-10 5L2 8Zm4 2v7c4 3 8 3 12 0v-7m4-2v9" />
    </>
  ),
  chevron: (
    <>
      <path d="m9 5 7 7-7 7" />
    </>
  ),
  terminal: (
    <>
      <rect x="2" y="3" width="20" height="18" rx="3" />
      <path d="m6 8 4 4-4 4m8 0h4" />
    </>
  ),
};

export function Icon({
  name,
  className = "",
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`icon ${className}`}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
