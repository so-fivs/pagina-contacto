import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Spotlight from "@/components/spotlight";
import { useMemo } from "react";
import { Hammer, Eye, Handshake } from "lucide-react";
type InfoCardTitle = "Misión" | "Visión" | "Valores";

interface InfoCardProps {
  title: InfoCardTitle;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => {
  const iconMap = useMemo(() => ({
    Misión: <Hammer className="w-10 h-10 text-blue-700" />,
    Visión: <Eye className="w-10 h-10 text-blue-700" />,
    Valores: <Handshake className="w-10 h-10 text-blue-700" />,
  }), []);

  return (
    <div className="relative h-full overflow-hidden rounded-xl bg-white p-6 border border-gray-300 shadow-md text-center">
      <div className="flex justify-center mb-4">{iconMap[title]}</div>
      <h3 className="text-3xl font-bold text-gray-900 md:text-3xl mb-4">
        {title}
      </h3>
      <p className="text-gray-900">{content}</p>
    </div>
  );
};

export default function Page() {
  
  const teamMembers = [
    {
      image: "/images/gerente.jpg",
      name: "José Manuel Ruíz",
      role: "Gerente General",
      description: "Lidero la empresa con visión estratégica, asegurando el crecimiento, la calidad y la satisfacción de nuestros clientes en cada proyecto.",
    },

    {
      image: "/images/auxiliarAdmin.jpeg",
      name: "Andrea Martinez",
      role: "Asistente Administrativa",
      description: "Organizo documentación, coordino reuniones y facilito la comunicación interna y externa para el buen funcionamiento de la empresa.",
    },
    {
      image: "/images/auxiliarCont.jpeg",
      name: "Sebastián Ruíz",
      role: "Auxiliar Contable",
      description: "Registro transacciones, realizo conciliaciones bancarias y apoyo en la preparación de impuestos y reportes financieros.",
    },
    {
      image: "/images/auxObra.jpeg",
      name: "Jeferson Dimate",
      role: "Auxiliar de Obra Civil",
      description: "Asisto en labores de construcción, preparación de materiales e instalación, apoyando al equipo técnico en cada proyecto.",
    },
    {
      image: "/images/auxFac.jpeg",
      name: "Angie Ruíz",
      role: "Auxiliar de Facturación",
      description: "Elaboro cotizaciones, cuentas de cobro y facturas, digitalizo documentos y aseguro que los registros contables sean precisos y actualizados.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="relative w-full h-[500px] md:h-[645px] overflow-hidden">
        {/* Imagen de fondo */}
        <Image
        src="/images/main.webp"
        alt="Imagen a mostrar"
        fill
        className="object-cover brightness-30"
      />

        {/*Texto de imagen*/}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20 md:pt-24">
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-3xl">
            "Expertos en construir, remodelar y transformar tus espacios con calidad y confianza"
          </h1>
          <p className="text-white text-lg md:text-xl mt-4 font-medium">
            Empresa de construcción
          </p>
          <a 
          href="/contacto"
          className="mt-6 bg-gray-600/50 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-700/80 transition duration-300"
          >
            Contáctanos Hoy
          </a>
        </div>
      </div>
      
      <section className="mt-24 pt-0 pb-16 md:pb-6 font-sans">
        <div className="mt-24 pt-0 pb-16 md:pb-24">
          <div className="pb-6 md:pb-2">

          {/* Section quienes somos */}
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-12">
              <div className="flex items-center gap-4 pb-8 relative">
                <span className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
                <span className="text-gray-900 text-lg font-semibold tracking-wide uppercase">
                  Empresa Colombiana
                </span>
                <span className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
              </div>

              <h2 className="pb-4 text-3xl font-bold text-blue-700 md:text-4xl">
                Quiénes somos
              </h2>

              <p className="text-lg text-gray-900 leading-relaxed">
                Somos una empresa constructora de Bogotá con más de 10 años de trayectoria. 
                Dedicada a la ejecución de obras integrales en construcción, remodelación y
                mantenimiento con mano de obra propia. 
                Destacada por brindar asesoramiento y soluciones constructivas a sus clientes, 
                buscando siempre ajustarse a las necesidades del mismo y garantizando 
                siempre calidad, cumplimiento y excelencia. Nuestra experiencia y compromiso nos han 
                convertido en un aliado confiable para transformar y mejorar todo tipo de espacios.
              </p>
            </div>

            {/* Misión, visión y valores */}
            <Spotlight className="group mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-3">
              <InfoCard
                title="Misión"
                content="Construir estructuras de alta calidad que satisfagan las necesidades de 
                nuestros clientes con responsabilidad, honestidad y cumplimiento. Garantizar
                el uso eficiente de los recursos, optimizando el presupuesto para superar sus
                expectativas y contribuir a la mejora de su calidad de vida. Integrar estilo,
                calidad y creatividad en cada proyecto, fomentando siempre la sostenibilidad
                del medio ambiente."
              />
              <InfoCard
                title="Visión"
                content="Posicionarnos como una empresa integral y referente en el sector de la 
                construcción, destacándonos por la excelencia en la prestación de nuestros 
                servicios. Ampliar nuestra presencia en el mercado, estableciendo alianzas
                con grandes inmobiliarias y proyectos civiles. Consolidarnos como una 
                compañía en constante crecimiento, generando más oportunidades laborales y 
                contribuyendo al bienestar de más familias colombianas."
              />
              <InfoCard
                title="Valores"
                content="Al ser una empresa familiar, fundamentamos nuestro trabajo en principios que nos distinguen. Actuamos con ética y 
                profesionalismo, manteniendo una relación de confianza con nuestros clientes. Impulsamos 
                la innovación para desarrollar soluciones funcionales y estéticas. Respetamos cada detalle
                en nuestras ejecuciones, garantizando precisión y durabilidad. Fomentamos la colaboración y el crecimiento 
                mutuo, creando un entorno laboral armonioso."
              />
            </Spotlight>
          </div>
        </div>
      </section>

  {/* Línea de separación */}
  <div className="flex items-center justify-center gap-4 pb-8 relative">
          <span className="h-0.5 w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
        </div>

{/*Nuestro equipo*/}
    <section className="py-16 flex justify-center"> {/*Color de sección*/}
  <div className="max-w-4xl w-full">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-blue-700 md:text-4xl">Nuestro equipo de trabajo</h2>
      <p className="text-lg text-gray-900 mt-2">Conoce a los profesionales que hacen posible cada proyecto.</p>
    </div>

    <div className="flex flex-col gap-10 mt-10">
      {teamMembers.map((member, index) => (
        <div
          key={member.name}
          className={`flex items-center gap-6 p-6 rounded-xl shadow-lg bg-white transform transition duration-300 hover:scale-105 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-blue-700 shadow-md flex-shrink-0 relative">
          <Image
            src={member.image}
            alt={member.name}
            width={144} // o el tamaño real de la imagen
            height={144}
            className="w-full h-full object-cover"
            style={{ objectFit: "cover" }}
          />

          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-lg text-gray-900 font-medium">{member.role}</p>
            <p className="text-base text-gray-900 mt-1">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}
