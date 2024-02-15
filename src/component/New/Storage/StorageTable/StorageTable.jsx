import React, { useEffect, useState } from "react";
import headers from "../../../../data/storageTable.json";
import { TableRow } from "../TableRow/TableRow";
import style from "./StorageTable.module.scss";

export const StorageTable = ({ parts, onClick, add_style, modal, get }) => {
  const [modelParts, setModelParts] = useState();

  useEffect(() => {
    setModelParts(parts);
  }, [parts]);

  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                className={!add_style ? style.table_head : style.table_head_add}
                key={i}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {modelParts?.map((part) => (
            <TableRow
              get={get}
              modal={modal}
              add_style={add_style}
              key={part._id}
              part={part}
              click={onClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
