// "use client";

import style from "./PartList.module.scss";
import { getModel, getOnePart } from "@/apiService/apiParts";
import { PartListItem } from "../New/PartListItem/PartListItem";
import { SortPanel } from "../New/SortPanel/SortPanel";
import { Pagination } from "../New/Pagination/Pagination";

export const PartList = async ({ find, modelName, brand, page, limit }) => {
  const partName = decodeURI(modelName);

  const brend = partName.split(",")[0];
  const model = partName.split(",")[1];
  const partArticul = partName.split(",")[2];

  console.log(model);

  let filtredParts;
  let count;
  if (modelName) {
    if (find) {
      const part = await getOnePart(
        partArticul,
        page || 1,
        limit || 6,
        brend,
        model
      );
      filtredParts = part.modelParts || part.parts;
      count = part.count;
    }
    if (!find) {
      const allParts = await getModel(modelName, page || 1, limit || 6);
      filtredParts = allParts.modelParts;
      count = allParts.count;
    }
  }

  return (
    <>
      {/* <PartsLayout parts={filtredParts} partsCount={count} /> */}
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <div className={style.conteiner}>
        <h1 className={style.title}>
          {find
            ? `Пошуковий запит: "${partName}"`
            : `Запчастини ${brand} ${modelName}`}
        </h1>
        <SortPanel />
        <ul className={style.ImageGallery}>
          {filtredParts?.length > 0 &&
            filtredParts.map((part, index) => (
              <PartListItem
                find={find}
                key={part._id}
                model={modelName}
                part={part}
                page={page}
              />
            ))}
        </ul>
        <div className={style.btn_conteiner}>
          <Pagination limit={limit} count={count} page={page} />
        </div>
      </div>
      {/* )} */}
    </>
  );
};
