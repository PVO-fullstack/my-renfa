import Head from "next/head";
import React from "react";
import { Filter } from "../Filter/Filter";
import { PartList } from "@/component/PartList/PartList";
import style from "./PartListComponent.module.scss";

export const PartListComponent = ({ model, getParts }) => {
  return (
    <div>
      <Head>
        <title>{`Запчастини до ${model[0]} ${model[1]}`}</title>
        <meta
          name="description"
          content={`Запчастини до автомобіля ${model[0]} ${model[1]}`}
          key="desc"
        />
      </Head>
      <div className={style.carList}>
        <Filter model={model[1]} open={model[0]} />
        <PartList getAllParts={getParts} />
      </div>
    </div>
  );
};
