import style from "./page.module.css";
import { Toaster } from "react-hot-toast";
import { Header } from "@/component/New/Header/Header";
import { Footer } from "@/component/New/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Toaster />
      <Header />
      <div className={style.conteiner}>{children}</div>
      <Footer />
    </>
  );
}
