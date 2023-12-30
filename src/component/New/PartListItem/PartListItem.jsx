import { Part } from "@/component/Part/Part";
import Link from "next/link";
import React from "react";

export const PartListItem = ({ model, part }) => {
  return (
    <Link
      href={{
        pathname: `/models/${model[0]}/${model[1]}/${part.Articul}`,
      }}
    >
      <Part part={part} />
    </Link>
  );
};
