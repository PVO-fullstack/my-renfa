"use client";

import { getAllParts } from "@/apiService/apiParts";
import React, { useEffect, useState } from "react";
import brand from "../../../../data/model.json";
import { PartModal } from "../../../PartModal";
import style from "./StorageList.module.scss";
import { KURS } from "@/variable/variable";
import { Filter } from "../../Filter/Filter";
import { StorageTable } from "../StorageTable/StorageTable";
import {
  useChangePartMutation,
  useGetPartByIdQuery,
  useGetPartsQuery,
} from "@/apiService/apiPartsRTK";

export const StorageList = () => {
  const [allParts, setAllParts] = useState([]);
  const [brandModels, setBrandModels] = useState([]);
  const [models, setModels] = useState([]);
  const [parts, setParts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const { data, error, isLoading, isFetching, refetch } = useGetPartsQuery();
  const { data: part } = useGetPartByIdQuery(id);
  // const [update, result] = useChangePartMutation();

  useEffect(() => {
    if (data) {
      setAllParts(data);
    }
    // async function getParts() {
    //   const parts = await getAllParts();
    //   setAllParts(parts);
    // }
    // getParts();
  }, []);

  const handleBrandClick = (e) => {
    const brand = e.currentTarget.innerText;
    setParts([]);
    setFilter([]);
    const model = allParts.filter((el) => el.Brand === brand);
    setBrandModels(model);
    const modelName = model.flatMap((el) => el.Model);
    const uniqueModel = modelName.filter(
      (el, index, array) => array.indexOf(el) === index
    );
    setModels(uniqueModel);
  };

  const handleModelClick = (e) => {
    const modelName = e.currentTarget.innerText;
    setFilter([]);
    const modelParts = brandModels.filter((el) => el.Model.includes(modelName));
    setParts(modelParts);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const searchValue = e.currentTarget.value.toLowerCase();
    if (parts.length > 0) {
      const filtredParts = parts.filter(
        (el) =>
          el.Articul.toLowerCase().includes(searchValue) ||
          el.Part_Name.toLowerCase().includes(searchValue)
      );
      setFilter(filtredParts);
      return;
    }
    if (allParts.length > 0) {
      const filtredParts = allParts.filter((el) =>
        el.Articul.toLowerCase().includes(searchValue)
      );
      setFilter(filtredParts);
      // console.log("filtredParts", filtredParts);
    }
  };

  const handlePartClick = (data) => {
    // const id = e.currentTarget;
    // console.log("id", data);
    // const partId = allParts.filter((el) => el._id === data);
    setId(data);
    setShow(true);
  };

  // console.log("filter", models);

  const handleClose = () => {
    setShow(false);
  };

  const getParts = (data) => {
    setParts(data);
  };

  return (
    <div className={style.conteiner}>
      <Filter storage={true} get={getParts} />
      <div className={style.parts_conteiner}>
        <div style={{ textAlign: "center", margin: "20px 0" }}>Склад</div>
        <label>
          Введіть каталожний номер або назву запчaстини
          <input
            style={{ display: "block" }}
            onChange={handleChange}
            type="search"
            name="search"
            id=""
          />
        </label>
        {/* <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            flexWrap: "wrap",
          }}
        >
          <li onClick={handleBrandClick}>Усі</li>
          {brand.map((el) => (
            <li onClick={handleBrandClick} key={el.Brend}>
              {el.Brend}
            </li>
          ))}
          <button onClick={handlePartClick}>Створити новий запис</button>
        </ul> */}
        <div>
          <StorageTable parts={parts} onClick={handlePartClick} />
          {/* <ul className={style.model_list}>
            {models.length > 0
              ? models.map((el) => (
                  <li
                    className={style.model_item}
                    onClick={handleModelClick}
                    key={el}
                  >
                    {el}
                  </li>
                ))
              : ""}
          </ul> */}
          <ul className={style.order_list}>
            {/* {filter.length > 0 && filter.length < 10
              ? // {filter.length < 1 && parts.length > 0

                filter.map((el) => (
                  <li
                    className={style.item_card}
                    id={el._id}
                    onClick={handlePartClick}
                    // style={{
                    //   display: "flex",
                    //   gap: "20px",
                    //   border: "2px solid blue",
                    // }}
                    key={el._id}
                  >
                    <p className={style.articul}>{el.Articul}</p>
                    <p className={style.part_name}>{el.Part_Name}</p>
                    <p className={style.price}>
                      <span>Кількість:</span> {el.Quantity}
                    </p>
                    <p className={style.price}>
                      <span>Ціна:</span> {Math.round(el.Price * KURS)}грн
                    </p>
                  </li>
                ))
              : parts.map((el) => (
                  <li
                    className={style.item_card}
                    id={el._id}
                    onClick={handlePartClick(el._id)}
                    // style={{
                    //   display: "flex",
                    //   gap: "20px",
                    //   border: "2px solid blue",
                    // }}
                    key={el._id}
                  >
                    <p className={style.articul}>{el.Articul}</p>
                    <p className={style.part_name}>{el.Part_Name}</p>
                    <p className={style.price}>{el.Quantity}</p>
                    {/* <p className={style.price}>{el.Price}</p> */}
            {/* </li> */}
          </ul>
        </div>
      </div>

      {/* <PartModal
        show={show}
        handleClose={handleClose}
        update={update}
        part={part}
        id={id}
      /> */}
    </div>
  );
};
