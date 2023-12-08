import React from "react";
import Image from "next/image";
import css from "./AllModels.module.scss";
import Amulet from "../../public/amulet.webp";
import Elara from "../../public/elara.webp";
import Karry from "../../public/karry.webp";
import Link from "next/link";

export const Chery = () => {
  return (
    <div>
      <h1 className={css.title}>Chery</h1>
      <ul className={css.list}>
        <Link
          href={{
            pathname: `/models/Chery/Amulet`,
          }}
        >
          <li className={css.item}>
            <Image src={Amulet} width={200} height={200} alt="Chery Amulet" />
            <p>Amulet</p>
          </li>
        </Link>
        <li className={css.item}>
          <Image src={Elara} width={150} height={150} alt="Chery Amulet" />
          <p>Elara</p>
        </li>
        <li className={css.item}>
          <Image src={Karry} width={150} height={150} alt="Chery Amulet" />
          <p>Karry</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>Amulet</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>Amulet</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>Amulet</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>Amulet</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>Amulet</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>Amulet</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>Amulet</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>Amulet</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>Amulet</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>Amulet</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>Amulet</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>Amulet</p>
        </li>
        <li className={css.item}>
          <Image src={Amulet} width={150} height={150} alt="Chery Amulet" />
          <p>Amulet</p>
        </li>
      </ul>
    </div>
  );
};
