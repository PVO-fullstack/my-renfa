// "use client";

import { useCallback } from "react";
import style from "./PartList.module.scss";
import { getModel, getOnePart } from "@/apiService/apiParts";
// import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { refreshUser } from "@/lib/auth/auth-operations";
import Link from "next/link";
import { KURS } from "@/variable/variable";
import Image from "next/image";
import { Button } from "../Button";
import { Part } from "../Part/Part";
import { PartListItem } from "../New/PartListItem/PartListItem";
import { SortPanel } from "../New/SortPanel/SortPanel";
import { Pagination } from "../New/Pagination/Pagination";
// import { usePathname } from "next/navigation";
import { Loader } from "../Loader/Loader";
import { PartsLayout } from "../New/PartsLayout/PartsLayout";
import { useSearchParams } from "next/navigation";
import { SearchIcon } from "../New/SearchIcon/SearchIcon";
// import { useRouter } from "next/navigation";

export const PartList = async ({
  find,
  modelName,
  brand,
  searchParams,
  page,
  limit,
}) => {
  // console.log("limit", limit, page);
  // const [partName, setPartName] = useState();
  // const [filtredParts, setFiltredParts] = useState([]);
  // const [sortedParts, setSortedParts] = useState([]);
  // const [page, setPage] = useState(1);
  // const [pages, setPages] = useState();
  // const [model, setModel] = useState([]);
  // const [first, setFirst] = useState();
  // const [onePart, setOnePart] = useState();
  // const [count, setCount] = useState();
  // const [limit, setLimit] = useState(6);
  // const [isLoading, setIsLoading] = useState(false);
  // const pathName = usePathname();

  // const router = useRouter();

  // const qwe = useSearchParams();
  // console.log("qwe", qwe);

  // console.log("pathName", pathName);
  // console.log("router", router);
  // const dispatch = useDispatch();
  // let filtredParts;
  // let count;
  // let page;
  // let limit;
  // useEffect(() => {
  // dispatch(refreshUser());
  // const getData = async () => {
  // const modelName = await router.query.slag;
  // setModel(modelName);
  let filtredParts;
  let count;
  if (modelName) {
    if (find) {
      const part = await getOnePart(modelName, page || 1, limit || 6);
      // if (modelName !== model) {
      //   setPage(1);
      // }
      // setIsLoading(true);
      filtredParts = part.modelParts;
      count = part.count;
      // setFiltredParts(part.modelParts || part.parts);
      // setCount(part.count);
      // setIsLoading(false);
      return;
    }

    const modelPart = modelName;
    if (modelPart) {
      // if (modelName[1] !== modelPart) {
      //   setPage(1);
      // }
      // setIsLoading(true);
      const allParts = await getModel(modelPart, page || 1, limit || 6);
      // console.log("allParts", allParts);
      filtredParts = allParts.modelParts;
      count = allParts.count;
      // setPart(allParts.modelParts);
      // setFiltredParts(allParts.modelParts);
      // setCount(allParts.count);
      // setIsLoading(false);
    }
  }
  //   getData();
  // }, [find, limit, model, modelName, page]);

  // const createQueryString = useCallback((name, value) => {
  //   const params = new URLSearchParams();
  //   params.set(name, value);

  //   return params.toString();
  // }, []);

  // const handleClickPage = (pege) => {
  //   console.log("pege", pege);
  //   setPage(pege);
  //   router.push(
  //     pathName + "?" + createQueryString("page", pege) + "limit=" + limit
  //   );
  // };

  // const handleNext = () => {
  //   setPage(page + 3);
  //   router.push(
  //     pathName + "?" + createQueryString("page", page + 3) + "limit=" + limit
  //   );
  // };

  // const handlePrev = () => {
  //   if (page < 4) {
  //     setPage(1);
  //     router.push(
  //       pathName + "?" + createQueryString("page", 1) + "limit=" + limit
  //     );
  //     return;
  //   }
  //   setPage(page - 3);
  //   router.push(
  //     pathName + "?" + createQueryString("page", page - 3) + "limit=" + limit
  //   );
  // };

  // console.log(filtredParts, part);

  return (
    <>
      {/* <PartsLayout parts={filtredParts} partsCount={count} /> */}
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <div className={style.conteiner}>
        <h1 className={style.title}>
          {find
            ? `Пошуковий запит: "${modelName}"`
            : `Запчастини ${brand} ${modelName}`}
        </h1>
        <SortPanel />
        <ul className={style.ImageGallery}>
          {filtredParts?.length > 0 &&
            filtredParts.map((part, index) => (
              <PartListItem
                find={find}
                key={part._id}
                model={modelName}
                part={part}
              />
            ))}
        </ul>
        <div className={style.btn_conteiner}>
          <Pagination
            // pageClick={handleClickPage}
            // nextPage={handleNext}
            // prevPage={handlePrev}
            limit={limit}
            count={count}
            page={page}
          />
        </div>
      </div>
      {/* )} */}
    </>
  );
};
