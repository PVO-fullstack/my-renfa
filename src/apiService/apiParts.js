import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://renfa-api.onrender.com";
axios.defaults.baseURL = "http://localhost:3000";
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
  const res = await axios.get(`/api/${model}`);
  return res.data;
};

export const getAllModel = async (model) => {
  // localStorage.setItem("token", JSON.stringify(res.data.token));
  // const tokenLs = await JSON.parse(localStorage.getItem("token"));
  // await token.set(tokenLs);
  const res = await axios.get(`/api/parts/allmodel`);
  return res.data;
};

export const createModel = createAsyncThunk(
  "part/new",
  async (part, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenSt = state.auth.token;

    if (tokenSt === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(tokenSt);

    try {
      const res = await axios.post(`/api/parts`, part);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changePart = createAsyncThunk(
  "part/change",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenSt = state.auth.token;

    if (tokenSt === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(tokenSt);

    const id = data._id;

    try {
      const res = await axios.put(`/api/parts/${id}`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeImg = createAsyncThunk(
  "part/newimg",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenSt = state.auth.token;

    if (tokenSt === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(tokenSt);

    const { id, img } = data;

    try {
      const res = await axios.patch(`/api/parts/${id}`, img, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
