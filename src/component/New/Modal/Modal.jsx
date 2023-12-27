import React from "react";
import style from "./Modal.module.scss";

export const Modal = ({ children }) => {
  return (
    <div className={style.backdrop}>
      <div className={style.modal}>{children}</div>
    </div>
  );
};
