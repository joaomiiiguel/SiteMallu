import Image from "next/image";
import React from "react";
import styles from "./MenuGrid.module.css";

import { BtnCardMenu, BtnCardMenuBig } from "./btnCard";

import fotoMallu from "../../../public/malluAbout.webp";
import fotopartos from "../../../public/partos.webp";
import fotofeminino from "../../../public/feminino.webp";
import fotocasais from "../../../public/casais.webp";
import fotoblog from "../../../public/blog.webp";

export default function MenuGrid() {
  return (
    <div className={styles.containerAbout}>
      <div className={styles.columnMenu}>
        <div className={styles.rowMenu}>
          <BtnCardMenu title={'Sobre Mim'} srcImage={fotoMallu} linkTo={"/sobremim"} />
          <BtnCardMenu title={'Partos'} srcImage={fotopartos} linkTo={"/servicos"} />
        </div>
        <BtnCardMenuBig title={"Casais"} srcImage={fotocasais} linkTo={"/servicos"} />
      </div>
      <div className={styles.columnMenu}>
        <BtnCardMenuBig title={"Femininos"} srcImage={fotofeminino} linkTo={"/servicos"} />
        <div className={styles.rowMenu}>
          <BtnCardMenu srcImage={fotoblog} title={"Blog"} linkTo={"/blog"} />
          <BtnCardMenu srcImage={fotoMallu} title={"Contato"} linkTo={"/contato"} />
        </div>
      </div>
    </div>
  );
}
