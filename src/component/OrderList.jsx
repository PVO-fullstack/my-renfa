import { useEffect, useState } from "react";
import css from "./OrderList.module.css";
import { createOrder, getUserOrders } from "@/apiService/apiOrders";
import { useDispatch } from "react-redux";
import { refreshUser } from "@/redux/auth/auth-operations";

export const OrderList = () => {
  const [partList, setPartList] = useState([]);
  const [newPartsList, setNewPartsList] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const kurs = 40;

  useEffect(() => {
    const ls = localStorage.getItem("part");
    const userStorage = localStorage.getItem("user");
    if (ls && userStorage) {
      const partList = JSON.parse(ls);
      setPartList(partList);
      const user = JSON.parse(userStorage);
      setUser(user);
    }
    async function getOrder() {
      await dispatch(refreshUser());
      const order = await dispatch(getUserOrders());
      console.log(order.payload);
      setOrders(order.payload);
    }
    getOrder();
  }, [dispatch]);

  const newOrder = [];
  console.log(orders);
  const allOrders = [];

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    const keys = Object.keys(newPartsList);
    partList.map((part) => {
      for (let key in keys) {
        if ((key = part.Articul)) {
          part.In_stock = newPartsList[key];
        }
      }
      newOrder.push(part);
    });
    const filteredOrder = newOrder.filter(
      (part) => part.In_stock !== undefined && part.In_stock !== "0"
    );
    console.log(filteredOrder);
    const partId = filteredOrder.map((el) => {
      return { id: el._id, ordered: el.In_stock };
      // return root;
    });
    // console.log("partId", root);
    await createOrder({ partId });
    await // console.log("qwe", qwe);
    localStorage.setItem("part", "");
    setDisabled(true);
  };

  const handleChangeValue = (e) => {
    const { name, value } = e.currentTarget;
    const newPart = {
      [name]: value,
    };
    console.log("newPart", newPart);
    if (!newPartsList) {
      setNewPartsList(newPart);
      return;
    }
    setNewPartsList({ ...newPartsList, ...newPart });
  };

  const handleChangeUserValue = (e) => {
    const { name, value } = e.currentTarget;
    const changeUserData = {
      [name]: value,
    };
    console.log(e.currentTarget.attributes.value);
    setUser({ ...user, ...changeUserData });
    if (user.name && user.phone && user.city && user.numberNewPost) {
      setDisabled(false);
    }
  };

  console.log(user);

  const handleOrderClick = (e) => {
    const orderN = e.currentTarget.innerText;
    const order = orders
      .filter((el) => el._id === orderN)
      .flatMap((el) => el.partId);
    // order.map((el) => el.id);
    const ft = order.flatMap((part) => {
      const root = part.id;
      root.map((el) => {
        const newO = { ...el, ordered: part.ordered };
        console.log("newO", newO);
        allOrders.push(newO);
        return allOrders;
      });
    });
    setOrder(allOrders);
  };

  return (
    <div className={css.orderList}>
      <form>
        <div style={{ display: "flex" }}>
          <div>
            {partList.map(({ _id, Articul, Part_Name, Price, Quantity }) => (
              <li className={css.orderItem} key={_id}>
                <p className={css.orderItemP}>{Articul}</p>
                <p className={css.partsName}>{Part_Name}</p>
                <p className={css.partsPrice}>{Math.round(Price * kurs)}</p>
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
              </li>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label className={css.input}>
              Імя та Прізвище
              <input
                onChange={handleChangeUserValue}
                type="text"
                name="name"
                value={user.name}
                id=""
              />
            </label>
            <label className={css.input}>
              Місто
              <input
                onChange={handleChangeUserValue}
                type="text"
                name="city"
                value={user.city}
                id=""
              />
            </label>
            <label className={css.input}>
              № відділення Нової пошти
              <input
                onChange={handleChangeUserValue}
                type="text"
                name="numberNewPost"
                value={user.numberNewPost}
                id=""
              />
            </label>
            <label className={css.input}>
              Телефон отримувача
              <input
                onChange={handleChangeUserValue}
                type="tel"
                name="phone"
                value={user.phone}
                id=""
              />
            </label>
          </div>
        </div>
        <button
          style={{ display: "block" }}
          disabled={disabled}
          onClick={handleClickSubmit}
          type="submit"
        >
          Замовити
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
    </div>
  );
};
