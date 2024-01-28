import { getAllParts } from "@/apiService/apiParts";
import React from "react";

export default async function sitemap() {
  const baseURL = "https://www.renfa.pp.ua/";

  const parts = await getAllParts();

  const allParts = parts.flatMap((part) =>
    part.Model.map((item) => ({ ...part, Model: item }))
  );

  //   console.log("allParts", allParts);

  const partsUrls = allParts.flatMap((part) => ({
    url: `${baseURL}/models/${part.Brand}/${part.Model}/${part.Articul}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseURL, lastModified: new Date() },
    { url: `${baseURL}/contacts`, lastModified: new Date() },
    ...partsUrls,
  ];
}
