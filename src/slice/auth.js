import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persintage-storage";

const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoading = true;
    },
    siginUserSuccess: (state, action) => {
      state.isLoading = false;
      state.loggedIn = true;
      state.user = action.payload;
      setItem("Token", action.payload.token);
    },
    siginUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.user = false;
      state.loggedIn = false;
    },
  },
});

export const { siginUserFailure, logoutUser, siginUserSuccess, signUserStart } =
  authSlice.actions;

export default authSlice.reducer;
