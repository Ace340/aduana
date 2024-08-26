"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export function Banner() {
  return (
    <section className="sm:p-16 xs:p-8 px-6 relative max-h-screen mt-2 mb-6" id="inicio">    
        <div className="h-[30rem] sm:h-[32rem] md:h-[36rem] lg:h-[40rem] xl:h-[44rem] mt-4">
            <Carousel slideInterval={5000}>
                {/*Item 1 */}
                <div className="relative h-full">
                    <Image 
                        src="/cargo.jpg"
                        alt="cargo truck" 
                        fill // Ajusta el tamaño de la imagen al contenedor
                        style={{ 
                            objectFit: 'cover',
                            opacity: 0.7, // Ajusta la opacidad (1 es completamente opaco, 0 es completamente transparente)
                            filter: 'brightness(0.8)'
                         }} // Similar a `object-cover` en CSS
                        className="absolute inset-0 cover dark-overlay"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                        <div className="mb-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bebas-neue">
                                menos impuestos, más ganancias
                            </h1>
                        </div>
                        <Link href="#contacto">
                            <button className="px-4 py-2 sm:px-4 sm:py-2 bg-[#f08700] rounded barlow uppercase">quiero comenzar</button>
                        </Link>
                    </div>
                </div>      

                {/*Item 2 */}
                <div className="relative h-full">
                    <Image 
                        src="/personal.jpg" 
                        alt="personal de aduana" 
                        fill // Ajusta el tamaño de la imagen al contenedor
                        style={{ 
                            objectFit: 'cover',
                            opacity: 0.7, // Ajusta la opacidad (1 es completamente opaco, 0 es completamente transparente)
                            filter: 'brightness(0.8)'
                         }} // Similar a `object-cover` en CSS
                        className="absolute inset-0"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                        <div className="mb-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase bebas-neue">
                                te acompañamos en el camino
                            </h1>
                        </div>
                        <Link href="#contacto">
                            <button className="px-4 py-2 sm:px-4 sm:py-2 bg-[#f08700] rounded barlow uppercase">Quiero conocer más</button>
                        </Link>
                    </div>
                </div> 

                {/*Item 3 */}
                <div className="relative h-full">
                    <Image 
                        src="/truck.jpg" 
                        alt="camion" 
                        fill // Ajusta el tamaño de la imagen al contenedor
                        style={{ 
                            objectFit: 'cover',
                            opacity: 0.7, // Ajusta la opacidad (1 es completamente opaco, 0 es completamente transparente)
                            filter: 'brightness(0.8)' }} // Similar a `object-cover` en CSS
                        className="absolute inset-0"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase bebas-neue text-center">
                            el desconocimiento en leyes de aduana no tiene que significar decisiones o gastos improvisados para tu negocio. nuestro propósito es aumentar tus ganancias al menor costo, ofreciendo transparencia y la mejor planificación posible que tu empresa necesite
                        </h3>
                    </div>
                </div>        
            </Carousel>
        </div>
    </section>
  );
}
