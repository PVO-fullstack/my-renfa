"use client";

import React, { useEffect, useState } from "react";
import style from "./Order.module.scss";
import Link from "next/link";
import { Input } from "@/component/Input";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import orderData from "@/data/order.json";
import { SectionHeader } from "./SectionHeader/SectionHeader";
import { Button } from "@/component/Button";
import { OrderList } from "./OrderList/OrderList";
import { sendTelegramOrder } from "@/utils";
import { ToastContainer, toast } from "react-toastify";
import messages from "@/data/telegram.json";
import { KURS } from "@/variable/variable";
import { Thanks } from "../Thanks/Thanks";

const LOCAL_STORAGE_KEY = "user_order";

const {
  registerForm: { name, phone, email, city, post, pay },
} = orderData;

export const Order = () => {
  const [isPending, setIsPending] = useState(false);
  const [parts, setParts] = useState([]);
  const [allSum, setAllSum] = useState(0);
  const [send, setSend] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getParts = JSON.parse(localStorage.getItem("order"));
    setParts(getParts);
    const forTG = getParts.map((part) => ({
      Артикул: part.Articul,
      Назва: part.Part_Name + part.Brand + part.Model[0],
      Кількість: part.count,
      Ціна: part.Price * KURS,
    }));
    localStorage.setItem("tg", JSON.stringify(forTG));
    // console.log("forTG", forTG);
    // sum(getParts);
  }, []);

  useFormPersist(LOCAL_STORAGE_KEY, {
    watch,
    setValue,
    storage: typeof window !== "undefined" && window.localStorage,
  });

  // console.log("isPanding", isPending);
  //
  // console.log("send", send);

  const onSubmit = async (data) => {
    try {
      // setIsPending(true);
      await toast.promise(sendTelegramOrder(data), {
        pending: {
          render() {
            console.log("Ura", data);
            // return messages.queryPending;
          },
          type: "info",
        },
        success: {
          render() {
            console.log("Da");
            reset({ name: "", phone: "", email: "", city: "", post: "" });
            setSend(true);
            return;
          },
        },
        error: {
          render({ data }) {
            return messages.queryRejected;
          },
        },
      });
      // setIsPending(false);
    } catch {
      // setIsPending(false);
    }
  };

  return (
    <div className={style.conteiner}>
      {!send ? (
        <div className={style.order_conteiner}>
          <div className={style.title_conteiner}>
            <h2 className={style.title}>Оформлення замовлення</h2>
            <Link className={style.link} href="#">
              Я маю акаунт
            </Link>
          </div>
          <div className={style.order_description}>
            <form
              className={style.form}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <SectionHeader title="Контактна інформація одержувача">
                <div className={style.input_conteiner}>
                  <Input
                    className="mb-[-3px]"
                    name="name"
                    labelText={name.labelText}
                    placeholderText={name.placeholderText}
                    type="name"
                    setValue={setValue}
                    register={register}
                    errors={errors}
                    errorMessages={name.errorMessages}
                  />
                  <Input
                    className="mb-[-3px]"
                    name="email"
                    labelText={email.labelText}
                    placeholderText={email.placeholderText}
                    type="email"
                    setValue={setValue}
                    register={register}
                    errors={errors}
                    errorMessages={email.errorMessages}
                  />
                  <Input
                    className="mb-[-3px]"
                    name="phone"
                    labelText={phone.labelText}
                    placeholderText={phone.placeholderText}
                    type="phone"
                    setValue={setValue}
                    register={register}
                    errors={errors}
                    errorMessages={phone.errorMessages}
                  />
                </div>
              </SectionHeader>
              <SectionHeader className={style.deliver} title="Спосіб доставки">
                <div className={style.input_conteiner}>
                  <Input
                    className="mb-[-3px]"
                    name="city"
                    labelText={city.labelText}
                    placeholderText={city.placeholderText}
                    type="name"
                    setValue={setValue}
                    register={register}
                    errors={errors}
                    errorMessages={city.errorMessages}
                  />
                  <Input
                    className="mb-[-3px]"
                    name="post"
                    labelText={post.labelText}
                    placeholderText={post.placeholderText}
                    type="name"
                    setValue={setValue}
                    register={register}
                    errors={errors}
                    errorMessages={post.errorMessages}
                  />
                </div>
              </SectionHeader>
              <SectionHeader className={style.pay} title="Спосіб оплати">
                <label className={style.checkbox}>
                  <input
                    type="checkbox"
                    name="pay"
                    // setValue={setValue}
                    // register={...register}
                    // errors={errors}
                  />
                  <p className={style.pay_text}>
                    Оплата готівкою при отриманні
                  </p>
                </label>
              </SectionHeader>
              <Button disabled={false}>Завершити</Button>
            </form>
            <OrderList parts={parts} />
          </div>
          <ToastContainer
            theme="colored"
            pauseOnFocusLoss={false}
            pauseOnHover={false}
          />
        </div>
      ) : (
        <Thanks />
      )}
    </div>
  );
};
