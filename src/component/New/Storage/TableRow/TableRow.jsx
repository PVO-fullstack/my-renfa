import { useGetPartByIdQuery } from "@/apiService/apiPartsRTK";
import { PartModal } from "@/component/PartModal";
import React, { useState } from "react";
import style from "./TableRow.module.scss";

export const TableRow = ({ part, click }) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  //   const { data } = useGetPartByIdQuery(id);

  //   console.log("data", data);

  const handleClose = () => {
    setShow(false);
  };

  const getId = (e) => {
    console.log("URA");
    const id = e.currentTarget.id;
    console.log("id", id);
    // click(id);
    setId(id);
    setShow(true);
  };

  return (
    <>
      <tr className={style.row} id={part._id} onClick={getId}>
        <td className={style.row_item}>{part.Articul}</td>
        <td className={style.row_item}>{part.Part_Name}</td>
        <td className={style.row_item}>{part.Quantity}</td>
        <td className={style.row_item}>{part.Price}</td>
      </tr>
      {id && (
        <PartModal
          show={show}
          handleClose={handleClose}
          // update={update}
          // part={data}
          id={id}
        />
      )}
    </>
  );
};
