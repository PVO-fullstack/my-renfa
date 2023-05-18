import Navbar from "../pages/navbar";
import Footer from "../pages/footer";
import { SideBar } from "@/component/SideBar";
import bgImg from "../img/MG-Logo.png";
import css from "./page.module.css";

export default function Layout({ children }) {
  return (
    // <html lang="en">
    //   <head></head>
    //   <body style={{ backgroundColor: "GrayText" }}>
    <>
      <Navbar />
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
