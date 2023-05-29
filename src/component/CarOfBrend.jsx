import Layout from "@/app/layout";
import cars from "../data/cars.json";
import { useRouter } from "next/router";
import Link from "next/link";
import css from "./CarOfBrend.module.css";
import { useEffect, useState } from "react";
import { getModelBrand } from "@/apiService/apiParts";

export const CarOfBrend = () => {
  const router = useRouter();
  const brand = router.query.slag;
  console.log(brand);

  const [models, setModels] = useState([]);

  useEffect(() => {
    if (brand) {
      async function getBrand(brand) {
        const brandID = await getModelBrand(brand);
        console.log("brand", brandID);
        // const qwe = [];
        const allModel = brandID.flatMap((el) => el.Model);
        const uniqueModel = allModel.filter(
          (model, index, array) => array.indexOf(model) === index
        );
        setModels(uniqueModel);
      }
      getBrand(brand);
      // const allModell = getBrand(brand);
      // console.log("allModell", allModell);
    }
  }, [brand]);

  console.log("model", models);

  // const model = cars.filter((car) => car.Brend === page);

  // const uniquModels = [];

  // for (let car of model) {
  //   // console.log(car);
  //   const qwe = uniquModels.map((item) => item.Model);
  //   if (!qwe.includes(car.Model)) {
  //     uniquModels.push(car);
  //   }
  // }

  // const style = page.toLowerCase();

  // console.log(style);

  return (
    <Layout>
      <div className={css.carList}>
        <h1 id="title" style={{ textAlign: "center" }}>
          {brand}
        </h1>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "space-around",
            listStyle: "none",
            padding: "0",
          }}
        >
          {models.map((car) => (
            <Link
              href={{
                pathname: `/models/[page]/[model]`,
                query: { page: brand, model: car },
              }}
              key={car}
            >
              <li>
                <button
                  // onClick={<PartsList car={car.Model} />}
                  style={{
                    width: "200px",
                    height: "100px",
                    fontSize: "30px",
                    backgroundColor: "#88ed88",
                    textAlign: "center",
                    borderRadius: "10px",
                    padding: "10px 0",
                  }}
                >
                  {car}
                </button>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
