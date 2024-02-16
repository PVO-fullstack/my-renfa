"use client";

import React, { useEffect, useState } from "react";
import style from "./Button.module.scss";

export const Button = ({ part, count = 1, list }) => {
  const [disabled, setDisabled] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const getLocal = async () => {
      const order = await localStorage.getItem("order");
      if (order) {
        const orderParts = await JSON.parse(order);
        const inCart = orderParts.find((item) => part._id === item._id);
        if (inCart) {
          setDisabled(true);
          return;
        }
        setOrder(orderParts);
      }
    };
    getLocal();
  }, []);

  const handleClick = () => {
    if (order && order.length > 0) {
      const partString = JSON.stringify([...order, { ...part, count: count }]);
      localStorage.setItem("order", partString);
      setDisabled(true);
      return;
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
