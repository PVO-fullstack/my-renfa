import { useGetPartByIdQuery } from "@/apiService/apiPartsRTK";
import { PartModal } from "@/component/PartModal";
import React, { useState } from "react";
import style from "./TableRow.module.scss";
import { PhotoModal } from "../../PhotoModal/PhotoModal";

export const TableRow = ({ part, click }) => {
  const [show, setShow] = useState(false);
  const [img, setImg] = useState(false);
  const [id, setId] = useState();

  //   const { data } = useGetPartByIdQuery(id);

  //   console.log("data", data);

  const showImg = (e) => {
    const idPart = e.currentTarget.id;
    console.log("id", idPart);
    setId(idPart);
    setImg(true);
  };

  const handleCloseImg = () => {
    setImg(false);
  };

  const handleClose = () => {
    setShow(false);
  };

  const getId = (e) => {
    const id = e.currentTarget.id;
    console.log("id", id);
    // click(id);
    setId(id);
    setShow(true);
  };

  console.log("idAAAA", id);

  return (
    <>
      <tr className={style.row}>
        <td id={part._id} onClick={getId} className={style.articul}>
          {part.Articul}
        </td>
        <td className={style.row_item}>{part.Part_Name}</td>
        <td className={style.row_item}>{part.Quantity}</td>
        <td className={style.row_item}>{part.Price}</td>
        <td className={style.row_item}>
          <button id={part._id} onClick={showImg} className={style.btn}>
            Фото
          </button>
        </td>
      </tr>
      {id && show && (
        <PartModal
          show={show}
          handleClose={handleClose}
          click={click}
          // update={update}
          // part={data}
          id={id}
        />
      )}
      {id && img && (
        <PhotoModal show={img} handleClose={handleCloseImg} id={id} />
      )}
    </>
  );
};
