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
    <div>
      <Navbar />
      <div className={css.main} style={{ display: "flex" }}>
        <SideBar />
        {children}
      </div>
      <Footer />
    </div>
    //   </body>
    // </html>
    // <html lang="en">
    //
    //   {/* <div style={{ display: "flex" }}> */}
    //   <main style={{ width: "-webkit-fill-available" }}>
    //     <body style={{ backgroundColor: "aliceblue" }}>
    //       <>{children}</>
    //     </body>
    //   </main>
    //   {/* </div> */}

    //   <Footer />
    // </html>
  );
}
