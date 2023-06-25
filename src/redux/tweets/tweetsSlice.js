import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "./tweetsOperations";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    users: [],
    following: [],
  },
  reducers: {
    addToFollowwing: (state, { payload }) => {
      state.following.push(payload);
    },
    removeFromFollowing: (state, { payload }) => {
      state.following.splice(payload, 1);
    },
    removeUsersFollowers: (state, { payload }) => {
      state.users[payload].followers -= 1;
    },
    addUsersFollowers: (state, { payload }) => {
      state.users[payload].followers += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
    });
  },
});

export const tweetsReducer = tweetsSlice.reducer;
export const {
  addToFollowwing,
  removeFromFollowing,
  removeUsersFollowers,
  addUsersFollowers,
} = tweetsSlice.actions;
