import NavLink from "next/link";
import css from "./navbar.module.scss";
import { useState } from "react";
import { AuthModal } from "@/component/AuthModal";
import { UserMenu } from "@/component/UserMenu";
import { logOutUser } from "@/redux/auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "@/redux/auth/auth-selectors";

export default function Navbars() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(null);
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const userName = useSelector(selectUser);

  console.log("user", user);

  const dispatch = useDispatch();

  const handleClose = (user) => {
    setShow(false);
    setShowMenu(false);
    setUser(user);
  };

  const handleShow = () => setShow(true);

  const handleShowMenu = () => setShowMenu(true);

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <div className={css.conteiner}>
      <NavLink className={css.link} href="/">
        Home
      </NavLink>
      <NavLink className={css.link} href="/model">
        Model
      </NavLink>
      <NavLink className={css.link} href="/contacts">
        Contacts
      </NavLink>
      {userName && userName.position === "admin" ? (
        ""
      ) : (
        <NavLink className={css.link + " " + css.form} href="/form">
          Звернутися до нас
        </NavLink>
      )}
      <UserMenu userLog={user} logout={handleLogout} show={handleShow} />
      <AuthModal show={show} handleClose={handleClose} />
      <button className={css.name} onClick={handleShowMenu}>
        MENU
      </button>
      <AuthModal show={showMenu} handleClose={handleClose} />
      {userName && userName.position === "admin" && (
        <NavLink className={css.name} href="/storage">
          Admin
        </NavLink>
      )}
      {userName && (
        <p className={css.name} onClick={handleLogout}>
          {userName ? userName.name : ""}
        </p>
      )}
    </div>
  );
}
