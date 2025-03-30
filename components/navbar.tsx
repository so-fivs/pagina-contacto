import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      {/* Sección azul encima del encabezado */}
      <div className="bg-blue-900 text-white text-center py-2 text-sm"></div>
      
      {/* Encabezado principal  con fijado al scrollear*/}
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo más grande alineado a la izquierda con enlace */}
          <Link href="/">
            <img src="/images/nitcorregido.png" alt="Logo" className="h-16 cursor-pointer" />
          </Link>
          
          {/* Barra de navegación alineada a la derecha */}
          <nav className="flex space-x-6">
            <Link href="/" className="uppercase font-semibold text-black hover:text-blue-700">Inicio</Link>
            <Link href="/servicios" className="uppercase font-semibold text-black hover:text-blue-700">Servicios</Link>
            <Link href="/trabaja-con-nosotros" className="uppercase font-semibold text-black hover:text-blue-700">Trabaja con Nosotros</Link>
            <Link href="/contacto" className="uppercase font-semibold text-black hover:text-blue-700">Contacto</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
