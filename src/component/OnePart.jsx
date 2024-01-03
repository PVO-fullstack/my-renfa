import { getOnePart } from "@/apiService/apiParts";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Modal } from "./Modal";
import style from "./OnePart.module.scss";
import { KURS } from "@/variable/variable";
import Link from "next/link";

export const OnePart = () => {
  const [onePart, setOnePart] = useState();
  const [showModal, setShowModal] = useState(false);
  const [orderParts, setOrderParts] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const model = router.query.slag;
  console.log("model", model);

  useEffect(() => {
    const getPart = async () => {
      if (model) {
        const part = await getOnePart(model[2]);
        setOnePart(part[0]);
      }
    };
    getPart();
    const order = localStorage.getItem("order");
    if (order) {
      setOrderParts(JSON.parse(order));
    }
  }, [model]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleClick = () => {
    console.log("onePart", onePart);
    if (orderParts && orderParts.length > 0) {
      console.log("one", onePart);
      // setOrderParts([...orderParts, onePart]);
      console.log("orderParts", orderParts);
      const partString = JSON.stringify([...orderParts, onePart]);
      console.log("second", partString);
      localStorage.setItem("order", partString);
      setDisabled(true);
      return;
    }
    console.log("first");
    setOrderParts([onePart]);
    const partString = JSON.stringify([onePart]);
    localStorage.setItem("order", partString);
    // console.log("orderParts", orderParts);
    setDisabled(true);
  };

  return (
    <div className={style.conteiner}>
      <Link
        className={style.link}
        href={{
          pathname: `/models/${model[0]}/${model[1]}`,
        }}
      >
        <p>
          Повернутись до: {model[0]} {model[1]}
        </p>
      </Link>
      {onePart && (
        <div className={style.partCard}>
          <Image
            className={style.img}
            onClick={openModal}
            src={onePart.Img}
            width={300}
            height={200}
            alt={onePart.Part_Name}
          />
          <div className={style.card}>
            <p className={style.text}>Назва: {onePart.Part_Name}</p>
            <p className={style.text}>Каталожний номер: {onePart.Articul} </p>
            <p className={style.text}>Країна виробник: {onePart.Country}</p>
            <p className={style.text}>
              Ціна: {Math.round(onePart.Price * KURS)}, грн
            </p>
            <p className={style.text}>
              Встановлюється на автомобілі: {model[0]} {onePart.Model.join(" ")}
            </p>
          </div>
        </div>
      )}
      <button disabled={disabled} onClick={handleClick} className={style.btn}>
        {disabled ? "У корзині" : "Купити"}
      </button>
      <div className={style.description}>
        <p>
          Магазин <span className={style.companyName}>Renfa</span> - завжди
          низькі ціни та висока якість. Якщо не знайшли потрібну Вам запчастину,
          звертайтесь по телефону або у viber. Приймаємо замовлення на доставку
          морем та літаком.
        </p>
      </div>
      {showModal && <Modal src={onePart} onClose={closeModal} />}
    </div>
  );
};
