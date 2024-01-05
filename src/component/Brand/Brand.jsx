import Link from "next/link";
import React from "react";
import style from "./Brand.module.scss";
import Image from "next/image";
import { FilterItem } from "../New/FilterItem/FilterItem";
import { BrandItem } from "../New/BrandItem/BrandItem";

export const Brand = ({ title, data }) => {
  return (
    <div className={style.conteiner}>
      <h1 className={style.title}>Запчастини {title}</h1>
      <ul className={style.list}>
        {data.map((item) => (
          <BrandItem key={item.model} item={item} />
        ))}
      </ul>
    </div>
  );
};
