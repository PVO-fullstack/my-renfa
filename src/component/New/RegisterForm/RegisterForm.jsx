import { Input } from "@/component/Input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import registerData from "@/data/register.json";
import style from "./RegisterForm.module.scss";
import { Close } from "../Close/Close";
import { Button } from "@/component/Button";
import { useDispatch } from "react-redux";
import { registerUser } from "@/redux/auth/auth-operations";
import { toast } from "react-hot-toast";
import { Loader } from "@/component/Loader/Loader";

export const RegisterForm = ({ close, show }) => {
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

  const [signUp, setSignUp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  //   const onSubmit = async (e) => {
  //     e.preventDefault();
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     // if (signUp === false) {
  //     setIsLoading(true);
  //     const name = e.target.name.value;
  //   dispatch(registerUser({ name, email, password })).then((result) => {
  //     console.log("result", result.message);
  //     if (result.error) {
  //       toast.error("Такий користувач вже існує");
  //     }
  //   });
  //     //   const data = await register({ name, email, password });
  //     // localStorage.setItem("token", JSON.stringify(data.token));
  //     // localStorage.setItem("user", JSON.stringify(data.user));
  //     // handleClose(data.user);
  //     setIsLoading(false);
  //     close();
  //     return;
  //   };
  // const email = formBasicEmail.value;
  // const password = formBasicPassword.value;
  // dispatch(logInUser({ email, password })).then((result) => {
  //   console.log("result", result.message);
  //   if (result.error) {
  //     toast.error("Невірний логін або пароль");
  //   }
  // });
  // setIsLoading(false);
  // close();
  //   };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      dispatch(registerUser(data)).then((result) => {
        console.log("result", result.message);
        if (result.error) {
          toast.error("Такий користувач вже існує");
        }
      }),
        {
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
              return messages.queryResolved;
            },
          },
        };
      setIsLoading(false);
      close();
    } catch {
      setIsLoading(false);
      close();
    }
  };

  console.log("isLoading", isLoading);

  return (
    <div className={style.conteiner}>
      <Close close={close} />
      <h2 className={style.title}>{registerData.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={style.input_conteiner}>
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
          name="password"
          labelText={password.labelText}
          placeholderText={password.placeholderText}
          type="password"
          setValue={setValue}
          register={register}
          errors={errors}
          errorMessages={password.errorMessages}
        />
        <Button disabled={false}>{buttonSubmit.labelText}</Button>
        <p className={style.question}>У вас вже є акаунт?</p>
        <p className={style.text} onClick={() => show()}>
          Увійти
        </p>
      </form>
      {isLoading && <Loader />}
    </div>
  );
};
