"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    Nombre: "",
    Correo: "",
    telefono: "",
    Mensaje: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://pagina-contacto-production.up.railway.app/potencial_cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Error en el servidor');

      setSubmitStatus('success');
      setFormData({
        Nombre: "",
        Correo: "",
        telefono: "",
        Mensaje: ""
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <main className="pt-28 p-6 text-center mt-6">
          <h1 className="text-4xl sm:text-4xl font-bold mb-6 text-blue-700">Contáctanos</h1>
          <p className="mb-10 text-2xl text-black-700">¿Interesado en nuestros servicios?</p>
        </main>

        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">Déjanos tu mensaje</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
                Error al enviar el mensaje. Por favor, inténtalo de nuevo.
              </div>
            )}

            {/* 👇 AQUÍ ESTÁ CERRADO EL FORMULARIO CORRECTAMENTE 👇 */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-800 font-medium">Nombre Completo</label>
                  <input 
                    type="text" 
                    name="Nombre"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                    placeholder="Tu nombre" 
                    value={formData.Nombre}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium">Correo Electrónico</label>
                  <input 
                    type="email" 
                    name="Correo"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                    placeholder="tucorreo@email.com" 
                    value={formData.Correo}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-800 font-medium">Teléfono</label>
                <input 
                  type="tel" 
                  name="telefono"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                  placeholder="Tu número de contacto" 
                  value={formData.telefono}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium">Mensaje</label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                  rows={4} 
                  name="Mensaje"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..." 
                  value={formData.Mensaje}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
