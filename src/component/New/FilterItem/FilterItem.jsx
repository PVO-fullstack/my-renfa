"use client";

import React, { useEffect, useState } from "react";
import mg from "../../../data/mg.json";
import style from "./FilterItem.module.scss";
import { Arrow } from "../Arrow/Arrow";
import Link from "next/link";

export const FilterItem = ({ data, fara, selected }) => {
  const [open, setOpen] = useState(false);

  // console.log("selected", selected);

  useEffect(() => {
    if (fara) {
      setOpen(true);
    }
  }, [fara]);

  const handleOpen = () => {
    setOpen(!open);
  };

  // console.log("data", fara);

  const brand = data.cars;

  return (
    <>
      {data && (
        <div className={open ? style.list_open : style.list}>
          <div className={style.conteiner}>
            <Link
              className={style.link}
              href={`/models/${data.title}`}
              // href={{
              //   pathname: `/models/[car]`,
              //   query: { car: data.title },
              // }}
            >
              {data.title}
            </Link>
            <span className={style.arrow} onClick={handleOpen}>
              <Arrow open={open} />
            </span>
          </div>

          <ul className={open ? style.item_open : style.item}>
            {brand.map((car) => (
              <Link
                href={{
                  pathname: `${car.link}`,
                }}
                key={car.model}
              >
                <li
                  className={
                    selected === car.model ? style.model_selected : style.model
                  }
                >
                  {car.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
