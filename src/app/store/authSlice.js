"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: undefined,
  apiKey: undefined,
  phoneNumber: undefined,
  email: undefined,
  isLogin: false,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    registerUser: (state, { payload }) => {
      // state.apiKey = payload.apiKey;
      state.phoneNumber = payload.phoneNumber;
      state.email = payload.email;
      // state.isLogin = payload.isLogin;
      localStorage.setItem("verifiedUser", true);
    },
  },
});
export const { registerUser } = authSlice.actions;
export default authSlice.reducer;
