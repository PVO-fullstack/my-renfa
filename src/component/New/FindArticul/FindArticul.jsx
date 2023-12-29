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

export const FindArticul = () => {
  const router = useRouter();
  const [first, setFirst] = useState();
  const [onePart, setOnePart] = useState();
  const allCars = [mg, chery, faw, geely, jac];

  useEffect(() => {
    const takeBrand = async () => {
      const articul = await router.query.slag;
      console.log("brand", articul);
      setFirst(articul);
      if (articul) {
        const part = await getOnePart(articul);
        console.log("part", part);
        setOnePart(part);
      }
    };
    takeBrand();
  }, [router.query.slag]);

  console.log("first", first);
  return (
    <>
      {first && (
        <div style={{ display: "flex" }}>
          <Filter />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: "50px",
            }}
          >
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
          {/* <Brand title={first.title} data={first.cars} /> */}
        </div>
      )}
    </>
  );
};
