import Image from "next/image";
import React from "react";
import style from "./Say.module.scss";

export const Says = ({ say }) => {
  return (
    <>
      <div className={style.conteiner}>
        <h4>{say.name}</h4>
        <div className={style.star_conteiner}>
          <Image src={say.star} alt="star" width={22} height={22} />
          <Image src={say.star} alt="star" width={22} height={22} />
          <Image src={say.star} alt="star" width={22} height={22} />
          <Image src={say.star} alt="star" width={22} height={22} />
          <Image src={say.star} alt="star" width={22} height={22} />
        </div>
        <p className={style.text}>{say.say}</p>
      </div>
    </>
  );
};
