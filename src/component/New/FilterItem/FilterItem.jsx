"use client";

import React, { useEffect, useState } from "react";
import mg from "../../../data/mg.json";
import style from "./FilterItem.module.scss";
import { Arrow } from "../Arrow/Arrow";
import Link from "next/link";
import { getModel, getModelStor } from "@/apiService/apiParts";

export const FilterItem = ({ data, fara, selected, storage, get }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (fara) {
      setOpen(true);
    }
  }, [fara]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const getParts = async (model) => {
    if (storage) {
      const parts = await getModelStor(model, 1, 1000);
      get(parts.modelParts);
      return;
    }
    const parts = await getModel(model, 1, 1000);
    get(parts.modelParts);
  };

  const brand = data.cars;

  return (
    <>
      {data && (
        <div className={open ? style.list_open : style.list}>
          <div className={style.conteiner}>
            {storage ? (
              <div>{data.title}</div>
            ) : (
              <Link className={style.link} href={`/models/${data.title}`}>
                {data.title}
              </Link>
            )}
            <span className={style.arrow} onClick={handleOpen}>
              <Arrow open={open} />
            </span>
          </div>

          <ul className={open ? style.item_open : style.item}>
            {storage &&
              brand.map((car) => (
                <li
                  key={car.name}
                  onClick={() => getParts(car.model)}
                  className={
                    selected === car.model ? style.model_selected : style.model
                  }
                >
                  {car.name}
                </li>
              ))}
            {!storage &&
              brand.map((car) => (
                <Link
                  href={{
                    pathname: `${car.link}`,
                  }}
                  key={car.model}
                >
                  <li
                    className={
                      selected === car.model
                        ? style.model_selected
                        : style.model
                    }
                  >
                    {car.name}
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};
