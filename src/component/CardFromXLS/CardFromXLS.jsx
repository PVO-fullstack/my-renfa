import React from "react";
import style from "./CardFromXLS.module.scss";
import { KURS } from "@/variable/variable";

export const CardFromXLS = ({ part }) => {
  const { Articul, Part_Name, Price, Quantity } = part;
  return (
    <div className={style.card}>
      <p>{Articul}</p>
      <p>{Part_Name}</p>
      <p>{Quantity} шт</p>
      <p>{Math.round(Price * KURS)} грн</p>
    </div>
  );
};
