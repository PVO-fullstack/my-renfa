import React from "react";
import mg from "@/data/mg.json";
import faw from "@/data/faw.json";
import jac from "@/data/jac.json";
import geely from "@/data/geely.json";
import chery from "@/data/chery.json";
import style from "./CarList.module.scss";
import Image from "next/image";

export const CarList = ({ brand }) => {
  let brandName = [];

  const takeBrand = async () => {
    switch (brand) {
      case "MG":
        brandName = mg.cars;
        break;
      case "Chery":
        brandName = chery.cars;
        break;
      case "Geely":
        brandName = geely.cars;
        break;
      case "FAW":
        brandName = faw.cars;
        break;
      case "JAC":
        brandName = jac.cars;
        break;
      default:
        brandName = [];
    }
  };

  takeBrand();

  return (
    <div className={style.conteiner}>
      {brandName.map((item) => (
        <div key={item.model} className={style.car}>
          <p>{item.model}</p>
          <Image
            className={style.img}
            src={item.src}
            alt={item.alt}
            width={98}
            height={71}
          />
        </div>
      ))}
    </div>
  );
};
