import React, { useState } from "react";
import { toast } from "react-hot-toast";
import style from "./FindInput.module.scss";
import { useRouter } from "next/router";
import { SearchBtn } from "../SearchBtn/SearchBtn";

export const FindInput = ({ className, inputClass, click, close }) => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleInput = (e) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      toast.error("Будь ласка, введіть назву або каталожний номер");
      return;
    }
    router.push(`/search/${value}`);
    // submit(value);
    setValue("");
    close();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={click ? style.searchform_click : style.searchform}
    >
      <input
        onChange={handleInput}
        className={style.searchform_input}
        type="text"
        autoComplete="off"
        autoFocus
        value={value}
        placeholder="Пошук"
      />
      <SearchBtn />
      {/* <button type="submit" className={style.searchform_button}>
        <span className={style.searchform_button_label}>Search</span>
      </button> */}
    </form>
  );
};
