import React from "react";
import css from "./AllModels.module.scss";
import { Chery } from "./Chery";
import { MG } from "./MG";
import { Faw } from "./Faw";
import { Jac } from "./Jac";
import { Geely } from "./Geely";
import { Ravon } from "./Ravon";

export const AllModels = () => {
  return (
    <div className={css.conteiner}>
      <MG />
      <Faw />
      <Jac />
      <Chery />
      <Geely />
      <Ravon />
    </div>
  );
};
