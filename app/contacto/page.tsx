"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [mensaje, setMensaje] = useState("");

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 sm:px-6"
      data-aos="fade-up">
      <main className="pt-28 p-6 text-center mt-6">
          <h1 className="text-4xl sm:text-4xl font-bold mb-6 text-blue-700">Contáctanos</h1>
          <p className="mb-10 text-2xl text-black-700">¿Interesado en nuestros servicios?</p>
        </main>

        {/* Contenedor de formulario y mensaje */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          
          {/* Formulario (Izquierda) */}
          <div className="mt-12 bg-blue-50 p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700">Déjanos tu mensaje</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre Completo */}
                <div>
                  <label className="block text-gray-800 font-medium">Nombre Completo</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                    placeholder="Tu nombre" 
                    required 
                  />
                </div>
                {/* Correo Electrónico */}
                <div>
                  <label className="block text-gray-800 font-medium">Correo Electrónico</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none" 
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
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                  placeholder="Tu número de contacto" 
                  required 
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-gray-800 font-medium">Mensaje</label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                  rows={4} 
                  placeholder="Cuéntanos sobre tu proyecto o consulta..." 
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                />
              </div>

              {/* Botón de envío */}
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>

          {/* Sección de mensaje (Derecha) */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">Asesoría y Cotización Personalizada</h2>
            <p className="text-lg text-gray-900">
              En <strong>Construcciones JM SAS</strong>, nos especializamos en el desarrollo y ejecución de proyectos  
              residenciales, comerciales e industriales, garantizando altos estándares de calidad, eficiencia y cumplimiento.  
              <br /><br />
              Si requieres asesoramiento profesional o una cotización detallada para tu proyecto, te invitamos a completar  
              el siguiente formulario. Nuestro equipo revisará la solicitud y se pondrá en contacto a la mayor brevedad.  
              <br /><br />
              <span className="italic text-black-600">Construyamos juntos el futuro.</span>
            </p>
            <div className="mt-6">
              <img 
                src="/images/contactanos.jpg" 
                alt="fotoEmpresa"
                className="rounded-lg shadow-md w-full max-w-sm mx-auto h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20"></div>
      <Footer />
    </div>
  );
}
