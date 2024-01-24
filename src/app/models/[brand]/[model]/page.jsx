import { PartListComponent } from "@/component/New/PartList/PartListComponent";
import { OnePart } from "@/component/New/OnePart/OnePart";
import { getOnePart, getPartById } from "@/apiService/apiParts";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.model;

  // const car = id.join("");

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Запчастини на автомобілі ${id}`,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export default function Parts({ params, searchParams }) {
  const model = params.model;
  const brand = params.brand;

  const page = Number(searchParams?.page || 1);
  const limit = Number(searchParams?.limit || 6);

  console.log("page", page);
  console.log("limit", limit);
  // const [part, setPart] = useState([]);
  // const [model, setModel] = useState([]);
  // const router = useRouter();

  // useEffect(() => {
  //   const getData = async () => {
  //     const modelName = await router.query.slag;
  //     console.log("modelName", modelName);
  //     await setModel(modelName);
  //   };
  //   getData();
  // }, [router.query.slag]);

  return (
    <>
      {/* {slag && slag.length < 3 ? ( */}
      <PartListComponent
        page={page}
        limit={limit}
        modelName={model}
        brand={brand}
      />
      {/* ) : (
        slag && <OnePart partName={slag} />
      )} */}
    </>
  );
}
