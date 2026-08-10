const links = [
  { href: "https://github.com/rodrigozucchini", label: "GitHub" },
  { href: "https://linkedin.com/in/rodrigo-angel-zucchini", label: "LinkedIn" },
  { href: "mailto:devroz@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:justify-between sm:px-16">
        <p>© {new Date().getFullYear()} Rodrigo Zucchini</p>
        <div className="flex gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-[#0AE98A]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
