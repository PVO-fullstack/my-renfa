"use client";

import React, { useState } from "react";
import { OnePart } from "../OnePart/OnePart";

export const OnePartItem = () => {
  const [count, setCount] = useState(1);

  const getCount = (data) => {
    setCount(data);
  };

  return <>{<OnePart get={getCount} count={count} />}</>;
};
