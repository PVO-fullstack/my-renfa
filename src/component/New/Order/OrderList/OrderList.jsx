import React, { useEffect, useState } from "react";
import style from "./OrderList.module.scss";
import { OnePartInCart } from "../../OnePartInCart/OnePartInCart";
import { OnePart } from "../OnePart/OnePart";
import { KURS } from "@/variable/variable";

export const OrderList = ({ parts }) => {
  // const [parts, setParts] = useState([]);
  const [allSum, setAllSum] = useState(0);

  const sum = (parts) => {
    const qwe = parts.reduce((all, item) => {
      return all + item.count * item.Price;
    }, 0);
    setAllSum(qwe * KURS);
  };

  useEffect(() => {
    // setParts(parts);
    sum(parts);
  }, []);

  return (
    <>
      {parts?.length > 0 && (
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
      )}
    </>
  );
};
