import React from "react";
import style from "./Filter.module.scss";
import { FilterItem } from "../FilterItem/FilterItem";
import mg from "@/data/mg.json";
import faw from "@/data/faw.json";
import jac from "@/data/jac.json";
import geely from "@/data/geely.json";
import chery from "@/data/chery.json";

export const Filter = ({ open, model, storage, get }) => {
  const allCars = [mg, chery, faw, geely, jac];

  return (
    <div className={style.conteiner}>
      <h2 className={style.title}>Фільтр</h2>
      <div className={style.brand_list}>
        {allCars.map((car) => (
          <FilterItem
            get={get}
            storage={storage}
            key={car.title}
            selected={model}
            fara={car.title === open}
            data={car}
          />
        ))}
      </div>
    </div>
  );
};
