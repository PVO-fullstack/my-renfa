import React, { useEffect, useState } from "react";
import style from "./Pagination.module.scss";

export const Pagination = ({ count, limit, page, pageClick, next }) => {
  const [paginate, setPaginate] = useState(1);
  const [pages, setPages] = useState();
  const [countPages, setCountPages] = useState();

  useEffect(() => {
    const countOfPages = count / limit;
    setCountPages(countOfPages);
    const allPages = [];
    for (let i = 1; i <= countOfPages + 1; i++) {
      allPages.push(i);
    }
    const onePaginate = allPages.splice(page - 1, 3);
    setPages(onePaginate);
  }, [count, limit, page, paginate]);

  console.log("count", count, limit, page);

  return (
    <div className={style.conteiner}>
      {pages &&
        pages.map((item) => (
          <div key={item}>
            <p onClick={() => pageClick(item)}>{item}</p>
          </div>
        ))}
      {countPages > 3 && <p onClick={() => next()}>{">"}</p>}
    </div>
  );
};
