import { getModel } from "@/apiService/apiParts";
import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.slug;

  // console.log("id", id);
  // fetch data
  //   const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: id,
  };
}

export default async function page({ params }) {
  const allParts = await getModel(params.slug.toUpperCase());
  // console.log("allParts", allParts);

  return (
    <div>
      {params.slug}
      {allParts.modelParts.map((item) => (
        <p key={item._id}>{item.Part_Name}</p>
      ))}
    </div>
  );
}
