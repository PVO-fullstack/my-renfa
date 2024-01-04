import React, { useEffect, useState } from "react";
import style from "./HomePage.module.scss";
import Image from "next/image";
import { FilterItem } from "../FilterItem/FilterItem";
import { Hero } from "./Hero/Hero";
import { Select } from "./SelectInstruction/Select";
import { SelectBrand } from "./SelectBrand/SelectBrand";
import { Benefits } from "./Benefits/Benefits";
import { Slider } from "../Slider/Slider";
import { getAllParts } from "@/apiService/apiParts";
import { NewParts } from "./NewParts/NewParts";
import { Order } from "./Order/Order";
import { Says } from "./Says/Says";
import says from "@/data/says.json";

export const HomePage = () => {
  const [parts, setParts] = useState([]);
  const [popular, setPopular] = useState([]);
  const [viewed, setViewed] = useState([]);

  useEffect(() => {
    const takeParts = async () => {
      const allParts = await getAllParts();
      const newParts = allParts.slice(0, 32);
      const popParts = allParts.slice(33, 65);
      const viewParts = allParts.slice(66, 98);
      console.log("newParts", newParts);
      setParts(newParts);
      setPopular(popParts);
      setViewed(viewParts);
    };
    takeParts();
  }, []);

  console.log("parts", parts);

  return (
    <div className={style.conteiner}>
      <Hero />
      <Select />
      <SelectBrand />
      <Benefits />
      {/* <Slider>
        <Says say={item} />
      </Slider> */}
      <Slider className={style.slider} title={"Новинки"} parts={parts} />
      <Slider title={"Популярні товари"} parts={popular} />
      <Order />
      <Slider title={"Нещодавно переглянуті товари"} parts={viewed} />
      <Slider
        title={"Про нас кажуть"}
        className={"say"}
        says={true}
        rows={1}
        slidesPerRow={1}
        parts={says}
      />
    </div>
  );
};
