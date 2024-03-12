import { HomePage } from "@/component/New/Home/HomePage";

export async function generateMetadata() {
  return {
    title: "Магазин запчастин Renfa",
    description: "Запчастини на автомобілі з Китаю",
    openGrapph: {
      images: ["/src/app/opengraph-image.png"],
      title: "Магазин запчастин Renfa",
      description: {
        default: "%s - в наявності і під замовлення",
      },
    },
  };
}

export default async function Home() {
  return <HomePage />;
}
