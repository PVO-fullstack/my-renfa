import React from "react";
import { Logo } from "../Logo/Logo";
import { Brand } from "../Brand/Brand";
import model from "@/data/model.json";
import Link from "next/link";
import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={style.conteiner}>
      <div className={style.nav}>
        <Logo className={style.logo} fill={"#fff"} footer={true} />
        <Link className={style.link} href="/form">
          Звернутися до нас
        </Link>
        <Link className={style.link} href="/contacts">
          Контакти
        </Link>
      </div>
      <p className={style.text}>@Сайт вироблено силами Renfa</p>

      <div className={style.brand}>
        <Brand model={model} />
      </div>
    </div>
  );
};
