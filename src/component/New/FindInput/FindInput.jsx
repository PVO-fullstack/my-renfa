"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import style from "./FindInput.module.scss";
// import { useRouter } from "next/router";
import { SearchBtn } from "../SearchBtn/SearchBtn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getOnePart } from "@/apiService/apiParts";

export const FindInput = ({ className, inputClass, click, close }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      toast.error("Будь ласка, введіть назву або каталожний номер");
      return;
    }

    // const part = getOnePart(value);
    //       const params = new URLSearchParams(searchParams);
    //   if (term) {
    //     params.set('query', term);
    //   } else {
    //     params.delete('query');
    //   }
    //   replace(`${pathname}?${params.toString()}`);
    // }
    replace(`/search/${value}`);
    // // submit(value);
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
      {/* <button type="submit" className={style.searchform_button}>
        <span className={style.searchform_button_label}>Search</span>
      </button> */}
    </form>
  );
};
