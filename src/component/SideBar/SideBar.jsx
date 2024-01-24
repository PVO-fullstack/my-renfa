"use client";

import Link from "next/link";
import model from "@/data/model.json";
import css from "./SideBar.module.scss";

export const SideBar = () => {
  return (
    <ul className={css.list}>
      {model.map((item) => (
        <Link
          key={item.Brend}
          // href={"/models/MG"}

          href={`/models/${item.Brend}`}

          // href={{
          //   pathname: `/models/[car]`,
          //   query: { car: item.Brend },
          // }}
        >
          <li className={css.item}>
            <img className={css.logo} src={item.logo} alt="" />
            <p className={css.brend}>{item.Brend}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};
