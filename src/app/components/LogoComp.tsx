import React, { useState } from "react";
import Image from "next/image";

import LogoMallu from "../../../public/Logo_Mallu_W.png";
import LogoMalluBlack from "../../../public/Logo_Mallu_B.png";

export default function LogoComp() {
  return (
    <Image
      src={LogoMalluBlack}
      alt={"Logo de Mallu Fotografia"}
      width={50}
      height={50}
    />
  );
}
