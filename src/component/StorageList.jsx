import { getAllParts } from "@/apiService/apiParts";
import React, { useEffect, useState } from "react";
import brand from "../data/model.json";
import { PartModal } from "./PartModal";
import css from "./StorageList.module.scss";
import { KURS } from "@/variable/variable";

export const StorageList = () => {
  const [allParts, setAllParts] = useState([]);
  const [brandModels, setBrandModels] = useState([]);
  const [models, setModels] = useState([]);
  const [parts, setParts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  console.log("filter", filter);

  useEffect(() => {
    async function getParts() {
      const parts = await getAllParts();
      setAllParts(parts);
    }
    getParts();
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
  // console.log("models", models);

  const handleModelClick = (e) => {
    const modelName = e.currentTarget.innerText;
    setFilter([]);
    // console.log("model", modelName);
    // console.log("brandModels", brandModels);
    const modelParts = brandModels.filter((el) => el.Model.includes(modelName));
    setParts(modelParts);
    // console.log("modelParts", modelParts);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const searchValue = e.currentTarget.value.toLowerCase();
    // console.log("searchValue", searchValue);
    if (parts.length > 0) {
      const filtredParts = parts.filter(
        (el) =>
          el.Articul.toLowerCase().includes(searchValue) ||
          el.Part_Name.toLowerCase().includes(searchValue)
      );
      setFilter(filtredParts);
      // console.log("filtredParts", filtredParts);
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

  const handlePartClick = (e) => {
    setShow(true);
    const id = e.currentTarget.id;
    const partId = allParts.filter((el) => el._id === id);
    setId(partId);
  };

  // console.log("filter", filter);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className={css.conteiner}>
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
      <ul
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
      </ul>
      <div>
        <ul className={css.model_list}>
          {models.length > 0
            ? models.map((el) => (
                <li
                  className={css.model_item}
                  onClick={handleModelClick}
                  key={el}
                >
                  {el}
                </li>
              ))
            : ""}
        </ul>
        <ul className={css.order_list}>
          {/* <li className={css.item_cardN}> */}
          {/* <p className={css.articul}>Артикул</p>
            <p className={css.part_name}>Назва</p>
            <p className={css.price}>Кількість</p> */}
          {/* <p className={css.price}>Ціна</p> */}
          {/* </li> */}
          {filter.length > 0 && filter.length < 10
            ? // {filter.length < 1 && parts.length > 0

              filter.map((el) => (
                <li
                  className={css.item_card}
                  id={el._id}
                  onClick={handlePartClick}
                  // style={{
                  //   display: "flex",
                  //   gap: "20px",
                  //   border: "2px solid blue",
                  // }}
                  key={el._id}
                >
                  <p className={css.articul}>{el.Articul}</p>
                  <p className={css.part_name}>{el.Part_Name}</p>
                  <p className={css.price}>
                    <span>Кількість:</span> {el.Quantity}
                  </p>
                  <p className={css.price}>
                    <span>Ціна:</span> {Math.round(el.Price * KURS)}грн
                  </p>
                </li>
              ))
            : parts.map((el) => (
                <li
                  className={css.item_card}
                  id={el._id}
                  onClick={handlePartClick}
                  // style={{
                  //   display: "flex",
                  //   gap: "20px",
                  //   border: "2px solid blue",
                  // }}
                  key={el._id}
                >
                  <p className={css.articul}>{el.Articul}</p>
                  <p className={css.part_name}>{el.Part_Name}</p>
                  <p className={css.price}>{el.Quantity}</p>
                  {/* <p className={css.price}>{el.Price}</p> */}
                </li>
              ))}
        </ul>
        {/* <ul> */}
        {/* {filter.length > 0 && filter.length < 10
            ? filter.map((el) => <li key={el._id}>{el.Articul}</li>)
            : ""} */}
        {/* </ul> */}
      </div>

      <PartModal show={show} handleClose={handleClose} id={id} />
    </div>
  );
};
