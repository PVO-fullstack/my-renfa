import React from "react";
import css from "./BurgerMenu.module.scss";
import { UserMenu } from "../UserMenu";

export const BurgerMenu = () => {
  return (
    <div className={css.overlay}>
      <ul className={css.modal}>
        <li>Hello</li>
        <li></li>
      </ul>
    </div>
  );
};
