"use client";

import { getAllParts } from "@/apiService/apiParts";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { Button } from "../Button";
import style from "./JsontoXLS.module.scss";

export const JsontoXLS = () => {
  const [parts, setParts] = useState();

  useEffect(() => {
    const getParts = async () => {
      const allParts = await getAllParts();
      const newParts = allParts.map((item) => ({
        ...item,
        Model: item.Model.join(", "),
      }));
      setParts(newParts);
    };
    getParts();
  }, []);

  const download = () => {
    const ws = XLSX.utils.json_to_sheet(parts);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const filename = "price.xlsx";
    XLSX.writeFile(wb, filename);
  };

  return (
    <div className={style.conteiner}>
      <h2 className={style.header}>Завантажити з бази в файл Excel</h2>
      <Button disabled={false} className={style.btn} onClick={download}>
        Завантажити прайс
      </Button>
    </div>
  );
};
