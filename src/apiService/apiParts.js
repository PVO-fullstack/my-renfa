import axios from "axios";

axios.defaults.baseURL = "https://renfa-api.onrender.com";
// axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = "https://renfa-apiup.vercel.app";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const getAllParts = async () => {
  // localStorage.setItem("token", JSON.stringify(res.data.token));
  // const tokenLs = await JSON.parse(localStorage.getItem("token"));
  // await token.set(tokenLs);
  const res = await axios.get("/api/parts");
  return res.data;
};

export const getModelBrand = async (brand) => {
  // localStorage.setItem("token", JSON.stringify(res.data.token));
  // const tokenLs = await JSON.parse(localStorage.getItem("token"));
  // await token.set(tokenLs);
  const res = await axios.get(`/api/parts/model${brand}`);
  return res.data;
};

export const getModel = async (model) => {
  // localStorage.setItem("token", JSON.stringify(res.data.token));
  // const tokenLs = await JSON.parse(localStorage.getItem("token"));
  // await token.set(tokenLs);
  const res = await axios.get(`/api/parts/brand${model}`);
  return res.data;
};

export const createModel = async (part) => {
  // localStorage.setItem("token", JSON.stringify(res.data.token));
  const tokenLs = await JSON.parse(localStorage.getItem("token"));
  await token.set(tokenLs);
  const res = await axios.post(`/api/parts`, part);
  return res.data;
};
