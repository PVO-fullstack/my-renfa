import React from "react";
import Image from "next/image";
import css from "./AllModels.module.css";
import Amulet from "../../public/amulet.webp";
import Elara from "../../public/elara.webp";
import Karry from "../../public/karry.webp";
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
