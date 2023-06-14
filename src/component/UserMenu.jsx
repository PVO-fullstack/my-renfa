import React, { useEffect, useState } from "react";
import NavLink from "next/link";
import { Button } from "react-bootstrap";
import css from "./UserMenu.module.scss";
import {
  selectAvatar,
  selectPosition,
  selectUser,
} from "@/redux/auth/auth-selectors";
import { useSelector } from "react-redux";
// import img from "../../public/cart.png"

export const UserMenu = ({ userLog, logout, show }) => {
  // const [avatar, setAvatar] = useState("");
  // const [position, setPosition] = useState(null);
  // const [user, setUser] = useState(null);

  console.log(userLog);

  const user = useSelector(selectUser);

  return (
    <div>
      <div className={css.menu}>
        {user && user.name ? <img width={40} src={user.avatar} alt="" /> : ""}
        {user && user.position === "admin" && (
          <NavLink className={css.link} href="/storage">
            Admin
          </NavLink>
        )}
        {user && user.name
          ? <img src={user.avatar} alt="" /> && (
              <p className={css.user_name}>Вітаю Вас, {user.name}</p>
            )
          : ""}
        {user && user.name ? (
          <Button variant="primary" size="lg" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button variant="primary" size="lg" onClick={show}>
            Register
          </Button>
        )}
        {user && user.name ? (
          <NavLink className={css.link} href="/order">
            <img
              className={css.cart}
              src="/cart.png"
              width={30}
              // title="smart cart icons"
            />
          </NavLink>
        ) : (
          ""
        )}
      </div>
      <div className={css.menu}>
        {/* {user && user.position === "admin" && (
          <NavLink className={css.link} href="/storage">
            Admin
          </NavLink>
        )} */}
        {/* {user && user.position === "admin" && (
          <NavLink className={css.link} href="/orders">
            Замовлення
          </NavLink>
        )} */}
      </div>
    </div>
  );
};
