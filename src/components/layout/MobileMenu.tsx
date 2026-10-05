"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

type Props = {
  label: string;
  openLabel: string;
  closeLabel: string;
  links: readonly { href: string; label: string }[];
};
export function MobileMenu({ label, openLabel, closeLabel, links }: Props) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  return (
    <div
      className="mobile-menu"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          button.current?.focus();
        }
      }}
    >
      <button
        ref={button}
        type="button"
        className="menu-button"
        aria-label={open ? closeLabel : openLabel}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={open ? "close" : "menu"} />
      </button>
      <nav id="mobile-navigation" aria-label={label} hidden={!open}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
            <Icon name="arrow" />
          </a>
        ))}
      </nav>
    </div>
  );
}
