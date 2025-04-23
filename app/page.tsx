export default function Page() {
  // ...teamMembers queda igual

  return (
    <div className="overflow-x-hidden w-full">
      <Navbar />

      {/* Imagen de portada */}
      <div className="relative w-full h-[500px] md:h-[645px] overflow-hidden">
        <Image
          src="/images/main.webp"
          alt="Imagen a mostrar"
          fill
          className="object-cover brightness-30"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 pt-20 md:pt-24">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-xl sm:max-w-2xl">
            "Expertos en construir, remodelar y transformar tus espacios con calidad y confianza"
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl mt-4 font-medium">
            Empresa de construcción
          </p>
          <a 
            href="/contacto"
            className="mt-6 bg-gray-600/50 text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-700/80 transition duration-300"
          >
            Contáctanos Hoy
          </a>
        </div>
      </div>

      {/* Sección Quiénes somos */}
      <section className="pt-16 pb-12 md:pb-20 px-4 md:px-10 font-sans">
        <div className="max-w-6xl mx-auto">
          <div className="text-center pb-12">
            <div className="flex items-center gap-4 justify-center pb-6">
              <span className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
              <span className="text-gray-900 text-sm sm:text-base font-semibold uppercase tracking-wide">
                Empresa Colombiana
              </span>
              <span className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 pb-4">
              Quiénes somos
            </h2>
            <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
              Somos una empresa constructora de Bogotá con más de 10 años de trayectoria...
            </p>
          </div>

          {/* Misión, Visión, Valores */}
          <Spotlight className="grid gap-6 lg:grid-cols-3">
            <InfoCard title="Misión" content="Construir estructuras de alta calidad..." />
            <InfoCard title="Visión" content="Posicionarnos como una empresa integral..." />
            <InfoCard title="Valores" content="Al ser una empresa familiar..." />
          </Spotlight>
        </div>
      </section>

      {/* Línea decorativa */}
      <div className="flex items-center justify-center gap-4 pb-8">
        <span className="h-0.5 w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
      </div>

      {/* Nuestro equipo */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
              Nuestro equipo de trabajo
            </h2>
            <p className="text-base sm:text-lg text-gray-900 mt-2">
              Conoce a los profesionales que hacen posible cada proyecto.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-6 p-6 rounded-xl shadow-lg bg-white hover:scale-105 transition duration-300`}
              >
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-blue-700 shadow-md relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left max-w-md">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-lg font-medium text-gray-900">{member.role}</p>
                  <p className="text-base text-gray-900 mt-1">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer agregado */}
      <Footer />
    </div>
  );
}

