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
  const iconMap = useMemo(
    () => ({
      Misión: <Hammer className="w-10 h-10 text-blue-700" />,
      Visión: <Eye className="w-10 h-10 text-blue-700" />,
      Valores: <Handshake className="w-10 h-10 text-blue-700" />,
    }),
    []
  );

  return (
    <div className="relative h-full overflow-hidden rounded-xl bg-white p-6 border border-gray-300 shadow-md text-center">
      <div className="flex justify-center mb-4">{iconMap[title]}</div>
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default function Page() {
  const teamMembers = [
    {
      image: "/images/gerente.jpg",
      name: "José Manuel Ruíz",
      role: "Gerente General",
      description:
        "Lidero la empresa con visión estratégica, asegurando el crecimiento, la calidad y la satisfacción de nuestros clientes en cada proyecto.",
    },
    {
      image: "/images/auxiliarAdmin.jpeg",
      name: "Andrea Martinez",
      role: "Asistente Administrativa",
      description:
        "Organizo documentación, coordino reuniones y facilito la comunicación interna y externa para el buen funcionamiento de la empresa.",
    },
    {
      image: "/images/auxiliarCont.jpeg",
      name: "Sebastián Ruíz",
      role: "Auxiliar Contable",
      description:
        "Registro transacciones, realizo conciliaciones bancarias y apoyo en la preparación de impuestos y reportes financieros.",
    },
    {
      image: "/images/auxObra.jpeg",
      name: "Jeferson Dimate",
      role: "Auxiliar de Obra Civil",
      description:
        "Asisto en labores de construcción, preparación de materiales e instalación, apoyando al equipo técnico en cada proyecto.",
    },
    {
      image: "/images/auxFac.jpeg",
      name: "Angie Ruíz",
      role: "Auxiliar de Facturación",
      description:
        "Elaboro cotizaciones, cuentas de cobro y facturas, digitalizo documentos y aseguro que los registros contables sean precisos y actualizados.",
    },
  ];

  return (
    <div className="text-sm sm:text-base px-4 sm:px-8">
      <Navbar />

      <div className="relative w-full h-[500px] md:h-[645px] overflow-hidden">
        <Image
          src="/images/main.webp"
          alt="Imagen a mostrar"
          fill
          className="object-cover brightness-30"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20 md:pt-24">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl">
            "Expertos en construir, remodelar y transformar tus espacios con calidad y confianza"
          </h1>
          <p className="text-white text-base sm:text-lg mt-4 font-medium">
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

      <section className="mt-24 pt-0 pb-16 md:pb-6 font-sans">
        <div className="mx-auto max-w-3xl text-center px-4">
          <div className="flex items-center gap-4 pb-8">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
            <span className="text-gray-900 text-base sm:text-lg font-semibold tracking-wide uppercase">
              Empresa Colombiana
            </span>
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
          </div>

          <h2 className="pb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
            Quiénes somos
          </h2>

          <p className="text-gray-900 text-base leading-relaxed">
            Somos una empresa constructora de Bogotá con más de 10 años de trayectoria. Dedicada a la ejecución de obras integrales en construcción, remodelación y mantenimiento con mano de obra propia. Destacada por brindar asesoramiento y soluciones constructivas a sus clientes, buscando siempre ajustarse a las necesidades del mismo y garantizando siempre calidad, cumplimiento y excelencia. Nuestra experiencia y compromiso nos han convertido en un aliado confiable para transformar y mejorar todo tipo de espacios.
          </p>
        </div>

        <div className="mt-16 px-4">
          <Spotlight className="group mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            <InfoCard
              title="Misión"
              content="Construir estructuras de alta calidad que satisfagan las necesidades de nuestros clientes con responsabilidad, honestidad y cumplimiento..."
            />
            <InfoCard
              title="Visión"
              content="Posicionarnos como una empresa integral y referente en el sector de la construcción, destacándonos por la excelencia..."
            />
            <InfoCard
              title="Valores"
              content="Al ser una empresa familiar, fundamentamos nuestro trabajo en principios que nos distinguen. Actuamos con ética..."
            />
          </Spotlight>
        </div>
      </section>

      <div className="flex items-center justify-center gap-4 pb-8">
        <span className="h-0.5 w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
      </div>

      <section className="py-16 flex justify-center px-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
              Nuestro equipo de trabajo
            </h2>
            <p className="text-base sm:text-lg text-gray-900 mt-2">
              Conoce a los profesionales que hacen posible cada proyecto.
            </p>
          </div>

          <div className="flex flex-col gap-10 mt-10">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-6 p-6 rounded-xl shadow-lg bg-white transform transition duration-300 hover:scale-105`}
              >
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-blue-700 shadow-md relative flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="text-center md:text-left mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-base sm:text-lg text-gray-900 font-medium">{member.role}</p>
                  <p className="text-sm sm:text-base text-gray-900 mt-1">
                    {member.description}
                  </p>
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
