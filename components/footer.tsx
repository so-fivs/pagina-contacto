import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="relative bg-white text-gray-900 font-sans">
      {/* Gradiente superior */}
      <div className="border-t py-1 [border-image:linear-gradient(to_right,transparent,rgba(148,163,184,0.25),transparent)1]"></div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Imagen de fondo */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
          >
        </div>

        <div className="py-6">
          {/* Información de contacto */}
          <div className="flex justify-center items-center mb-6">
            <div className="text-center text-gray-700">
              <p>
                <strong>Dirección: </strong> 
                <a href="https://maps.app.goo.gl/W6ejHfUp3CjL62Aq8" className="hover:underline">
                  Calle 6D #2-11 este, Bogotá D.C., Colombia
                </a>
              </p>
              <p>
                <strong>Contacto: </strong> 
                <a href="mailto:construmanuel@live.com" className="hover:underline">
                  construmanuel@live.com
                </a>
              </p>
              <p>
                <strong>Teléfono: </strong> 601 4964813
              </p>
            </div>
          </div>

          {/* Derechos reservados */}
          <div className="flex justify-center items-center mb-6">
            <div className="text-center text-gray-600 text-sm">
              © 2025 Todos los derechos Reservados
            </div>
          </div>

          {/* Iconos de redes sociales */}
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-500 text-2xl" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-blue-400 text-2xl" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-700 text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
