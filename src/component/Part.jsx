import { useEffect, useState } from "react";
// import parts from "../data/350.json";
import css from "./Part.module.css";
import { getModel } from "@/apiService/apiParts";
import { useRouter } from "next/router";

// const partsList = JSON.parse(parts);

export const Part = ({ openModal, getAllParts }) => {
  const [part, setPart] = useState([]);

  const router = useRouter();
  const model = router.query.slag;
  console.log("model", model);
  //     // let parts = [];
  // if (model) {
  // const modelName = model.splice(1, 1);
  // const parts = cars.filter((car) => car.Model.toString() === model[1]);
  // setPart(model[1]);
  // console.log("qwe", modelName);
  // }
  // console.log(parts);

  const kurs = 40;
  useEffect(() => {
    if (model) {
      const modelName = model[1];
      if (modelName) {
        async function getParts(modelName) {
          const allParts = await getModel(modelName);
          setPart(allParts);
          console.log("allParts", allParts);
        }
        getParts(modelName);
      }
    }
  }, [model]);

  console.log("part", part);
  getAllParts(part);

  return (
    <ul className={css.ImageGallery}>
      {part.map((part, index) => (
        <li className={css.ImageGalleryItem} key={part.Articul}>
          <a
            onClick={(e) => {
              e.preventDefault();
              openModal(index);
            }}
            href={part.Img}
          >
            <p
              style={{
                color: "black",
                height: "40px",
                textAlign: "center",
                padding: "0 10px",
              }}
            >
              {part.Part_Name}
            </p>
            <img
              className={css.ImageGalleryItem_image}
              src={part.Img}
              alt={part.Description}
            />
            <p style={{ color: "black", textAlign: "center" }}>
              Ціна: {part.Price * kurs} грн
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
};
