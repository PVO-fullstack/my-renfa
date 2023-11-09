import React from "react";
import Image from "next/image";
import css from "./AllModels.module.css";
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
              src="/350.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p>350</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/MG/550`,
          }}
        >
          <li className={css.item}>
            <Image
              src="/550.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p>550</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/MG/6`,
          }}
        >
          <li className={css.item}>
            <Image src="/6.webp" width={200} height={200} alt="Chery Amulet" />
            <p>6</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/MG/3`,
          }}
        >
          <li className={css.item}>
            <Image src="/3.webp" width={200} height={200} alt="Chery Amulet" />
            <p>3Cross</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/MG/5`,
          }}
        >
          <li className={css.item}>
            <Image src="/5.webp" width={200} height={200} alt="Chery Amulet" />
            <p>5</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/MG/ZS`,
          }}
        >
          <li className={css.item}>
            <Image src="/zs.webp" width={200} height={200} alt="MG ZS" />
            <p>ZS</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/MG/5(2020)`,
          }}
        >
          <li className={css.item}>
            <Image
              src="/mg5.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p>5(2020)</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/MG/HS`,
          }}
        >
          <li className={css.item}>
            <Image src="/HS.webp" width={200} height={200} alt="Chery Amulet" />
            <p>HS</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};
