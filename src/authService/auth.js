import axios from "axios";

axios.defaults.baseURL = "https://renfa-api.onrender.com";

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
  token.set(res.data.token);
  return res.data;
};

export const logout = async () => {
  const res = await axios.post("/api/auth/users/logout");
  token.unset();
  return res.data;
};

export const userRefresh = async () => {
  const res = await axios.get("/api/auth/users/current");
  return res.data;
};
