import { useEffect, useState } from "react";
import css from "./Part.module.scss";
import { getModel } from "@/apiService/apiParts";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { refreshUser } from "@/redux/auth/auth-operations";
import Link from "next/link";
import { KURS } from "@/variable/variable";
import Image from "next/image";

export const Part = ({ openModal, getAllParts }) => {
  const [part, setPart] = useState([]);
  const [filtredParts, setFiltredParts] = useState([]);

  const router = useRouter();
  const model = router.query.slag;
  console.log("model", model);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    if (model) {
      const modelName = model[1];
      if (modelName) {
        async function getParts(modelName) {
          const allParts = await getModel(modelName);
          const sortedParts = allParts.sort((first, second) =>
            first.Part_Name.localeCompare(second.Part_Name)
          );
          setPart(sortedParts);
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
      <h1 className={css.title}>{`${model[0]} ${model[1]}`}</h1>
      <label className={css.label}>
        Введіть назву або каталожний номер
        <input className={css.filter} onChange={filterPart} type="text" />
      </label>
      <ul className={css.ImageGallery}>
        {filterPart.length > 0 &&
          filtredParts.map((part, index) => (
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
                <p className={css.text}>{part.Part_Name}</p>
                <div>
                  <Image
                    className={
                      part.Quantity > 0
                        ? `${css.ImageGalleryItem_image}`
                        : `${css.ImageGalleryItem_image_null}`
                    }
                    src={part.Img}
                    alt={part.Description}
                    width={100}
                    height={100}
                  />
                  <p className={css.text}>
                    Ціна: {Math.round(part.Price * KURS)} грн
                  </p>
                  {/* <p className={css.text}>Кількість: {part.Quantity}</p> */}
                </div>
                {/* </a> */}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};
