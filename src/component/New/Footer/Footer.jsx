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
        <Logo fill={"#fff"} />
        <div className={style.link}>
          <Brand model={model} />
          <Link className={style.link} href="/contacts">
            Contacts
          </Link>
        </div>
        <p className={style.text}>Звернутися до нас</p>
      </div>
      <p className={style.text}>@Сайт вироблено силами Renfa</p>
    </div>
  );
};
