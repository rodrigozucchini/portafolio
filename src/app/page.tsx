import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Perfil from "@/components/sections/Perfil";
import Educacion from "@/components/sections/Educacion";
import Experiencia from "@/components/sections/Experiencia";
import Proyectos from "@/components/sections/Proyectos";
import Contacto from "@/components/sections/Contacto";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-[-4rem] h-96 w-96 rounded-full bg-[#0AE98A]/10 blur-[120px] motion-safe:animate-[float_18s_ease-in-out_infinite]" />
        <div className="absolute right-[-6rem] top-1/3 h-[26rem] w-[26rem] rounded-full bg-sky-500/10 blur-[140px] motion-safe:animate-[float-reverse_22s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-4rem] left-1/4 h-80 w-80 rounded-full bg-[#0AE98A]/5 blur-[110px] motion-safe:animate-[float_25s_ease-in-out_infinite]" />
      </div>
      <Navbar />
      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 sm:px-16">
        <Perfil />
        <Educacion />
        <Experiencia />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
