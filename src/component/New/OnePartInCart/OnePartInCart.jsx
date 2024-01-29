"use client";

import React, { useEffect, useState } from "react";
import { Counter } from "../Counter/Counter";
import Image from "next/image";
import { Trash } from "../Trash/Trash";
import style from "./OnePartInCart.module.scss";
import { KURS } from "@/variable/variable";

export const OnePartInCart = ({ part, get, count, del }) => {
  const [newCount, setNewCount] = useState(part);
  const [width, setWidth] = useState(320);
  const [height, setHeight] = useState(480);

  useEffect(() => {
    setWidth(document.documentElement.clientWidth);
    setHeight(document.documentElement.clientHeight);
  }, []);

  console.log(width);
  console.log(height);

  const changeCount = (data) => {
    setNewCount({ ...part, count: data });
    get({ ...part, count: data });
  };

  const delPart = () => {
    del(part._id);
  };

  // console.log("new", part);

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
          <Trash click={delPart} className={style.trash} />
        </div>
        <div className={style.counter_conteiner}>
          <p className={style.price}>{part.Price * KURS}₴</p>
          <Counter
            width={width >= 1280 ? 30 : 20}
            height={width >= 1280 ? 30 : 20}
            counterStyle={style.counter}
            countStyle={style.count}
            get={changeCount}
            newCount={part.count}
          />
          <p className={style.price}>{part.Price * newCount.count * KURS}₴</p>
        </div>
      </div>
    </div>
  );
};
