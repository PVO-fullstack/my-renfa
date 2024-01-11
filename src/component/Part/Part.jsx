import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./Part.module.scss";
import { KURS } from "@/variable/variable";
import { Button } from "../Button";

export const Part = ({ part, find }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <div className={style.img_conteiner}>
        <Image
          className={style.imageGalleryItem_image}
          src={part.Img}
          alt={part.Description}
          width={100}
          height={100}
        />
        {find && (
          <p className={style.brand}>
            {part.Brand} {part.Model[0]}
          </p>
        )}
      </div>
      <div className={style.desc_conteiner}>
        <p className={style.text}>{part.Part_Name}</p>
        <div className={style.bottom_conteiner}>
          <p className={style.price}>{Math.round(part.Price * KURS)} ₴</p>
          <Button className={style.btn} type="button" disabled={false}>
            Купити
          </Button>
        </div>
      </div>
      {/* </a> */}
    </li>
  );
};
