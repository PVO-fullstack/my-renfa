// "use client";

import Head from "next/head";
// import React, { useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";
import { PartList } from "@/component/PartList/PartList";
import style from "./PartListComponent.module.scss";
// import { useRouter } from "next/router";
import { getModel } from "@/apiService/apiParts";
import { PartsLayout } from "../PartsLayout/PartsLayout";

export const PartListComponent = async ({ modelName, brand, page, limit }) => {
  console.log("limit2", limit, page);
  // const [model, setModel] = useState([]);
  // const [filtredParts, setFiltredParts] = useState([]);
  // const [count, setCount] = useState();
  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(6);
  // const router = useRouter();

  // console.log("searchParams", searchParams./);

  // console.log("modelName", modelName);

  // useEffect(() => {
  //   const getData = async () => {
  //     // const modelName = await router.query.slag;
  //     setModel(modelName);
  //     if (modelName) {
  //       const modelPart = modelName[1];
  //       if (modelPart) {
  //         if (model[1] !== modelPart) {
  //           setPage(1);
  //         }
  // let page = 1;
  // let limit = 6;
  // const allParts = await getModel(modelName, page || 1, limit || 6);
  // console.log("allParts", allParts);
  //         setFiltredParts(allParts.modelParts);
  //         setCount(allParts.count);
  //       }
  //     }
  //   };
  //   getData();
  // }, [limit, model, modelName, page]);

  // console.log("modelList", model);

  return (
    <div>
      <Head>
        <title>{`Запчастини до ${modelName} ${modelName[1]}`}</title>
        <meta
          name="description"
          content={`Запчастини до автомобіля ${modelName} ${modelName[1]}`}
          key="desc"
        />
      </Head>
      <PartsLayout
        page={page}
        limit={limit}
        model={modelName}
        brand={brand}
        open={modelName}
      />
    </div>
  );
};
