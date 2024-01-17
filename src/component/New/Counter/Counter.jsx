import { Minus } from "@/component/Svg/Minus";
import { Plus } from "@/component/Svg/Plus";
import React, { useEffect, useState } from "react";
import style from "./Counter.module.scss";

export const Counter = ({ get, counterStyle, countStyle, width, height }) => {
  const [count, setCount] = useState(1);

  //   useEffect(() => {
  //     setCount(data);
  //   }, [data]);

  const increment = () => {
    setCount(count + 1);
    get(count + 1);
  };

  const decriment = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
    get(count - 1);
  };

  return (
    <div className={style.counter + " " + counterStyle}>
      <Minus width={width} height={height} click={decriment} />
      <p className={style.count + " " + countStyle}>{count}</p>
      <Plus width={width} height={height} click={increment} />
    </div>
  );
};
