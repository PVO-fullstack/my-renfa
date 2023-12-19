import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "../PartList/PartList.module.scss";
import { KURS } from "@/variable/variable";

export const Part = ({ part }) => {
  return (
    <li className={style.ImageGalleryItem}>
      {/* <a
            onClick={(e) => {
              e.preventDefault();
              openModal(index);
            }}
            href={part.Img}
          > */}
      <p className={style.text}>{part.Part_Name}</p>
      <div>
        <Image
          className={
            part.Quantity > 0
              ? `${style.ImageGalleryItem_image}`
              : `${style.ImageGalleryItem_image_null}`
          }
          src={part.Img}
          alt={part.Description}
          width={100}
          height={100}
        />
        <p className={style.text}>Ціна: {Math.round(part.Price * KURS)} грн</p>
        {/* <p className={style.text}>Кількість: {part.Quantity}</p> */}
      </div>
      {/* </a> */}
    </li>
  );
};
