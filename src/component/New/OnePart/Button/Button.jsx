"use client";

import React, { useEffect, useState } from "react";
import style from "./Button.module.scss";

export const Button = ({ part, count = 1 }) => {
  const [disabled, setDisabled] = useState(false);
  const [order, setOrder] = useState([]);

  console.log("count", count);

  useEffect(() => {
    const getLocal = async () => {
      const order = await localStorage.getItem("order");
      const orderParts = await JSON.parse(order);
      console.log("orderParts", orderParts);
      const inCart = orderParts.find((item) => part._id === item._id);
      console.log("inCart", inCart);
      if (inCart) {
        setDisabled(true);
        return;
      }
      setOrder(orderParts);
    };
    getLocal();
  }, []);

  const handleClick = () => {
    // console.log("onePart", onePart);
    if (order && order.length > 0) {
      console.log("one", part);
      // setOrderParts([...orderParts, onePart]);
      console.log("orderParts", order);
      const partString = JSON.stringify([...order, { ...part, count: count }]);
      console.log("second", partString);
      localStorage.setItem("order", partString);
      setDisabled(true);
      return;
    }
    console.log("first");
    // setOrderParts([onePart]);
    const partString = JSON.stringify([{ ...part, count: count }]);
    localStorage.setItem("order", partString);
    // console.log("orderParts", orderParts);
    setDisabled(true);
  };

  return (
    <button disabled={disabled} onClick={handleClick} className={style.btn}>
      {disabled ? "У корзині" : "Купити"}
    </button>
  );
};
