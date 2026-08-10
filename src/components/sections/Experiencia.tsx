"use client";

import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Experiencia() {
  const { lang } = useLanguage();
  const t = translations[lang].experiencia;

  return (
    <section id="experiencia" className="w-full border-t border-white/10 py-16">
      <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-zinc-400">
        <span className="h-1.5 w-1.5 rounded-full bg-[#0AE98A]" />
        {t.eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
        {t.heading}
      </h2>
      <div className="mt-8 flex flex-col gap-6">
        {t.items.map((exp) => (
          <div
            key={exp.title}
            className="rounded-lg border border-white/10 p-6 transition-colors hover:border-white/20"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-medium text-white">{exp.title}</h3>
              <div className="flex items-baseline gap-3">
                <p className="text-sm text-zinc-400">{exp.location}</p>
                {"url" in exp && exp.url && (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#0AE98A] hover:underline"
                  >
                    {t.viewSite}
                  </a>
                )}
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-6">
              {exp.roles.map((role) => (
                <div key={role.role}>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <p className="text-sm font-medium text-zinc-200">
                      {role.role}
                    </p>
                    <p className="text-xs text-zinc-500">{role.period}</p>
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-300">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {role.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 px-2 py-0.5 text-xs text-[#0AE98A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
