import { Bebas_Neue } from "next/font/google";
import { Barlow } from "next/font/google";
import "./globals.css";

const bebas_neue_init = Bebas_Neue({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-bebas',
});

const barlow_init = Barlow({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-barlow',
});

export const metadata = {
  title: "Pangea",
  description: "Agencia aduanal con mejores precios, transparencia y la mejor planificacion posible que tu proyecto necesita.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas_neue_init.className} ${barlow_init.className}`}>{children}</body>
    </html>
  );
}
