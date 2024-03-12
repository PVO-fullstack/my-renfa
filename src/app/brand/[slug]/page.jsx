import { getModel } from "@/apiService/apiParts";
import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.slug;

  return {
    title: id,
  };
}

export default async function page({ params }) {
  const allParts = await getModel(params.slug.toUpperCase());

  return (
    <div>
      {params.slug}
      {allParts.modelParts.map((item) => (
        <p key={item._id}>{item.Part_Name}</p>
      ))}
    </div>
  );
}
