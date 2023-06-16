import axios from "axios";

// axios.defaults.baseURL = "https://renfa-api.onrender.com";
axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = "https://renfa-apiup.vercel.app";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = async (credential) => {
  const res = await axios.post("/api/auth/users/register", credential);
  token.set(res.data.token);
  return res.data;
};

export const login = async (credential) => {
  const res = await axios.post("/api/auth/users/login", credential);
  // localStorage.setItem("token", JSON.stringify(res.data.token));
  // const tokenLs = JSON.parse(localStorage.getItem("token"));
  token.set(tokenLs);
  return res.data;
};

export const logout = async () => {
  const tokenLs = JSON.parse(localStorage.getItem("token"));
  token.set(tokenLs);
  const res = await axios.post("/api/auth/users/logout");
  token.unset();
  localStorage.setItem("token", "");
  localStorage.setItem("user", null);
  return res.data;
};

export const userRefresh = async () => {
  const res = await axios.get("/api/auth/users/current");
  return res.data;
};
