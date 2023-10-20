import NavLink from "next/link";
import css from "./navbar.module.scss";
import { useState } from "react";
import { AuthModal } from "@/component/AuthModal";
import { UserMenu } from "@/component/UserMenu";
import { logOutUser } from "@/redux/auth/auth-operations";
import { useDispatch } from "react-redux";

export default function Navbars() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(null);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();

  const handleClose = (user) => {
    setShow(false);
    setUser(user);
  };

  const handleShow = () => setShow(true);

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
      <UserMenu userLog={user} logout={handleLogout} show={handleShow} />
      <AuthModal show={show} handleClose={handleClose} />
    </div>
  );
}
