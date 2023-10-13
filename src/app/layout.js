import Footer from "../pages/footer";
import { SideBar } from "@/component/SideBar";
import bgImg from "../img/MG-Logo.png";
import css from "./page.module.css";
import Navbars from "@/component/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Navbars />
      <div className={css.main}>
        <SideBar />
        {children}
      </div>
      <Footer />
    </>
  );
}
