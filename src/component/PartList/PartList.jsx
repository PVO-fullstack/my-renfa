import { useEffect, useState } from "react";
import style from "./PartList.module.scss";
import { getModel } from "@/apiService/apiParts";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { refreshUser } from "@/redux/auth/auth-operations";
import Link from "next/link";
import { KURS } from "@/variable/variable";
import Image from "next/image";
import { Button } from "../Button";
import { Part } from "../Part/Part";
import { PartListItem } from "../New/PartListItem/PartListItem";
import { SortPanel } from "../New/SortPanel/SortPanel";

export const PartList = ({ openModal, getAllParts }) => {
  const [part, setPart] = useState([]);
  const [filtredParts, setFiltredParts] = useState([]);
  const [sortedParts, setSortedParts] = useState([]);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState();

  const router = useRouter();
  const model = router.query.slag;
  console.log("model", model);

  const dispatch = useDispatch();

  //   const qw = (sd) => {
  //             if (sortedAllParts.length > 8) {
  //             const pages = sortedAllParts.length / 8;
  //             setPages(pages - 1);
  //             const onePage = sortedAllParts.slice(8 * page, 8 * (page + 1));
  // }

  useEffect(() => {
    dispatch(refreshUser());
    if (model) {
      const modelName = model[1];
      if (modelName) {
        async function getParts(modelName) {
          const allParts = await getModel(modelName);
          const sortedAllParts = allParts.sort((first, second) =>
            first.Part_Name.localeCompare(second.Part_Name)
          );
          if (sortedAllParts.length > 8) {
            const pages = sortedAllParts.length / 6;
            setPages(pages - 1);
            const onePage = sortedAllParts.slice(6 * page, 6 * (page + 1));
            console.log("onePage", onePage);
            setSortedParts(onePage);
            setPart(sortedAllParts);
            return;
          }
          setPart(sortedAllParts);
          setFiltredParts(sortedAllParts);
          // console.log("allParts", allParts);
        }
        getParts(modelName);
      }
    }
  }, [dispatch, model, page]);

  console.log("part", part);
  getAllParts(part);

  console.log("page", page, pages);

  const filterPart = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    const inputToLowerCase = inputValue.toLowerCase();
    const qq = part.filter((item) =>
      item.Part_Name.toLowerCase().includes(inputToLowerCase || "")
    );
    setPage(0);
    setPages(qq.length / 8);
    const onePage = qq.slice(6 * page, 6 * (page + 1));
    setFiltredParts(qq);
    setSortedParts(onePage);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  console.log(filtredParts);

  return (
    <div className={style.conteiner}>
      <h1 className={style.title}>Запчастини {`${model[0]} ${model[1]}`}</h1>
      <SortPanel />
      {/* <label className={style.label}>
        Введіть назву або каталожний номер
        <input className={style.filter} onChange={filterPart} type="text" />
      </label> */}
      <ul className={style.ImageGallery}>
        {filtredParts.length > 0
          ? filtredParts.map((part, index) => (
              <PartListItem key={part._id} model={model} part={part} />
            ))
          : sortedParts.map((part, index) => (
              <PartListItem key={part._id} model={model} part={part} />
            ))}
      </ul>
      {/* {sortedParts.length > 8 ||
        (filtredParts.length > 8 && ( */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Button
          disabled={page === 0 ? true : false}
          type={"button"}
          onClick={prevPage}
        >
          Prev
        </Button>
        <Button
          disabled={page === pages || page > pages ? true : false}
          type={"button"}
          onClick={nextPage}
        >
          Next
        </Button>
      </div>
      {/* ))} */}
    </div>
  );
};
