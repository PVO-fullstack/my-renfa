import React from "react";
import css from "./BurgerMenu.module.scss";
import NavLink from "next/link";
import { UserMenu } from "../UserMenu";
import { Viber } from "../Svg/Viber";
import { Telegram } from "../Svg/Telegram";

export const BurgerMenu = ({ show, handleClose }) => {
  return (
    <>
      {show && (
        <div className={css.overlay}>
          <div className={css.modal}>
            <div onClick={handleClose} className={css.close}></div>
            <ul className={css.link_list}>
              <li>
                <NavLink onClick={handleClose} className={css.link} href="/">
                  На головну
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleClose}
                  className={css.link}
                  href="/model"
                >
                  Модельний ряд
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleClose}
                  className={css.link}
                  href="/contacts"
                >
                  Контакти
                </NavLink>
              </li>
              <li
                style={{ display: "flex", alignItems: "baseline", gap: "10px" }}
              >
                <Viber />
                <NavLink href="viber://chat?number=%2B380939123221">
                  (093) 912 32 21
                </NavLink>
              </li>
              <li
                style={{ display: "flex", alignItems: "baseline", gap: "10px" }}
              >
                <Telegram />
                <NavLink href="https://t.me/RenfaShop">Магазин Renfa</NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
