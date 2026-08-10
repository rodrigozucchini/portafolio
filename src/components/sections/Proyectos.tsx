"use client";

import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

type IconType = "github" | "medium" | "book" | "users";

function Icon({ type }: { type: IconType }) {
  const common = "h-5 w-5";
  switch (type) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.28 5.68.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      );
    case "medium":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
          <path d="M3 5.5c0-.28.22-.5.5-.5h5.5c.22 0 .41.15.48.36l3.02 8.53 3.02-8.53c.07-.21.26-.36.48-.36H21.5c.28 0 .5.22.5.5s-.22.5-.5.5h-.75v12h.75c.28 0 .5.22.5.5s-.22.5-.5.5h-4.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h.75V7.9l-3.11 8.79a.5.5 0 0 1-.94 0L10.6 7.9v10.6h.9c.28 0 .5.22.5.5s-.22.5-.5.5H4.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h.9V6H3.5c-.28 0-.5-.22-.5-.5Z" />
        </svg>
      );
    case "book":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={common}
        >
          <path d="M4 5.5C4 4.67 4.67 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
          <path d="M20 5.5c0-.83-.67-1.5-1.5-1.5H12v16h6.5c.83 0 1.5-.67 1.5-1.5v-13Z" />
        </svg>
      );
    case "users":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={common}
        >
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.31 2.69-6 6-6s6 2.69 6 6" />
          <circle cx="17" cy="8" r="2.5" />
          <path d="M15.5 14.2c2.53.4 4.5 2.6 4.5 5.3" />
        </svg>
      );
  }
}

export default function Proyectos() {
  const { lang } = useLanguage();
  const t = translations[lang].proyectos;

  return (
    <section id="proyectos" className="w-full border-t border-white/10 py-16">
      <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-zinc-400">
        <span className="h-1.5 w-1.5 rounded-full bg-[#0AE98A]" />
        {t.eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
        {t.heading}
      </h2>

      <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2">
        {t.items.map((item) => {
          const content = (
            <div className="group relative flex h-full flex-col gap-4 bg-[#011126] p-6 transition-colors hover:bg-white/[.03]">
              <span className="absolute right-5 top-4 font-mono text-xs text-zinc-600">
                {item.index}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0AE98A]/30 text-[#0AE98A]">
                <Icon type={item.icon} />
              </span>
              <div>
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {item.description}
                </p>
              </div>
              {item.href && (
                <span className="mt-auto flex items-center gap-1 pt-2 text-sm text-[#0AE98A] transition-transform group-hover:translate-x-1">
                  {item.linkLabel} →
                </span>
              )}
            </div>
          );

          return item.href ? (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {content}
            </a>
          ) : (
            <div key={item.title}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}
