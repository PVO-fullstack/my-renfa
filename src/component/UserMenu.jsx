import React, { useEffect, useState } from "react";
import NavLink from "next/link";
import { Button } from "react-bootstrap";
import css from "./UserMenu.module.scss";

export const UserMenu = ({ name, logout, show }) => {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const userAvatar = JSON.parse(localStorage.getItem("avatar"));
    setAvatar(userAvatar);
  }, []);

  console.log("avatar", avatar);

  return (
    <div className={css.menu}>
      {name && name !== "" ? <img width={40} src={avatar} alt="" /> : ""}
      {name && name !== ""
        ? <img src={avatar} alt="" /> && (
            <p className={css.user_name}>Вітаю Вас, {name}</p>
          )
        : ""}
      {name && name !== "" ? (
        <Button variant="primary" size="lg" onClick={logout}>
          Logout
        </Button>
      ) : (
        <Button variant="primary" size="lg" onClick={show}>
          Register
        </Button>
      )}
      {name && name !== "" ? (
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
