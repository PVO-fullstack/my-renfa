"use client";

import { Add } from "@/component/New/Add/Add";
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
      <Add />
    </div>
  );
}
