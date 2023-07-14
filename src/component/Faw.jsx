import React from "react";
import Image from "next/image";
import css from "./AllModels.module.css";
import Amulet from "../../public/amulet.webp";

export const Faw = () => {
  return (
    <div className={css.brand}>
      <h1 className={css.title}>FAW</h1>
      <ul className={css.list}>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>B30</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>X40</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>X80</p>
        </li>
      </ul>
    </div>
  );
};
