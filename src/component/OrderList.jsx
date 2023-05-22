import { useEffect, useState } from "react";
import css from "./OrderList.module.css";

export const OrderList = () => {
  const [partList, setPartList] = useState([]);
  const [newPartsList, setNewPartsList] = useState(0);

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
    partList.map((part) => {
      const keys = Object.keys(newPartsList);
      for (let key in keys) {
        if ((key = part.Articul)) {
          part.Quantity = newPartsList[key];
        }
      }
      newOrder.push(part);
    });
    console.log(newOrder);
  };

  const handleChangeValue = (e) => {
    const { name, value } = e.currentTarget;
    const newPart = {
      [name]: value,
    };
    console.log(newPartsList);
    if (!newPartsList) {
      // console.log(newPart[name]);
      setNewPartsList(newPart);
      return;
    }
    setNewPartsList({ ...newPartsList, ...newPart });
  };

  return (
    <div className={css.orderList}>
      <form onClick={handleClickSubmit}>
        {partList.map(({ Articul, Part_Name, Price, Quantity }) => (
          <li className={css.orderItem} key={Articul}>
            <p className={css.orderItemP}>{Articul}</p>
            <p className={css.orderItemP}>{Part_Name}</p>
            <p className={css.orderItemP}>{Price * kurs}</p>
            <input
              onChange={handleChangeValue}
              // min={0}
              // max={Quantity || 0}
              type="number"
              name={Articul}
              value={newPartsList[Articul] || 0}
              id=""
            />
            <p className={css.orderItemP}>{Quantity}</p>
          </li>
        ))}
        <button type="submit">Order</button>
      </form>
    </div>
  );
};
