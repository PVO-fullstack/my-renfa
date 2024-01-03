import { Part } from "@/component/Part/Part";
import Image from "next/image";
import React from "react";
import style from "./NewParts.module.scss";
import { Button } from "@/component/Button";
import { KURS } from "@/variable/variable";

export const NewParts = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <Image
            // className="block m-auto rounded-3xl w-80 h-[264px] md:w-[342px] xl:w-[324px] xl:h-[264px] "
            src={item.Img}
            alt={item.Description}
            width={320}
            height={264}
          />
        </div>
      ))}
    </>
  );
};
