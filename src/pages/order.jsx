import { OrderList } from "@/component/OrderList";

export default function Order() {
  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <h2>Замовлення</h2>
      </div>
      <OrderList />
    </div>
  );
}
