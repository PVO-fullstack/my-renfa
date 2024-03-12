import { getOnePart } from "@/apiService/apiParts";
import { PartsLayout } from "@/component/New/PartsLayout/PartsLayout";
import React from "react";

export default function page({ params, searchParams }) {
  const page = Number(searchParams?.page || 1);
  const limit = Number(searchParams?.limit || 6);
  const partName = params.partName;

  return (
    <div>
      <PartsLayout find={true} page={page} limit={limit} model={partName} />
    </div>
  );
}
