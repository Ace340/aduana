'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }
  return (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative shadow-xl rounded-md`}
  >
    <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
      <Link href="#inicio">
      <Image
        src="/logo.png"
        alt="logo"
        className="w-[160px] h-[90px] object-contain"
        width={160}
        height={90}
      />
      </Link>

      <div className="hidden sm:flex">
        <ul className="hidden sm:flex text-[#191716] barlow">
          <Link href="#about">
            <li className="ml-10 uppercase hover:border-b text-2xl">Nosotros</li>
          </Link>
          <Link href="#valor">
            <li className="ml-10 uppercase hover:border-b text-2xl">Valores</li>
          </Link>
          <Link href="#services">
            <li className="ml-10 uppercase hover:border-b text-2xl">Servicios</li>
          </Link>
          <Link href="#preguntas">
            <li className="ml-10 uppercase hover:border-b text-2xl">FAQ</li>
          </Link>
          <Link href="#contacto">
            <li className="ml-10 uppercase hover:border-b text-2xl">Contacto</li>
          </Link>
        </ul>
      </div>
      <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
        <Image
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
          width={24}
          height={24}
        />
      </div>
    </div>

    <div className={
      menuOpen
      ? "fixed top-0 left-0 w-[65%] sm:hidden z-[1000] h-screen bg-[#f08700] p-10 ease-in duration-500"
      : "fixed left-[-100%] top-0 p-10 ease-in duration-500 z-[1000]"
    }>
      <div className="flex w-full items-center justify-end">
        <div onClick={handleNav} className="cursor-pointer">
          <Image
            src="/close.png"
            alt="close"
            className="w-[24px] h-[24px] object-contain"
            width={24}
            height={24}
          />
        </div>
      </div>

      <div className="flex-col py-4">
        <ul className="text-black barlow">
          <Link href="#about">
            <li
             onClick={() => setMenuOpen(false)}
             className="py-4 cursor-pointer">
            Nosotros
            </li>
          </Link>
          <Link href="#valor">
            <li
             onClick={() => setMenuOpen(false)}
             className="py-4 cursor-pointer">
            Valores
            </li>
          </Link>
          <Link href="#servicios">
            <li
             onClick={() => setMenuOpen(false)}
             className="py-4 cursor-pointer">
            Servicios
            </li>
          </Link>
          <Link href="#preguntas">
            <li
             onClick={() => setMenuOpen(false)}
             className="py-4 cursor-pointer">
            FAQ
            </li>
          </Link>
          <Link href="#contacto">
            <li
             onClick={() => setMenuOpen(false)}
             className="py-4 cursor-pointer">
            Contacto
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex flex-row justify-around pt-10 items-center">
        <Link href="https://www.facebook.com/profile.php?id=100077358043590">
          <Image src="/facebook.png" alt="facebook" className="w-[24px] h-[24px] object-contain" width={24} height={24}/>
        </Link>
        <Link href="https://www.instagram.com/pangea_ve/">
          <Image src="/instagram2.png" alt="instagram" className="w-[24px] h-[24px] object-contain" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/company/pangeaworld/">
        <Image src="/linkedin.svg" alt="linkedin" className="w-[24px] h-[24px] object-contain" width={24} height={24} />
        </Link>
      </div>
      <Link href="#inicio">
      <Image
        src="/logo.png"
        alt="logo"
        className="w-[250px] h-[60px] object-contain pt-6"
        width={250}
        height={60}
      />
      </Link>
    </div>
  </motion.nav>
  )
};

export default Navbar;