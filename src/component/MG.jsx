import React from "react";
import Image from "next/image";
import css from "./AllModels.module.css";
// import MG520 from "/mg5.webp";
// import MG350 from "/350.webp";
// import MG550 from "/550.webp";
// import MG6 from "/6.webp";
// import MG3 from "/3.webp";
// import MG5 from "/5.webp";
// import ZS from "/ZS.webp";
// import HS from "/HS.webp";
import Link from "next/link";

export const MG = () => {
  return (
    <div>
      <h1 className={css.title}>MG</h1>
      <ul className={css.list}>
        <Link
          href={{
            pathname: `/models/MG/350`,
          }}
        >
          <li className={css.item}>
            <Image
              src="/350.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p>350</p>
          </li>
        </Link>
        <li className={css.item}>
          <Image src="/550.webp" width={200} height={200} alt="Chery Amulet" />
          <p>550</p>
        </li>
        <li className={css.item}>
          <Image src="/6.webp" width={200} height={200} alt="Chery Amulet" />
          <p>6</p>
        </li>
        <li className={css.item}>
          <Image src="/3.webp" width={200} height={200} alt="Chery Amulet" />
          <p>3Cross</p>
        </li>
        <li className={css.item}>
          <Image src="/5.webp" width={200} height={200} alt="Chery Amulet" />
          <p>5</p>
        </li>
        <li className={css.item}>
          <Image src="/ZS.webp" width={200} height={200} alt="Chery Amulet" />
          <p>ZS</p>
        </li>
        <Link
          href={{
            pathname: `/models/MG/HS`,
          }}
        >
          <li className={css.item}>
            <Image src="/HS.webp" width={200} height={200} alt="Chery Amulet" />
            <p>HS</p>
          </li>
        </Link>
        <li className={css.item}>
          <Image src="/mg5.webp" width={200} height={200} alt="Chery Amulet" />
          <p>5(2020)</p>
        </li>
      </ul>
    </div>
  );
};
