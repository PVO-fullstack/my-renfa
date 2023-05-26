import { RegisterForm } from "@/component/RegisterForm/RegisterForm";
import Layout from "@/app/layout";

export default function Register() {
  return (
    <Layout>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        Register
        <RegisterForm />
      </div>
    </Layout>
  );
}
