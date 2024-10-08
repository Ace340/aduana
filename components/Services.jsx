"use client";

import { motion } from 'framer-motion';

import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import Image from 'next/image';


export const Services = () => {
  return (
    <section className={"sm:p-16 xs:p-8 px-6 py-6 relative z-10 justify-center"} id="services">
      <motion.div 
      variants={fadeIn('right', 'tween', 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`w-full sm:w-full mx-auto flex lg:flex-row flex-col gap-6 justify-center`}
      >
        
      <h1 className="text-[#191716] font-bebas font-bold text-center mb-4 text-[40px] uppercase">Servicios</h1>
      </motion.div>
      {/*Primer servicio*/}
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full sm:w-full mx-auto flex lg:flex-row flex-col gap-6 justify-center"
    >
      {/* First Service */}
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#F08700] relative"
      >
        <div className="flex flex-col items-center mt-4">
        <Image
          src="/contract.png"
          alt="tramites y consultas"
          className="object-contain rounded-xl ml-6"
          width={100}
          height={100}
        />
          <h3 className="font-bebas font-bold sm:text-[28px] text-[24px] sm:leading-[40.32px] leading-[36.32px] text-black text-center mt-4">
            IMPORT
          </h3>
        </div>
        <div className="text-black font-bebas uppercase">
            <h4 className="text-black mt-2 italic">
                IMPORTADOR FRECUENTE - PACK
            </h4>
            <ul className="list-disc mt-2 ml-2 barlow sm:text-[14px] text-[14px] text-black text-justify">
                <li>Agenciamiento de aduanas</li>
                <li>Aplicación de exenciones y exoneraciones</li>
                <li>Gestión de pagos y facturación</li>
                <li>Y mucho más</li>
            </ul>
        </div>
        <div className="text-black font-bebas uppercase">
            <h4 className="text-black mt-2 italic">
                NUEVO IMPORTADOR/RUBRO - PACK
            </h4>
            <ul className="list-disc mt-2 ml-2 barlow sm:text-[14px] text-[14px] text-black text-justify">
                <li>Agenciamiento de aduanas</li>
                <li>Aplicación de exenciones y exoneraciones</li>
                <li>Entrega de documento de nacionalización</li>
                <li>Y mucho más</li>
            </ul>
        </div>
        {/* <p className="mt-[24px] barlow sm:text-[24px] text-[20px] sm:leading-[45.6px] leading-[39.6px] text-black text-justify">
          Seguridad y experiencia en el proceso de importación, exportación y tránsito, más todo lo contemplado en la legislación.
        </p> */}
      </motion.div>

      {/* Second Service */}
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#F08700] relative"
      >
        <div className="flex flex-col items-center mt-4">
          <Image
            src="/global-shipping.png"
            alt="asesorias"
            className="ml-6 object-contain rounded-xl"
            width={100}
            height={100}
          />
          <h3 className="font-bebas font-bold sm:text-[28px] text-[24px] sm:leading-[40.32px] leading-[36.32px] text-black text-center mt-3">
            EXPORT
          </h3>
        </div>
        <div className="text-black font-bebas uppercase">
            <h4 className="text-black mt-2 italic">
                EXPORTADOR FRECUENTE - PACK
            </h4>
            <ul className="list-disc mt-2 ml-2 barlow sm:text-[14px] text-[14px] text-black text-justify">
                <li>Agenciamiento de aduanas</li>
                <li>Régimen aduanero aplicable</li>
                <li>Coordinación de transporte nacional</li>
                <li>Gestión de pagos y facturación</li>
                <li>Coordinación y gestió de documentos emitidos por la naviera o el agente de carga</li>
                <li>Gestión de almacen</li>
                <li>Contenerizació de mercancía</li>
            </ul>
        </div>
        {/* <p className="mt-[24px] barlow sm:text-[24px] text-[20px] sm:leading-[45.6px] leading-[39.6px] text-black text-justify">
          Contamos con especialistas en materia de logística, aduanas y asesoría comercial para encontrar la opción que más te beneficie.
        </p> */}
      </motion.div>

      {/* Third Service */}
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#F08700] relative"
      >
        <div className="flex flex-col items-center mt-4">
          <Image
            src="/globe.png"
            alt="transporte terrestre"
            className="ml-4 object-contain rounded-xl"
            width={100}
            height={100}
          />
          <h3 className="font-bebas font-bold sm:text-[28px] text-[24px] sm:leading-[40.32px] leading-[36.32px] text-black text-center mt-3">
            SOLUCIONES EMPRESARIALES
          </h3>
        </div>
        <div className="text-black font-bebas uppercase">
            <ul className="list-disc mt-2 ml-2 barlow sm:text-[14px] text-[14px] text-black text-justify">
                <li>Asesoría de exención - zonas, puertos, almacenes libres o francos</li>
                <li>Admisión temporal</li>
                <li>Admisión para perfeccionamiento</li>
                <li>Reposición de franquicia</li>
                <li>Draw Back</li>
                <li>Sustitución de mercancías</li>
                <li>Y mucho más</li>
            </ul>
        </div>
        {/* <p className="mt-[24px] barlow sm:text-[24px] text-[20px] sm:leading-[45.6px] leading-[39.6px] text-black text-justify">
          Movilizamos y cuidamos tu mercancía desde su partida hasta la entrega, monitoreando todo el recorrido.
        </p> */}
      </motion.div>
      {/* Fourth Service */}
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#F08700] relative"
      >
        <div className="flex flex-col items-center mt-4">
          <Image
            src="/signature.png"
            alt="transporte terrestre"
            className="ml-4 object-contain rounded-xl"
            width={100}
            height={100}
          />
          <h3 className="font-bebas font-bold sm:text-[28px] text-[24px] sm:leading-[40.32px] leading-[36.32px] text-black text-center mt-3">
            CONSULTORÍA
          </h3>
        </div>
        <div className="text-black font-bebas uppercase mt-2">
            <h4 className="text-black mt-1 italic">
                Prospección - PACK
            </h4>
            <ul className="list-disc mt-1 ml-2 barlow sm:text-[14px] text-[14px] text-black text-justify">
                <li>Elección del incoterm + Redacción de cláusula incoterm</li>
                <li>Clasificación arancelaria sugerida + Gestión de oficio de clasificación arancelaria</li>
                <li>Cotización de transporte internacional</li>
                <li>Y mucho más</li>
            </ul>
            <h4 className="text-black mt-1 italic">
                Básicos - servicios adicionales
            </h4>
            <ul className="list-disc mt-1 ml-2 barlow sm:text-[14px] text-[14px] text-black text-justify">
                <li>Clasificación arancelaria</li>
                <li>Redacción de contrato de compra internacional</li>
                <li>Gestión de oficio de valor</li>
                <li>Y mucho más</li>
            </ul>
        </div>
        {/* <p className="mt-[24px] barlow sm:text-[24px] text-[20px] sm:leading-[45.6px] leading-[39.6px] text-black text-justify">
          Movilizamos y cuidamos tu mercancía desde su partida hasta la entrega, monitoreando todo el recorrido.
        </p> */}
      </motion.div>
    </motion.div>
  </section>
  )
}

export default Services;
