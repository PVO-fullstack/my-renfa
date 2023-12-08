import React from "react";
import Image from "next/image";
import css from "./AllModels.module.scss";
import Link from "next/link";

export const Faw = () => {
  return (
    <div className={css.brand}>
      <h1 className={css.title}>FAW</h1>
      <ul className={css.list}>
        <Link
          href={{
            pathname: `/models/FAW/B30`,
          }}
        >
          <li className={css.item}>
            <Image
              src="/b30.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p>B30</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/FAW/X40`,
          }}
        >
          <li className={css.item}>
            <Image
              src="/X40.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p>X40</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/FAW/X80`,
          }}
        >
          <li className={css.item}>
            <Image
              src="/x80.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p>X80</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};
