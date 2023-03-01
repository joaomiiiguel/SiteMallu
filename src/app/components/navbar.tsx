import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

import LogoMallu from "../../../public/Logo_Mallu_B.png";

export default function Navbar() {
  return (
    <div className={styles.ContainerNavbar}>
      <Image src={LogoMallu} alt={"Logo de Mallu"} width={50} />
      <div className={styles.menuLinks}>
        <Link className={styles.btnNavbar} href={"#"}>HOME</Link>
        <Link className={styles.btnNavbar} href={"/sobremim"}>SOBRE MIM</Link>
        <Link className={styles.btnNavbar} href={"/depoimentos"}>DEPOIMENTOS</Link>
        <Link className={styles.btnNavbar} href={"/servicos"}>SERVIÇOS</Link>
        <Link className={styles.btnNavbar} href={"/contato"}>CONTATO</Link>
      </div>
    </div>
  );
}
