import Layout from "@/app/layout";
import css from "../app/page.module.css";

export default function Home() {
  return (
    <Layout>
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
    </Layout>
  );
}
