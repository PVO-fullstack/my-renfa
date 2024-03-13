"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import style from "./Brand.module.scss";

export const Brand = ({ model, get }) => {
  return (
    <div>
      <ul className={style.model}>
        {model.map((item) => (
          <li key={item.Brend}>
            <Link
              className={style.link}
              // href={"/models/MG"}

              href={`/models/${item.Brend}`}
              // href={{
              //   pathname: `/models/[car]`,
              //   query: { car: item.Brend },
              // }}
            >
              {/* <img className={style.logo} src={item.logo} alt="" /> */}
              <p
                onMouseEnter={(e) => get(e.currentTarget.lastChild.data)}
                onMouseOut={() => get(false)}
                id="brand"
                className={style.brend}
              >
                {item.Brend}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
