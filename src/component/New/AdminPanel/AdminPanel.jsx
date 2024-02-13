import React from "react";
import { NavLink } from "react-bootstrap";
import style from "./AdminPanel.module.scss";

export const AdminPanel = () => {
  return (
    <ul className={style.conteiner}>
      <li>
        <NavLink href="/storage">Слад</NavLink>
      </li>
      <li>
        <NavLink href="/storage/add">Прихід</NavLink>
      </li>
      <li>
        <NavLink href="/storage/sell">Продаж</NavLink>
      </li>
    </ul>
  );
};
