"use client";

import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Perfil() {
  const { lang } = useLanguage();
  const t = translations[lang].perfil;

  return (
    <section
      id="perfil"
      className="flex min-h-[85vh] w-full flex-col justify-center gap-12 py-16"
    >
      <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0AE98A]" />
          {t.eyebrow}
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          <span className="bg-gradient-to-r from-white to-[#0AE98A] bg-clip-text text-transparent">
            {t.name}
          </span>
        </h1>

        <p className="max-w-xl text-lg leading-8 text-zinc-300">
          {t.paragraph}
        </p>
        <a
          href="/documents/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-md border border-[#0AE98A]/30 px-4 py-2 text-sm text-[#0AE98A] transition-colors hover:border-[#0AE98A]/60 hover:bg-[#0AE98A]/5"
        >
          {t.cv}
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0AE98A]" />
          {t.skillsLabel}
        </p>
        <div className="flex flex-wrap gap-2">
          {t.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-white/10 px-3 py-1 text-sm text-[#0AE98A] transition-colors hover:border-[#0AE98A]/40 hover:bg-[#0AE98A]/5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
