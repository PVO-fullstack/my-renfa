import Layout from "@/app/layout";
import { StorageList } from "@/component/StorageList";

export default function Order() {
  return (
    <Layout>
      <div style={{ textAlign: "center", margin: "20px 0" }}>Склад</div>
      <StorageList />
    </Layout>
  );
}
