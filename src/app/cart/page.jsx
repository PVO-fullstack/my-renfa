import { UserCart } from "@/component/New/UserCart/UserCart";
import { OrderList } from "@/component/OrderList/OrderList";

export default function Cart() {
  return (
    <>
      {/* <div style={{ textAlign: "center", margin: "20px 0" }}>
        <h2>Замовлення</h2>
      </div> */}
      <UserCart />
      {/* <OrderList /> */}
    </>
  );
}
