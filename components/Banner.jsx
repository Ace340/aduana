"use client";

import { Carousel } from "flowbite-react";
import Link from "next/link";

export function Banner() {
  return (
    // <section className="sm:p-16 xs:p-8 px-6 relative max-h-screen mt-2" id="inicio">    
        <div className="h-80 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>
            {/*Item 1 */}
                <div>
                    <img src="/cargo.jpg" alt="cargo truck" />
                    <div className="absolute top-1/2 left-6 sm:left-10 md:left-1/2 transform md:-translate-x-1/2 text-center text-white">
                        <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bebas-neue">
                            menos impuestos, más ganancias
                        </h1>
                        <Link href="#contacto">
                            <button className="px-4 py-2 bg-[#f08700] rounded barlow uppercase">quiero comenzar</button>
                        </Link>
                    </div>
                </div>      
                {/*Item 2 */}
                <div>
                    <img src="/personal.jpg" alt="personal de aduana" />
                    <div className="absolute top-1/2 left-6 sm:left-10 md:left-1/2 transform md:-translate-x-1/2 text-center text-white">
                        <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bebas-neue">
                        te acompañamos en el camino
                        </h1>
                        <Link href="#contacto">
                        <button className="px-4 py-2 bg-[#f08700] rounded barlow uppercase">Quiero conocer más</button>
                        </Link>
                    </div>
                </div> 
                {/*Item 3 */}
                <div>
                    <img src="/truck.jpg" alt="camion" />
                    <div className="absolute top-[35%] left-6 sm:left-10 md:left-1/2 transform md:-translate-x-1/2 text-center text-white">
                        <h3 className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase bebas-neue">
                        el desconocimiento en leyes de aduana no tiene que significar decisiones o gastos improvisados para tu negocio. nuestro propósito es aumentar tus ganancias al menor costo, ofreciendo transparencia y la mejor planificación posible que tu empresa necesite
                        </h3>
                    </div>
                </div>        
            </Carousel>
        </div>
    // </section>
  );
}
