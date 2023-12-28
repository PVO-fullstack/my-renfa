import Link from "next/link";
import React from "react";
import style from "./Brand.module.scss";
import Image from "next/image";
import { FilterItem } from "../New/FilterItem/FilterItem";

export const Brand = ({ title, data }) => {
  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      <ul className={style.list}>
        {data.map((item) => (
          <Link
            className={style.link}
            key={item.model}
            href={{
              pathname: `${item.link}`,
            }}
          >
            <li className={style.item}>
              <Image
                className={style.img}
                src={item.src}
                width={200}
                height={200}
                alt={item.alt}
              />
              <p className={style.model}>{item.model}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
