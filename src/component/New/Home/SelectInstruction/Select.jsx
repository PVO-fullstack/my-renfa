import React from "react";
import style from "./Select.module.scss";
import { SelectPart } from "../SelectInstructionItem/SelectPart";
import part from "@/data/instruction.json";
import { Car } from "@/component/Svg/Car";
import { Car2 } from "@/component/Svg/Car2";
import { Car3 } from "@/component/Svg/Car3";
import { Section } from "../Section/Section";

export const Select = () => {
  console.log("part", part);
  return (
    <Section title={"Виберіть запчастини за 3 простими етапами"}>
      <div className={style.part_list}>
        <SelectPart part={part.first}>
          <Car className={style.img} />
        </SelectPart>
        <SelectPart part={part.second}>
          <Car2 className={style.img} />
        </SelectPart>
        <SelectPart part={part.third}>
          <Car3 className={style.img} />
        </SelectPart>
      </div>
    </Section>
  );
};
