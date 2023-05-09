import NavLink from "next/link";
import css from "./navbar.module.scss";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "space-around",
        backgroundColor: "tomato",
        border: "2px solid black",
        borderRadius: "5px",
        padding: "10px",
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
    </div>
  );
}
