import React, { useEffect, useState } from "react";
import style from "./Pagination.module.scss";

export const Pagination = ({
  count,
  limit,
  page,
  pageClick,
  nextPage,
  prevPage,
}) => {
  const [paginate, setPaginate] = useState(1);
  const [pages, setPages] = useState();
  const [countPages, setCountPages] = useState();

  console.log("prev", page);

  useEffect(() => {
    const countOfPages = count / limit;
    setCountPages(Math.ceil(countOfPages));
    const allPages = [];
    for (let i = 1; i <= Math.ceil(countOfPages); i++) {
      allPages.push(i);
    }
    if (allPages.length > 3) {
      const onePaginate = allPages.splice(page - 1, 3);
      setPages(onePaginate);
      return;
    }
    setPages(allPages);
  }, [count, limit, page, paginate]);

  //   console.log("count", pages, countPages);

  return (
    <div className={style.conteiner}>
      {countPages > 3 && (
        <button
          className={style.none}
          disabled={pages[0] === 1}
          type="button"
          onClick={() => prevPage()}
        >
          {"<"}
        </button>
      )}
      {pages?.map((item) => (
        <div className={item === page ? style.dot : style.none} key={item}>
          <p onClick={() => pageClick(item)}>{item}</p>
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
          onClick={() => nextPage()}
        >
          {">"}
        </button>
      )}
    </div>
  );
};
