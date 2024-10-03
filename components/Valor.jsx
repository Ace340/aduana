"use client";

import React from 'react';


import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

import { Card } from "flowbite-react";
import Image from "next/image";

const Valor = () => {
  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10 justify-center items-center min-h-screen`} id="valor">        
        <h1 className="text-[#191716] font-bebas font-bold text-center mb-4 text-[40px] uppercase">Valor Agregado</h1>
        <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col items-center justify-center gap-8`}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Primer Valor */}
                <Card
                className="max-w-sm"
                renderImage={() => <Image width={500} height={500} src="/atencion.jpg" alt="image 1" />}
                >
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase font-bebas">
                        Atención personalizada
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 font-bebas text-justify">
                    Te asignaremos un ejecutivo de cuentas dedicado que estará a su disposición para atender todas sus necesidades, para informarle de todos los cambios de estatus, y recordarle de manera oportuna realizar los pagos de todos los trámites necesarios.
                    </p>
                </Card>

                {/* Segundo Valor */}
                <Card
                className="max-w-sm"
                renderImage={() => <Image width={500} height={500} src="/acompanamiento.jpg" alt="image 1" />}
                >
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase font-bebas mt-[-15%]">
                    Acompañamiento en cada fase del proceso
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 font-bebas text-justify">
                    Le acompañaremos en cada paso del proceso aduanero, desde la planificación hasta la finalización.
                    </p>
                </Card>

                {/* Tercer Valor */}
                <Card
                className="max-w-sm"
                renderImage={() => <Image width={500} height={500} src="/mercado.jpg" alt="image 1" />}
                >
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase font-bebas mt-6">
                    Prospección de mercado 
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 font-bebas text-justify">
                    Con un 99% de certeza, le ayudamos a identificar oportunidades de negocio en el mercado internacional, evaluamos y catalogamos la mercancía que desea importar o exportar, presupuestamos y detallamos los gastos en trámites y aranceles así como las exoneraciones y exenciones aplicables a su mercancía.
                    </p>
                </Card>

                {/* Cuarto Valor */}
                <Card
                className="max-w-sm"
                renderImage={() => <Image width={500} height={500} src="/finanza.jpg" alt="image 1" />}
                >
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase font-bebas mt-2">
                    Entrega de memoria financiera
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 font-bebas text-justify">
                    Le proporcionamos un análisis financiero detallado con todos los gastos asociados a su operación una vez haya concluido la misma.
                    </p>
                </Card>

                {/* Quinto Valor */}
                <Card
                className="max-w-sm"
                renderImage={() => <Image width={500} height={500} src="/compromiso.jpg" alt="image 1" />}
                >
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase font-bebas mt-[-15%]">
                    Compromiso con el cliente
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 font-bebas text-justify">
                    Su satisfacción es nuestra prioridad.
                    </p>
                </Card>

                {/* Sexto Valor */}
                <Card
                className="max-w-sm"
                renderImage={() => <Image width={500} height={500} src="/seguridad.jpg" alt="image 1" />}
                >
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase font-bebas">
                    Seguridad en la importación
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 font-bebas text-justify">
                    Garantizamos la seguridad del proceso y de tu mercancía a través de actualizaciones periódicas.
                    </p>
                </Card>
            </div>
        </motion.div>
    </section>
  )
}

export default Valor