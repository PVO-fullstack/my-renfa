import Layout from "@/app/layout";
import cars from "../data/cars.json";
import { useRouter } from "next/router";
import Link from "next/link";
import css from "./CarOfBrend.module.css";

export const CarOfBrend = () => {
  const router = useRouter();

  const page = router.query.slag;
  console.log(page);

  const model = cars.filter((car) => car.Brend === page);

  const uniquModels = [];

  for (let car of model) {
    // console.log(car);
    const qwe = uniquModels.map((item) => item.Model);
    if (!qwe.includes(car.Model)) {
      uniquModels.push(car);
    }
  }

  // const style = page.toLowerCase();

  // console.log(style);

  return (
    <Layout>
      <div className={css.carList}>
        <h1 id="title" style={{ textAlign: "center" }}>
          {page}
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
          {uniquModels.map((car) => (
            <Link
              href={{
                pathname: `/models/[page]/[model]`,
                query: { page: page, model: car.Model },
              }}
              key={car.Model}
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
                  {car.Model}
                </button>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
