"use client";

import Layout from "@/app/layout";
import { AllOrders } from "@/component/AllOrders";
import { StorageList } from "@/component/StorageList";
import { refreshUser } from "@/lib/auth/auth-operations";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Order() {
  const [isOrders, setIsOrders] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      Storage
      {/* <div
        style={
          {
            // marginLeft: 350,
            // alignItems: "center",
            // marginTop: 20,
            // display: "flex",
            // gap: 10,
            // justifyContent: "center",
          }
        }
      >
        <button onClick={() => setIsOrders(false)}>Склад</button>
        <button onClick={() => setIsOrders(true)}>Замовлення</button>
      </div>

      {!isOrders ? <StorageList /> : <AllOrders />} */}
    </div>
  );
}
