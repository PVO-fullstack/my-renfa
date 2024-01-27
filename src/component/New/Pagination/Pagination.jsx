"use client";

import React, { useCallback, useEffect, useState } from "react";
import style from "./Pagination.module.scss";
import { usePathname, useRouter } from "next/navigation";

export const Pagination = ({ count, limit, page }) => {
  const [paginate, setPaginate] = useState(1);
  const [pages, setPages] = useState();
  const [countPages, setCountPages] = useState();
  const [firstPage, setFirstPage] = useState(1);

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const countOfPages = count / limit;
    setCountPages(Math.ceil(countOfPages));
    const allPages = [];
    for (let i = 1; i <= Math.ceil(countOfPages); i++) {
      allPages.push(i);
    }
    if (allPages.length > 3) {
      const onePaginate = allPages.splice(firstPage - 1, 3);
      setPages(onePaginate);
      return;
    }
    setPages(allPages);
  }, [count, limit, page]);

  const createQueryString = useCallback((name, value) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  }, []);

  const handleClickPage = (item) => {
    // console.log("pege", pege);
    // setPage(pege);
    router.push(
      pathName + "?" + createQueryString("page", item) + "&" + "limit=" + limit
    );
  };

  const handleNext = () => {
    setFirstPage(firstPage + 3);
    router.push(
      pathName +
        "?" +
        createQueryString("page", firstPage + 3) +
        "&" +
        "limit=" +
        limit
    );
  };

  const handlePrev = () => {
    if (page < 4) {
      setFirstPage(1);
      router.push(
        pathName + "?" + createQueryString("page", 1) + "&" + "limit=" + limit
      );
      return;
    }
    setFirstPage(firstPage - 3);
    router.push(
      pathName +
        "?" +
        createQueryString("page", firstPage - 3) +
        "&" +
        "limit=" +
        limit
    );
  };

  return (
    <div className={style.conteiner}>
      {countPages > 3 && (
        <button
          className={style.none}
          disabled={pages[0] === 1}
          type="button"
          onClick={() => handlePrev()}
        >
          {"<"}
        </button>
      )}
      {pages?.map((item) => (
        <div className={item === page ? style.dot : style.none} key={item}>
          <p onClick={() => handleClickPage(item)}>{item}</p>
        </div>
      ))}
      {countPages > 3 && (
        <button
          className={style.none}
          disabled={
            pages[0] === countPages ||
            pages[1] === countPages ||
            pages[2] === countPages
          }
          type="button"
          onClick={() => handleNext()}
        >
          {">"}
        </button>
      )}
    </div>
  );
};
