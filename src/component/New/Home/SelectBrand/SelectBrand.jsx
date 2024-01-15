import React from "react";
import brand from "@/data/brand.json";
import Image from "next/image";
import style from "./SelectBrand.module.scss";
import { Section } from "../Section/Section";
import Link from "next/link";

export const SelectBrand = () => {
  return (
    <Section title={"Вибір за категоріями"}>
      <div className={style.conteiner}>
        {brand.map((item) => (
          <Link
            href={{
              pathname: `/models/[car]`,
              query: { car: item.brand },
            }}
            key={item.brand}
          >
            <div className={style.brand_conteiner}>
              <p className={style.brand_name}>{item.brand}</p>
              <Image
                className={style.brand_logo}
                alt={`Логотип ${item.brand}`}
                src={item.src}
                width={134}
                height={82}
              />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};
