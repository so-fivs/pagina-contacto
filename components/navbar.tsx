"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = (href: string) =>
    `uppercase font-semibold text-sm md:text-base ${
      pathname === href ? "text-blue-700" : "text-black"
    } hover:text-blue-700 transition-colors whitespace-nowrap`;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      {/* Línea azul superior */}
      <div className="bg-blue-500 h-2 w-full" />

      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/images/nitcorregido.png"
            alt="Logo"
            className="h-10 sm:h-12 md:h-16 w-auto"
          />
        </Link>

        {/* Botón hamburguesa (solo visible en móviles) */}
        <button
          className="md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navegación (visible en pantallas medianas y grandes) */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className={linkClasses("/")}>Inicio</Link>
          <Link href="/servicios" className={linkClasses("/servicios")}>Servicios</Link>
          <Link href="/trabaja-con-nosotros" className={linkClasses("/trabaja-con-nosotros")}>Trabaja con Nosotros</Link>
          <Link href="/contacto" className={linkClasses("/contacto")}>Contacto</Link>
        </nav>
      </div>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 py-4 space-y-4 bg-white shadow-lg border-t border-gray-200">
          <Link href="/" onClick={() => setMenuOpen(false)} className={linkClasses("/")}>
            Inicio
          </Link>
          <Link href="/servicios" onClick={() => setMenuOpen(false)} className={linkClasses("/servicios")}>
            Servicios
          </Link>
          <Link href="/trabaja-con-nosotros" onClick={() => setMenuOpen(false)} className={linkClasses("/trabaja-con-nosotros")}>
            Trabaja con Nosotros
          </Link>
          <Link href="/contacto" onClick={() => setMenuOpen(false)} className={linkClasses("/contacto")}>
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
