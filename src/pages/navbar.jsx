import NavLink from "next/link";
import css from "./navbar.module.scss";
import { useState, useEffect } from "react";
import { AuthModal } from "@/component/AuthModal";
import Navbar from "react-bootstrap/Navbar";
import { logout } from "@/authService/auth";
import { UserMenu } from "@/component/UserMenu";

export default function Navbars() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user === null) {
        return;
      }
      // setName(user.name);
      // setUser(user);
    }
  }, [user]);

  const handleClose = (user) => {
    setShow(false);
    setUser(user);
    // localStorage.setItem("name", JSON.stringify(name));
  };

  const handleShow = () => setShow(true);

  const handleLogout = () => {
    logout();
    localStorage.setItem("user", null);
    setName(null);
    setUser(null);
    // localStorage.setItem("position", null);
  };

  console.log("user", user);

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
        // boxShadow: "0 0 10px 5px #441d1d80;",
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
      <UserMenu userLog={user} logout={handleLogout} show={handleShow} />
      <AuthModal show={show} handleClose={handleClose} />
    </div>
  );
}
