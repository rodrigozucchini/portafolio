type Role = {
  role: string;
  period: string;
  bullets: string[];
  technologies: string[];
};

type Experience = {
  title: string;
  location: string;
  url?: string;
  roles: Role[];
};

const experience: Experience[] = [
  {
    title: "Waiona Core & Admin — Plataforma E-commerce / Delivery (Freelance)",
    location: "Buenos Aires, Argentina",
    roles: [
      {
        role: "Desarrollador Backend Freelance - Referencias Comprobables",
        period: "10/12/2025 - Actualidad",
        bullets: [
          "Construí el backend de una plataforma de e-commerce con NestJS, TypeScript y PostgreSQL, utilizando una arquitectura modular basada en servicios, controladores, repositorios e inyección de dependencias.",
          "Diseñé e implementé una API REST para la gestión de usuarios, productos, categorías, pedidos, cupones y autenticación, siguiendo principios de arquitectura limpia.",
          "Desarrollé la lógica de negocio para el ciclo de compra, con control de stock, procesamiento de órdenes y descuentos.",
          "Diseñé el modelo de datos con PostgreSQL y TypeORM, optimizando relaciones y consultas.",
          "Desarrollé un sistema de autenticación y autorización con JWT, Passport y Refresh Tokens, implementando control de acceso por roles.",
          "Integré Mercado Pago para procesar pagos.",
          "Optimicé el rendimiento con Redis, implementando almacenamiento en caché para reducir los tiempos de respuesta.",
          "Desarrollé procesamiento asíncrono con BullMQ para el envío de correos y la ejecución de tareas en segundo plano.",
          "Integré Cloudinary para la gestión y almacenamiento de imágenes.",
          "Desarrollé pruebas Unitarias y End-to-End para validar la lógica de negocio y la estabilidad de la aplicación.",
          "Contenericé la aplicación con Docker y desarrollé el proceso de despliegue mediante CI/CD.",
          "Documenté la API con Swagger y apliqué medidas de seguridad Helmet, CORS y Rate Limiting.",
        ],
        technologies: [
          "NestJS",
          "TypeScript",
          "PostgreSQL",
          "TypeORM",
          "Redis",
          "BullMQ",
          "JWT",
          "Passport",
          "Docker",
          "Mercado Pago",
          "Cloudinary",
          "Swagger",
          "Jest",
          "CI/CD",
        ],
      },
      {
        role: "Desarrollador Frontend Freelance - Referencias Comprobables",
        period: "10/12/2025 - Actualidad",
        bullets: [
          "Desarrollé un panel administrativo con Next.js, creando interfaces para la gestión de usuarios, productos, pedidos y otras funcionalidades del sistema.",
          "Implementé la comunicación con el backend mediante una capa intermedia, gestionando la autenticación de forma segura con cookies httpOnly.",
          "Diseñé flujos para validar y actualizar la información desde el servidor, mejorando la consistencia de los datos.",
          "Optimicé la carga de información utilizando estrategias de caché y actualización de datos para mejorar el rendimiento de la aplicación.",
          "Construí dashboards para visualizar métricas e información del sistema con una carga progresiva de los datos.",
          "Desarrollé más de 10 módulos funcionales con paginación, estados de carga, formularios y manejo de errores para ofrecer una experiencia de usuario fluida.",
        ],
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Server Components",
          "Server Actions",
          "Zod",
          "JWT",
          "BFF",
          "Cache",
        ],
      },
    ],
  },
  {
    title: "Programa de Finanzas (Freelance)",
    location: "Remoto",
    url: "https://programadefinanzas.com/",
    roles: [
      {
        role: "Desarrollador Freelance",
        period: "01/09/2022 - 29/01/2023",
        bullets: [
          "Desarrollé la aplicación completa en React, desde el diseño de la interfaz hasta la implementación.",
          "Me encargué del despliegue de la aplicación en producción.",
          "Coordiné con el cliente la compra y configuración del dominio del proyecto (programadefinanzas.com).",
        ],
        technologies: ["React"],
      },
    ],
  },
  {
    title: "Sistema de Gestión de Biblioteca",
    location: "Buenos Aires, Argentina",
    roles: [
      {
        role: "Práctica Profesional Supervisada - Título Pregrado - Referencias Comprobables",
        period: "01/03/2025 - 16/12/2025",
        bullets: [
          "Lideré el desarrollo de un sistema web de gestión bibliotecaria coordinando un equipo multidisciplinario de estudiantes.",
          "Diseñé el modelo relacional en PostgreSQL e implementé módulos en PHP con framework TOBA bajo patrón MVC.",
          "Desarrollé funcionalidades de catálogo, préstamos, reservas y administración de usuarios.",
          "Gestioné control de versiones en GitLab y participé en testing funcional y documentación técnica del proyecto.",
          "Participé en el despliegue en producción del sistema en un servidor institucional, operado en la red privada interna del instituto.",
        ],
        technologies: ["PHP", "Framework TOBA", "PostgreSQL", "GitLab", "Git", "HTML", "CSS", "UML"],
      },
    ],
  },
  {
    title: "Arquitectura DMZ y Despliegue Seguro de API",
    location: "Buenos Aires, Argentina",
    roles: [
      {
        role: "Práctica Profesional Supervisada - Título Pregrado - Referencias Comprobables",
        period: "01/03/2025 - 16/12/2025",
        bullets: [
          "Diseñé una arquitectura DMZ/LAN con Endian Firewall y máquinas virtuales para aislar servicios y controlar el tráfico de red.",
          "Configuré reglas de firewall, NAT, enrutamiento interzonal y acceso remoto seguro mediante SSH.",
          "Implementé un entorno backend con C# y .NET conectado a SQL Server mediante ODBC.",
          "Configuré servicios en Linux (Debian, Ubuntu Server) y Windows Server para despliegue, conectividad y acceso remoto.",
        ],
        technologies: [
          "Linux",
          "Debian",
          "Ubuntu Server",
          "Endian Firewall",
          "C#",
          ".NET",
          "SQL Server",
          "ODBC",
          "SSH",
          "NAT",
          "PuTTY",
        ],
      },
    ],
  },
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="w-full border-t border-white/10 py-16">
      <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-zinc-400">
        <span className="h-1.5 w-1.5 rounded-full bg-[#0AE98A]" />
        Experiencia y Práctica Profesional
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
        Trayectoria profesional
      </h2>
      <div className="mt-8 flex flex-col gap-6">
        {experience.map((exp) => (
          <div
            key={exp.title}
            className="rounded-lg border border-white/10 p-6 transition-colors hover:border-white/20"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-medium text-white">{exp.title}</h3>
              <div className="flex items-baseline gap-3">
                <p className="text-sm text-zinc-400">{exp.location}</p>
                {exp.url && (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#0AE98A] hover:underline"
                  >
                    Ver sitio ↗
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
