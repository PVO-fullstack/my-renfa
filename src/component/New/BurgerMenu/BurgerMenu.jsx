import React from "react";
import { Brand } from "../Brand/Brand";
import style from "./BurgerMenu.module.scss";
import model from "@/data/model.json";

export const BurgerMenu = ({ show, handleClose }) => {
  return (
    <>
      {show && (
        <div className={style.overlay}>
          <div className={style.modal}>
            <div onClick={handleClose} className={style.close}></div>
            <Brand model={model} />
          </div>
        </div>
      )}
    </>
  );
};
