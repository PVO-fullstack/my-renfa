import React, { useState } from "react";
import { toast } from "react-hot-toast";
import style from "./FindInput.module.scss";
import { useRouter } from "next/router";

export const FindInput = ({ className, inputClass }) => {
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
  };

  return (
    <form onSubmit={handleSubmit} className={style.searchform}>
      <input
        onChange={handleInput}
        className={style.searchform_input}
        type="text"
        autoComplete="off"
        autoFocus
        value={value}
        placeholder="Пошук"
      />
      <button type="submit" className={style.searchform_button}>
        <span className={style.searchform_button_label}>Search</span>
      </button>
    </form>
  );
};
