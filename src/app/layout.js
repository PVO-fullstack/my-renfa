import { SideBar } from "@/component/SideBar/SideBar";
import bgImg from "../img/MG-Logo.png";
import css from "./page.module.css";
import Navbars from "@/component/NavBar";
import { Toaster } from "react-hot-toast";
import { Header } from "@/component/New/Header/Header";
import { Footer } from "@/component/New/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      {/* <div> */}
      <Toaster />
      {/* </div> */}
      <Header />
      <div className={css.main}>
        {/* <SideBar /> */}
        <div className={css.conteiner}>{children}</div>
      </div>
      <Footer />
    </>
  );
}
