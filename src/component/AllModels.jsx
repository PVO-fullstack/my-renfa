import React from "react";
import css from "./AllModels.module.css";
import { Chery } from "./Chery";
import { MG } from "./MG";
import { Faw } from "./Faw";
import { Jac } from "./Jac";
import { Geely } from "./Geely";

export const AllModels = () => {
  return (
    <div className={css.conteiner}>
      <MG />
      <Faw />
      <Jac />
      <Chery />
      <Geely />
    </div>
  );
};
