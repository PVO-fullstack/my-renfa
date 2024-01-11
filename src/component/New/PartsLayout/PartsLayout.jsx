import React from "react";
import style from "./PartsLayout.module.scss";
import { PartList } from "@/component/PartList/PartList";
import { Filter } from "../Filter/Filter";

export const PartsLayout = ({ model, open, find }) => {
  return (
    <div className={style.carList}>
      <Filter model={model} open={open} />
      <PartList find={find} />
    </div>
  );
};
