"use client";

import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Educacion() {
  const { lang } = useLanguage();
  const t = translations[lang].educacion;

  return (
    <section id="educacion" className="w-full border-t border-white/10 py-16">
      <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-zinc-400">
        <span className="h-1.5 w-1.5 rounded-full bg-[#0AE98A]" />
        {t.eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
        {t.heading}
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {t.items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between gap-4 rounded-lg border border-white/10 p-5 transition-colors hover:border-white/20"
          >
            <div>
              <h3 className="font-medium text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{item.institution}</p>
            </div>
            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1 rounded-md border border-white/10 px-3 py-1.5 text-sm text-[#0AE98A] transition-colors hover:border-[#0AE98A]/40"
            >
              {t.viewCertificate}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col justify-between gap-4 rounded-lg border border-white/10 p-5 transition-colors hover:border-white/20 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-medium text-white">{t.platzi.title}</h3>
          <p className="mt-1 text-sm text-zinc-300">{t.platzi.description}</p>
        </div>
        <a
          href="https://platzi.com/p/rodrigoangelzucchini/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit shrink-0 items-center gap-1 rounded-md border border-white/10 px-3 py-1.5 text-sm text-[#0AE98A] transition-colors hover:border-[#0AE98A]/40"
        >
          {t.platzi.link}
        </a>
      </div>
    </section>
  );
}
