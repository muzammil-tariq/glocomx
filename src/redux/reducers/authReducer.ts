import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userId: "",
  email: "",
  phone: "",
  firstName: "",
  lastName: "",
  profilePic: "",
  accessToken: "",
  refreshToken: "",
  role: "",
  roleId: 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initUser: (state, action: PayloadAction<any>) => {
      if (action.payload) {
        state.email = action.payload.Email;
        state.phone = action.payload.phone;
        state.accessToken = action.payload.AccessToken;
        state.refreshToken = action.payload.AccessToken;
        state.userId = action.payload.Id;
        state.firstName = action.payload.FirstName;
        state.lastName = action.payload.LastName;
        state.profilePic = action.payload.ProfilePic;
        state.role = action.payload.role;
        state.roleId = action.payload.roleId;
        if (action.payload.Id !== undefined && action.payload.Id !== null) {
          state.isLoggedIn = true;
        }
      }
    },

    setAuth: (state, action: PayloadAction<any>) => {
      debugger;
      state.email = action.payload.Email;
      state.phone = action.payload.phone;
      state.accessToken = action.payload.AccessToken;
      state.refreshToken = action.payload.AccessToken;
      state.userId = action.payload.Id;
      state.firstName = action.payload.FirstName;
      state.lastName = action.payload.LastName;
      state.profilePic = action.payload.ProfilePic;
      state.role = action.payload.role;
      state.roleId = action.payload.roleId;
      if (action.payload.Id != undefined && action.payload.Id != null) {
        state.isLoggedIn = true;
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userId = "";
      state.email = "";
      state.phone = "";
      state.firstName = "";
      state.lastName = "";
      state.profilePic = "";
      state.accessToken = "";
      state.refreshToken = "";
      state.role = "";
      state.roleId = 0;
    },
  },
});

export const { initUser, setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
