"use client";

import React, { useEffect, useState } from "react";
import style from "./Button.module.scss";

export const Button = ({ part, count = 1 }) => {
  const [disabled, setDisabled] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const getLocal = async () => {
      const order = await localStorage.getItem("order");
      const orderParts = await JSON.parse(order);
      const inCart = orderParts.find((item) => part._id === item._id);
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
      // setOrderParts([...orderParts, onePart]);
      const partString = JSON.stringify([...order, { ...part, count: count }]);
      localStorage.setItem("order", partString);
      setDisabled(true);
      return;
    }
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
