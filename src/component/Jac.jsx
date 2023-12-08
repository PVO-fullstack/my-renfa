import React from "react";
import Image from "next/image";
import css from "./AllModels.module.scss";
import Amulet from "../../public/amulet.webp";

export const Jac = () => {
  return (
    <div>
      <h1 className={css.title}>JAC</h1>
      <ul className={css.list}>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>J7</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>JS2</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>S3 New</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>S4</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>IEVS4</p>
        </li>
      </ul>
    </div>
  );
};
