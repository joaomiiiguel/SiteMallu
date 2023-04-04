import Image from "next/image";
import { Roboto } from "next/font/google";
import styles from "./styles.module.css";

import MalluCor from "../../../public/malluCor.webp";

export default function SobreMim() {
  return (
    <main className={styles.container}>
      <Image
        src={MalluCor}
        alt="Perfil de Mallu"
        className={styles.ImagePerfil}
      />
      <div className={styles.contentAbout}>
        <h1>Sobre Mim</h1>
        <p>
          Welcome to The Wild Bride, by husband & wife duo, Jon James & Emilie
          Layla Lovaine-James. Born & raised off the coast of Wales, we travel
          wherever our wild brides and grooms take us, shooting weddings across
          the globe, capturing love in its most natural form. 
          <br/>
          <br/>
          We started off as best friends, to then band mates, to then falling in love at
          university, while both studying Photography for Fashion & Advertising,
          to now newly-weds 10 years later! We love everything about what we do
          and we know we are so lucky to get to work alongside each other, as
          husband and wife and best friends, capturing weddings all across the
          world. Being a couple ourselves, it came so naturally to us, being
          able to capture each couples unique love for each other. We are
          adventurers at heart, and when we arent taking photos or videoing
          your weddings, youll find us somewhere in Wales in our camper-van,
          with our surfboards, looking for waves!
        </p>
      </div>
    </main>
  );
}
