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
  const user = axios.post("/api/auth/users/register", credential);
  // token.set(user.data.token);
  return user.data;
};

export const login = async (credential) => {
  const user = await axios.post("/api/auth/users/login", credential);
  token.set(user.data.token);
  return user.data.user;
};

export const logout = async () => {
  const user = await axios.post("/api/auth/users/logout");
  token.unset();
  return user.data.user;
};
