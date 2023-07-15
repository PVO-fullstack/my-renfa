import React from "react";
import Image from "next/image";
import css from "./AllModels.module.css";
import Link from "next/link";

export const Ravon = () => {
  return (
    <div className={css.brand}>
      <h1 className={css.title}>Ravon</h1>
      <ul className={css.list}>
        <Link
          href={{
            pathname: `/models/Ravon/R2`,
          }}
        >
          <li className={css.item}>
            <Image src="/R2.webp" width={200} height={200} alt="Ravon R2" />
            <p>R2</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/Ravon/R3`,
          }}
        >
          <li className={css.item}>
            <Image src="/R3.webp" width={200} height={200} alt="Ravon R3" />
            <p>R3</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/Ravon/R4`,
          }}
        >
          <li className={css.item}>
            <Image src="/R4.webp" width={200} height={200} alt="Ravon R4" />
            <p>R4</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/Ravon/Gentra`,
          }}
        >
          <li className={css.item}>
            <Image
              src="/Gentra.webp"
              width={200}
              height={200}
              alt="Ravon Gentra"
            />
            <p>Gentra</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};
