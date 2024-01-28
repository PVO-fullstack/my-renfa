import style from "./page.module.css";
import { Toaster } from "react-hot-toast";
import { Header } from "@/component/New/Header/Header";
import { Footer } from "@/component/New/Footer/Footer";
import { Exo_2 } from "next/font/google";
import "../../styles/globals.css";
import StoreProvider from "./StoreProvider";

const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.renfa.pp.ua"),
  title: {
    default: "Запчастини на автомобілі MG, FAW, Chery, Geely, JAC",
    template: `%s | Запчастини на автомобілі MG, FAW, Chery, Geely, JAC`,
  },
  description:
    "Сайт продажу запчастин на автомобілі китайського виробництва. Запчастини в наявності і під замовлення",
  keywords:
    "Автозапчасти, запчасти для китайського авто, запчастини MG, MG350, MG550, MG5, MG6, MG3Cross, FAW, FAW x40, FAW X80, FAW B30, купити запчастини, купить запчасти, стекло для авто, ветровые стекла, автозапчасти для китайського автомобиля, CHERY, GEELY, GREAT WALL, BYD, LIFAN, ZAZ FORZA, MG, SMA, RAVON, FAW V5, V2, B50, LANDWIND X6, ZHONGXING, CHANA BENNI, DADI, DAEWOO MATIZ, РАЗБОРКА CHERY GEELY, DONG-FENG, FAW, FOTON, ISUZU, JAC",
};

export default function RootLayout({ children }) {
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
