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
  isLoad: false,
};

const userIn = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoad = false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isLoad = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        userIn(state, action);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoad = false;
      })
      .addCase(logInUser.pending, (state, action) => {
        state.isLoad = true;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        userIn(state, action);
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.isLoad = false;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefresh = true;
        state.isLoad = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefresh = false;
        state.isLoad = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefresh = false;
        state.isLoad = false;
      })
      .addCase(logOutUser.pending, (state) => {
        state.isLoad = true;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isLoad = false;
      }),
});
