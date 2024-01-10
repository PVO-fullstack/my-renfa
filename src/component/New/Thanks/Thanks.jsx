import { Button } from "@/component/Button";
import React from "react";
import style from "./Thanks.module.scss";

export const Thanks = () => {
  return (
    <div className={style.conteiner}>
      <h1 className={style.title}>Дякуємо за ваше повідомлення! </h1>
      <p className={style.text}>
        Ми отримали ваш запит і найближчим часом надамо вам відповідь.
      </p>
      <Button disabled={false} className={style.btn}>
        Повернутися на головну
      </Button>
    </div>
  );
};
