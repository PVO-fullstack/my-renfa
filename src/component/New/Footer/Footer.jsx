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
        <Logo fill={"#fff"} width={"46"} height={"46"} footer={true} />
        <div className={style.brand}>
          <Brand model={model} />
          <Link className={style.link} href="/contacts">
            Contacts
          </Link>
        </div>
        <Link className={style.text} href="/form">
          Звернутися до нас
        </Link>
      </div>
      <p className={style.text}>@Сайт вироблено силами Renfa</p>
    </div>
  );
};
