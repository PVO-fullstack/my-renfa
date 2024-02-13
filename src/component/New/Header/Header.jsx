"use client";

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
import { logOutUser } from "@/lib/auth/auth-operations";
import { selectLoad, selectUser } from "@/lib/auth/auth-selectors";
import { Modal } from "../Modal/Modal";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { Auth } from "../Auth/Auth";
import { Loader } from "@/component/Loader/Loader";
import { SearchBtn } from "../SearchBtn/SearchBtn";
import { MenuIcon } from "../MenuIcon/MenuIcon";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { SearchIcon } from "../SearchIcon/SearchIcon";
import { usePathname, useSearchParams } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { CarList } from "../CarList/CarList";
import { AdminPanel } from "../AdminPanel/AdminPanel";

export const Header = () => {
  const [show, setShow] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [brandName, setBrandName] = useState();
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const search = useSearchParams();

  const get = search.getAll("query").toString();

  const userName = useAppSelector(selectUser);
  const isLoad = useAppSelector(selectLoad);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    setShow(false);
    setShowMenu(false);
  };

  const handleShow = () => setShow(true);

  const handleSearch = () => setIsSearch(true);

  const handleCloseSearch = () => setIsSearch(false);

  const handleShowMenu = () => setShowMenu(true);

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  const getBrandName = (name) => {
    setBrandName(name);
  };

  const handleAdminClick = () => {
    setAdmin(true);
  };

  const handleAdminClose = () => {
    setAdmin(false);
  };

  return (
    <div className={style.conteiner}>
      {!isSearch ? (
        <div className={style.header_part_up}>
          <div className={style.menu_conteiner}>
            {/* <div className={style.name} onClick={handleShowMenu}> */}
            <MenuIcon click={handleShowMenu} />
            {/* </div> */}
            {/* <button className={style.name} onClick={handleShowMenu}>
          MENU
        </button> */}
            <SearchIcon click={handleSearch} />
          </div>
          <BurgerMenu show={showMenu} handleClose={handleClose} />
          <Logo className={style.logo} text={style.text} />
          <FindInput />
          <div className={style.user_menu}>
            <UserMenu
              adminClick={handleAdminClick}
              userLog={user}
              logout={handleLogout}
              show={handleShow}
            />
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
      ) : (
        <FindInput close={handleCloseSearch} click={true} />
      )}
      {admin && <AdminPanel />}
      <div className={style.header_part_down}>
        <Brand model={model} get={getBrandName} />
        <div>
          <Link className={style.link} href="/contacts">
            Контакти
          </Link>
        </div>
        {brandName && (
          <div className={style.car_list}>
            <CarList brand={brandName} />
          </div>
        )}
      </div>
      {/* {isLoad && <Loader />} */}
    </div>
  );
};
