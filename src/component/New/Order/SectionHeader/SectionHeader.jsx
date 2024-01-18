import React from "react";
import style from "./SectionHeader.module.scss";

export const SectionHeader = ({ title, className, children }) => {
  return (
    <div className={style.conteiner}>
      <div className={style.contact}>
        <h3 className={style.contect_title + " " + className}>{title}</h3>
      </div>
      {children}
    </div>
  );
};
