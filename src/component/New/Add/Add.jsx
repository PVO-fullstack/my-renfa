import React, { useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";
import { getAllAdds, patchAdd } from "@/apiService/apiAdd";
import { useDispatch } from "react-redux";
import style from "./Add.module.scss";
import { KURS } from "@/variable/variable";
import { Counter } from "../Counter/Counter";
import { StorageList } from "../Storage/StorageList/StorageList";
import { AddModal } from "./AddModal/AddModal";
import { changePartCount } from "@/apiService/apiParts";
import { refreshUser } from "@/lib/auth/auth-operations";
import { Button } from "@/component/Button";

export const Add = () => {
  const [adds, setAdds] = useState();
  const [owner, setOwner] = useState();
  const [order, setOrder] = useState();
  const [close, setClose] = useState(false);
  const [newNakl, setNewNakl] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState();
  const dispatch = useDispatch();

  const allOrders = [];

  useEffect(() => {
    dispatch(refreshUser());
    async function allAdd() {
      const adds = await dispatch(getAllAdds());
      setAdds(adds.payload);
    }
    allAdd();
  }, [dispatch, newNakl]);

  const handleAddClick = (e) => {
    const addN = e.currentTarget.innerText;
    setId(addN);
    const add = adds.filter((el) => el._id === addN);
    const state = add.map((el) => el.close);
    setClose(state[0]);
    const owner = add.map((el) => el.owner);
    setOwner(...owner);
    const partsAdd = add.flatMap((el) => el.partId);
    const ft = partsAdd.flatMap((part) => {
      const root = part.id;
      root.map((el) => {
        const newO = { ...el, ordered: part.ordered };
        allOrders.push(newO);
        const h2 = document.getElementById("nak");
        h2.textContent = `Накладна №${addN}`;
        return allOrders;
      });
    });
    setOrder(allOrders);
  };

  const clickNew = () => setNewNakl(!newNakl);

  const onBtnClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const closeState = () => {
    order.map((part) =>
      dispatch(changePartCount({ id: part._id, count: part.ordered }))
        .then(dispatch(patchAdd(id)))
        .then(setClose(true))
    );
  };

  return (
    <>
      <div className={style.btn_conteiner}>
        <Button disabled={false} onClick={clickNew}>
          {newNakl ? "До накладних" : "Додати нову накладну"}
        </Button>
        <Button disabled={false} onClick={onBtnClick}>
          Створити
        </Button>
      </div>
      {newNakl ? (
        <StorageList add_style={true} />
      ) : (
        <div className={style.conteiner}>
          <ul>
            <h2>Прихідні накладні</h2>
            {adds &&
              adds.map((item) => (
                <li className={style.nakl} key={item._id}>
                  <p className={style[item.close]}>
                    {item.createdAt.split("T")[0]}
                  </p>
                  <p className={style[item.close]} onClick={handleAddClick}>
                    {item._id}
                  </p>
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
                    <p className={style.ordered}>{el.ordered}</p>
                    <p className={style.price}>{Math.round(el.Price * KURS)}</p>
                  </li>
                ))}
            </ul>
            <Button onClick={closeState} disabled={close}>
              {close ? "Проведено" : "Провести"}
            </Button>
          </div>
        </div>
      )}
      {isOpen && <AddModal close={handleClose} />}
    </>
  );
};
