"use client";

import React, { useEffect, useState } from "react";
import NavLink from "next/link";
// import { Button } from "react-bootstrap";
import css from "./UserMenu.module.scss";
import { selectUser } from "@/lib/auth/auth-selectors";
import { Cart } from "./Cart/Cart";
import { Button } from "./Button";
import { Avatar } from "./New/Avatar/Avatar";
import { useAppSelector, useAppStore, useAppDispatch } from "@/lib/hooks";

export const UserMenu = ({ logout, show, adminClick }) => {
  const user = useAppSelector(selectUser);
  const store = useAppStore();

  const [admin, setAdmin] = useState(false);

  return (
    <div>
      <div className={css.menu}>
        {user && user.name ? (
          <img
            className={css.avatar}
            width={40}
            src={user.avatar}
            alt="avatar"
          />
        ) : (
          ""
        )}
        {user && user.position === "admin" && (
          <p onClick={adminClick} className={css.link}>
            Admin
          </p>
        )}
        {user && user.name
          ? <img className={css.avatar} src={user.avatar} alt="avatar" /> && (
              <p onClick={logout} className={css.user_name}>
                <span className={css.welcome}>Вітаю Вас,</span> {user.name}
              </p>
            )
          : ""}
        {user && user.name ? (
          <Button
            className={css.btn}
            disabled={false}
            type="button"
            // variant="primary"
            // size="lg"
            onClick={logout}
          >
            Logout
          </Button>
        ) : (
          <Avatar show={show} />
          // <Button
          //   disabled={false}
          //   type="button"
          //   // variant="primary"
          //   // size="lg"
          //   onClick={show}
          // >
          //   Register
          // </Button>
        )}
        {/* {user && user.name ? <Cart /> : ""} */}
      </div>
    </div>
  );
};
