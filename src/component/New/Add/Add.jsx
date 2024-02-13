import React, { useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";
import { getAllAdds } from "@/apiService/apiAdd";
import { useDispatch } from "react-redux";
import style from "./Add.module.scss";
import { KURS } from "@/variable/variable";
import { Counter } from "../Counter/Counter";
import { StorageList } from "../Storage/StorageList/StorageList";

export const Add = () => {
  const [adds, setAdds] = useState();
  const [owner, setOwner] = useState();
  const [order, setOrder] = useState();
  const [newNakl, setNewNakl] = useState(false);
  const dispatch = useDispatch();

  console.log("adds", adds);

  const allOrders = [];

  useEffect(() => {
    async function allAdd() {
      const adds = await dispatch(getAllAdds());
      console.log("orders", adds.payload);
      setAdds(adds.payload);
    }
    allAdd();
  }, [dispatch]);

  const handleAddClick = (e) => {
    const addN = e.currentTarget.innerText;
    const add = adds.filter((el) => el._id === addN);
    console.log("addN", addN);
    const owner = add.map((el) => el.owner);
    setOwner(...owner);
    const partsAdd = add.flatMap((el) => el.partId);
    const ft = partsAdd.flatMap((part) => {
      console.log("part", part);
      const root = part.id;
      root.map((el) => {
        const newO = { ...el, ordered: part.ordered };
        // console.log("newO", newO);
        allOrders.push(newO);
        const h2 = document.getElementById("nak");
        h2.textContent = `Накладна №${addN}`;
        return allOrders;
      });
    });
    setOrder(allOrders);
  };

  const getCount = (data) => {
    console.log("data", data);
  };

  const clickNew = () => setNewNakl(true);

  return (
    <>
      <button onClick={clickNew}>Додати нову накладну</button>
      {newNakl ? (
        <StorageList />
      ) : (
        <div className={style.conteiner}>
          <ul>
            <h2>Прихідні накладні</h2>
            {adds &&
              adds.map((item) => (
                <li key={item._id}>
                  <p>{item.createdAt}</p>
                  <p onClick={handleAddClick}>{item._id}</p>
                </li>
              ))}
          </ul>
          <div>
            <h2 id="nak">Накладна</h2>
            <ul className={style.order_card}>
              <li className={style.item_card}>
                <p className={style.articul}>Каталожний номер</p>
                <p className={style.part_name}>Назва</p>
                <p className={style.ordered}>Кількість</p>
                <p className={style.price}>Ціна, грн</p>
              </li>
              {order &&
                order.map((el) => (
                  <li className={style.item_card} key={el.Part_Name}>
                    <p className={style.articul}>{el.Articul}</p>
                    <p className={style.part_name}>{el.Part_Name}</p>
                    {/* <Counter get={getCount} /> */}
                    <p className={style.ordered}>{el.ordered}</p>
                    <p className={style.price}>{Math.round(el.Price * KURS)}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
