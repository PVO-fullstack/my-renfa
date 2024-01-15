import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import "../../styles/globals.css";
import Layout from "@/app/layout";
import { Exo_2 } from "next/font/google";
import { Header } from "@/component/New/Header/Header";
import { Footer } from "@/component/New/Footer/Footer";

const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <main className={exo2.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
        <Footer />
      </PersistGate>
    </Provider>
  );
}
