import { getAllParts } from "@/apiService/apiParts";
import React from "react";

export default async function sitemap() {
  const baseURL = "https://www.renfa.pp.ua/";

  const parts = await getAllParts();
  const partsUrls = parts.map((part) => ({
    url: `${baseURL}/models/${part.Brand}/${part.Model[0]}/${part.Articul}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseURL, lastModified: new Date() },
    { url: `${baseURL}/contacts`, lastModified: new Date() },
    ...partsUrls,
  ];
}
