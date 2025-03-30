import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <main className="p-6 text-center mt-6">
          <h1 className="text-4xl sm:text-4xl font-bold mb-6 text-gray-900">Servicios</h1>
          <p className="mb-10 text-2xl text-gray-600">Descubre nuestros servicios de construcción.</p>
        </main>

        
        {/* Items */}
        <div className="mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
          <article className="mb-3 relative p-5 rounded-2xl bg-gradient-to-br from-gray-200/60 via-gray-100/50 to-gray-200/60 shadow-md shadow-gray-300/30 transition-all hover:shadow-lg hover:shadow-gray-400/50 active:shadow-xl active:shadow-gray-500/60 active:scale-105">
            <div className="relative mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200/40 flex items-center justify-center relative">
                <img
                  src="/images/remodelaciones.png"
                  alt="Ícono de diseño"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-800">
              Remodelaciones
            </h3>
            <p className="text-gray-700">
              Transformamos tus espacios con remodelaciones innovadoras y funcionales.
            </p>
          </article>

          <article className="mb-3 relative p-5 rounded-2xl bg-gradient-to-br from-gray-200/60 via-gray-100/50 to-gray-200/60 shadow-md shadow-gray-300/30 transition-all hover:shadow-lg hover:shadow-gray-400/50 active:shadow-xl active:shadow-gray-500/60 active:scale-105">
            <div className="relative mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200/40 flex items-center justify-center relative">
                <img
                  src="/images/estructuras.png"
                  alt="Ícono de diseño"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-800">
              Estructuras
            </h3>
            <p className="text-gray-700">
              Construimos estructuras sólidas y seguras para cualquier tipo de proyecto.
            </p>
          </article>

          <article className="mb-3 relative p-5 rounded-2xl bg-gradient-to-br from-gray-200/60 via-gray-100/50 to-gray-200/60 shadow-md shadow-gray-300/30 transition-all hover:shadow-lg hover:shadow-gray-400/50 active:shadow-xl active:shadow-gray-500/60 active:scale-105">
            <div className="relative mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200/40 flex items-center justify-center relative">
                <img
                  src="/images/plomerias.png"
                  alt="Ícono de diseño"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-800">
              Plomerías
            </h3>
            <p className="text-gray-700">
              Ofrecemos soluciones eficientes en plomería para garantizar el correcto funcionamiento de tu red hidráulica.
            </p>
          </article>

          <article className="mb-3 relative p-5 rounded-2xl bg-gradient-to-br from-gray-200/60 via-gray-100/50 to-gray-200/60 shadow-md shadow-gray-300/30 transition-all hover:shadow-lg hover:shadow-gray-400/50 active:shadow-xl active:shadow-gray-500/60 active:scale-105">
            <div className="relative mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200/40 flex items-center justify-center relative">
                <img
                  src="/images/impermeabilizaciones.png"
                  alt="Ícono de diseño"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-800">
              Impermeabilizaciones
            </h3>
            <p className="text-gray-700">
              Protegemos tus espacios con impermeabilizaciones de alta calidad y durabilidad.
            </p>
          </article>

          <article className="mb-3 relative p-5 rounded-2xl bg-gradient-to-br from-gray-200/60 via-gray-100/50 to-gray-200/60 shadow-md shadow-gray-300/30 transition-all hover:shadow-lg hover:shadow-gray-400/50 active:shadow-xl active:shadow-gray-500/60 active:scale-105">
            <div className="relative mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200/40 flex items-center justify-center relative">
                <img
                  src="/images/enchapes.png"
                  alt="Ícono de diseño"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-800">
              Enchapes
            </h3>
            <p className="text-gray-700">
              Realizamos enchapes con acabados perfectos para embellecer cualquier ambiente.
            </p>
          </article>

          <article className="mb-3 relative p-5 rounded-2xl bg-gradient-to-br from-gray-200/60 via-gray-100/50 to-gray-200/60 shadow-md shadow-gray-300/30 transition-all hover:shadow-lg hover:shadow-gray-400/50 active:shadow-xl active:shadow-gray-500/60 active:scale-105">
            <div className="relative mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200/40 flex items-center justify-center relative">
                <img
                  src="/images/drywall.png"
                  alt="Ícono de diseño"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-800">
              Drywall
            </h3>
            <p className="text-gray-700">
              Implementamos sistemas de drywall para espacios modernos y versátiles.
            </p>
          </article>

          <article className="mb-3 relative p-5 rounded-2xl bg-gradient-to-br from-gray-200/60 via-gray-100/50 to-gray-200/60 shadow-md shadow-gray-300/30 transition-all hover:shadow-lg hover:shadow-gray-400/50 active:shadow-xl active:shadow-gray-500/60 active:scale-105">
            <div className="relative mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200/40 flex items-center justify-center relative">
                <img
                  src="/images/pintura.png"
                  alt="Ícono de diseño"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-800">
              Pintura
            </h3>
            <p className="text-gray-700">
              Aplicamos pintura profesional para dar vida y estilo a tus espacios.
            </p>
          </article>

          <article className="mb-3 relative p-5 rounded-2xl bg-gradient-to-br from-gray-200/60 via-gray-100/50 to-gray-200/60 shadow-md shadow-gray-300/30 transition-all hover:shadow-lg hover:shadow-gray-400/50 active:shadow-xl active:shadow-gray-500/60 active:scale-105">
            <div className="relative mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200/40 flex items-center justify-center relative">
                <img
                  src="/images/fachada.png"
                  alt="Ícono de diseño"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-800">
              Fachadas
            </h3>
            <p className="text-gray-700">
              Renovamos fachadas con diseños elegantes y materiales resistentes.
            </p>
          </article>

          <article className="mb-3 relative p-5 rounded-2xl bg-gradient-to-br from-gray-200/60 via-gray-100/50 to-gray-200/60 shadow-md shadow-gray-300/30 transition-all hover:shadow-lg hover:shadow-gray-400/50 active:shadow-xl active:shadow-gray-500/60 active:scale-105">
            <div className="relative mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200/40 flex items-center justify-center relative">
                <img
                  src="/images/locativos.png"
                  alt="Ícono de diseño"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-800">
              Locativos
            </h3>
            <p className="text-gray-700">
              Ejecutamos mantenimientos locativos para conservar tus instalaciones en óptimas condiciones.
            </p>
          </article>

          <article className="mb-3 relative p-5 rounded-2xl bg-gradient-to-br from-gray-200/60 via-gray-100/50 to-gray-200/60 shadow-md shadow-gray-300/30 transition-all hover:shadow-lg hover:shadow-gray-400/50 active:shadow-xl active:shadow-gray-500/60 active:scale-105">
            <div className="relative mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200/40 flex items-center justify-center relative">
                <img
                  src="/images/terminaciones.png"
                  alt="Ícono de diseño"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-800">
              Terminaciones
            </h3>
            <p className="text-gray-700">
              Cuidamos cada detalle con terminaciones impecables en todas nuestras obras.
            </p>
          </article>

          <article className="mb-3 relative p-5 rounded-2xl bg-gradient-to-br from-gray-200/60 via-gray-100/50 to-gray-200/60 shadow-md shadow-gray-300/30 transition-all hover:shadow-lg hover:shadow-gray-400/50 active:shadow-xl active:shadow-gray-500/60 active:scale-105">
            <div className="relative mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200/40 flex items-center justify-center relative">
                <img
                  src="/images/diseño.png"
                  alt="Ícono de diseño"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-800">
              Diseños
            </h3>
            <p className="text-gray-700">
              Creamos diseños personalizados que combinan estética y funcionalidad.
            </p>
          </article>
        </div>

        {/* Sección de Reseñas */}
        <section className="mt-16 mb-16">
        <div className="border-t py-1 [border-image:linear-gradient(to_right,transparent,rgba(148,163,184,0.25),transparent)1] mb-6"></div>
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Lo que dicen nuestros clientes</h2>
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
      <div className="mb-15"> </div>
      <Footer />
    </div>
  );
}
