"use client";
import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  hastoken: "",
  isLogin: false,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    hasLogin(state, action){ 
      //console.log("authslice", state, action)
      // if(state.hastoken){
        try {
          localStorage.setItem("authTokenOwn", action.payload.token);
        } catch (error) {
          console.log(error.message);
        }
        if(localStorage.getItem("authTokenOwn")){
          return{
            ...state,
            hastoken: localStorage.getItem("authTokenOwn"),
            isLogin: true
          }
        }   
      //}
    },
    logOut(state, action){
      localStorage.removeItem("authTokenOwn")
      return {
        hastoken: null,
        isLogin: false
      }
    }
  },
  extraReducers: {}
});
export const { hasLogin, logOut } = authSlice.actions;
export default authSlice.reducer;
