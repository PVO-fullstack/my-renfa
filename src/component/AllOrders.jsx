"use client";

import { getAllOrders, patchOrder } from "@/apiService/apiOrders";
import React, { useEffect, useState } from "react";
import css from "./AllOrders.module.css";
import { useDispatch } from "react-redux";

export const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]);
  const [neworder, setNeworder] = useState("");
  const [owner, setOwner] = useState(null);

  const dispatch = useDispatch();

  const allOrders = [];

  useEffect(() => {
    async function allOrders() {
      const orders = await dispatch(getAllOrders());
      // console.log("orders", orders.payload);
      setOrders(orders.payload);
    }
    allOrders();
  }, [dispatch, neworder]);

  const handleOrderClick = (e) => {
    const orderN = e.currentTarget.innerText;
    const order = orders.filter((el) => el._id === orderN);
    const owner = order.map((el) => el.owner);
    setOwner(...owner);
    const partsOrder = order.flatMap((el) => el.partId);
    const ft = partsOrder.flatMap((part) => {
      const root = part.id;
      root.map((el) => {
        const newO = { ...el, ordered: part.ordered };
        // console.log("newO", newO);
        allOrders.push(newO);
        const h2 = document.getElementById("nak");
        h2.textContent = `Накладна №${orderN}`;
        return allOrders;
      });
    });
    setOrder(allOrders);
  };

  const handleClose = (e) => {
    e.preventDefault();
    const id = e.currentTarget.attributes.data_atr.value;
    // console.log(id);
    patchOrder(id);
    setNeworder(neworder + 1);
    e.currentTarget.innerText = "Готово";
  };

  // console.log("owner", owner);

  return (
    <div
      style={{
        marginLeft: "350px",
        // display: "flex",
        paddingTop: "30px",
        // justifyContent: "space-around",
      }}
    >
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <h2>Замовлення</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h2>Список замовлень</h2>
          <ul className={css.order_list}>
            {orders.map((el) => (
              <li key={el._id}>
                <div className={css[el.close]}>
                  <p onClick={handleOrderClick} className={css.order_name}>
                    {el._id}
                  </p>
                  <button
                    data_atr={`${el._id}`}
                    onClick={handleClose}
                    disabled={el.close}
                    className={css.order_btn}
                  >
                    {el.close ? "Виконано" : "Закрити"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <h2 id="nak">Накладна</h2>
            <ul className={css.order_card}>
              <li className={css.item_card}>
                <p className={css.articul}>Каталожний номер</p>
                <p className={css.part_name}>Назва</p>
                <p className={css.ordered}>Кількість</p>
                <p className={css.price}>Ціна, грн</p>
              </li>
              {order.map((el) => (
                <li className={css.item_card} key={el.Part_Name}>
                  <p className={css.articul}>{el.Articul}</p>
                  <p className={css.part_name}>{el.Part_Name}</p>
                  <p className={css.ordered}>{el.ordered}</p>
                  <p className={css.price}>{Math.round(el.Price * 40)}</p>
                </li>
              ))}
            </ul>
          </div>
          {owner && (
            <div
              style={{
                display: "block",

                marginTop: "20px",
                marginRight: "20px",
              }}
            >
              <h2>Замовник</h2>
              <div className={css.conteiner}>
                <p className={css.part_name}>Імя</p>
                <p className={css.ordered}>Телефон</p>
                <p className={css.ordered}>Місто</p>
                <p className={css.post}>Нова пошта</p>
              </div>
              <div className={css.conteiner}>
                <p className={css.part_name}>{owner.name}</p>
                <p className={css.ordered}>{owner.phone}</p>
                <p className={css.ordered}>{owner.city}</p>
                <p className={css.post}>{owner.numberNewPost}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
