import React from "react";
import { Filter } from "../Filter/Filter";
import style from "./BrandLayout.module.scss";

export const BrandLayout = ({ children, open }) => {
  return (
    <div className={style.carList}>
      <Filter open={open} />
      {children}
    </div>
  );
};
