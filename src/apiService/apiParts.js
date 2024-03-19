import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const API_URL = process.env.NEXT_PUBLIC_PARTS_URL;

// const API_URL = "http://localhost:3000";
// const API_URL = "https://www.renfa.pp.ua";
// const API_URL = "https://renfa-api.onrender.com";
// const API_URL = "https://my-renfa.vercel.app/";
// axios.defaults.baseURL = "https://renfa-api.onrender.com";
// axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.baseURL = "https://my-renfa.vercel.app/"?
// axios.defaults.baseURL = API_URL;
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
  const res = await fetch(`${API_URL}/api/parts`, {
    next: { revalidate: 600 },
  });

  const data = await res.json();
  return data;
};

export const getModelBrand = async (brand) => {
  // localStorage.setItem("token", JSON.stringify(res.data.token));
  // const tokenLs = await JSON.parse(localStorage.getItem("token"));
  // await token.set(tokenLs);
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/parts/model${brand}`
  );
  return res.data;
};

export const getModel = async (model, page = 1, limit = 6, init) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PARTS_URL}/api/${model}?page=${page}&limit=${limit}`,
    { next: { revalidate: 600 } }
  );

  const data = await res.json();
  return data;
};

export const getOnePart = async (
  articul,
  page = 1,
  limit = 6,
  brend,
  model,
  init
) => {
  const res = await fetch(
    `${API_URL}/api/car/${articul}?page=${page}&limit=${limit}&brend=${brend}&model=${model}`,
    { next: { revalidate: 600 } }
  );

  const data = await res.json();
  console.log("data", data);
  return data;
};

export const getPartById = async (id, init) => {
  const res = await fetch(`${API_URL}/api/part/${id}`, {
    next: { revalidate: 600 },
  });

  const data = await res.json();
  return data;
};

export const getAllModel = async () => {
  // localStorage.setItem("token", JSON.stringify(res.data.token));
  // const tokenLs = await JSON.parse(localStorage.getItem("token"));
  // await token.set(tokenLs);
  const res = await fetch(`${API_URL}/api/parts/allmodel`);

  const data = await res.json();
  return data;
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
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/part/api/parts`,
        part
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const insertParts = createAsyncThunk(
  "part/newmany",
  async (part, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenSt = state.auth.token;

    if (tokenSt === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(tokenSt);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/parts/parts`,
        part
      );
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
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/parts/${id}`,
        data
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changePartCount = createAsyncThunk(
  "part/changecount",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenSt = state.auth.token;

    if (tokenSt === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(tokenSt);

    const { id, count } = data;

    try {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/parts/${id}`,
        {
          count: count,
        }
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changePartCountSell = createAsyncThunk(
  "part/changecountsell",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenSt = state.auth.token;

    if (tokenSt === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(tokenSt);

    const { id, count } = data;

    try {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/parts/sell/${id}`,
        {
          count: count,
        }
      );
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
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/parts/img/${id}`,
        img,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
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
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
