"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./Part.module.scss";
import { KURS } from "@/variable/variable";
import { Button } from "../New/OnePart/Button/Button";

export const Part = ({ part, find }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <Link
        className={style.link}
        href={{
          pathname: `/models/${part.Brand}/${part.Model[0]}/${part._id}`,
        }}
      >
        <div>
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
          <p className={style.text}>{part.Part_Name}</p>
        </div>
        <p className={style.price}>{Math.round(part.Price * KURS)} ₴</p>
      </Link>
      <div className={style.desc_conteiner}>
        <div className={style.bottom_conteiner}>
          <Button
            part={part}
            list
            // onClick={() => console.log("yes")}
            className={style.btn}
            // type="button"
            // disabled={false}
          >
            Купити
          </Button>
        </div>
      </div>
      {/* </a> */}
    </li>
  );
};
