"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { Input } from "../Input";
import { InputMessage } from "../InputMessage";
import { Button } from "../Button";
import { sendTelegramMessage } from "@/utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import messages from "@/data/telegram.json";
import sectionData from "@/data/contactSection.json";
import { ToastContainer } from "react-toastify";
import style from "./CallbackForm.module.scss";
import { Thanks } from "../New/Thanks/Thanks";

const { title, contactsBlock } = sectionData;

const LOCAL_STORAGE_KEY = "callback";

const {
  callbackForm: { name, phone, message, buttonSubmit },
} = sectionData;

export const CallbackForm = ({ className }) => {
  const [isPending, setIsPending] = useState(false);
  const [send, setSend] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useFormPersist(LOCAL_STORAGE_KEY, {
    watch,
    setValue,
    storage: typeof window !== "undefined" && window.localStorage,
  });

  console.log("isPanding", isPending);

  console.log("send", send);

  const onSubmit = async (data) => {
    try {
      setIsPending(true);
      await toast.promise(sendTelegramMessage(data), {
        pending: {
          render() {
            console.log("Ura");
            return messages.queryPending;
          },
          type: "info",
        },
        success: {
          render() {
            console.log("Da");
            reset({ name: "", phone: "", message: "" });
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
      setIsPending(false);
    } catch {
      setIsPending(false);
    }
  };

  return (
    <>
      <div className={style.conteiner}>
        {!send ? (
          <div className={style.form_conteiner}>
            <h1 className={style.title}>
              Задайте своє питання – Ми готові допомогти!
            </h1>
            <form
              className={`flex flex-col max-w-[424px] p-[16px] md:px-[64px] md:py-[36px] rounded-[24px] bg-block ${style.form}`}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
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
              <InputMessage
                className="mb-[-3px]"
                name="message"
                labelText={message.labelText}
                placeholderText={message.placeholderText}
                setValue={setValue}
                register={register}
                errors={errors}
                errorMessages={message.errorMessages}
              />

              <Button
                className="w-full md:w-[147px] mt-[5px] md:ml-auto"
                disabled={isPending}
              >
                {buttonSubmit.labelText}
              </Button>
            </form>
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
    </>
  );
};
