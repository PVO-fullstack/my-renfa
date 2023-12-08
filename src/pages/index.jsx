// import "../../styles/globals.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "@/redux/auth/auth-operations";
import { getAllParts } from "@/apiService/apiParts";
import { HomePage } from "@/component/HomePage";

export const metadata = {
  title: "Acme",
  openGraph: {
    title: "Acme",
    description: "Acme is a...",
  },
};

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllParts();
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <HomePage />
    </div>
  );
}
