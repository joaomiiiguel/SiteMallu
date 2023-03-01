import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import LogoComp from "./LogoComp";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.logoFooter}>
        <LogoComp />
        <div>
          <p style={{ fontSize: 10 }}>Redes Sociais:</p>
          <Link href="https://www.instagram.com/mallufotografia/" target="_blank">
            <FaInstagram size={30} />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=5583987604045&text=Olá%20Mallu,%20quero%20saber%20dos%20valores%20para%20fazer%20um%20ensaio%20fotográfico." target="_blank" style={{marginLeft:10}}>
            <FaWhatsapp size={30} />
          </Link>
        </div>
      </div>
      <p className={styles.textCopyright}>2023 COPYRIGHT MALLU TRIGUEIRO</p>
    </div>
  );
}
