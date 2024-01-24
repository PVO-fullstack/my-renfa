// import { CarOfBrend } from "@/component/CarOfBrend/CarOfBrend";

import { getModel } from "@/apiService/apiParts";
import { CarOfBrend } from "@/component/CarOfBrend/CarOfBrend";

export default async function page({ params }) {
  const allParts = await getModel(params.slug.toUpperCase());
//   console.log("allParts", allParts);

  return (
    <div>
      {params.slug}
      <CarOfBrend brand={params.slug} />
    </div>
  );
}
