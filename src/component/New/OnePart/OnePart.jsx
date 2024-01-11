import { getOnePart } from "@/apiService/apiParts";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Modal } from "../../Modal";
import style from "./OnePart.module.scss";
import { KURS } from "@/variable/variable";
import Link from "next/link";
import Head from "next/head";
import { Plus } from "@/component/Svg/Plus";
import { Minus } from "@/component/Svg/Minus";
import { ArrowBack } from "@/component/Svg/ArrowBack";

export const OnePart = ({ partName }) => {
  const [onePart, setOnePart] = useState();
  const [showModal, setShowModal] = useState(false);
  const [orderParts, setOrderParts] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [model, setModel] = useState([]);
  const [count, setCount] = useState(1);
  const router = useRouter();
  console.log("model", model);

  useEffect(() => {
    const getPart = async () => {
      const modelName = router.query.slag;
      if (modelName || partName) {
        const part = await getOnePart(modelName[2] || partName);
        console.log("part", part);
        if (part && part.modelParts) {
          setOnePart(part.modelParts[0] || partName);
        }
        setModel(modelName);
        console.log("onepart", part);
      }
    };
    getPart();
    const order = localStorage.getItem("order");
    if (order) {
      setOrderParts(JSON.parse(order));
    }
    return () => {
      console.log("first");
    };
  }, [partName, router.query.slag]);

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
      const partString = JSON.stringify([
        ...orderParts,
        { ...onePart, count: count },
      ]);
      console.log("second", partString);
      localStorage.setItem("order", partString);
      setDisabled(true);
      return;
    }
    console.log("first");
    setOrderParts([onePart]);
    const partString = JSON.stringify([{ ...onePart, count: count }]);
    localStorage.setItem("order", partString);
    // console.log("orderParts", orderParts);
    setDisabled(true);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decriment = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  console.log("onePart", onePart);

  return (
    <>
      {onePart && (
        <Head>
          <title>{`${onePart.Description} ${onePart.Articul}`}</title>
          <meta
            name="description"
            content={`${onePart.Description} ${onePart.Articul}`}
            key="desc"
          />
        </Head>
      )}
      <div className={style.conteiner}>
        <Link
          className={style.btn_conteiner}
          href={{
            pathname: `/models/${model[0]}/${model[1]}`,
          }}
        >
          {/* <div className={style.btn_conteiner}> */}
          <p>
            Повернутись до: {model[0]} {model[1]}
          </p>
          <ArrowBack className={style.link} />
          {/* </div> */}
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
              <div className={style.name_conteiner}>
                <h3 className={style.title}>{onePart.Part_Name}</h3>
                <p className={style.text}>Код: {onePart.Articul}</p>
                <p className={style.text}>Країна виробник: {onePart.Country}</p>
                <p className={style.text}>
                  Встановлюється на автомобілі: {model[0]}{" "}
                  {onePart.Model.join(", ")}
                </p>
              </div>
              <div className={style.name_conteiner}>
                <p className={style.price}>
                  {Math.round(onePart.Price * KURS)} ₴
                </p>
                <div className={style.counter}>
                  <Minus click={decriment} />
                  <p className={style.count}>{count}</p>
                  <Plus click={increment} />
                </div>
                <button
                  disabled={disabled}
                  onClick={handleClick}
                  className={style.btn}
                >
                  {disabled ? "У корзині" : "Купити"}
                </button>
              </div>
            </div>
            <p className={style.availability}>В наявності</p>
          </div>
        )}
        <div className={style.description}>
          <p>
            Магазин <span className={style.companyName}>Renfa</span> - завжди
            низькі ціни та висока якість. Якщо не знайшли потрібну Вам
            запчастину, звертайтесь по телефону або у viber. Приймаємо
            замовлення на доставку морем та літаком.
          </p>
        </div>
        {showModal && <Modal src={onePart} onClose={closeModal} />}
      </div>
    </>
  );
};
