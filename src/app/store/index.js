"use client";
import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./authSlice";
import coursesReducer from "./coursesSlice";
import quicklearnVideosSliceReducer from "./quicklearnVideosSlice";

export const store = configureStore({
  reducer: {
    authData: authSliceReducer,
    coursesData: coursesReducer,
    quickLearnVideosData: quicklearnVideosSliceReducer
  },
});
