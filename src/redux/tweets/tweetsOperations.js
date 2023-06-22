import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://649405b70da866a9536704af.mockapi.io/api/tweets/";

export const getAllUsers = createAsyncThunk(
  "userCards/getAllUsers",
  async (__, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/userCards");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
