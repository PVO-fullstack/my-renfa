import style from "./page.module.css";
import { Toaster } from "react-hot-toast";
import { Header } from "@/component/New/Header/Header";
import { Footer } from "@/component/New/Footer/Footer";
import Head from "next/head";
import { Exo_2 } from "next/font/google";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
// import { store, persistor } from "@/redux/store";
import "../../styles/globals.css";
import StoreProvider from "./StoreProvider";

const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  console.log("Render");
  return (
    <html lang="ua">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      </head>
      <StoreProvider>
        <body className="main">
          <Toaster />
          <main className={exo2.className}>
            <Header />
            <div className={style.conteiner}>{children}</div>
            <Footer />
          </main>
        </body>
      </StoreProvider>
      {/* </PersistGate>
      </Provider> */}
    </html>
  );
}
