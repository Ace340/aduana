'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import Link from 'next/link';
import { socials } from '../constants';
import Image from 'next/image';

const World = () => (
  <section className={`${styles.paddings} relative z-10 mt-4`} id="contacto">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center justify-center min-h-screen mt-4`}
    >      
    <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="w-full sm:w-full mx-auto flex lg:flex-row flex-col gap-6 justify-center items-center"
      >
      <h1 className="text-[#191716] font-bebas font-bold text-center mb-1 text-[40px] sm:text-[60px] xs:text-[40px] uppercase">Contáctanos</h1>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px] justify-center items-center"
      >
        <Image 
          src="/map.png" 
          alt="map" 
          fill // Hace que la imagen cubra todo el contenedor
          style={{
            objectFit: 'cover', // Similar a `object-cover` en CSS
            filter: 'brightness(50%)', // Aplica el filtro de brillo
          }}
        />

        <div className="absolute w-[90%] max-w-[450px] h-[280px] bg-[#F08700] rounded-lg p-6 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            <ul className="barlow space-y-4 w-full">
                <li className="text-[#191716] text-xl flex items-center w-full break-words">
                    <Image src="/location.png" alt="location" className="object-contain w-[30px] h-[30px] mr-2" width={30} height={30} />
                    Caracas, Venezuela
                </li>
                <li className="text-[#191716] text-xl flex items-center w-full break-words">
                    <Image src="/telephone.png" alt="telephone" className="object-contain w-[30px] h-[30px] mr-2" width={30} height={30} />
                    +58 (424) 2864203 / +58 (424) 2688839
                </li>
                <li className="text-[#191716] text-l sm:text-xl flex items-center w-full break-words">
                    <Image src="/mail.png" alt="email" className="object-contain w-[30px] h-[30px] mr-2" width={30} height={30} />
                    <Link href="mailto:contacto@pangea.com.ve" className="text-[#191716] hover:text-[#0078d4]">
                        contacto@pangea.com.ve
                    </Link>
                </li>
            </ul>
            <div className="flex gap-6 mt-4">
              {socials.map((social) => (
                <a key={social.name} href={social.redsocial} target="_blank" rel="noreferrer">
                  <Image
                    src={social.url}
                    alt={social.name}
                    className="w-[30px] h-[30px] object-contain cursor-pointer"
                    width={30} 
                    height={30}
                  />
                </a>
              ))}
            </div>
        </div>
      </motion.div>
    </motion.div>
  </section>

);

export default World;