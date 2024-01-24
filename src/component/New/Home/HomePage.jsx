import React from "react";
import style from "./HomePage.module.scss";
import { Hero } from "./Hero/Hero";
import { Select } from "./SelectInstruction/Select";
import { SelectBrand } from "./SelectBrand/SelectBrand";
import { Benefits } from "./Benefits/Benefits";
import { Slider } from "../Slider/Slider";
import { getAllParts } from "@/apiService/apiParts";
import { Order } from "./Order/Order";
import says from "@/data/says.json";
import { WorksInstruction } from "./WorksInstruction/WorksInstruction";

export const HomePage = async () => {
  // const [parts, setParts] = useState([]);
  // const [popular, setPopular] = useState([]);
  // const [viewed, setViewed] = useState([]);

  // useEffect(() => {
  //   const takeParts = async () => {
  // const allParts = await getAllParts();
  // console.log("allParts", allParts);
  // const parts = allParts.slice(0, 8);
  // const popular = allParts.slice(8, 16);
  // const viewed = allParts.slice(16, 24);
  // console.log("newParts", newParts);
  //     setParts(newParts);
  //     setPopular(popParts);
  //     setViewed(viewParts);
  //   };
  //   takeParts();
  // }, []);

  // console.log("parts", parts);

  return (
    <div className={style.conteiner}>
      <Hero />
      <Select />
      <SelectBrand />
      <Benefits />
      {/* <Slider className={style.slider} title={"Новинки"} parts={parts} /> */}
      {/* <Slider title={"Популярні товари"} parts={popular} /> */}
      <Order />
      {/* <Slider title={"Нещодавно переглянуті товари"} parts={viewed} /> */}
      {/* <Slider
        title={"Про нас кажуть"}
        className={"say"}
        says={true}
        rows={1}
        slidesPerRow={1}
        parts={says}
      /> */}
      <WorksInstruction />
    </div>
  );
};
