import { useEffect, useState } from "react";
import css from "./Part.module.css";
import { getModel } from "@/apiService/apiParts";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { refreshUser } from "@/redux/auth/auth-operations";
import Link from "next/link";

export const Part = ({ openModal, getAllParts }) => {
  const [part, setPart] = useState([]);
  const [filtredParts, setFiltredParts] = useState([]);

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
          setFiltredParts(allParts);
          console.log("allParts", allParts);
        }
        getParts(modelName);
      }
    }
  }, [dispatch, model]);

  console.log("part", part);
  getAllParts(part);

  const filterPart = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    const inputToLowerCase = inputValue.toLowerCase();
    const qq = part.filter((item) =>
      item.Part_Name.toLowerCase().includes(inputToLowerCase || "")
    );
    setFiltredParts(qq);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        onChange={filterPart}
        style={{ width: "200px", marginTop: "50px", marginBottom: "50px" }}
        type="text"
      />
      <ul className={css.ImageGallery}>
        {filtredParts.map((part, index) => (
          <Link
            href={{
              pathname: `/models/${model[0]}/${model[1]}/${part.Articul}`,
            }}
            key={part._id}
          >
            <li className={css.ImageGalleryItem}>
              {/* <a
            onClick={(e) => {
              e.preventDefault();
              openModal(index);
            }}
            href={part.Img}
          > */}
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
              {/* </a> */}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
