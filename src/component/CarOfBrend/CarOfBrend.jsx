import { useRouter } from "next/router";
import style from "./CarOfBrend.module.scss";
import { Brand } from "../Brand/Brand";
import mg from "@/data/mg.json";
import faw from "@/data/faw.json";
import jac from "@/data/jac.json";
import geely from "@/data/geely.json";
import chery from "@/data/chery.json";
import { FilterItem } from "../New/FilterItem/FilterItem";
import { useEffect, useState } from "react";
import { Filter } from "../New/Filter/Filter";
import { BrandLayout } from "../New/BrandLayout/BrandLayout";

export const CarOfBrend = () => {
  const router = useRouter();
  const [first, setFirst] = useState({});
  const allCars = [mg, chery, faw, geely, jac];

  useEffect(() => {
    const takeBrand = async () => {
      const brand = await router.query.slag;
      console.log("brand", brand);
      switch (brand) {
        case "MG":
          setFirst(mg);
          break;
        case "Chery":
          setFirst(chery);
          break;
        case "Geely":
          setFirst(geely);
          break;
        case "FAW":
          setFirst(faw);
          break;
        case "JAC":
          setFirst(jac);
          break;
        default:
          setFirst({});
      }
    };
    takeBrand();
  }, [router.query.slag]);

  console.log("first", first);

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
