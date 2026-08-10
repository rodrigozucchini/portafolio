const education = [
  {
    title: "Tecnicatura Superior en Análisis de Aplicaciones y Desarrollo de Software",
    institution:
      "Instituto Superior Tecnológico — Buenos Aires, Argentina · 3 años · Graduado 16/12/2025",
    file: "/documents/titulo-tecnicatura.pdf",
  },
  {
    title: "Certificación de Inglés C1",
    institution: "Online · Nivel C1",
    file: "/documents/certificado-ingles.pdf",
  },
];

export default function Educacion() {
  return (
    <section id="educacion" className="w-full border-t border-white/10 py-16">
      <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-zinc-400">
        <span className="h-1.5 w-1.5 rounded-full bg-[#0AE98A]" />
        Educación
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
        Formación académica
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {education.map((item) => (
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
              Ver certificado ↗
            </a>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col justify-between gap-4 rounded-lg border border-white/10 p-5 transition-colors hover:border-white/20 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-medium text-white">Platzi</h3>
          <p className="mt-1 text-sm text-zinc-300">
            Formación continua en cursos aprobados de desarrollo backend,
            cloud computing, ciencia de datos, inteligencia artificial
            aplicada e inglés técnico.
          </p>
        </div>
        <a
          href="https://platzi.com/p/rodrigoangelzucchini/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit shrink-0 items-center gap-1 rounded-md border border-white/10 px-3 py-1.5 text-sm text-[#0AE98A] transition-colors hover:border-[#0AE98A]/40"
        >
          Ver perfil en Platzi ↗
        </a>
      </div>
    </section>
  );
}
