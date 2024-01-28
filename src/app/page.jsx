import { HomePage } from "@/component/New/Home/HomePage";

export async function generateMetadata() {
  return {
    title: "Магазин запчастин Renfa",
    description: "Запчастини на автомобілі з Китаю",
    openGrapph: {
      images: ["https://www.renfa.pp.ua//ievs4.webp"],
    },
  };
}

export default async function Home() {
  return <HomePage />;
}
