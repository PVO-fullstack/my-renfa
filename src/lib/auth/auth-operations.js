import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://renfa-api.onrender.com";
// axios.defaults.baseURL = "http://localhost:3001";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerUser = createAsyncThunk(
  "user/singup",
  async (credentials, thunkAPI) => {
    try {
      const user = await axios.post(
        "https://renfa-api.onrender.com/api/auth/users/register",
        credentials
      );
      token.set(user.data.token);
      return user.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        "https://renfa-api.onrender.com/api/auth/users/login",
        credentials
      );
      token.set(res.data.token);
      // console.log(res);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "user/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    // console.log("state", state);
    const tokenSt = state.auth.token;
    // console.log("token", tokenSt);

    if (tokenSt === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(tokenSt);

    try {
      const user = await axios.get(
        "https://renfa-api.onrender.com/api/auth/users/current"
      );
      return user.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenSt = state.auth.token;

    if (tokenSt === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(tokenSt);

    try {
      const user = await axios.patch(
        "https://renfa-api.onrender.com/api/auth/users/data",
        data
      );
      return user.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  "user/logout",
  async (credentials, thunkAPI) => {
    try {
      const user = await axios.post(
        "https://renfa-api.onrender.com/api/auth/users/logout",
        credentials
      );
      token.unset(user.data.token);
      return user.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
