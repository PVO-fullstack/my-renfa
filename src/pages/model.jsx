// import { useState } from "react";
import Layout from "@/app/layout";
import { refreshUser } from "@/redux/auth/auth-operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { ModelList } from "@/component/ModelList";
// import { Part } from "@/component/Part";
// import { SideBar } from "@/component/SideBar";
// import { Modal } from "@/component/Modal";
// // import parts from "../data/350.json";

export default function Model() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <div>Model</div>;
}
