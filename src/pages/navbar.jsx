import NavLink from "next/link";
import css from "./navbar.module.scss";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { AuthModal } from "@/component/AuthModal";
import Navbar from "react-bootstrap/Navbar";
import { logout } from "@/authService/auth";

export default function Navbars() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(null);

  const handleClose = (name) => {
    setShow(false);
    setName(name);
  };
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    logout();
    setName(null);
  };

  return (
    <div
      style={{
        position: "relative",
        zIndex: "3",
        display: "flex",
        gap: "30px",
        justifyContent: "space-around",
        backgroundColor: "#4bd4bf",
        // border: "2px solid #4bd4bf",
        borderRadius: "5px",
        marginTop: "5px",
        padding: "5px",
        boxShadow: "0 0 10px 5px #441d1d80;",
      }}
    >
      <NavLink className={css.link} href="/">
        Home
      </NavLink>
      <NavLink className={css.link} href="/model">
        Model
      </NavLink>
      <NavLink className={css.link} href="/contacts">
        Contacts
      </NavLink>
      <NavLink className={css.link} href="/order">
        Order
      </NavLink>
      {name ? <p className={css.user_name}>Вітаю Вас: {name}</p> : ""}
      {name ? (
        <Button variant="primary" size="lg" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button variant="primary" size="lg" onClick={handleShow}>
          Register
        </Button>
      )}
      <AuthModal show={show} handleClose={handleClose} />
    </div>
  );
}
