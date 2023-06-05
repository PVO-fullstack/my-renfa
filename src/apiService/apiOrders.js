import axios from "axios";

axios.defaults.baseURL = "https://renfa-api.onrender.com";
// axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = "https://renfa-api-2uzf.vercel.app/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const getAllOrders = async () => {
  //   localStorage.setItem("token", JSON.stringify(res.data.token));
  const tokenLs = await JSON.parse(localStorage.getItem("token"));
  await token.set(tokenLs);
  const res = await axios.get("/api/orders");
  return res.data;
};

export const getUserOrders = async () => {
  // localStorage.setItem("token", JSON.stringify(res.data.token));
  const tokenLs = await JSON.parse(localStorage.getItem("token"));
  await token.set(tokenLs);
  const res = await axios.get("/api/orders/userorder");
  return res.data;
};

// export const getModelBrand = async (brand) => {
//   // localStorage.setItem("token", JSON.stringify(res.data.token));
//   // const tokenLs = await JSON.parse(localStorage.getItem("token"));
//   // await token.set(tokenLs);
//   const res = await axios.get(`/api/parts/model${brand}`);
//   return res.data;
// };

// export const getModel = async (model) => {
//   // localStorage.setItem("token", JSON.stringify(res.data.token));
//   // const tokenLs = await JSON.parse(localStorage.getItem("token"));
//   // await token.set(tokenLs);
//   const res = await axios.get(`/api/parts/brand${model}`);
//   return res.data;
// };

export const createOrder = async (part) => {
  // localStorage.setItem("token", JSON.stringify(res.data.token));
  const tokenLs = await JSON.parse(localStorage.getItem("token"));
  await token.set(tokenLs);
  const res = await axios.post("/api/orders", part);
  return res.data;
};

export const patchOrder = async (id) => {
  // localStorage.setItem("token", JSON.stringify(res.data.token));
  const tokenLs = await JSON.parse(localStorage.getItem("token"));
  await token.set(tokenLs);
  const res = await axios.patch(`/api/orders/${id}/close`, { close: "true" });
  return res.data;
};
