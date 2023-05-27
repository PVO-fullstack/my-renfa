import React from "react";
import NavLink from "next/link";
import { Button } from "react-bootstrap";
import css from "./UserMenu.module.scss";

export const UserMenu = ({ name, logout, show }) => {
  return (
    <div className={css.menu}>
      {name ? <p className={css.user_name}>Вітаю Вас, {name}</p> : ""}
      {name ? (
        <Button variant="primary" size="lg" onClick={logout}>
          Logout
        </Button>
      ) : (
        <Button variant="primary" size="lg" onClick={show}>
          Register
        </Button>
      )}
      {name ? (
        <NavLink className={css.link} href="/order">
          <img
            className={css.cart}
            src="cart.png"
            width={30}
            // title="smart cart icons"
          />
        </NavLink>
      ) : (
        ""
      )}
    </div>
  );
};
