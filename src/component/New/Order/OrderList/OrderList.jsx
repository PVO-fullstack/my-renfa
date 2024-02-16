import React, { useEffect, useState } from "react";
import style from "./OrderList.module.scss";
import { OnePartInCart } from "../../OnePartInCart/OnePartInCart";
import { OnePart } from "../OnePart/OnePart";
import { KURS } from "@/variable/variable";

export const OrderList = () => {
  const [allSum, setAllSum] = useState(0);
  const [parts, setParts] = useState([]);

  useEffect(() => {
    const getLocal = async () => {
      const getParts = localStorage.getItem("order");
      const parseParts = await JSON.parse(getParts);
      setParts(parseParts);
      const qwe = parseParts.reduce((all, item) => {
        return all + item.count * item.Price;
      }, 0);
      setAllSum(Math.round(qwe * KURS));
    };
    getLocal();
  }, []);

  return (
    <>
      <div className={style.conteiner}>
        <div className={style.cost}>
          <p>Вартість замовленого товару:</p>
          <span>{allSum}₴</span>
        </div>
        {parts.map((item) => (
          <OnePart
            // del={delPart}
            key={item._id}
            part={item}
            // count={count}
            // get={getCount}
          />
        ))}
        <div className={style.delivery}>
          <p>Доставка (Нова Пошта):</p>
          <span>0₴</span>
        </div>
        <div className={style.cost}>
          <p>Всього:</p>
          <span>{allSum}₴</span>
        </div>
      </div>
    </>
  );
};
