import Image from "next/image";
import React from "react";
import style from "./Order.module.scss";

export const Order = () => {
  return (
    <div className={style.conteiner}>
      <Image
        className={style.img}
        src="/parts.png"
        alt="parts"
        width={100}
        height={100}
      />
      <div className={style.text_conteiner}>
        <h3 className={style.title}>Великий асортимент</h3>
        <Image
          className={style.img}
          src="/parts.png"
          alt="parts"
          width={100}
          height={100}
        />
        <p className={style.description}>
          Можливе замовлення запчастин з Китаю
        </p>
      </div>
    </div>
  );
};
