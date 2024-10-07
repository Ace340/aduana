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
                        src="/banner1final.jpg"
                        alt="personal de pangea" 
                        fill // Ajusta el tamaño de la imagen al contenedor
                        style={{ 
                            objectFit: 'cover',
                            opacity: 1, // Ajusta la opacidad (1 es completamente opaco, 0 es completamente transparente)
                            filter: 'brightness(0.8)'
                         }} // Similar a `object-cover` en CSS
                        className="absolute inset-0 cover dark-overlay"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                        <div className="mb-4">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold uppercase bebas-neue text-gray-100">
                            Somos una empresa de comercio internacional que maximiza las ganancias de los negocios de nuestros clientes a través de operaciones planificadas
                            </h3>
                        </div>
                        <Link href="#contacto">
                            <button className="px-4 py-2 sm:px-4 sm:py-2 bg-[#f08700] rounded barlow uppercase">quiero comenzar</button>
                        </Link>
                    </div>
                </div>      

                {/*Item 2 */}
                <div className="relative h-full">
                    <Image 
                        src="/efecto3.jpg" 
                        alt="personal de aduana" 
                        fill // Ajusta el tamaño de la imagen al contenedor
                        style={{ 
                            objectFit: 'cover',
                            opacity: 1, // Ajusta la opacidad (1 es completamente opaco, 0 es completamente transparente)
                            filter: 'brightness(0.8)'
                         }} // Similar a `object-cover` en CSS
                        className="absolute inset-0"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                        <div className="mb-4">
                            <h4 className="text-xl sm:text-3xl md:text-4xl lg:text-3xl lg:text-center font-bold uppercase bebas-neue text-gray-100">
                            Cómo lo hacemos? a través de asesorías integrales, la búsqueda de las opciones logísticas mas beneficiosas de la mano de nuestros aliados comerciales y a través de la ejecución de las operaciones
                            </h4>
                        </div>
                        <Link href="#contacto">
                            <button className="px-4 py-2 sm:px-4 sm:py-2 bg-[#f08700] rounded barlow uppercase">Quiero conocer más</button>
                        </Link>
                    </div>
                </div> 

                {/*Item 3 */}
                <div className="relative h-full">
                    <Image 
                        src="/banner3final.jpg" 
                        alt="mujer atendiendo a cliente en oficina" 
                        fill // Ajusta el tamaño de la imagen al contenedor
                        style={{ 
                            objectFit: 'cover',
                            opacity: 1, // Ajusta la opacidad (1 es completamente opaco, 0 es completamente transparente)
                            filter: 'brightness(0.8)' }} // Similar a `object-cover` en CSS
                        className="absolute inset-0"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[50px] font-bold uppercase bebas-neue text-center text-gray-100">
                        Te acompañamos en el camino
                        </h2>
                    </div>
                </div>        
            </Carousel>
        </div>
    </section>
  );
}
