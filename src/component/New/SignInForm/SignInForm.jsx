import { Input } from "@/component/Input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import registerData from "@/data/register.json";
import style from "./SingInForm.module.scss";
import { Close } from "../Close/Close";
import { Button } from "@/component/Button";
import { useDispatch } from "react-redux";
import { logInUser, registerUser } from "@/redux/auth/auth-operations";
import { toast } from "react-hot-toast";
import { Loader } from "@/component/Loader/Loader";

export const SignInForm = ({ close, show }) => {
  const [isPending, setIsPending] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const {
    registerForm: { name, email, password, buttonSubmit },
  } = registerData;

  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log("hello");
    dispatch(logInUser(data)).then((result) => {
      console.log("result", result.message);
      if (result.error) {
        toast.error("Невірний логін або пароль");
      }
    });
    setIsLoading(false);
    close();
  };

  console.log("isLoading", isLoading);

  return (
    <div className={style.conteiner}>
      <Close close={close} />
      <h2 className={style.title}>{registerData.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={style.input_conteiner}>
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
          name="password"
          labelText={password.labelText}
          placeholderText={password.placeholderText}
          type="password"
          setValue={setValue}
          register={register}
          errors={errors}
          errorMessages={password.errorMessages}
        />
        <Button disabled={false}>Увійти</Button>
        <p>У Вас вже є аккаунт</p>
        <p onClick={() => show()}>Увійти</p>{" "}
      </form>
    </div>
  );
};