import React from "react";
import style from "./PartsLayout.module.scss";
import { PartList } from "@/component/PartList/PartList";
import { Filter } from "../Filter/Filter";

export const PartsLayout = ({
  model,
  brand,
  open,
  find,
  searchParams,
  page,
  limit,
}) => {
  return (
    <div className={style.carList}>
      <Filter model={model} open={brand} />
      <PartList
        searchParams={searchParams}
        modelName={model}
        brand={brand}
        find={find}
        page={page}
        limit={limit}
      />
    </div>
  );
};
