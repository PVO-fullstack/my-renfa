import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./BrandItem.module.scss";

export const BrandItem = ({ item }) => {
  return (
    <Link
      className={style.link}
      key={item.model}
      href={{
        pathname: `${item.link}`,
      }}
    >
      <li className={style.item}>
        <p className={style.model}>{item.model}</p>
        <Image
          className={style.img}
          src={item.src}
          width={200}
          height={200}
          alt={item.alt}
        />
      </li>
    </Link>
  );
};
