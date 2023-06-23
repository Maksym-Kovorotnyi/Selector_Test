import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://649405b70da866a9536704af.mockapi.io/api/tweets/";

export const getAllUsers = createAsyncThunk(
  "userCards/getAllUsers",
  async ({ page = 1, limit = 3 }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/userCards/?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeUser = createAsyncThunk(
  "userCards/changeUser",
  async ({ id, updateInfo }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/userCards/${id}`, updateInfo);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
