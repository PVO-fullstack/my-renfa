import Footer from "../pages/footer";
import { SideBar } from "@/component/SideBar";
import bgImg from "../img/MG-Logo.png";
import css from "./page.module.css";
import Navbars from "@/component/NavBar";

export default function Layout({ children }) {
  return (
    // <html lang="en">
    //   <head></head>
    //   <body style={{ backgroundColor: "GrayText" }}>
    <>
      <Navbars />
      <div className={css.main}>
        {/* <div> */}
        {/* <div style={{ display: "flex" }}> */}
        <SideBar />
        {children}
      </div>
      {/* </div> */}
      <Footer />
      {/* </div> */}
    </>
  );
}
