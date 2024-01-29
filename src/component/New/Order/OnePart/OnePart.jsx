import Image from "next/image";
import React from "react";
import { Counter } from "../../Counter/Counter";
import style from "./OnePart.module.scss";
import { KURS } from "@/variable/variable";

export const OnePart = ({ part }) => {
  return (
    <div className={style.conteiner}>
      <div className={style.part_conteiner}>
        <Image
          className={style.img}
          src={part.Img}
          alt={part.Part_Name}
          width={100}
          height={100}
        ></Image>
        <p className={style.description}>{part.Part_Name}</p>
        <p className={style.price}>x{part.count}</p>
        <p className={style.price}>{part.Price * part.count * KURS}₴</p>
      </div>
    </div>
  );
};
