import { OnePart } from "@/component/New/OnePart/OnePart";
import { getPartById } from "@/apiService/apiParts";

export async function generateMetadata({ params, searchParams }, parent) {
  const { brand, model, part } = params;
  const onePart = await getPartById(part);
  const partName = `${onePart.Articul} ${onePart.Part_Name} ${brand} ${model}`;
  const img = onePart.Img;

  return {
    title: partName,
    openGraph: {
      images: img,
    },
  };
}

export default function Part({ params }) {
  const { brand, model, part } = params;

  return (
    <>
      <OnePart partName={part} brand={brand} model={model} />
    </>
  );
}
