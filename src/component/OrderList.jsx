import { useEffect, useState } from "react";
import css from "./OrderList.module.css";
import { createOrder, getUserOrders } from "@/apiService/apiOrders";

export const OrderList = () => {
  const [partList, setPartList] = useState([]);
  const [newPartsList, setNewPartsList] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]);

  const kurs = 40;

  useEffect(() => {
    const ls = localStorage.getItem("part");
    if (ls) {
      const partList = JSON.parse(ls);
      setPartList(partList);
    }
    async function getOrder() {
      const order = await getUserOrders();

      const we = order.map((el) => el.close);
      console.log("we", we);
      setOrders(order);
    }
    getOrder();
  }, []);

  const newOrder = [];
  console.log(orders);

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    const keys = Object.keys(newPartsList);
    partList.map((part) => {
      for (let key in keys) {
        if ((key = part.Articul)) {
          part.Quantity = newPartsList[key];
        }
      }
      newOrder.push(part);
    });
    const filteredOrder = newOrder.filter(
      (part) => part.Quantity !== undefined && part.Quantity !== "0"
    );
    // console.log(filteredOrder);
    const partId = filteredOrder.map((el) => el._id);
    // console.log("partId", partId);
    const qwe = await createOrder({ partId });
    // console.log("qwe", qwe);
    localStorage.setItem("part", "");
    setDisabled(true);
  };

  const handleChangeValue = (e) => {
    const { name, value } = e.currentTarget;
    const newPart = {
      [name]: value,
    };
    if (!newPartsList) {
      setNewPartsList(newPart);
      return;
    }
    setNewPartsList({ ...newPartsList, ...newPart });
  };

  const handleOrderClick = (e) => {
    const orderN = e.currentTarget.innerText;
    const order = orders
      .filter((el) => el._id === orderN)
      .map((el) => el.partId);
    setOrder(...order);
    console.log("order", orders);
    // console.log("order.partsId", order);
  };

  // console.log("orders", orders);

  return (
    <div className={css.orderList}>
      <form>
        {partList.map(({ _id, Articul, Part_Name, Price, Quantity }) => (
          <li className={css.orderItem} key={_id}>
            <p className={css.orderItemP}>{Articul}</p>
            <p className={css.partsName}>{Part_Name}</p>
            <p className={css.partsPrice}>{Price * kurs}</p>
            <input
              className={css.quantity}
              onChange={handleChangeValue}
              min={0}
              max={Quantity || 0}
              type="number"
              name={Articul}
              value={newPartsList[Articul] || 0}
              id=""
            />
            {/* <p className={css.orderItemP}>{Quantity}</p> */}
          </li>
        ))}
        <button disabled={disabled} onClick={handleClickSubmit} type="submit">
          Order
        </button>
      </form>
      <div
        style={{
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
    </div>
  );
};
