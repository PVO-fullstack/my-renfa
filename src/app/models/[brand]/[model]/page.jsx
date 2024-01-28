import { PartListComponent } from "@/component/New/PartList/PartListComponent";
import { OnePart } from "@/component/New/OnePart/OnePart";
import {
  getModel,
  getModelBrand,
  getOnePart,
  getPartById,
} from "@/apiService/apiParts";

export async function generateMetadata({ params, searchParams }, parent) {
  const brand = params.brand;
  const model = params.model;

  const modelParts = await getModel(model, 1, 1000);

  const partsName = modelParts.modelParts
    .map((item) => item.Part_Name)
    .join(` ${brand} ${model}, `);

  return {
    title: `Запчастини на автомобілі ${brand} ${model}`,
    // description: "MG",
    keywords: `${partsName}`,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export default async function Parts({ params, searchParams }) {
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
