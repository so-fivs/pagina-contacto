"use client";  

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Page() {
  // Estado para el mensaje en el formulario
  const [mensaje, setMensaje] = useState("");

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 sm:px-6"
      data-aos="fade-up">
      <main className="pt-28 p-6 text-center mt-6">
          <h1 className="text-4xl sm:text-4xl font-bold mb-6 text-blue-700">Trabaja con nosotros</h1>
          <p className="mb-10 text-2xl">¡Vacantes disponibles!</p>
        </main>

        {/* Sección de dos columnas */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Columna izquierda: Mensaje */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">Únete a nuestro equipo</h2>
            <p className="text-lg text-gray-900">
              En Construcciones JM SAS, buscamos personas con ganas de trabajar,
              aprender y crecer en el sector de la construcción. Valoramos el 
              compromiso, la responsabilidad y la pasión por hacer bien las cosas.
              Creemos en el trabajo en equipo como la clave para lograr grandes resultados.
              Si deseas formar parte de un equipo que transforma espacios con calidad y creatividad,
              llena el formulario y da el primer paso hacia nuevas oportunidades laborales.
              ¡Tu talento y esfuerzo pueden marcar la diferencia!
            </p>
          </div>

          {/* Columna derecha: Imagen */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/images/fotoFamiliar.jpeg" 
              alt="Equipo de trabajo" 
              className="w-full max-w-sm max-h-110 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Formulario de aplicación */}
        <div className="mt-12 bg-blue-50 p-8 rounded-lg shadow-md border border-gray-200"
        data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">Formulario de Aplicación</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombre Completo */}
              <div>
                <label className="block text-gray-800 font-medium">Nombre Completo</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none" 
                  placeholder="Tu nombre" 
                  required 
                />
              </div>
              {/* Correo Electrónico */}
              <div>
                <label className="block text-gray-800 font-medium">Correo Electrónico</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none" 
                  placeholder="tucorreo@email.com" 
                  required 
                />
              </div>
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-gray-800 font-medium">Teléfono</label>
              <input 
                type="tel" 
                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none" 
                placeholder="Tu número de contacto" 
                required 
              />
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-gray-800 font-medium">Mensaje</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none" 
                rows={4} 
                placeholder="Déjanos tu mensaje..." 
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              />
            </div>

            {/* Adjuntar CV */}
            <div>
              <label className="block text-gray-800 font-medium">Adjunta tu CV (Solo PDF)</label>
              <input 
                type="file" 
                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none" 
                accept=".pdf,.doc,.docx" 
                required 
              />
            </div>

            {/* Botón de envío */}
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md">
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mb-15"> </div>
      <Footer />
    </div>
  );
}
