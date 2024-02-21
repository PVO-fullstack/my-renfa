import { Part } from "@/component/Part/Part";
import Link from "next/link";
import React from "react";

export const PartListItem = ({ part, find, page }) => {
  return (
    // <Link
    //   href={{
    //     pathname: `/models/${part.Brand}/${part.Model[0]}/${part._id}`,
    //   }}
    // >
    <Part page={page} find={find} part={part} />
    // </Link>
  );
};
