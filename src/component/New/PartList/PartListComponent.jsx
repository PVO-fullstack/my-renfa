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
