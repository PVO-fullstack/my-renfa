import React from "react";
import style from "./OrderList.module.scss";
import { OnePartInCart } from "../../OnePartInCart/OnePartInCart";
import { OnePart } from "../OnePart/OnePart";

export const OrderList = ({ parts }) => {
  return (
    <div className={style.conteiner}>
      <div>Вартість замовленого товару:</div>
      {parts?.length > 0 &&
        parts.map((item) => (
          <OnePart
            // del={delPart}
            key={item._id}
            part={item}
            // count={count}
            // get={getCount}
          />
        ))}
      <div>Доставка (Нова Пошта):</div>
      <div>Всього: </div>
    </div>
  );
};
