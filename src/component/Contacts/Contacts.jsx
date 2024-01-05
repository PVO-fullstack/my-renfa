import React from "react";
import style from "./Contacts.module.scss";
import { Viber } from "../Svg/Viber";
import { Telegram } from "../Svg/Telegram";
import Link from "next/link";

export const Contacts = () => {
  return (
    <div className={style.conteiner}>
      <div className={style.text_conteiner}>
        <h1 className={style.title}>Наші координати:</h1>
        <div className={style.adress}>
          <div className={style.block}>
            <p>Адреса:</p>
            <p>вул. Кільцева 4Б, Київ, Україна</p>
          </div>
          <div className={style.block}>
            <p>Телефон:</p>
            <p>
              +380 (93) 912-32-21
              <br /> +380 (97) 793-44-88
              <br /> +380 (95) 598-76-83
            </p>
          </div>
          <div className={style.block}>
            <p>Електронна пошта:</p>
            <p>renfa@ukr.net</p>
          </div>
          <div className={style.block}>
            <p>Viber:</p>
            <p>
              <Link
                className={style.link}
                href="viber://chat?number=%2B380939123221"
              >
                т. 8(093)9123221
              </Link>
            </p>
          </div>
          <div className={style.block}>
            <p>Telegram:</p>
            <p>
              <Link className={style.link} href="https://t.me/RenfaShop">
                Магазин Renfa
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
