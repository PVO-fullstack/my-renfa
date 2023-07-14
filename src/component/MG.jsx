import React from "react";
import Image from "next/image";
import css from "./AllModels.module.css";
import MG520 from "../../public/mg5.webp";
import MG350 from "../../public/350.webp";
import MG550 from "../../public/550.webp";
import MG6 from "../../public/6.webp";
import MG3 from "../../public/3.webp";
import MG5 from "../../public/5.webp";
import ZS from "../../public/ZS.webp";
import HS from "../../public/HS.webp";
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
            <Image src={MG350} width={200} height={200} alt="Chery Amulet" />
            <p>350</p>
          </li>
        </Link>
        <li className={css.item}>
          <Image src={MG550} width={200} height={200} alt="Chery Amulet" />
          <p>550</p>
        </li>
        <li className={css.item}>
          <Image src={MG6} width={200} height={200} alt="Chery Amulet" />
          <p>6</p>
        </li>
        <li className={css.item}>
          <Image src={MG3} width={200} height={200} alt="Chery Amulet" />
          <p>3Cross</p>
        </li>
        <li className={css.item}>
          <Image src={MG5} width={200} height={200} alt="Chery Amulet" />
          <p>5</p>
        </li>
        <li className={css.item}>
          <Image src={ZS} width={200} height={200} alt="Chery Amulet" />
          <p>ZS</p>
        </li>
        <Link
          href={{
            pathname: `/models/MG/HS`,
          }}
        >
          <li className={css.item}>
            <Image src={HS} width={200} height={200} alt="Chery Amulet" />
            <p>HS</p>
          </li>
        </Link>
        <li className={css.item}>
          <Image src={MG520} width={200} height={200} alt="Chery Amulet" />
          <p>5(2020)</p>
        </li>
      </ul>
    </div>
  );
};
