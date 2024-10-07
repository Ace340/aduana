"use client";

import { nosotros } from "../constants";
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import Image from "next/image";

function About() {
  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10 flex justify-center items-center min-h-screen`} id="about">
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col items-center justify-center gap-8`}
        >
            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] flex flex-col items-center justify-center text-center"
            >
                {/* Text on the right side */}
                <h1 className="text-[40px] text-[#191716] font-bold font-bebas uppercase">Nosotros</h1>
                <div className="mt-[31px] mb-4 text-[#191716] flex flex-col text-xl max-w gap-[24px] pr-5 xl:text-center">
                    {nosotros}
                </div>
                <div className="w-full flex justify-center">
                    <video 
                        src="/videopangea.mp4"
                        alt="video operaciones"
                        autoPlay
                        controls
                        loop
                        className="w-full h-[80vh] m-0 aspect-auto rounded-lg" // Increased height
                    />
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default About;
