import React from "react";
import Image from "next/image";
import css from "./AllModels.module.css";
import Amulet from "../../public/amulet.webp";

export const Geely = () => {
  return (
    <div>
      <h1 className={css.title}>Geely</h1>
      <ul className={css.list}>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>CK</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>MK</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>EMGRAND EC-7</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>EMGRAND EC-8</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>EMGRAND EX-7</p>
        </li>
      </ul>
    </div>
  );
};
