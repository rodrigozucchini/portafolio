"use client";

import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Contacto() {
  const { lang } = useLanguage();
  const t = translations[lang].contacto;

  return (
    <section id="contacto" className="w-full border-t border-white/10 py-16">
      <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-zinc-400">
        <span className="h-1.5 w-1.5 rounded-full bg-[#0AE98A]" />
        {t.eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
        {t.heading}
      </h2>
      <div className="mt-6 flex flex-col gap-2 text-zinc-300">
        <a href="mailto:devroz@gmail.com" className="hover:text-white">
          devroz@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/rodrigo-angel-zucchini"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          {t.linkedinLabel}
        </a>
        <a
          href="https://github.com/rodrigozucchini"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          {t.githubLabel}
        </a>
      </div>
    </section>
  );
}
