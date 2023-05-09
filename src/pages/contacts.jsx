import Layout from "@/app/layout";

export default function Contacts() {
  return (
    <Layout>
      <div
        style={{
          textAlign: "center",
          paddingTop: "100px",
          flex: "auto",
          fontSize: "30px",
          color: "blue",
        }}
      >
        <p>Наші координати:</p>
        <p>м. Київ, вул. Велика Кільцева, 4Б,</p>
        <p>магазин "MG, FAW,JAC, Chery, Geely"</p>
        <p>т. 8(097)7934488 т. 8(093)9123221 Viber т. 8(095)5987683</p>
        <p>http://renfa.com.ua/</p>
      </div>
    </Layout>
  );
}
