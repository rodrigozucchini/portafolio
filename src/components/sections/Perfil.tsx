const skills = [
  "Node.js",
  "NestJS",
  "TypeScript",
  "PHP",
  "C#",
  ".NET",
  "PostgreSQL",
  "SQL Server",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Docker",
  "Kubernetes",
  "Linux",
  "SSH",
  "Git",
  "GitHub",
  "GitLab",
  "Jest",
  "UML",
  "Claude Code",
  "RAG",
  "MCP",
  "IA for Developers",
];

export default function Perfil() {
  return (
    <section
      id="perfil"
      className="flex min-h-[85vh] w-full flex-col justify-center gap-12 py-16"
    >
      <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0AE98A]" />
          Perfil
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          <span className="bg-gradient-to-r from-white to-[#0AE98A] bg-clip-text text-transparent">
            Rodrigo Zucchini
          </span>
        </h1>

        <p className="max-w-xl text-lg leading-8 text-zinc-300">
          Soy Desarrollador Full Stack, con formación superior en análisis y
          desarrollo de software. Construyo aplicaciones de punta a punta: me
          ocupo de la lógica de negocio y los datos del lado del servidor, y
          desarrollo interfaces funcionales del lado del cliente. Tengo
          experiencia implementando autenticación, integración de medios de
          pago, procesamiento de tareas en segundo plano y despliegue de
          aplicaciones mediante contenedores.
        </p>
        <a
          href="/documents/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex w-fit items-center gap-2 rounded-md border border-[#0AE98A]/30 px-4 py-2 text-sm text-[#0AE98A] transition-colors hover:border-[#0AE98A]/60 hover:bg-[#0AE98A]/5"
        >
          Descargar CV ↓
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0AE98A]" />
          Skills:
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
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
