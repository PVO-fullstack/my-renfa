import { useGetPartByIdQuery } from "@/apiService/apiPartsRTK";
import { PartModal } from "@/component/PartModal";
import React, { useEffect, useState } from "react";
import style from "./TableRow.module.scss";
import { PhotoModal } from "../../PhotoModal/PhotoModal";
import { Counter } from "../../Counter/Counter";
import { KURS } from "@/variable/variable";

export const TableRow = ({ part, click, add_style, modal, get }) => {
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
      const newParts = [...parts, { ...part, count: 1 }];
      localStorage.setItem("newAdd", JSON.stringify(newParts));
      console.log("id", newParts);
      setChange(!change);
      return;
    }
    const newParts = [{ ...part, count: 1 }];
    localStorage.setItem("newAdd", JSON.stringify(newParts));
    setChange(!change);
    console.log("id", newParts);
    console.log("part", part);
  };

  const getCount = (data) => {
    const partsLS = localStorage.getItem("newAdd");
    if (partsLS) {
      const parts = JSON.parse(partsLS);
      console.log("data", parts);

      const newParts = parts.map((item) =>
        part._id === item._id ? { ...item, count: data } : item
      );
      localStorage.setItem("newAdd", JSON.stringify(newParts));
    }
  };

  return (
    <>
      <tr className={style.row}>
        <td id={part._id} onClick={getId} className={style.articul}>
          {part.Articul}
        </td>
        <td className={style.row_item}>{part.Part_Name}</td>
        {modal ? (
          <Counter
            get={getCount}
            countStyle={style.count}
            counterStyle={style.counter}
          />
        ) : (
          <td className={style.row_item}>{part.Quantity}</td>
        )}
        <td className={style.row_item}>{Math.round(part.Price * KURS)}</td>
        <td className={add_style ? style.row_item_add : style.row_item}>
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
