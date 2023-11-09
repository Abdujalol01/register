import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  logedIn: false,
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
      state.logedIn = true;
      state.user = action.payload;
    },
    siginUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { siginUserFailure, siginUserSuccess, signUserStart } =
  authSlice.actions;

export default authSlice.reducer;
