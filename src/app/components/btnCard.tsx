import React from "react";
import styles from "./btnCard.module.css";

import fotoMallu from "../../../public/malluAbout.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ICardMenu = {
  title: string;
  srcImage: StaticImageData;
  linkTo: string
}

export function BtnCardMenu(props: ICardMenu) {
  return (
    <Link href={props.linkTo} className={styles.containerCard}>
      <p className={styles.titleCard}>{props.title}</p>
      <Image
        src={props.srcImage}
        alt={"imagem de fundo"}
        className={styles.bgImage}
      />
    </Link>
  );
}

export function BtnCardMenuBig(props: ICardMenu) {
  return (
    <Link href={props.linkTo} className={styles.containerCardBig}>
      <p className={styles.titleCard}>{props.title}</p>
      <Image
        src={props.srcImage}
        alt={"imagem de fundo"}
        className={styles.bgImageBig}
      />
    </Link>
  );
}
