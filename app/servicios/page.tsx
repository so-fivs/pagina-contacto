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
      "/images/remodelacionDespues.jpg",
    ],
    Estructuras: [
      "/images/esctructurasAntes.jpeg",
      "/images/estructurasDespues.jpeg",
    ],
    Plomerías: [
      "/images/tuberías.jpg",
    ],
    Impermeabilizaciones: [
      "/images/impermeabilizacion.jpg",
    ],
    Enchapes: [
      "/images/enchapesDespues.jpg",
    ],
    Drywall: [
      "/images/drywallAntes.jpg",
    ],
    Pintura: [
      "/images/pinturas.webp",
    ],
    Fachadas: [
      "/images/Fachada.jpg",
    ],
    Locativos: [
      "/images/locativosAntes.jpg",
      "/images/locativosDespues.jpg",
    ],
    Terminaciones: [
      "/images/terminaciones.jpg",
    ],
    Diseños: [
      "/images/diseños.png",
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

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
      desc: "Realizamos enchapes con acabados perfectos para embellecer cualquier ambiente.",
      img: "enchapes.png",
    },
    {
      title: "Drywall",
      desc: "Implementamos sistemas de drywall para espacios modernos y versátiles.",
      img: "drywall.png",
    },
    {
      title: "Pintura",
      desc: "Aplicamos pintura profesional para dar vida y estilo a tus espacios.",
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
      desc: "Cuidamos cada detalle con terminaciones impecables en todas nuestras obras.",
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6" data-aos="fade-up">
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
        <section className="mt-16 mb-16" data-aos="zoom-in" data-aos-duration="1500">
          <div className="border-t py-1 [border-image:linear-gradient(to_right,transparent,rgba(148,163,184,0.25),transparent)1] mb-6"></div>
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-700 md:text-3xl">Lo que dicen nuestros clientes</h2>
          <div className="space-y-10">
            {/* Reseña 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-800 text-lg">
                "Excelente servicio. Todo quedó tal como lo imaginamos. Los recomiendo ampliamente."
              </p>
              <p className="font-semibold mt-4">Carlos Gómez</p>
              <p className="text-gray-500">Cliente satisfecho</p>
            </div>
            {/* Reseña 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-800 text-lg">
                "Muy profesionales. Nos ayudaron a darle un toque único a nuestra casa. ¡Gracias!"
              </p>
              <p className="font-semibold mt-4">Laura Martínez</p>
              <p className="text-gray-500">Cliente satisfecho</p>
            </div>
            {/* Reseña 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-800 text-lg">
                "Gran trabajo. Cumplieron con todos los plazos y el resultado final fue impresionante."
              </p>
              <p className="font-semibold mt-4">Fernando Pérez</p>
              <p className="text-gray-500">Cliente satisfecho</p>
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
                alt={selectedService}
                className="w-full h-auto max-h-96 object-contain"
              />
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
              >
                &#60;
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
              >
                &#62;
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

