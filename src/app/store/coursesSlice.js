import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../config/api";

const initialState = {
  loading: false,
  haveData: false,
  haveError: false,
  courses: [],
};

export const fetchCourses = createAsyncThunk("courses/getData", async () => {
  const result = await api.get("/courses");
  return result;
});

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state, action) => {
      state.loading = true;
      state.haveData = false;
      state.haveError = false;
    }).addCase(fetchCourses.fulfilled, (state, action) => {
      //console.log(action.payload)
      state.courses = action.payload.data.data;
      state.loading = false;
      state.haveData = true;
      state.haveError = false;
    }).addCase(fetchCourses.rejected, (state, action) => {
      state.loading = false;
      state.haveError = true;
      state.haveData = false;
    })
  }
})
export default coursesSlice.reducer;
