import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    login(state, action) {
      console.log(action.payload);
      const { email, password } = action.payload;
      if (state.user == null) {
        alert("No account found ! Register Now");
      } else if (state.user.email == email && state.user.password == password) {
        state.isLoggedIn = true;
      } else {
        alert("Invalid Credentials !");
      }
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});
export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
