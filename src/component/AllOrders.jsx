import { getAllOrders } from "@/apiService/apiOrders";
import React, { useEffect, useState } from "react";
import css from "./AllOrders.module.css";

export const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    async function allOrders() {
      const orders = await getAllOrders();
      console.log("orders", orders);
      setOrders(orders);
    }
    allOrders();
  }, []);

  const handleOrderClick = (e) => {
    const orderN = e.currentTarget.innerText;
    const order = orders
      .filter((el) => el._id === orderN)
      .map((el) => el.partId);
    setOrder(...order);
    const h2 = document.getElementById("nak");
    h2.textContent = `Накладна №${orderN}`;
    // console.log("order.partsId", order);
  };

  return (
    <div
      style={{
        marginLeft: "350px",
        display: "flex",
        paddingTop: "30px",
        justifyContent: "space-around",
      }}
    >
      <div>
        <h2>Список замовлень</h2>
        <ul className={css.order_list}>
          {orders.map((el) => (
            <li
              onClick={handleOrderClick}
              className={css[el.close]}
              key={el._id}
            >
              {el._id}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 id="nak">Накладна</h2>
        <ul className={css.order_card}>
          <li className={css.item_card}>
            <p className={css.articul}>Каталожний номер</p>
            <p className={css.part_name}>Назва</p>
            <p className={css.price}>Ціна, грн</p>
          </li>
          {order.map((el) => (
            <li className={css.item_card} key={el.Part_Name}>
              <p className={css.articul}>{el.Articul}</p>
              <p className={css.part_name}>{el.Part_Name}</p>
              <p className={css.price}>{Math.round(el.Price * 40)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
