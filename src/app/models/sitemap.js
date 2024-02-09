import { getAllParts } from "@/apiService/apiParts";

export default async function sitemap() {
  const baseURL = "https://www.renfa.pp.ua/";

  const parts = await getAllParts();

  const allParts = parts.flatMap((part) =>
    part.Model.map((item) => ({ ...part, Model: item }))
  );

  const partsUrls = allParts.flatMap((part) => ({
    url: `${baseURL}/models/${part.Brand}/${part.Model}/${part.Articul}`,
    lastModified: new Date(),
  }));

  return [
    { url: `${baseURL}/models/Chery`, lastModified: new Date() },
    { url: `${baseURL}/models/Geely`, lastModified: new Date() },
    { url: `${baseURL}/models/MG`, lastModified: new Date() },
    { url: `${baseURL}/models/FAW`, lastModified: new Date() },
    { url: `${baseURL}/models/JAC`, lastModified: new Date() },
    ...partsUrls,
  ];
}
