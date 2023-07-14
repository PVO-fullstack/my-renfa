import { AllModels } from "@/component/AllModels";
import { refreshUser } from "@/redux/auth/auth-operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Model() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <AllModels />;
}
