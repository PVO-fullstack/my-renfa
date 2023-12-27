import React, { useState } from "react";
import { Logo } from "../Logo/Logo";
import { FindInput } from "../FindInput/FindInput";
import style from "./Header.module.scss";
import Link from "next/link";
import { Avatar } from "../Avatar/Avatar";
import { AskMe } from "../AskMe/AskMe";
import { Cart } from "../Cart/Cart";
import model from "@/data/model.json";
import { Brand } from "../Brand/Brand";
import { UserMenu } from "@/component/UserMenu";
import { AuthModal } from "@/component/AuthModal/AuthModal";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "@/redux/auth/auth-operations";
import { selectLoad, selectUser } from "@/redux/auth/auth-selectors";
import { Modal } from "../Modal/Modal";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { Auth } from "../Auth/Auth";
import { Loader } from "@/component/Loader/Loader";

export const Header = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(null);
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const userName = useSelector(selectUser);
  const isLoad = useSelector(selectLoad);

  console.log("user", user);

  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
    // setShowMenu(false);
    // setUser(user);
  };

  const handleShow = () => setShow(true);

  const handleShowMenu = () => setShowMenu(true);

  const handleLogout = () => {
    dispatch(logOutUser());
    router.push("/");
  };

  return (
    <div className={style.conteiner}>
      <div className={style.header_part_up}>
        <Logo className={style.logo} text={style.text} />
        <FindInput />
        <div className={style.user_menu}>
          <UserMenu userLog={user} logout={handleLogout} show={handleShow} />
          {/* <AuthModal show={show} handleClose={handleClose} /> */}
          {show && (
            <Modal>
              <Auth close={handleClose} />
            </Modal>
          )}
          {/* <Avatar /> */}
          <AskMe />
          <Cart />
        </div>
      </div>
      <div className={style.header_part_down}>
        <Brand model={model} />
        <div>
          <Link className={style.link} href="/contacts">
            Contacts
          </Link>
        </div>
      </div>
      {isLoad && <Loader />}
    </div>
  );
};
