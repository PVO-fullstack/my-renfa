import React from "react";
import style from "./SearchBtn.module.scss";

export const SearchBtn = () => {
  return (
    <button type="submit" className={style.searchform_button}>
      <span className={style.searchform_button_label}>Search</span>
    </button>
  );
};
