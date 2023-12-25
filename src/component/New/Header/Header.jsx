import React from "react";
import { Logo } from "../Logo/Logo";
import { FindInput } from "../FindInput/FindInput";
import style from "./Header.module.scss";
import Link from "next/link";
import { Avatar } from "../Avatar/Avatar";
import { AskMe } from "../AskMe/AskMe";
import { Cart } from "../Cart/Cart";
import model from "@/data/model.json";
import { Brand } from "../Brand/Brand";

export const Header = () => {
  return (
    <div className={style.conteiner}>
      <div className={style.header_part_up}>
        <Logo />
        <FindInput />
        <div className={style.user_menu}>
          <Avatar />
          <AskMe />
          <Cart />
        </div>
      </div>
      <div className={style.header_part_down}>
        <Brand model={model} />
        <div>
          <Link className={style.link} href="/contacts">
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};
