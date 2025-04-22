"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    `uppercase font-semibold text-sm sm:text-base md:text-lg ${
      pathname === href ? "text-blue-700" : "text-black"
    } hover:text-blue-700 transition-colors`;

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="bg-blue-500 h-2 w-full"></div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 py-4 px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src="/images/nitcorregido.png"
            alt="Logo"
            className="h-16 sm:h-20 w-auto cursor-pointer"
          />
        </Link>

        {/* Navegación */}
        <nav className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2">
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
