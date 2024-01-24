import Link from "next/link";
import React from "react";
import style from "./Brand.module.scss";

export const Brand = ({ model }) => {
  return (
    <div>
      <ul className={style.model}>
        {model.map((item) => (
          <Link
            className={style.link}
            key={item.Brend}
            // href={"/models/MG"}

            href={`/models/${item.Brend}`}
            // href={{
            //   pathname: `/models/[car]`,
            //   query: { car: item.Brend },
            // }}
          >
            <li>
              {/* <img className={style.logo} src={item.logo} alt="" /> */}
              <p className={style.brend}>{item.Brend}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
