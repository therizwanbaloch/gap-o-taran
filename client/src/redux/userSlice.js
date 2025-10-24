import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    otherUsers: [],
    selectedUser: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setOtherUsers: (state, action) => {
      state.otherUsers = action.payload || [];
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload; // fixed here
    },
  },
});

export const { setUserData, setOtherUsers, setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
