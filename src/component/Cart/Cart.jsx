import Image from "next/image";
import React from "react";
import NavLink from "next/link";
import style from "./Cart.module.scss";

export const Cart = ({ className }) => {
  return (
    <NavLink className={style.link} href="/order">
      <Image
        className={style.cart}
        src="/cart.png"
        width={30}
        height={30}
        alt="cart"
      />
    </NavLink>
  );
};
