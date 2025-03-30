import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Spotlight from "@/components/spotlight";

interface InfoCardProps {
  title: string;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => (
  <div className="relative h-full overflow-hidden rounded-2xl bg-white p-6 border border-gray-300 shadow-md">
    <div className="mb-3">
      <span className="btn-sm relative rounded-full bg-gray-100 px-3 py-1 text-base font-semibold hover:bg-gray-200">
        <span className="bg-gradient-to-r from-indigo-500 to-blue-200 bg-clip-text text-transparent">
          {title}
        </span>
      </span>
    </div>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default function Page() {
  return (
    <div>
      <Navbar />

      <div className="relative w-full h-[500px] md:h-[630px] overflow-hidden">
        <Image
        src="/images/main.webp"
        layout="fill"
        objectFit="cover"
        alt="Imagen a mostrar"
        className="brightness-30"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          "Expertos en construir, remodelar y transformar tus espacios con calidad y confianza"
        </h1>
        <p className="text-white text-lg md:text-xl mt-4 font-medium">
          Empresa de construcción
        </p>
        <a 
          href="/contacto"
          className="mt-6 bg-gray-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
        >
          Contáctanos Hoy
        </a>
      </div>
    </div>

    <section className="mt-16 pt-0 pb-12 md:pb-0 font-sans">
      <div className="mt-16 pt-0 pb-12 md:pb-20">
        <div className="pb-12 md:pb-20">
          {/* Section quienes somos */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-10">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-blue-400/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-blue-400/50">
              <span className="inline-flex text-gray-900 text-lg font-medium">
                Empresa colombiana
              </span>
            </div>

            <h2 className="pb-4 text-3xl font-bold text-blue-700 md:text-4xl">
              Quiénes somos
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
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


      <Footer />
    </div>
  );
}
