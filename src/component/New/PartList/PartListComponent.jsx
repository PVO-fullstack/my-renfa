import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";
import { PartList } from "@/component/PartList/PartList";
import style from "./PartListComponent.module.scss";
import { useRouter } from "next/router";
import { getModel } from "@/apiService/apiParts";
import { PartsLayout } from "../PartsLayout/PartsLayout";

export const PartListComponent = () => {
  const [model, setModel] = useState([]);
  const [filtredParts, setFiltredParts] = useState([]);
  const [count, setCount] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const modelName = await router.query.slag;
      setModel(modelName);
      if (modelName) {
        const modelPart = modelName[1];
        if (modelPart) {
          if (model[1] !== modelPart) {
            setPage(1);
          }
          console.log("model", model, modelName, modelPart);
          const allParts = await getModel(modelPart, page || 1, limit || 6);
          console.log("allParts", allParts);
          setFiltredParts(allParts.modelParts);
          setCount(allParts.count);
        }
      }
    };
    getData();
  }, [limit, model, page, router.query.slag]);

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
      <PartsLayout model={model[1]} open={model[0]} />
      {/* <div className={style.carList}>
        <Filter model={model[1]} open={model[0]} />
        <PartList />
      </div> */}
    </div>
  );
};
