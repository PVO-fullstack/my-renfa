import { useRouter } from "next/router";
import Link from "next/link";
import css from "./CarOfBrend.module.css";
import { useEffect, useState } from "react";
import { getModelBrand } from "@/apiService/apiParts";
import { useDispatch } from "react-redux";
import { refreshUser } from "@/redux/auth/auth-operations";
import Image from "next/image";
import Amulet from "../../public/amulet.webp";
import Elara from "../../public/elara.webp";
import Karry from "../../public/karry.webp";
import { Chery } from "./Chery";
import { MG } from "./MG";
import { Geely } from "./Geely";
import { Faw } from "./Faw";
import { Jac } from "./Jac";
import { Ravon } from "./Ravon";

export const CarOfBrend = () => {
  const router = useRouter();
  const brand = router.query.slag;
  // console.log(brand);

  // const cars = { Amulet, Elara, Karry };

  // const [models, setModels] = useState([]);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUser());
  //   if (brand) {
  //     async function getBrand(brand) {
  //       const brandID = await getModelBrand(brand);
  //       console.log("brand", brandID);
  //       const allModel = brandID.flatMap((el) => el.Model);
  //       const uniqueModel = allModel.filter(
  //         (model, index, array) => array.indexOf(model) === index
  //       );
  //       setModels(uniqueModel);
  //     }
  //     getBrand(brand);
  //   }
  // }, [brand, dispatch]);

  // console.log("model", models);

  return (
    <div className={css.carList}>
      {/* <h1 id="title" style={{ textAlign: "center" }}>
        {brand}
      </h1> */}
      {brand === "Chery" && <Chery />}
      {brand === "MG" && <MG />}
      {brand === "Geely" && <Geely />}
      {brand === "FAW" && <Faw />}
      {brand === "JAC" && <Jac />}
      {brand === "Ravon" && <Ravon />}
      {/* <ul
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
              {car === "Amulet" && (
                <Image src={cars.Amulet} height={200} width={200} alt="car" />
              )}
              {car === "Elara" && (
                <Image src={cars.Elara} height={200} width={200} alt="car" />
              )}
              {car === "Karry" && (
                <Image src={cars.Karry} height={200} width={200} alt="car" />
              )} */}

      {/* <button
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
              </button> */}
      {/* </li>
          </Link>
        ))}
      </ul> */}
    </div>
  );
};
