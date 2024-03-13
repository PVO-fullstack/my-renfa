import React from "react";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/cart",
          "/form",
          "/order",
          "/orders",
          "/search",
          "/storage",
          "/xls",
          "privacy",
        ],
      },
    ],
    sitemap: [
      `${process.env.NEXT_PUBLIC_PARTS_URL}/sitemap.xml`,
      `${process.env.NEXT_PUBLIC_PARTS_URL}/models/sitemap.xml`,
    ],
  };
}
