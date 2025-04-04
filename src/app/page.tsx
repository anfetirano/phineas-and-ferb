// src/app/page.tsx
import Arbol from "@/components/arbol";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Fondo */}
      <img
        src="/images/fondo.jpg"
        alt="Fondo cielo azul"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />

      {/* Árbol animado con piezas */}
      <Arbol className="scale-100 left-[15%]" />
    </main>
  );
}
