import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";
import { PartList } from "@/component/PartList/PartList";
import style from "./PartListComponent.module.scss";
import { useRouter } from "next/router";

export const PartListComponent = ({ getParts }) => {
  const [model, setModel] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const modelName = await router.query.slag;
      console.log("modelName", modelName);
      setModel(modelName);
    };
    getData();
  }, [router.query.slag]);

  console.log("modelList", model);

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
