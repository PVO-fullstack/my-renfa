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
                <NavLink href="viber://add?number=+380939123221">
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
