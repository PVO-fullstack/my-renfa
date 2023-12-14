import React from "react";
import css from "./BurgerMenu.module.scss";
import NavLink from "next/link";
import { UserMenu } from "../UserMenu";

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
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleClose}
                  className={css.link}
                  href="/model"
                >
                  Model
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleClose}
                  className={css.link}
                  href="/contacts"
                >
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink href="viber://pa?chatURI=[521a48f893a7e466-4740805106926177-f23f9be4fd608c0b]&text=[Hello]">
                  (093) 912 32 21
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
