import React from "react";
import style from "./SortPanel.module.scss";
import { Grid } from "../Grid/Grid";
import { List } from "../List/List";

export const SortPanel = () => {
  return (
    <div className={style.conteiner}>
      <div>
        <Grid />
        <List />
      </div>
      <label>
        На сторінку:
        <select name="PerPage" id="cars">
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="всі">всі</option>
        </select>
      </label>

      <label>
        Сортування:
        <select name="Sort" id="cars">
          <option value="a_z">за алфавітом, А-Я</option>
          <option value="z_a">за алфавітом, Я-А</option>
        </select>
      </label>
    </div>
  );
};
