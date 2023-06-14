import Layout from "@/app/layout";
import { OrderList } from "@/component/OrderList";
import { refreshUser } from "@/redux/auth/auth-operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Order() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>Order</div>
      <OrderList />
    </div>
  );
}
