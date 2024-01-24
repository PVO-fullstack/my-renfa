import Image from "next/image";
import React from "react";
import benefits from "@/data/benefits.json";
import style from "./Benefits.module.scss";

export const Benefits = () => {
  return (
    <div className={style.section_conteiner}>
      <h2 className={style.title}>Наші переваги</h2>
      <p className={style.description}>Якість, Гарантія та Безпечна Доставка</p>
      <div className={style.flex}>
        {benefits.map((item) => (
          <div key={item.src} className={style.conteiner}>
            <div className={style.img_conteiner}>
              <Image
                className={style.img}
                src={item.src}
                alt={item.alt}
                width={50}
                height={50}
              />
            </div>
            <div>
              <h3 className={style.title}>{item.title}</h3>
              <p className={style.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
