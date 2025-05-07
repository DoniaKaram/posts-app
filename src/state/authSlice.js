import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredintals) => {
    const request = await axios.post(
      "https://dummyjson.com/auth/login",
      userCredintals
    );
    const response = await request.data;
    console.log(response);
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: { loading: false, auth: null, error: null,isAuthenticated:true},
  reducers: {
    login:(state)=>{
      state.isAuthenticated=true;
    },
    logout:(state)=>{
      state.isAuthenticated=false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.user = null;
      state.error = null;
    }).addCase(loginUser.fulfilled,(state,acion)=>{
      state.loading = false;
      state.user = acion.payload;
      state.error = null;
    }).addCase(loginUser.rejected,(state,action)=>{
      state.loading = false;
      state.user = null;
      state.error = null;
      if(action.error.message==='Request failed with status code 401'){
           state.error='Access Denied!'

      }
      else{
        state.error=action.error.message;
      }
    })
  },
});
export const {login,logout}=authSlice.actions;
export default authSlice.reducer;
