import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

const getToken = () => {
  const state = thunkAPI.getState();
  const tokenSt = state.auth.token;

  if (tokenSt === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(tokenSt);
};

export const getAllOrders = createAsyncThunk(
  "ordere/all",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenSt = state.auth.token;

    if (tokenSt === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(tokenSt);
    try {
      const res = await axios.get("/api/orders");
      console.log("res", res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserOrders = createAsyncThunk(
  "order/user",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenSt = state.auth.token;

    if (tokenSt === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(tokenSt);
    try {
      const res = await axios.get("/api/orders/userorder");
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    // localStorage.setItem("token", JSON.stringify(res.data.token));
    // const tokenLs = await JSON.parse(localStorage.getItem("token"));
    // await token.set(tokenLs);
  }
);

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
