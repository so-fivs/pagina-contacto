// Header.tsx
"use client"; // necesario si usas Next.js App Router

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    `uppercase font-semibold ${
      pathname === href ? "text-blue-700" : "text-black"
    } hover:text-blue-700 transition-colors`;

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="bg-blue-500 h-2 w-full"></div>

      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <img
            src="/images/nitcorregido.png"
            alt="Logo"
            className="h-20 cursor-pointer"
          />
        </Link>

        <nav className="flex space-x-6">
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
