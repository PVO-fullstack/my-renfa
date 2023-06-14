import Layout from "@/app/layout";
import css from "../app/page.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "@/redux/auth/auth-operations";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    // <Layout>
    <div
      style={{
        flex: "auto",
        margin: "200px 0 200px 300px",
        textAlign: "center",
        fontSize: "40px",
        color: "black",
      }}
    >
      <p>
        Запчастини до китайських авто. Великий асортимент. <br /> Можливе
        замовлення запчастин з Китаю.
      </p>
    </div>
    // </Layout>
  );
}
