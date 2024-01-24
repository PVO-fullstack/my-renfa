import Image from "next/image";
import React from "react";
import style from "./Order.module.scss";
import { Button } from "@/component/Button";
import Link from "next/link";

export const Order = () => {
  return (
    <div className={style.conteiner}>
      <Image
        className={style.img}
        src="/parts.webp"
        alt="parts"
        width={100}
        height={100}
      />
      <div className={style.flex}>
        <div className={style.text_conteiner}>
          <h3 className={style.title}>
            Потрібна допомога в виборі запчастини?
          </h3>
          <p className={style.description}>
            Наші фахівці готові допомогти вам знайти правильні деталі для вашого
            автомобіля.
          </p>
        </div>
        <Link className={style.btn} href="/form">
          Звернутися за допомогою
        </Link>
      </div>
    </div>
  );
};
