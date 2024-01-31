import { OnePart } from "@/component/New/OnePart/OnePart";
import { getPartById } from "@/apiService/apiParts";

export async function generateMetadata({ params, searchParams }, parent) {
  const { brand, model, part } = params;
  const onePart = await getPartById(part);
  const partName = `${onePart.Articul} ${onePart.Part_Name} ${brand}${model}`;
  const img = onePart.Img;
  const description = onePart.Description;
  const rus = description.split(", ");

  return {
    title: partName,
    description:
      description +
      " " +
      "Низкие цены ⭐ гарантия  ✌ скидки ✈️ быстрая доставка и самовывоз. Самый большой выбор Ходовая часть",
    keywords: `Запчастини на ${brand}, Запчасти на ${brand}, ${rus[0]} купити, ${rus[0]} ${brand} купити, ${rus[0]} ${brand}${model} купити, доставка по Україні, низькі ціни, ${rus[1]} купить, ${rus[1]} ${brand}${model} купить `,
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
