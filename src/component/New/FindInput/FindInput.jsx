"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import style from "./FindInput.module.scss";
import { SearchBtn } from "../SearchBtn/SearchBtn";
import { usePathname, useRouter } from "next/navigation";

export const FindInput = ({ click, close }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.currentTarget.value);
  };

  const brand = pathname.split("/")[2];
  const model = pathname.split("/")[3];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      toast.error("Будь ласка, введіть назву або каталожний номер");
      return;
    }

    if (brand || model) {
      if (model) {
        replace(`/search/${brand}/${model}/${value}`);
        setValue("");
        if (close) {
          close();
        }
        return;
      }
      replace(`/search/${brand}/${value}`);
      setValue("");
      if (close) {
        close();
      }
      return;
    }

    replace(`/search/${value}`);
    setValue("");
    if (close) {
      close();
    }
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
    </form>
  );
};
