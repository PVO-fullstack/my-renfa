import { Part } from "@/component/Part/Part";
import Link from "next/link";
import React from "react";

export const PartListItem = ({ part }) => {
  return (
    <Link
      href={{
        pathname: `/models/${part.Brand}/${part.Model[0]}/${part.Articul}`,
      }}
    >
      <Part part={part} />
    </Link>
  );
};
