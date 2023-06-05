import { getAllOrders, patchOrder } from "@/apiService/apiOrders";
import React, { useEffect, useState } from "react";
import css from "./AllOrders.module.css";

export const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]);
  const [neworder, setNeworder] = useState("");
  const [owner, setOwner] = useState(null);

  const allOrders = [];

  useEffect(() => {
    async function allOrders() {
      const orders = await getAllOrders();
      console.log("orders", orders);
      setOrders(orders);
    }
    allOrders();
  }, [neworder]);

  const handleOrderClick = (e) => {
    const orderN = e.currentTarget.innerText;
    const order = orders.filter((el) => el._id === orderN);
    const owner = order.map((el) => el.owner);
    setOwner(...owner);
    const partsOrder = order.flatMap((el) => el.partId);
    // order.map((el) => el.id);
    const ft = partsOrder.flatMap((part) => {
      const root = part.id;
      root.map((el) => {
        const newO = { ...el, ordered: part.ordered };
        console.log("newO", newO);
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
    console.log(id);
    patchOrder(id);
    setNeworder(neworder + 1);
    e.currentTarget.innerText = "Готово";
  };

  console.log("owner", owner);

  return (
    <div
      style={{
        marginLeft: "350px",
        // display: "flex",
        paddingTop: "30px",
        // justifyContent: "space-around",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
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
                {/* <div>
                  <p>Замовник</p>
                  <p>{el.owner.name}</p>
                  <p>{el.owner.email}</p>
                </div> */}
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
      </div>
      {owner && (
        <div
          style={{ display: "block", marginLeft: "400px", marginTop: "20px" }}
        >
          <h2>Замовник</h2>
          <p>Імя: {owner.name}</p>
          <p>Телефон: {owner.phone}</p>
          <p>Місто: {owner.city}</p>
          <p>Номер нової пошти: {owner.numberNewPost}</p>
        </div>
      )}
    </div>
  );
};
