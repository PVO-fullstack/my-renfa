"use client";

import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Counter } from "../../Counter/Counter";

export const BuyBlock = ({ part }) => {
  const [count, setCount] = useState();

  const getCount = (data) => {
    setCount(data);
  };

  return (
    <>
      <Counter get={getCount} />
      <Button part={part} count={count} />
    </>
  );
};
