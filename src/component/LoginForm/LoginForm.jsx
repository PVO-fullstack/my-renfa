import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { login } from "@/authService/auth";
import css from "./LoginForm.module.css"



export const LoginForm = () => {

const handleSubmit = (e)=>{
  e.preventDefault();
  console.log('e.target', e.target.elements)
  const {email, password} = e.currentTarget;
console.log(email, password)
 const token = login();
 console.log('token', token)
}

  return (
<form action="">
  <label htmlFor="">
    Email
    <input type="email" name="email" id="" />
  </label>
<label htmlFor="">
  Password
  <input type="password" name="password" id="" />
</label>
<button type="submit">Login</button>
</form>
  );
};
