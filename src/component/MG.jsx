import React from "react";
import Image from "next/image";
import css from "./AllModels.module.scss";
import Link from "next/link";

export const MG = () => {
  return (
    <div>
      <h1 className={css.title}>MG</h1>
      <ul className={css.list}>
        <Link
          href={{
            pathname: `/models/MG/350`,
          }}
        >
          <li className={css.item}>
            <Image
              className={css.img}
              src="/350.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p className={css.mod}>350</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/MG/550`,
          }}
        >
          <li className={css.item}>
            <Image
              className={css.img}
              src="/550.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p className={css.mod}>550</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/MG/6`,
          }}
        >
          <li className={css.item}>
            <Image
              className={css.img}
              src="/6.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p className={css.mod}>6</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/MG/3`,
          }}
        >
          <li className={css.item}>
            <Image
              className={css.img}
              src="/3.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p className={css.mod}>3Cross</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/MG/5`,
          }}
        >
          <li className={css.item}>
            <Image
              className={css.img}
              src="/5.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p className={css.mod}>5</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/MG/ZS`,
          }}
        >
          <li className={css.item}>
            <Image
              className={css.img}
              src="/zs.webp"
              width={200}
              height={200}
              alt="MG ZS"
            />
            <p className={css.mod}>ZS</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/MG/5(2020)`,
          }}
        >
          <li className={css.item}>
            <Image
              className={css.img}
              src="/mg5.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p className={css.mod}>5(2020)</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/MG/HS`,
          }}
        >
          <li className={css.item}>
            <Image
              className={css.img}
              src="/HS.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p className={css.mod}>HS</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};
