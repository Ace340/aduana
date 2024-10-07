"use client"

import React from 'react'

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

import { Accordion } from "flowbite-react";

const Preguntas = () => {
  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10 flex justify-center items-center min-h-screen`} id="preguntas">
        <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto lg:flex-row flex-col items-center justify-center gap-8`}
        >
            <h1 className="text-[#191716] font-bebas font-bold text-center mb-4 text-[40px] uppercase">Preguntas Frecuentes</h1>
            <Accordion className="w-full border-[1px] border-[#F08700]">
                <Accordion.Panel>
                    <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold"> ¿Qué documentos necesito para poder importar?</Accordion.Title>
                    <Accordion.Content className="border-[1px] border-[#F08700] text-gray-950">
                    <p className="mb-2 text-gray-950 dark:text-gray-400 font-bold">
                        Exigidos por ley:
                        </p>
                        <ul className="mb-2 dark:text-gray-400 text-gray-950 list-disc ml-4">
                            <li>Declaración de Aduanas.</li>
                            <li>Factura Comercial.</li>
                            <li>Documento de embarque.</li>
                            <li>Otros documentos exigibles por ley, en caso de aplicar.</li>
                        </ul>
                        <p className="mb-2 text-gray-950 dark:text-gray-400 font-bold">
                        Información complementaria:
                        </p>
                        <ul className="mb-2 text-gray-950 dark:text-gray-400 list-disc ml-4">
                            <li>Packing list</li>
                            <li>Proformas (en caso de existir)</li>
                            <li>Ficha técnica del producto con análisis de composición 0-100%, traducido al español.</li>
                            <li>CCertificado de origen, en caso de aplicar</li>
                            <li>Declaración de exportación.</li>
                            <li>Certificado de pago de flete.</li>
                            <li>Comprobante de pago de facturas comerciales definitivas.</li>
                        </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">Precio de los servicios</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Los precios pueden variar según el servicio.
                        </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">¿Cuentan con servicio de traslado de mercancía?</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Si, se encuentra dentro de nuestro catálogo de servicios.
                        </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">¿En cuáles puertos y aeropuertos prestan servicio?</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Actualmente prestamos servicio en:
                        </p>
                        <ul className="text-gray-950 list-disc ml-4">
                            <li>La Guaira.</li>
                            <li> Maiquetía.</li>
                            <li>Puerto Cabello.</li>
                            <li>Valencia.</li>
                        </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">¿Cómo puedo asegurarme de que mi mercancía llegue a destino de forma segura?</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Contratar un seguro de flete internacional, nosotros hacemos la gestión.
                        </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold"> ¿Ofrecen algún tipo de asesoría para evitar problemas aduaneros?</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Si, nosotros te asesoramos y acompañamos en todo el proceso de importación/exportación y preparamos
                        con anticipación la documentación, traza de pagos y abordamos con anticipación todos los trámites a fin
                        de que la operación sea lo más eficaz posible.
                        </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">¿Cuál es el tiempo promedio que tarda una carga en llegar a puerto?</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Dubai 60 dias, Estados Unidos 15 dias, España 30 dias, Brasil 20 dias, Panama 5 dias, Colombia 2 dias, Ecuador 20
                        dias, China 45 dias.</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">¿En cuanto tiempo hacen los trámites en aduana?</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Los trámites en aduana los realizamos de 2 a 3 días, desde que el almacén localiza la mercancía (este proceso puede tardar de 1 a 2 días).</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">¿Qué mercancía es recomendable traer por avión y cual por barco?</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Avión: Mercancía sujeta a urgencia, medicamentos, mercancía sujeta a cadena de frio, mercancía delicada, mercancía de alto valor.<br /> Barco: Carga general.</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">¿Ustedes valoran la mercancía?</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Sí, nosotros hacemos una preliquidación aduanera y tramitamos el oficio de valoración aduanera emitido por el seniat, de ser requerido por el cliente.</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">¿Cuánto tiempo tarda la mercancía en llegar a mi almacén?</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Al día siguiente de finalizado el proceso de nacionalización y si el almacén se encuentra cerca del puerto o aeropuerto, incluso el mismo día.</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">¿Ustedes gestionan el flete internacional?</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Sí, buscamos opciones de transporte internacional para elección de los clientes.</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">¿Ustedes gestionan los permisos necesarios?</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Sí, hacemos la gestión ante los organismos correspondientes.</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">¿Qué documentos necesito para poder exportar?</Accordion.Title>
                        <Accordion.Content>
                            <ul className="text-gray-950 list-disc ml-4">
                                <li>Declaración de aduanas.</li>
                                <li>Factura.</li>
                                <li>Documento de embarque o guía aérea.</li>
                                <li>Los exigibles legalmente a dichos fines, según el tipo de mercancía de que se trate.</li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">Nosotros como clientes ¿podemos estar en un reconocimiento?</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Sí, pueden estar presentes sin ningún problema.</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">En un solo contenedor ¿se puede traer mercancía de más de un proveedor?</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Sí, se trataría de carga LCL (carga consolidada).</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">Si mi carga no llena un contenedor ¿puedo realizar una importación?</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Si, se trataría de carga LCL (carga consolidada).</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-[#F08700] uppercase font-bebas text-gray-950 font-bold">¿Qué los diferencia de otro agente de aduanas?</Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-950 dark:text-gray-400">
                        Nosotros ofrecemos seguridad en la operación a través del seguimiento y asesoría continua desde el principio hasta el final, entregamos una estimación de gastos con asertividad de 99%, que sirve a ustedes como estructura de costes. En esa estimación estarían todos los gastos contemplados en la operación, tanto impuestos como gastos portuarios y de permisos.</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    </Accordion>
        </motion.div>
    </section>
  )
}

export default Preguntas