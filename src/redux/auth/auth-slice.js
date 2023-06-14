import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  logInUser,
  logOutUser,
  refreshUser,
} from "./auth-operations";

const initialState = {
  user: { name: null, password: null, avatar: null, position: null },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
};

const userIn = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        userIn(state, action);
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        userIn(state, action);
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefresh = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefresh = false;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      }),
});
