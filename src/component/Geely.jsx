import React from "react";
import Image from "next/image";
import css from "./AllModels.module.css";
import Amulet from "../../public/amulet.webp";
import Link from "next/link";

export const Geely = () => {
  return (
    <div>
      <h1 className={css.title}>Geely</h1>
      <ul className={css.list}>
        <Link
          href={{
            pathname: `/models/Geely/CK`,
          }}
        >
          <li className={css.item}>
            <Image src="/ck.webp" width={200} height={200} alt="Chery Amulet" />
            <p>CK</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/Geely/MK`,
          }}
        >
          <li className={css.item}>
            <Image src="/mk.webp" width={150} height={150} alt="Chery Amulet" />
            <p>MK</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/Geely/EC7`,
          }}
        >
          <li className={css.item}>
            <Image
              src="/ec7.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p>EMGRAND EC-7</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/Geely/EC8`,
          }}
        >
          <li className={css.item}>
            <Image
              src="/ec8.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p>EMGRAND EC-8</p>
          </li>
        </Link>
        <Link
          href={{
            pathname: `/models/Geely/EX7`,
          }}
        >
          <li className={css.item}>
            <Image
              src="/ex7.webp"
              width={200}
              height={200}
              alt="Chery Amulet"
            />
            <p>EMGRAND EX-7</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};
