// "use client";

import { getOnePart, getPartById } from "@/apiService/apiParts";
import Image from "next/image";
// import { useRouter } from "next/router";
import React from "react";
import { Modal } from "../../Modal";
import style from "./OnePart.module.scss";
import { KURS } from "@/variable/variable";
import Link from "next/link";
import Head from "next/head";
import { Plus } from "@/component/Svg/Plus";
import { Minus } from "@/component/Svg/Minus";
import { ArrowBack } from "@/component/Svg/ArrowBack";
import { Counter } from "../Counter/Counter";
import { Button } from "./Button/Button";
import { BuyBlock } from "./BuyBlock/BuyBlock";

export const OnePart = async ({ partName, brand, model, get, count }) => {
  // const [onePart, setOnePart] = useState();
  // const [showModal, setShowModal] = useState(false);
  // const [orderParts, setOrderParts] = useState([]);
  // const [disabled, setDisabled] = useState(false);
  // const [model, setModel] = useState([]);
  // const [count, setCount] = useState(1);
  // const router = useRouter();

  // useEffect(() => {
  //   const getPart = async () => {
  //     // const modelName = router.query.slag;
  //     if (partName) {
  const allPart = await getPartById(partName);
  // const part = allPart.modelParts[0];
  // console.log("part", allPart);
  //     if (part && part.modelParts) {
  //       setOnePart(part.modelParts[0] || partName);
  //     }
  //     // setModel(modelName);
  //     console.log("onepart", part);
  //   }
  // };
  // getPart();
  // const order = await localStorage.getItem("order");
  // const orderParts = await JSON.parse(order);
  // if (order) {
  //   setOrderParts(JSON.parse(order));
  // }
  //   return () => {
  //     console.log("first");
  //   };
  // }, [partName]);

  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => setShowModal(false);

  // const handleClick = () => {
  //   console.log("onePart", onePart);
  //   if (orderParts && orderParts.length > 0) {
  //     console.log("one", onePart);
  //     // setOrderParts([...orderParts, onePart]);
  //     console.log("orderParts", orderParts);
  //     const partString = JSON.stringify([
  //       ...orderParts,
  //       { ...onePart, count: count },
  //     ]);
  //     console.log("second", partString);
  //     localStorage.setItem("order", partString);
  //     // setDisabled(true);
  //     return;
  //   }
  //   console.log("first");
  //   // setOrderParts([onePart]);
  //   const partString = JSON.stringify([{ ...onePart, count: count }]);
  //   localStorage.setItem("order", partString);
  //   // console.log("orderParts", orderParts);
  //   // setDisabled(true);
  // };

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decriment = () => {
  //   if (count === 1) {
  //     return;
  //   }
  //   setCount(count - 1);
  // };

  // let count;

  // const getCount = (data) => {
  //   count = data;
  // };

  return (
    <>
      {allPart && (
        <Head>
          <title>{`${allPart.Part_Name} ${allPart.Articul}`}</title>
          <meta
            name="description"
            content={`${allPart.Part_Name} ${allPart.Articul}`}
            key="desc"
          />
        </Head>
      )}
      <div className={style.conteiner}>
        <Link
          className={style.btn_conteiner}
          href={{
            pathname: `/models/${brand}/${model}`,
          }}
        >
          {/* <div className={style.btn_conteiner}> */}
          <p>
            Повернутись до: {brand} {model}
          </p>
          <ArrowBack className={style.link} />
          {/* </div> */}
        </Link>
        {allPart && (
          <div className={style.partCard}>
            <Image
              className={style.img}
              // onClick={openModal}
              src={allPart.Img}
              width={300}
              height={200}
              alt={allPart.Part_Name}
            />
            <div className={style.card}>
              <div className={style.name_conteiner}>
                <h3 className={style.title}>{allPart.Part_Name}</h3>
                <div className={style.text_conteiner}>
                  <p className={style.articul}>
                    <span className={style.dots}>Код: </span>
                    <span className={style.value}>{allPart.Articul}</span>
                  </p>
                  <p className={style.text}>
                    <span className={style.dots}>Країна виробник: </span>
                    <span className={style.value}>{allPart.Country}</span>
                  </p>
                  <p className={style.text}>
                    <span className={style.dots}>
                      Встановлюється на автомобілі:{" "}
                    </span>
                    <span className={style.value}>
                      {brand} {allPart.Model.join(", ")}
                    </span>
                  </p>
                </div>
              </div>
              <div className={style.buy_conteiner}>
                <p className={style.price}>
                  {Math.round(allPart.Price * KURS)} ₴
                </p>
                <BuyBlock part={allPart} />
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
        {/* {showModal && <Modal src={onePart} onClose={closeModal} />} */}
      </div>
    </>
  );
};
