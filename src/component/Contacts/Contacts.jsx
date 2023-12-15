import React from "react";
import style from "./Contacts.module.scss";
import { Viber } from "../Svg/Viber";
import { Telegram } from "../Svg/Telegram";
import Link from "next/link";

export const Contacts = () => {
  return (
    <div className={style.conteiner}>
      <p>Наші координати:</p>
      <p>м. Київ, вул. Велика Кільцева, 4Б,</p>
      <p>магазин запчастин (MG, FAW, JAC, Chery, Geely)</p>
      <p>т. 8(097)7934488</p>
      <p>т. 8(095)5987683</p>
      <p>
        <Link className={style.link} href="viber://chat?number=%2B380939123221">
          <Viber />
          т. 8(093)9123221
        </Link>
      </p>
      <p>
        <Link className={style.link} href="https://t.me/RenfaShop">
          <Telegram />
          Магазин Renfa
        </Link>
      </p>
      <p>http://renfa.com.ua/</p>
    </div>
  );
};
