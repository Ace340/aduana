import About from "@/components/About";
import { Banner } from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Whatsapp from "@/components/Whatsapp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col justify-between p-5 fondo-color">
      <Navbar />
      <Banner />
      <Whatsapp />
      <About />
      <Services />
    </main>
  );
}
