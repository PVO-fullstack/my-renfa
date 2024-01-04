import { Part } from "@/component/Part/Part";
import Image from "next/image";
import React from "react";
import style from "./NewParts.module.scss";
import { Button } from "@/component/Button";
import { KURS } from "@/variable/variable";

export const NewParts = ({ parts }) => {
  return (
    <>
      {parts.map((item) => (
        <div key={item._id} className={style.ImageGalleryItem}>
          <div className={style.img_conteiner}>
            <Image
              className={style.imageGalleryItem_image}
              src={item.Img}
              alt={item.Description}
              width={100}
              height={100}
            />
          </div>
          <div className={style.desc_conteiner}>
            <p className={style.text}>{item.Part_Name}</p>
            <div className={style.bottom_conteiner}>
              <p className={style.price}>{Math.round(item.Price * KURS)} ₴</p>
              <Button type="button" disabled={false}>
                Купити
              </Button>
            </div>
          </div>
          {/* </a> */}
        </div>
      ))}
    </>
  );
};
