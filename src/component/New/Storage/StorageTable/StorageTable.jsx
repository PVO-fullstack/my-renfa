import React, { useEffect, useState } from "react";
import headers from "../../../../data/storageTable.json";
import { TableRow } from "../TableRow/TableRow";
import style from "./StorageTable.module.scss";

export const StorageTable = ({ parts, onClick }) => {
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
              <th className={style.table_head} key={i}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {modelParts?.map((part) => (
            <TableRow key={part._id} part={part} click={onClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
