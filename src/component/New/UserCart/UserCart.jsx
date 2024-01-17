import React, { useEffect, useState } from "react";
import style from "./UserCart.module.scss";
import { OnePartInCart } from "../OnePartInCart/OnePartInCart";
import { KURS } from "@/variable/variable";

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
              count={count}
              get={getCount}
            />
          ))}
        <div className={style.sum}>
          <p>Всього:</p> <p>{allSum * KURS}₴</p>
        </div>
        <div>
          <button>ggkug</button>
          <button>giugiugl</button>
        </div>
      </div>
    </div>
  );
};
