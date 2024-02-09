export default function sitemap() {
  const baseURL = "https://www.renfa.pp.ua/";

  return [
    { url: baseURL, lastModified: new Date() },
    { url: `${baseURL}/contacts`, lastModified: new Date() },
  ];
}
