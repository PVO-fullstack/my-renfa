export default function sitemap() {
  const baseURL = process.env.NEXT_PUBLIC_PARTS_URL;

  return [
    { url: baseURL, lastModified: new Date() },
    { url: `${baseURL}/contacts`, lastModified: new Date() },
  ];
}
