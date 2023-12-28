// import "../../styles/globals.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "@/redux/auth/auth-operations";
import { getAllParts } from "@/apiService/apiParts";
import { HomePage } from "@/component/Home/HomePage";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllParts();
    dispatch(refreshUser());
  }, [dispatch]);

  return <HomePage />;
}
