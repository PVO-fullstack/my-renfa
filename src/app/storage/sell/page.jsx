import { Sell } from "@/component/New/Sell/Sell";
// import { refreshUser } from "@/lib/auth/auth-operations";
import React from "react";
// import { useDispatch } from "react-redux";

export default function page() {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(refreshUser());
  //   }, []);

  return (
    <div>
      <Sell />
    </div>
  );
}
