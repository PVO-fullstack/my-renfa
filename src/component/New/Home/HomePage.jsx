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

export const HomePage = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    const takeParts = async () => {
      const allParts = await getAllParts();
      const newParts = allParts.slice(0, 32);
      console.log("newParts", newParts);
      setParts(newParts);
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
      <Slider className={style.slider} parts={parts} />
    </div>
  );
};
