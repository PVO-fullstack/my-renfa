import React from "react";
import { Section } from "../Section/Section";
import style from "./WorksInstruction.module.scss";
import instruction from "@/data/works_instruction.json";
import Image from "next/image";

export const WorksInstruction = () => {
  return (
    <div className={style.conteiner}>
      <Section title={"Як ми працюємо"}>
        <div className={style.instruction_list}>
          {instruction.map((item) => (
            <div key={item.src} className={style.instruction_item}>
              <div className={style.img_conteiner}>
                <Image
                  className={style.img}
                  src={item.src}
                  alt={item.alt}
                  width={50}
                  height={50}
                />
              </div>
              <p className={style.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
