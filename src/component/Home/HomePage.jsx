import React from "react";
import style from "./HomePage.module.scss";
import Image from "next/image";
import { FilterItem } from "../New/FilterItem/FilterItem";

export const HomePage = () => {
  return (
    <div className={style.conteiner}>
      <p className={style.title}>Запчастини до китайських авто.</p>
      <p className={style.text}>Великий асортимент.</p>
      <p className={style.order}>
        Можливе замовлення запчастин <br /> з Китаю.
      </p>
      <div
        className={style.img}
        src="/hero.webp"
        width={1286}
        height={419}
        alt="parts"
      ></div>
      {/* <FilterItem /> */}
    </div>
  );
};
