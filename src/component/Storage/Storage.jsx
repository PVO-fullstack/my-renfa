"use client";

import { refreshUser } from "@/lib/auth/auth-operations";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { StorageList } from "../StorageList";
import { AllOrders } from "../AllOrders";
import { StorageList } from "../New/Storage/StorageList/StorageList";

export const Storage = () => {
  const [isOrders, setIsOrders] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <div
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
      {!isOrders ? <StorageList /> : <AllOrders />}
    </div>
  );
};
