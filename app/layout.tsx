import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./css/style.css";

// Fuentes de Google
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Fuente local
const nacelle = localFont({
  src: [
    { path: "../public/fonts/nacelle-regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/nacelle-italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/nacelle-semibold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/nacelle-semibolditalic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "CONSTRUCCIONES JM SAS",
  description: "Página de contacto para empresa de construcciones",
  icons: "/images/logoPestaña.png"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${nacelle.variable} bg-gray-100 font-sans text-base text-gray-900 antialiased`}>
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}

