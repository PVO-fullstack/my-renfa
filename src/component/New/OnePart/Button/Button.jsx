"use client";

import React, { useEffect, useState } from "react";
import style from "./Button.module.scss";

export const Button = ({ part, count = 1, list, page }) => {
  const [disabled, setDisabled] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const getLocal = async () => {
      const order = await localStorage.getItem("order");
      if (order) {
        const orderParts = await JSON.parse(order);
        const inCart = orderParts.find((item) => part._id === item._id);
        console.log("oiCart", inCart);
        if (inCart) {
          setDisabled(true);
          return;
        }
        setDisabled(false);
        setOrder(orderParts);
      }
    };
    getLocal();
  }, [page]);

  console.log("order", order);

  const handleClick = () => {
    const ls = localStorage.getItem("order");
    if (ls) {
      const order = JSON.parse(ls);
      if (order && order.length > 0) {
        const partString = JSON.stringify([
          ...order,
          { ...part, count: count },
        ]);
        localStorage.setItem("order", partString);
        setDisabled(true);
        return;
      }
    }
    const partString = JSON.stringify([{ ...part, count: count }]);
    localStorage.setItem("order", partString);
    setDisabled(true);
  };

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={list ? style.btn_list : style.btn}
    >
      {disabled ? "У корзині" : "Купити"}
    </button>
  );
};
