"use client";

import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import path from "path";
import axios from "axios";
import { createModel, insertParts } from "@/apiService/apiParts";
import { useDispatch } from "react-redux";
import { CardFromXLS } from "../CardFromXLS/CardFromXLS";
import style from "./XLStoJson.module.scss";

const contactsPath = path.resolve("1.json");

export const XLStoJson = () => {
  const [parts, setParts] = useState([]);
  const dispatch = useDispatch();

  const qwe = (e) => {
    e.preventDefault();
    if (parts.length > 10) {
      const index = parts.length / 100;
      // console.log(index);
      for (let i = 0; i <= index; i++) {
        const part = parts.slice(i * 100, (i + 1) * 100);
        dispatch(insertParts(part));
      }
      return;
    }
    dispatch(insertParts(parts));
  };

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const data = e.target.result;
      const workbook = XLSX.read(data, {
        type: "binary",
      });
      workbook.SheetNames.forEach(function (sheetName) {
        const XL_row_object = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheetName]
        );
        const result = XL_row_object.map((item) => ({
          ...item,
          Articul: item.Articul.toString(),
          Model: item.Model.toString().split(", "),
          Price: item.Price.toString(),
        }));
        // console.log("result", result);
        setParts(result);
      });
    };

    reader.onerror = function (event) {
      console.error(
        "Файл не может быть прочитан. Код ошибки: " + event.target.error.code
      );
    };

    reader.readAsBinaryString(selectedFile);
  };

  // console.log("parts", parts);

  return (
    <div className={style.conteiner}>
      <h1>Робота з базою через Excel</h1>
      <h2>Додати позиції файлом Excel</h2>
      <form onSubmit={qwe} className={style.form}>
        <input onChange={onFileChange} type="file" name="xls" id="" />
        <button type="submit">SENT</button>
      </form>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "350px",
        }}
      >
        {parts.length > 0 &&
          parts.map((part, index) => <CardFromXLS key={index} part={part} />)}
      </ul>
    </div>
  );
};
