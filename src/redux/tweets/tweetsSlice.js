import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "./tweetsOperations";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    users: [],
    following: [],
  },
  reducers: {
    addToFolowwing: (state, { payload }) => {
      state.following.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
    });
  },
});

export const tweetsReducer = tweetsSlice.reducer;
export const { addToFolowwing } = tweetsSlice.actions;
