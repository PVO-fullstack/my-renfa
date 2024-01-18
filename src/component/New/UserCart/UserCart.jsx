import React, { useEffect, useState } from "react";
import style from "./UserCart.module.scss";
import { OnePartInCart } from "../OnePartInCart/OnePartInCart";
import { KURS } from "@/variable/variable";
import { Button } from "@/component/Button";
import Link from "next/link";

export const UserCart = () => {
  const [count, setCount] = useState(1);
  const [parts, setParts] = useState([]);
  const [allSum, setAllSum] = useState(0);

  useEffect(() => {
    const getParts = JSON.parse(localStorage.getItem("order"));
    setParts(getParts);
    sum(getParts);
  }, []);

  const sum = (parts) => {
    const qwe = parts.reduce((all, item) => {
      return all + item.count * item.Price;
    }, 0);
    setAllSum(qwe);
  };

  const getCount = async (data) => {
    const newParts = parts.map((part) =>
      part._id === data._id ? { ...part, count: data.count } : part
    );
    await setParts(newParts);
    sum(newParts);
    const string = JSON.stringify(newParts);
    localStorage.setItem("order", string);
  };

  const delPart = (id) => {
    console.log("first");
    const newParts = parts.filter((part) => part._id !== id);
    setParts(newParts);
    sum(newParts);
  };

  console.log("parts", parts);

  return (
    <div className={style.conteiner}>
      <div className={style.conteiner_2}>
        <h2>Кошик</h2>
        {parts?.length > 0 &&
          parts.map((item) => (
            <OnePartInCart
              del={delPart}
              key={item._id}
              part={item}
              count={item.count}
              get={getCount}
            />
          ))}
        <div className={style.sum}>
          <p>Всього:</p> <p>{allSum * KURS}₴</p>
        </div>
        <div className={style.btn_conteiner}>
          <Link className={style.btn} href="/order">
            Оформити замовлення
          </Link>
          <Link href="/" className={style.btn_go}>
            Продовжити покупки
          </Link>
          {/* <Button disabled={false}></Button> */}
        </div>
      </div>
    </div>
  );
};
