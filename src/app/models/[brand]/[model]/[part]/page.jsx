import { OnePart } from "@/component/New/OnePart/OnePart";
import { getPartById } from "@/apiService/apiParts";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.part;

  const onePart = await getPartById(id);
  const part = onePart.Part_Name;
  const img = onePart.Img;

  return {
    title: part,
    openGraph: {
      images: img,
    },
  };
}

export default function Part({ params }) {
  const brand = params.brand;
  const model = params.model;
  const part = params.part;

  return (
    <>
      <OnePart partName={part} brand={brand} model={model} />
    </>
  );
}
