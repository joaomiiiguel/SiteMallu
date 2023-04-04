import Image from "next/image";
import { Roboto } from "next/font/google";
import styles from "./styles.module.css";

import Casal1 from '../../../public/imgCapa2.webp'

export default function Depoimentos() {
  return (
    <main className={styles.container}>
      <div>
        <h1>Depoimentos</h1>
      </div>
      <div className={styles.CardDepo}>
        <Image
          src={Casal1}
          alt="Perfil de Mallu"
          className={styles.CapaDepo}
        />
        <div className={styles.contentCasal}>
          <h1>Casal x Casal</h1>
          <p>

            We started off as best friends, to then band mates, to then falling
            in love at university, while both studying Photography for Fashion &
            Advertising, to now newly-weds 10 years later! We love everything
            about what we do and we know we are so lucky to get to work
            alongside each other, as husband and wife and best friends,
            capturing weddings all across the world. Being a couple ourselves,
            it came so naturally to us, being able to capture each 
            unique love for each other. We are adventurers at heart, and when we
            arent taking photos or videoing your weddings, youll find us
            somewhere in Wales in our camper-van, with our surfboards, looking
            for waves!
          </p>
        </div>
      </div>
    </main>
  );
}
