'use client';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";

export default function Page() {

  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const galleryMap: { [key: string]: string[] } = {
    Remodelaciones: [
      "/images/remodelacion1.jpg",
      "/images/remodelacion2.jpg",
    ],
    Estructuras: [
      "/images/estructura1.jpg",
      "/images/estructura2.jpg",
    ],
    Plomerías: [
      "/images/plomeria1.jpg",
      "/images/plomeria2.jpg",
    ],
    Impermeabilizaciones: [
      "/images/impermeabilizacion1.jpg",
      "/images/impermeabilizacion2.jpg",
    ],
    Enchapes: [
      "/images/enchape1.jpg",
      "/images/enchape2.jpg",
    ],
    Drywall: [
      "/images/drywall1.jpg",
      "/images/drywall2.jpg",
    ],
    Pintura: [
      "/images/pintura1.jpg",
      "/images/pintura2.jpg",
    ],
    Fachadas: [
      "/images/fachada1.jpg",
      "/images/fachada2.jpg",
    ],
    Locativos: [
      "/images/locativo1.jpg",
      "/images/locativo2.jpg",
    ],
    Terminaciones: [
      "/images/terminacion1.jpg",
      "/images/terminacion2.jpg",
    ],
    Diseños: [
      "/images/diseno1.jpg",
      "/images/diseno2.jpg",
    ],
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
    {
      title: "Estructuras",
      desc: "Construimos estructuras sólidas y seguras para cualquier tipo de proyecto.",
      img: "estructuras.png",
    },
    {
      title: "Plomerías",
      desc: "Ofrecemos soluciones eficientes en plomería para garantizar el correcto funcionamiento de tu red hidráulica",
      img: "plomerias.png",
    },
    {
      title: "Impermeabilizaciones",
      desc: "Protegemos tus espacios con impermeabilizaciones de alta calidad y durabilidad.",
      img: "impermeabilizaciones.png",
    },
    {
      title: "Enchapes",
      desc: "Realizamos enchapes con acabados perfectos para embellecer cualquier ambiente..",
      img: "enchapes.png",
    },
    {
      title: "Drywall",
      desc: "Implementamos sistemas de drywall para espacios modernos y versátiles.",
      img: "drywall.png",
    },
    {
      title: "Pintura",
      desc: "Aplicamos pintura profesional para dar vida y estilo a tus espacios",
      img: "pintura.png",
    },
    {
      title: "Fachadas",
      desc: "Renovamos fachadas con diseños elegantes y materiales resistentes.",
      img: "fachada.png",
    },
    {
      title: "Locativos",
      desc: "Ejecutamos mantenimientos locativos para conservar tus instalaciones en óptimas condiciones.",
      img: "locativos.png",
    },
    {
      title: "Terminaciones",
      desc: "Cuidamos cada detalle con terminaciones impecables en todas nuestras obras",
      img: "terminaciones.png",
    },
    {
      title: "Diseños",
      desc: "Creamos diseños personalizados que combinan estética y funcionalidad.",
      img: "diseño.png",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <main className="pt-28 p-6 text-center mt-6">
          <h1 className="text-4xl sm:text-4xl font-bold mb-6 text-blue-700">Servicios</h1>
          <p className="mb-10 text-2xl text-black-700">Descubre nuestros servicios de construcción.</p>
        </main>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, img }) => (
            <article
              key={title}
              onClick={() => openGallery(title)}
              className="cursor-pointer p-5 rounded-2xl bg-blue-50 shadow hover:shadow-md transition active:scale-105"

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
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Lo que dicen nuestros clientes</h2>
          <div className="space-y-10">
            {/* Reseña 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 text-lg">👤</span>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Carlos Ramírez</p>
                  <p className="text-gray-500 text-sm">Remodelación de baño</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg">
                “Excelente servicio, cumplieron con los tiempos y la calidad fue increíble. ¡Los recomiendo totalmente!”
              </p>
            </div>

            {/* Reseña 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 text-lg">👤</span>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Andrea Gómez</p>
                  <p className="text-gray-500 text-sm">Construcción de estructura</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg">
                “Quedé impresionada con el profesionalismo y la atención al detalle. Un equipo confiable y eficiente.”
              </p>
            </div>

            {/* Reseña 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-gray-700 text-lg">👤</span>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Juan Pérez</p>
                  <p className="text-gray-500 text-sm">Impermeabilización</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg">
                “El equipo hizo un trabajo impecable con la impermeabilización de mi casa. Gran calidad y atención.”
              </p>
            </div>
          </div>
        </section>
      </div>

      {isOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-2xl w-full text-center relative">
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