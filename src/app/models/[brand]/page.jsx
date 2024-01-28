import { CarOfBrend } from "@/component/CarOfBrend/CarOfBrend";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.brand;

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Запчастини на автомобілі ${id}`,
    keywords:
      "Morris, Garages, MG, Morris Garages MG, запчасти, автозапчасти,  Morris Garages MG 3, Morris Garages MG 350, Morris Garages MG 5, Morris Garages MG 550, Morris Garages MG 6, Morris Garages MG 750, Morris Garages MG 3SW, автомобили morris garages mg, MG HS, MG ZS, запчастини, купити, запчастини мг ",
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export default function ModelsList({ params, searchParams }) {
  return (
    <div>
      <CarOfBrend brand={params.brand} />;
    </div>
  );
}
