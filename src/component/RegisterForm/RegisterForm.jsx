// import { useDispatch } from "react-redux";
import css from "./RegisterForm.module.scss";
import { registerUser } from "@/redux/auth/auth-operations";
import Link from "next/link";
import { useState } from "react";
import { NavLink } from "react-bootstrap";

export const RegisterForm = () => {
  // const dispatch = useDispatch();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { user_name, user_email, user_password } = e.currentTarget.elements;
    setName(user_name.value);
    setEmail(user_email.value);
    setPassword(user_password.value);
    if (name && email && password) {
      registerUser({ name, email, password });
    }
    console.log(name, email, password);
  };

  return (
    <div className={css.backdrop} id="sign-up-modal">
      <div className={css.modal} id="sign-up-modal-window">
        <button
          className={css.modal__close_button}
          type="button"
          id="signUp-modal-close-btn"
          aria-label="Close sign-up modal"
        >
          {/* <svg className={css.close-button__x-icon}>
            <use href="./images/symbol-defs.svg#icon-x-close"></use>
          </svg> */}
        </button>

        <form
          onClick={handleSubmit}
          className={css.modal_form}
          name="modal-form"
          id="singUp"
        >
          <div className={css.modal_form__input_field} id="name-input-wrapper">
            <input
              className={css.modal_form__input}
              type="text"
              id="signup-user-name"
              name="user_name"
              placeholder="Stephen"
            />
            <label for="user_name" className={css.modal_form__label}>
              name
            </label>
          </div>
          <div className={css.modal_form__input_field}>
            <input
              className={css.modal_form__input}
              type="email"
              id="signup-user-email"
              name="user_email"
              placeholder="stephen14@mail.com"
            />
            <label for="user_email" className={css.modal_form__label}>
              email
            </label>
            {/* <svg className={css.modal-form__icon}>
              <use href="./images/symbol-defs.svg#icon-mail"></use>
            </svg> */}
          </div>
          <div className={css.modal_form__input_field}>
            <input
              className={css.modal_form__input}
              type="password"
              id="signup-user-password"
              name="user_password"
              placeholder="stephenTheBest"
            />
            <label for="user_password" className={css.modal_form__label}>
              password
            </label>
            {/* <svg className={css.modal-form__icon}>
              <use href="./images/symbol-defs.svg#icon-lock"></use>
            </svg> */}
          </div>

          <button type="submit" className={css.modal_form__submit}>
            Sign up
          </button>
        </form>
        <div className={css.modal_toggle}>
          <button type="button" className={css.modal_toggle__el}>
            Sign up
          </button>
          <NavLink
            href="/login"
            // className={css.modal_toggle__el}
            // id="signIn-open-btn"
          >
            Sign in
          </NavLink>
        </div>
      </div>
    </div>
  );
};

{
  /* <div>
      <form action="">
        <label htmlFor="">
          Name
          <input type="text" />
        </label>
        <label htmlFor="">
          Email
          <input type="email" />
        </label>
        <label htmlFor="">
          Password
          <input type="password" name="" id="" />
        </label>
      </form>
    </div> */
}
