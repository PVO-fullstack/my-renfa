"use client";

import { refreshUser } from "@/lib/auth/auth-operations";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function layout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  return <>{children}</>;
}
