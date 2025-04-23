'use client';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const galleryMap: { [key: string]: string[] } = {
    Remodelaciones: [
      "/images/remodelacionAntes.jpg",
      "images/remodelacionDespues.jpg",
    ],
    Estructuras: [
      "/images/esctructurasAntes.jpeg",
      "/images/estructurasDespues.jpeg",
    ],
    // ... (resto del objeto de imágenes)
  };

  const openGallery = (serviceName: string) => {
    setSelectedService(serviceName);
    setCurrentImageIndex(0);
    setIsOpen(true);
  };

  const closeGallery = () => setIsOpen(false);

  const nextImage = () => {
    const images = galleryMap[selectedService ?? ""] || [];
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = galleryMap[selectedService ?? ""] || [];
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const services = [
    {
      title: "Remodelaciones",
      desc: "Transformamos tus espacios con remodelaciones innovadoras y funcionales.",
      img: "remodelaciones.png",
    },
    // ... (resto de servicios)
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones
      once: true,     // Solo una vez, al hacer scroll por primera vez
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <main className="pt-28 p-6 text-center mt-6">
          <h1 className="text-4xl sm:text-4xl font-bold mb-6 text-blue-700" data-aos="fade-up">
            Servicios
          </h1>
          <p className="mb-10 text-2xl text-black-700" data-aos="fade-up">
            Descubre nuestros servicios de construcción.
          </p>
        </main>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, img }) => (
            <article
              key={title}
              onClick={() => openGallery(title)}
              className="cursor-pointer p-5 rounded-2xl bg-blue-50 shadow hover:shadow-md transition active:scale-105"
              data-aos="zoom-in"
            >
              <div className="mb-3">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img src={`/images/${img}`} alt={title} className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-900">{desc}</p>
            </article>
          ))}
        </div>

        {/* Sección de Reseñas */}
        <section className="mt-16 mb-16">
          <div className="border-t py-1 [border-image:linear-gradient(to_right,transparent,rgba(148,163,184,0.25),transparent)1] mb-6"></div>
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-700" data-aos="fade-up">
            Lo que dicen nuestros clientes
          </h2>
          <div className="space-y-10">
            {/* Reseña 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="fade-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 text-lg">👤</span>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Catherine Mora</p>
                  <p className="text-gray-500 text-sm">Remodelación de apartamento</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg">
                “Me pareció perfecto su desempeño de trabajo, sus horarios y cumplimiento con los tiempos. Recomiendo la empresa porque entienden lo que el cliente busca”
              </p>
            </div>

            {/* Reseña 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="fade-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 text-lg">👤</span>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Edwin Barrera - Gerente Comercial GRAPSECOL.SAS</p>
                  <p className="text-gray-500 text-sm">Obras completas</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg">
                “Hemos realizado contratos de obra en diferentes oportunidades con la empresa, obteniendo como resultado satisfacción total gracias a la calidad de sus trabajos, al cumplimiento, la estética, la responsabilidad y el profesionalismo en la excelente ejecución de los compromisos adquiridos. ”
              </p>
            </div>
          </div>
        </section>
      </div>

      {isOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-2xl w-full text-center relative" data-aos="fade-in">
            <button
              onClick={closeGallery}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Galería de {selectedService}</h3>
            <div className="relative">
              <img
                src={galleryMap[selectedService][currentImageIndex]}
                alt={`${selectedService} ${currentImageIndex + 1}`}
                className="mx-auto rounded-lg shadow max-h-[500px] object-contain"
              />

              <button
                onClick={prevImage}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 hover:text-black p-2 rounded-full shadow transition-all"
                aria-label="Anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 hover:text-black p-2 rounded-full shadow transition-all"
                aria-label="Siguiente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <p className="mt-4 text-gray-700">
              {currentImageIndex + 1} de {galleryMap[selectedService].length}
            </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
