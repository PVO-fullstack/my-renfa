import { useEffect, useState } from "react";
import css from "./Part.module.css";
import { getModel } from "@/apiService/apiParts";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { refreshUser } from "@/redux/auth/auth-operations";

export const Part = ({ openModal, getAllParts }) => {
  const [part, setPart] = useState([]);

  const router = useRouter();
  const model = router.query.slag;
  console.log("model", model);

  const dispatch = useDispatch();

  const kurs = 40;
  useEffect(() => {
    dispatch(refreshUser());
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
  }, [dispatch, model]);

  console.log("part", part);
  getAllParts(part);

  return (
    <ul className={css.ImageGallery}>
      {part.map((part, index) => (
        <li className={css.ImageGalleryItem} key={part._id}>
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
              Ціна: {Math.round(part.Price * kurs)} грн
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
};
