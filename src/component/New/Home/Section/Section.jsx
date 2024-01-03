import React from "react";
import style from "./Section.module.scss";

export const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={style.title}>{title}</h2>
      {children}
    </div>
  );
};
