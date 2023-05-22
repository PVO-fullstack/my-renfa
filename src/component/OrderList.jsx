import { useEffect, useState } from "react";
import css from "./OrderList.module.css";

export const OrderList = () => {
  const [partList, setPartList] = useState([]);
  const [newPartsList, setNewPartsList] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const kurs = 40;

  useEffect(() => {
    const ls = localStorage.getItem("part");
    if (ls) {
      const partList = JSON.parse(ls);
      setPartList(partList);
    }
  }, []);

  const newOrder = [];

  const handleClickSubmit = (e) => {
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
    console.log(filteredOrder);
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

  return (
    <div className={css.orderList}>
      <form>
        {partList.map(({ Articul, Part_Name, Price, Quantity }) => (
          <li className={css.orderItem} key={Articul}>
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
    </div>
  );
};
