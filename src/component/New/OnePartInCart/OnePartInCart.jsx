import React, { useState } from "react";
import { Counter } from "../Counter/Counter";
import Image from "next/image";
import { Trash } from "../Trash/Trash";
import style from "./OnePartInCart.module.scss";
import { KURS } from "@/variable/variable";

export const OnePartInCart = ({ part, get, count, del }) => {
  const [newCount, setNewCount] = useState(part);

  const changeCount = (data) => {
    setNewCount({ ...part, count: data });
    get({ ...part, count: data });
  };

  const delPart = () => {
    del(part._id);
  };

  console.log("new", newCount);

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
            width={20}
            height={20}
            counterStyle={style.counter}
            countStyle={style.count}
            get={changeCount}
          />
          <p className={style.price}>{part.Price * newCount.count * KURS}₴</p>
        </div>
      </div>
    </div>
  );
};
