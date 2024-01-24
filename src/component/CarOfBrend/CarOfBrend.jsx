// "use client";

// import { useRouter } from "next/navigation";
import style from "./CarOfBrend.module.scss";
import { Brand } from "../Brand/Brand";
import mg from "@/data/mg.json";
import faw from "@/data/faw.json";
import jac from "@/data/jac.json";
import geely from "@/data/geely.json";
import chery from "@/data/chery.json";
import { FilterItem } from "../New/FilterItem/FilterItem";
// import { useEffect, useState } from "react";
import { Filter } from "../New/Filter/Filter";
import { BrandLayout } from "../New/BrandLayout/BrandLayout";

export const CarOfBrend = ({ brand }) => {
  // const router = useRouter();
  let first = {};
  // const allCars = [mg, chery, faw, geely, jac];

  const takeBrand = async () => {
    // const brand = await router.query.slag;
    // console.log("brand", brand);
    switch (brand) {
      case "MG":
        first = mg;
        break;
      case "Chery":
        first = chery;
        break;
      case "Geely":
        first = geely;
        break;
      case "FAW":
        first = faw;
        break;
      case "JAC":
        first = jac;
        break;
      default:
        first = {};
    }
  };

  takeBrand();

  // console.log("first", first);

  return (
    <>
      {first.title && (
        <BrandLayout open={first.title}>
          <Brand title={first.title} data={first.cars} />
        </BrandLayout>
      )}
    </>
  );
};
