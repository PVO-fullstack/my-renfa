import { CarOfBrend } from "@/component/CarOfBrend/CarOfBrend";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.brand;

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Запчастини на автомобілі ${id}`,
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
