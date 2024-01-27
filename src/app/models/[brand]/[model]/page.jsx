import { PartListComponent } from "@/component/New/PartList/PartListComponent";
import { OnePart } from "@/component/New/OnePart/OnePart";
import { getOnePart, getPartById } from "@/apiService/apiParts";

export async function generateMetadata({ params, searchParams }, parent) {
  const brand = params.brand;
  const model = params.model;

  return {
    title: `Запчастини на автомобілі ${brand} ${model}`,
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

  return (
    <>
      <PartListComponent
        page={page}
        limit={limit}
        modelName={model}
        brand={brand}
      />
    </>
  );
}
