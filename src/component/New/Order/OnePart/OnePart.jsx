import Image from "next/image";
import React from "react";
import { Counter } from "../../Counter/Counter";
import style from "./OnePart.module.scss";
import { KURS } from "@/variable/variable";

export const OnePart = ({ part }) => {
  return (
    <div className={style.conteiner}>
      <div className={style.part}>
        <div className={style.part_conteiner}>
          <Image
            className={style.img}
            src={part.Img}
            alt={part.Part_Name}
            width={100}
            height={100}
          ></Image>
          <p className={style.description}>{part.Part_Name}</p>
        </div>
        <div className={style.counter_conteiner}>
          <p className={style.price}>{part.Price * KURS}₴</p>
          {/* <Counter
            width={20}
            height={20}
            counterStyle={style.counter}
            countStyle={style.count}
            // get={changeCount}
            newCount={part.count}
          /> */}
          <p className={style.price}>{part.Price * part.count * KURS}₴</p>
        </div>
      </div>
    </div>
  );
};