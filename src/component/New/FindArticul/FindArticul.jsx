"use client";

import { useRouter } from "next/router";
import mg from "@/data/mg.json";
import faw from "@/data/faw.json";
import jac from "@/data/jac.json";
import geely from "@/data/geely.json";
import chery from "@/data/chery.json";
import { useCallback, useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";
import { getOnePart } from "@/apiService/apiParts";
import { Part } from "@/component/Part/Part";
import Link from "next/link";
import style from "./FindArticul.module.scss";
import { usePathname, useSearchParams } from "next/navigation";
import { Pagination } from "../Pagination/Pagination";
import { SortPanel } from "../SortPanel/SortPanel";
import { PartListItem } from "../PartListItem/PartListItem";

export const FindArticul = () => {
  const router = useRouter();
  const [first, setFirst] = useState();
  const [onePart, setOnePart] = useState();
  const [count, setCount] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const pathName = usePathname();

  useEffect(() => {
    const takeBrand = async () => {
      const articul = await router.query.slag;
      // console.log("brand", articul);
      setFirst(articul);
      if (articul) {
        if (articul !== first) {
          setPage(1);
        }

        const part = await getOnePart(articul, page || 1, limit || 6);
        setOnePart(part.modelParts || part.parts);
        setCount(part.count);
      }
    };
    takeBrand();
  }, [first, limit, page, router.query.slag]);

  const createQueryString = useCallback((name, value) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  }, []);

  const handleClickPage = (pege) => {
    // console.log("pege", pege);
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

  // console.log("first", first);
  return (
    <div className={style.conteiner}>
      <h1 className={style.title}>Пошуковий запит: &quot;{first}&quot;</h1>
      {/* <SortPanel /> */}
      <ul className={style.ImageGallery}>
        {first && (
          <div className={style.carList}>
            <Filter />
            <div className={style.gallery}>
              <SortPanel />
              {onePart &&
                onePart.map((part) => (
                  <PartListItem key={part._id} part={part} />
                ))}
            </div>
          </div>
        )}
      </ul>
      <Pagination
        pageClick={handleClickPage}
        nextPage={handleNext}
        prevPage={handlePrev}
        limit={limit}
        count={count}
        page={page}
      />
    </div>
  );
};
