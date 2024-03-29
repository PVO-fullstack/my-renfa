import { nameNormalize, phoneNormalize } from "@/utils";
import PropTypes from "prop-types";
import css from "./input.module.scss";

export const Input = ({
  labelText = "",
  placeholderText = "",
  name,
  type,
  values,
  defautValues,
  setValue,
  errors,
  register,
  errorMessages,
  className = "",
}) => {
  const typeIsPhone = type === "phone";
  const typeIsEmail = type === "email";
  const typeIsPassword = type === "password";
  const typeIsPost = type === "post";

  const nameRegisterValidation = {
    required: errorMessages.required || "Обов'язкове поле",
    minLength: {
      value: 1,
      message: errorMessages.minLength || "Мінімум 1 символ",
    },
    maxLength: {
      value: 70,
      message: errorMessages.maxLength || "Максимум 70 символів",
    },
    pattern: {
      value:
        /^(([A-Za-zА-Яа-яЇїІіЄєҐґ])+(['`][A-Za-zА-Яа-яЇїІіЄєҐґ]+)*)+([- ](([A-Za-zА-Яа-яЇїІіЄєҐґ])+(['`][A-Za-zА-Яа-яЇїІіЄєҐґ]+)*))* ?$/,
      message: errorMessages.pattern || "Невірне ім'я",
    },
  };

  const telRegisterValidation = {
    required: errorMessages.required || "Обов'язкове поле'",
    minLength: {
      value: 13,
      message: errorMessages.minLength || "Повинно бути мінімум 11 цифр ",
    },
  };

  const passwordRegisterValidation = {
    required: errorMessages.required || "Обов'язкове поле'",
    minLength: {
      value: 6,
      message: errorMessages.minLength || "Повинно бути мінімум 6 символів ",
    },
  };

  const emailRegisterValidation = {
    required: errorMessages.required || "Обов'язкове поле",
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      message: errorMessages.pattern || "Невірний email",
    },
  };

  const postRegisterValidation = {
    required: errorMessages.required || "Обов'язкове поле",
    minLength: {
      value: 1,
      message: errorMessages.minLength || "Мінімум 1 символ",
    },
  };

  const getHandleChange = (normalizeMethod) => {
    const fn = (event) => {
      const { value } = event.target;
      event.target.value = normalizeMethod ? normalizeMethod(value) : value;
      setValue(name, value || event.target.value, {
        shouldValidate: true,
      });
    };
    return fn;
  };
  const onChangeProps = {
    onChange: getHandleChange(typeIsPhone ? phoneNormalize : nameNormalize),
  };

  return (
    <label className={css.label}>
      {labelText}
      <input
        className={`w-full py-[8px] px-[12px] rounded-[12px] bg-primaryBg placeholder:text-placeholder focus-visible:outline-none ${
          css.input
        } ${errors[name] && "text-error"}`}
        type={
          (typeIsPhone && "tel") ||
          (typeIsEmail && "email") ||
          (typeIsPost && "post") ||
          (typeIsPassword ? "password" : "text")
        }
        values={values}
        id={name}
        name={name}
        placeholder={placeholderText}
        {...register(
          name,
          (type === "phone" && { ...telRegisterValidation }) ||
            (type === "email" && { ...emailRegisterValidation }) ||
            (type === "password" && { ...passwordRegisterValidation }) ||
            (type === "post" && { ...postRegisterValidation }) ||
            (type === "name" && { ...nameRegisterValidation })
        )}
        {...onChangeProps}
        autoComplete="off"
      />
      <span
        className={`text-[12px] font-[500] text-error leading-[1.2] h-[15px] self-end ${css.error}`}
      >
        {errors[name]?.message}
      </span>
    </label>
  );
};

Input.propTypes = {
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["name", "email", "password", "phone", "post"])
    .isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func,
  errorMessages: PropTypes.shape({
    required: PropTypes.string,
    minLength: PropTypes.string,
    maxLength: PropTypes.string,
    pattern: PropTypes.string,
  }),
  className: PropTypes.string,
};
