"use client";  

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Page() {
  const [formData, setFormData] = useState({
    Nombre: "",
    Correo: "",
    telefono: "",
    Mensaje: "",
    Experiencia: ""
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('Nombre', formData.Nombre);
      formDataToSend.append('Correo', formData.Correo);
      formDataToSend.append('telefono', formData.telefono);
      formDataToSend.append('Mensaje', formData.Mensaje);
      formDataToSend.append('Experiencia', formData.Experiencia);
      if (cvFile) {
        formDataToSend.append('CV', cvFile);
      }

      // Reemplaza esta URL con la de tu backend en Railway una vez desplegado
      const response = await fetch('https://pagina-contacto-production.up.railway.app/potencial_empleado', {
        method: 'POST',
        body: formDataToSend,
        // No establezcas el header 'Content-Type', el navegador lo hará automáticamente con el boundary
      });

      if (!response.ok) throw new Error('Error en el servidor');

      setSubmitStatus('success');
      setFormData({
        Nombre: "",
        Correo: "",
        telefono: "",
        Mensaje: "",
        Experiencia: ""
      });
      setCvFile(null);
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
        <main className="p-6 text-center mt-6">
          <h1 className="text-4xl sm:text-4xl font-bold mb-6">Trabaja con nosotros</h1>
          <p className="mb-10 text-2xl">¡Vacantes disponibles!</p>
        </main>

        {/* Resto del código... */}

        <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Formulario de Aplicación</h2>
          
          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
              ¡Solicitud enviada con éxito! Revisaremos tu CV y nos pondremos en contacto.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
              Error al enviar la solicitud. Por favor, inténtalo de nuevo.
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium">Nombre Completo</label>
                <input 
                  type="text" 
                  name="Nombre"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none" 
                  placeholder="Tu nombre" 
                  value={formData.Nombre}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Correo Electrónico</label>
                <input 
                  type="email" 
                  name="Correo"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none" 
                  placeholder="tucorreo@email.com" 
                  value={formData.Correo}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Teléfono</label>
              <input 
                type="tel" 
                name="telefono"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none" 
                placeholder="Tu número de contacto" 
                value={formData.telefono}
                onChange={handleChange}
                required 
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Experiencia (opcional)</label>
              <input 
                type="text" 
                name="Experiencia"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none" 
                placeholder="Años de experiencia en el sector" 
                value={formData.Experiencia}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Mensaje</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none" 
                rows={4} 
                name="Mensaje"
                placeholder="Déjanos tu mensaje..." 
                value={formData.Mensaje}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Adjunta tu CV (PDF o DOC)</label>
              <input 
                type="file" 
                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none" 
                accept=".pdf,.doc,.docx" 
                onChange={handleFileChange}
                required 
              />
            </div>

            <div className="text-center">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-200 shadow-md disabled:bg-gray-400"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}