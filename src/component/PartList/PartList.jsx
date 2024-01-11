import { useCallback, useEffect, useState } from "react";
import style from "./PartList.module.scss";
import { getModel, getOnePart } from "@/apiService/apiParts";
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
import { Loader } from "../Loader/Loader";
import { PartsLayout } from "../New/PartsLayout/PartsLayout";

export const PartList = ({ find }) => {
  const [partName, setPartName] = useState();
  const [filtredParts, setFiltredParts] = useState([]);
  const [sortedParts, setSortedParts] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState();
  const [model, setModel] = useState([]);
  const [first, setFirst] = useState();
  const [onePart, setOnePart] = useState();
  const [count, setCount] = useState();
  const [limit, setLimit] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const pathName = usePathname();

  const router = useRouter();
  console.log("model", model);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    const getData = async () => {
      const modelName = await router.query.slag;
      setModel(modelName);
      if (modelName) {
        if (find) {
          if (modelName !== model) {
            setPage(1);
          }
          setIsLoading(true);
          const part = await getOnePart(modelName, page || 1, limit || 6);
          setFiltredParts(part.modelParts || part.parts);
          setCount(part.count);
          setIsLoading(false);
          return;
        }

        const modelPart = modelName[1];
        if (modelPart) {
          if (model[1] !== modelPart) {
            setPage(1);
          }
          // console.log("model", model, modelName, modelPart);
          setIsLoading(true);
          const allParts = await getModel(modelPart, page || 1, limit || 6);
          console.log("allParts", allParts);
          // setPart(allParts.modelParts);
          setFiltredParts(allParts.modelParts);
          setCount(allParts.count);
          setIsLoading(false);
        }
      }
    };
    getData();
  }, [dispatch, find, limit, model, page, router.query.slag]);

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

  const handlePrev = () => {
    if (page < 4) {
      setPage(1);
      router.push(
        pathName + "?" + createQueryString("page", 1) + "limit=" + limit
      );
      return;
    }
    setPage(page - 3);
    router.push(
      pathName + "?" + createQueryString("page", page - 3) + "limit=" + limit
    );
  };

  // console.log(filtredParts, part);

  return (
    <>
      {/* <PartsLayout parts={filtredParts} partsCount={count} /> */}
      {isLoading ? (
        <Loader />
      ) : (
        <div className={style.conteiner}>
          <h1 className={style.title}>
            Запчастини
            {/* {`${model[0]} ${model[1]}`} */}
          </h1>
          <SortPanel />
          <ul className={style.ImageGallery}>
            {filtredParts?.length > 0 &&
              filtredParts.map((part, index) => (
                <PartListItem
                  find={find}
                  key={part._id}
                  model={model}
                  part={part}
                />
              ))}
          </ul>
          <div className={style.btn_conteiner}>
            <Pagination
              pageClick={handleClickPage}
              nextPage={handleNext}
              prevPage={handlePrev}
              limit={limit}
              count={count}
              page={page}
            />
          </div>
        </div>
      )}
    </>
  );
};
