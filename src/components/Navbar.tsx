"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  const links = [
    { href: "#perfil", label: t.perfil },
    { href: "#educacion", label: t.educacion },
    { href: "#experiencia", label: t.experiencia },
    { href: "#proyectos", label: t.proyectos },
    { href: "#hobbies", label: t.hobbies },
    { href: "#contacto", label: t.contacto },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#011126]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 sm:px-16">
        <a href="#perfil" className="font-semibold tracking-tight text-white">
          {t.logo}
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm font-medium sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center rounded-md border border-white/10 text-sm font-medium">
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`cursor-pointer px-3 py-1.5 transition-colors ${
                lang === "es" ? "text-[#0AE98A]" : "text-zinc-500 hover:text-white"
              }`}
            >
              ES
            </button>
            <span className="h-5 w-px bg-white/10" />
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`cursor-pointer px-3 py-1.5 transition-colors ${
                lang === "en" ? "text-[#0AE98A]" : "text-zinc-500 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.menuLabel}
            aria-expanded={open}
            className="flex h-8 w-8 cursor-pointer items-center justify-center text-zinc-300 sm:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 text-sm font-medium sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
