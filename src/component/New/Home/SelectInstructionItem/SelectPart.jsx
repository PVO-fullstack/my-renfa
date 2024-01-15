import Image from "next/image";
import React from "react";
import style from "./SelectPart.module.scss";

export const SelectPart = ({ part, children, className }) => {
  return (
    <div className={style.conteiner + " " + className}>
      <div className={style.square}>{children}</div>
      <div className={style.text}>
        <p className={style.title}>{part.title}</p>
        <p className={style.description}>{part.description}</p>
      </div>
    </div>
  );
};
