import { refreshUser } from "@/redux/auth/auth-operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Contacts } from "@/component/Contacts/Contacts";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Contacts />
    </>
  );
}
