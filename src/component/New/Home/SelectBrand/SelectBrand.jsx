import React from "react";
import brand from "@/data/brand.json";
import Image from "next/image";
import style from "./SelectBrand.module.scss";
import { Section } from "../Section/Section";

export const SelectBrand = () => {
  return (
    <Section title={"Вибір за категоріями"}>
      <div className={style.conteiner}>
        {brand.map((item) => (
          <div key={item.brand} className={style.brand_conteiner}>
            <Image
              className={style.brand_logo}
              alt={`Логотип ${item.brand}`}
              src={item.src}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
