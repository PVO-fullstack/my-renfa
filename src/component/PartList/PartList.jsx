import { useCallback, useEffect, useState } from "react";
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
import { Pagination } from "../New/Pagination/Pagination";
import { usePathname } from "next/navigation";

export const PartList = () => {
  const [part, setPart] = useState([]);
  const [filtredParts, setFiltredParts] = useState([]);
  const [sortedParts, setSortedParts] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState();
  const [model, setModel] = useState([]);
  const [first, setFirst] = useState();
  const [onePart, setOnePart] = useState();
  const [count, setCount] = useState();
  const [limit, setLimit] = useState(6);
  const pathName = usePathname();

  const router = useRouter();
  console.log("model", model);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    const getData = async () => {
      const modelName = await router.query.slag;
      // console.log("modelName", modelName);
      setModel(modelName);
      if (modelName) {
        const modelPart = modelName[1];
        if (modelPart) {
          if (model[1] !== modelPart) {
            setPage(1);
          }
          console.log("model", model, modelName, modelPart);
          const allParts = await getModel(modelPart, page || 1, limit || 6);
          console.log("allParts", allParts);
          setPart(allParts.modelParts);
          setFiltredParts(allParts.modelParts);
          setCount(allParts.count);
          // setSortedParts(allParts.modelParts);
          // console.log("allParts", allParts);
        }
        // getParts(modelName);
      }
    };
    getData();
  }, [dispatch, limit, model, page, router.query.slag]);

  const createQueryString = useCallback((name, value) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  }, []);

  const handleClickPage = (pege) => {
    console.log("pege", pege);
    setPage(pege);
    router.push(
      pathName + "?" + createQueryString("page", pege) + "limit=" + limit
    );
  };

  const handleNext = () => {
    setPage(page + 3);
    router.push(
      pathName + "?" + createQueryString("page", page + 3) + "limit=" + limit
    );
  };
  // console.log("part", part);
  // getAllParts(part);

  // console.log("page", page, pages);

  // const filterPart = (e) => {
  //   e.preventDefault();
  //   const inputValue = e.target.value;
  //   const inputToLowerCase = inputValue.toLowerCase();
  //   const qq = part.filter((item) =>
  //     item.Part_Name.toLowerCase().includes(inputToLowerCase || "")
  //   );
  //   setPage(0);
  //   setPages(qq.length / 8);
  //   const onePage = qq.slice(6 * page, 6 * (page + 1));
  //   setFiltredParts(qq);
  //   setSortedParts(onePage);
  // };

  // const nextPage = () => {
  //   setPage(page + 1);
  // };

  // const prevPage = () => {
  //   setPage(page - 1);
  // };

  console.log(filtredParts, part);

  return (
    <div className={style.conteiner}>
      <h1 className={style.title}>Запчастини {`${model[0]} ${model[1]}`}</h1>
      <SortPanel />
      {/* <label className={style.label}>
        Введіть назву або каталожний номер
        <input className={style.filter} onChange={filterPart} type="text" />
      </label> */}
      <ul className={style.ImageGallery}>
        {filtredParts?.length > 0 &&
          filtredParts.map((part, index) => (
            <PartListItem key={part._id} model={model} part={part} />
          ))}
        {/* {sortedParts?.length > 0 &&
          sortedParts.map((part, index) => (
            <PartListItem key={part._id} model={model} part={part} />
          ))} */}
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
        <Pagination
          pageClick={handleClickPage}
          next={handleNext}
          limit={limit}
          count={count}
          page={page}
        />
        {/* <Button
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
        </Button> */}
      </div>
      {/* ))} */}
    </div>
  );
};
