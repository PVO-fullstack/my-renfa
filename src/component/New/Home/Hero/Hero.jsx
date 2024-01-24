import React from "react";
import style from "./Hero.module.scss";
import Image from "next/image";
import brand from "@/data/brand.json";

export const Hero = () => {
  return (
    <div className={style.conteiner}>
      <div className={style.hero}>
        <div className={style.text_conteiner}>
          <p className={style.text}>Великий асортимент</p>
          <p className={style.title}>
            Запчастини до <br /> китайських авто
          </p>
          <p className={style.order}>Можливе замовлення запчастин з Китаю</p>
        </div>
        <Image
          className={style.img}
          src="/hero.webp"
          alt="car"
          width={100}
          height={100}
        />
      </div>
      <div className={style.brand}>
        {brand.map((item) => (
          <div key={item.brand} className={style.brand_conteiner}>
            <Image
              className={style.brand_logo}
              alt={`Логотип ${item.brand}`}
              src={item.src}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
