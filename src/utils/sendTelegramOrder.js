import axios from "axios";
import messages from "@/data/telegram.json";
const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
// axios.defaults.baseURL = `https://api.telegram.org/bot${TOKEN}`;

export const sendTelegramOrder = async ({ name, phone, email, city, post }) => {
  const order = localStorage.getItem("tg");
  const tel = phone.replaceAll(" ", "");
  const messageText = `${messages.orderMessage}\nІм'я:${name}\nТелефон:[${tel}](${tel})\nПошта:${email}\nМісто:${city}\nВідділення:${post}\n${order}`;
  if (!(TOKEN && CHAT_ID)) {
    throw new Error(messages.noDataForConnect);
  }
  return await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    chat_id: CHAT_ID,
    parse_mode: "Markdown",
    text: messageText,
  });
};
