"use client";

import { getAllOrders, patchOrder } from "@/apiService/apiOrders";
import React, { useEffect, useState } from "react";
import css from "../../AllOrders.module.css";
import { useDispatch } from "react-redux";
import { KURS } from "@/variable/variable";
import { refreshUser } from "@/lib/auth/auth-operations";
import { Button } from "@/component/Button";
import { changePartCountSell } from "@/apiService/apiParts";

export const Sell = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]);
  const [neworder, setNeworder] = useState("");
  const [owner, setOwner] = useState(null);
  const [close, setClose] = useState(false);
  const [id, setId] = useState();

  const dispatch = useDispatch();

  const allOrders = [];

  useEffect(() => {
    dispatch(refreshUser());
    async function allOrders() {
      const orders = await dispatch(getAllOrders());
      // console.log("orders", orders.payload);
      setOrders(orders.payload);
    }
    allOrders();
  }, [dispatch, close]);

  const handleOrderClick = (e) => {
    const orderN = e.currentTarget.innerText;
    setId(orderN);
    const order = orders.filter((el) => el._id === orderN);
    const state = order.map((el) => el.close);
    setClose(state[0]);
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
    e.currentTarget.innerText = "Готово";
  };

  const closeState = async () => {
    await order.map((part) =>
      dispatch(changePartCountSell({ id: part._id, count: part.ordered }))
    );
    dispatch(patchOrder(id)).then(setClose(true));
    // setNeworder(neworder + 1);
  };

  return (
    <div
      style={{
        // marginLeft: "350px",
        // display: "flex",
        paddingTop: "30px",
        minHeight: "100vh",
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
              <li style={{ display: "flex", gap: "20px" }} key={el._id}>
                <p className={css[el.close]}>{el.createdAt.split("T")[0]}</p>
                <div className={css[el.close]}>
                  <p onClick={handleOrderClick} className={css.order_name}>
                    {el._id}
                  </p>
                  {/* <button
                    data_atr={`${el._id}`}
                    onClick={handleClose}
                    disabled={el.close}
                    className={css.order_btn}
                  >
                    {el.close ? "Виконано" : "Закрити"}
                  </button> */}
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
                  <p className={css.price}>{Math.round(el.Price * KURS)}</p>
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
          <Button onClick={closeState} disabled={close}>
            {close ? "Проведено" : "Провести"}
          </Button>
        </div>
      </div>
    </div>
  );
};
