import Layout from "@/app/layout";
import { OrderList } from "@/component/OrderList";

export default function Order() {
  return (
    <Layout>
      <div style={{ textAlign: "center", margin: "20px 0" }}>Order</div>
      <OrderList />
    </Layout>
  );
}
