import { useRouter } from "next/router";
import mg from "@/data/mg.json";
import faw from "@/data/faw.json";
import jac from "@/data/jac.json";
import geely from "@/data/geely.json";
import chery from "@/data/chery.json";
import { useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";
import { getOnePart } from "@/apiService/apiParts";
import { Part } from "@/component/Part/Part";
import Link from "next/link";
import style from "./FindArticul.module.scss";

export const FindArticul = () => {
  const router = useRouter();
  const [first, setFirst] = useState();
  const [onePart, setOnePart] = useState();
  const [page, setPage] = useState(1);
  const allCars = [mg, chery, faw, geely, jac];
  // const q = router.query.slag;
  // const slag = q.split("&");

  useEffect(() => {
    const takeBrand = async () => {
      const articul = await router.query.slag;
      console.log("brand", articul);
      setFirst(articul);
      if (articul) {
        const part = await getOnePart(articul);
        console.log("part", part);
        setOnePart(part.parts);
      }
    };
    takeBrand();
  }, [router.query.slag]);

  const handleNext = () => {
    const slag = first.split("page");
    const newSlag = slag[0] + "page" + (page + 1);
    setPage(page + 1);
    router.push(`/search/${newSlag}`);
  };

  console.log("first", first);
  return (
    <>
      {first && (
        <div className={style.carList}>
          <Filter />

          <div className={style.gallery}>
            {onePart &&
              onePart.map((part) => (
                <Link
                  href={{
                    pathname: `/models/${part.Brand}/${part.Model[0]}/${part.Articul}`,
                  }}
                  key={part._id}
                >
                  <Part part={part} />
                </Link>
              ))}
          </div>
          <button onClick={handleNext} type="button">
            Next
          </button>
          {/* <Brand title={first.title} data={first.cars} /> */}
        </div>
      )}
    </>
  );
};
