import React from "react";
import Image from "next/image";
import styles from './carousel.module.css'

import img3 from "../../../public/imgCapa3.webp";

export default function CarouselComp() {
  return (
    <div className={styles.containterCarousel}>
      <Image src={img3} alt={""} className={styles.ImgCarousel}/>
    </div>
  );
}
