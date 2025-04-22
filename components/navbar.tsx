"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    `uppercase font-semibold text-xs sm:text-sm md:text-base ${
      pathname === href ? "text-blue-700" : "text-black"
    } hover:text-blue-700 transition-colors whitespace-nowrap`;

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="bg-blue-500 h-2 w-full" />

      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 md:px-8 overflow-x-auto">
        {/* Logo a la izquierda con tamaño ajustable en móviles */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/images/nitcorregido.png"
            alt="Logo"
            className="h-10 sm:h-12 md:h-16 lg:h-18 w-auto cursor-pointer" // Tamaño ajustable
          />
        </Link>

        {/* Navegación a la derecha */}
        <nav className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2 max-w-full overflow-x-auto">
          <Link href="/" className={linkClasses("/")}>
            Inicio
          </Link>
          <Link href="/servicios" className={linkClasses("/servicios")}>
            Servicios
          </Link>
          <Link href="/trabaja-con-nosotros" className={linkClasses("/trabaja-con-nosotros")}>
            Trabaja con Nosotros
          </Link>
          <Link href="/contacto" className={linkClasses("/contacto")}>
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


