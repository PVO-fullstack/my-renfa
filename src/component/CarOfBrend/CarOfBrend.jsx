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

export const CarOfBrend = () => {
  const router = useRouter();
  const [first, setFirst] = useState({});
  const allCars = [mg, chery];

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
        case "Faw":
          setFirst(faw);
          break;
        case "Jac":
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
        <div className={style.carList}>
          <Filter open={first.title} />
          {/* <div className={style.conteiner}>
            <h2>Фільтер</h2>
            <div className={style.brand_list}>
              {allCars.map((car) => (
                <FilterItem
                  key={car.title}
                  fara={first.title === car.title}
                  data={car}
                />
              ))}
            </div>
          </div> */}
          <Brand title={first.title} data={first.cars} />
        </div>
      )}
    </>
  );
};
