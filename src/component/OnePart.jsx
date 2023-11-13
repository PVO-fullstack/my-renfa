import { getOnePart } from "@/apiService/apiParts";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Modal } from "./Modal";
import css from "./OnePart.module.scss";
import { KURS } from "@/variable/variable";

export const OnePart = () => {
  const [onePart, setOnePart] = useState();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const model = router.query.slag;
  console.log("model", model);

  useEffect(() => {
    const getPart = async () => {
      if (model) {
        const part = await getOnePart(model[2]);
        setOnePart(part);
      }
    };
    getPart();
  }, [model]);

  const openModal = () => {
    setShowModal(true);
    // setActiveImgIdx(index);
  };

  const closeModal = () => setShowModal(false);

  console.log(onePart);

  return (
    <div className={css.conteiner}>
      {onePart && (
        <div className={css.partCard}>
          <img
            className={css.img}
            onClick={openModal}
            src={onePart[0].Img}
            width={300}
            alt={onePart[0].Part_Name}
          />
          <div className={css.card}>
            <p className={css.text}>Назва: {onePart[0].Part_Name}</p>
            <p className={css.text}>Каталожний номер: {onePart[0].Articul} </p>
            <p className={css.text}>Країна виробник: {onePart[0].Country}</p>
            <p className={css.text}>
              Ціна: {Math.round(onePart[0].Price * KURS)}, грн
            </p>
            <p className={css.text}>
              Встановлюється на автомобілі: {model[0]} {onePart[0].Model.join()}
            </p>
          </div>
        </div>
      )}
      <div className={css.description}>
        <p>
          Магазин <span className={css.companyName}>Renfa</span> - завжди низькі
          ціни та висока якість. Якщо не знайшли потрібну Вам запчастину,
          звертайтесь по телефону або у viber. Приймаємо замовлення на доставку
          морем та літаком.
        </p>
      </div>
      {showModal && <Modal src={onePart[0]} onClose={closeModal} />}
    </div>
  );
};
