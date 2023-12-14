import React from "react";
import style from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <div className={style.conteiner}>
      <p>Наші координати:</p>
      <p>м. Київ, вул. Велика Кільцева, 4Б,</p>
      <p>магазин (MG, FAW, JAC, Chery, Geely)</p>
      <p>т. 8(097)7934488</p> <p>т. 8(093)9123221 Viber</p>
      <p>т. 8(095)5987683</p>
      <p>http://renfa.com.ua/</p>
    </div>
  );
};
