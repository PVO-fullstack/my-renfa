import React from "react";
import css from "./AllModels.module.scss";
import { Brand } from "../Brand/Brand";
import mg from "@/data/mg.json";
import faw from "@/data/faw.json";
import jac from "@/data/jac.json";
import geely from "@/data/geely.json";
import chery from "@/data/chery.json";

export const AllModels = () => {
  return (
    <div className={css.conteiner}>
      <Brand title={"MG"} data={mg} />
      <Brand title={"FAW"} data={faw} />
      <Brand title={"JAC"} data={jac} />
      <Brand title={"Chery"} data={chery} />
      <Brand title={"Geely"} data={geely} />
      {/* <Ravon /> */}
    </div>
  );
};
