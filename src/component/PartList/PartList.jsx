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

  const qw = (sd) => {
    if (sd.length > 8) {
      const pages = sd.length / 8;
      setPages(pages - 1);
      const onePage = sd.slice(8 * page, 8 * (page + 1));
      console.log("onePage", onePage);
      setSortedParts(onePage);
      setPart(sd);
      return;
    }
    setPart(sd);
    setSortedParts(sd);
    console.log("allParts", allParts);
  };

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
          // qw(sortedAllParts);
          if (sortedAllParts.length > 8) {
            const pages = sortedAllParts.length / 8;
            setPages(pages - 1);
            const onePage = sortedAllParts.slice(8 * page, 8 * (page + 1));
            console.log("onePage", onePage);
            setSortedParts(onePage);
            setPart(sortedAllParts);
            return;
          }
          setPart(sortedAllParts);
          setFiltredParts(sortedAllParts);
          console.log("allParts", allParts);
        }
        getParts(modelName);
      }
    }
  }, [dispatch, model]);

  console.log("part", part);
  getAllParts(part);

  console.log("page", page, pages);

  const filterPart = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    const inputToLowerCase = inputValue.toLowerCase();
    const filtred = part.filter((item) =>
      item.Part_Name.toLowerCase().includes(inputToLowerCase || "")
    );
    setSortedParts(filtred);

    // setPage(0);
    // setPages(qq.length / 8);
    // const onePage = qq.slice(8 * page, 8 * (page + 1));
    // setSortedParts(onePage);
    // if (inputValue === "") {
    // }
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
      <h1 className={style.title}>{`${model[0]} ${model[1]}`}</h1>
      <label className={style.label}>
        Введіть назву або каталожний номер
        <input className={style.filter} onChange={filterPart} type="text" />
      </label>
      <ul className={style.ImageGallery}>
        {sortedParts.length > 0 &&
          sortedParts.map((part, index) => (
            <Link
              href={{
                pathname: `/models/${model[0]}/${model[1]}/${part.Articul}`,
              }}
              key={part._id}
            >
              <Part part={part} />
            </Link>
            // ))
            // : sortedParts.map((part, index) => (
            //     <Link
            //       href={{
            //         pathname: `/models/${model[0]}/${model[1]}/${part.Articul}`,
            //       }}
            //       key={part._id}
            //     >
            //       <Part part={part} />
            //     </Link>
          ))}
      </ul>
      {sortedParts.length > 8 ||
        (filtredParts.length > 8 && (
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
        ))}
    </div>
  );
};
