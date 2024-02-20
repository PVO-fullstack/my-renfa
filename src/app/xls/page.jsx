import { JsontoXLS } from "@/component/JsontoXLS/JsontoXLS";
import { XLStoJson } from "@/component/XLStoJson/XLStoJson";
import React from "react";

export default function xls() {
  return (
    <div>
      <XLStoJson />
      <JsontoXLS />
    </div>
  );
}
