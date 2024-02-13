import { useGetPartByIdQuery } from "@/apiService/apiPartsRTK";
import { PartModal } from "@/component/PartModal";
import React, { useEffect, useState } from "react";
import style from "./TableRow.module.scss";
import { PhotoModal } from "../../PhotoModal/PhotoModal";

export const TableRow = ({ part, click }) => {
  const [show, setShow] = useState(false);
  const [img, setImg] = useState(false);
  const [id, setId] = useState();
  const [disabled, setDisabled] = useState(false);
  const [change, setChange] = useState(false);

  useEffect(() => {
    const getLS = localStorage.getItem("newAdd");
    if (getLS) {
      const parts = JSON.parse(getLS);

      const qwe = parts.filter((item) => item._id === part._id);
      if (qwe.length > 0) {
        console.log("qwe", qwe);
        setDisabled(true);
      }
    }
  }, [change]);

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

  const onAddClick = () => {
    const getLS = localStorage.getItem("newAdd");
    if (getLS) {
      const parts = JSON.parse(getLS);
      const newParts = [...parts, part];
      localStorage.setItem("newAdd", JSON.stringify(newParts));
      console.log("id", newParts);
      setChange(!change);
      return;
    }
    const newParts = [part];
    localStorage.setItem("newAdd", JSON.stringify(newParts));
    setChange(!change);
    console.log("id", newParts);
    console.log("part", part);
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
          <button
            disabled={disabled}
            id={part._id}
            onClick={onAddClick}
            className={style.btn}
          >
            {!disabled ? "Додати" : "Додано"}
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
