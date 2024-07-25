import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch user data
export const fetchUserData = createAsyncThunk(
  "users/fetchUserData",
  async () => {
    const response = await axios.post(
      "http://103.181.21.93:8099/api/v1/admin/user/list",
      {
        username: "newuser",
        email: "newuser@example.com",
        password: "securepassword",
      }
    );
    return response.data.data; // Adjust based on actual response structure
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    originalData: [],
    filteredDataActive: [],
    filteredDataInactive: [],
    filteredDataVerified: [],
    filteredDataUnverified: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    filter: "all",
    emailFilter: "all",
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setEmailFilter(state, action) {
      state.emailFilter = action.payload;
    },
    applyFilters(state) {
      state.filteredDataActive = state.originalData.filter((user) => user.isActive);
      state.filteredDataInactive = state.originalData.filter((user) => !user.isActive);
      state.filteredDataVerified = state.originalData.filter((user) => user.emailVerified);
      state.filteredDataUnverified = state.originalData.filter((user) => !user.emailVerified);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.originalData = action.payload;
        state.filteredDataActive = action.payload.filter((user) => user.isActive);
        state.filteredDataInactive = action.payload.filter((user) => !user.isActive);
        state.filteredDataVerified = action.payload.filter((user) => user.emailVerified);
        state.filteredDataUnverified = action.payload.filter((user) => !user.emailVerified);
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFilter, setEmailFilter, applyFilters } = userSlice.actions;

export const selectFilteredDataActive = (state) => state.users.filteredDataActive;
export const selectFilteredDataInactive = (state) => state.users.filteredDataInactive;
export const selectFilteredDataVerified = (state) => state.users.filteredDataVerified;
export const selectFilteredDataUnverified = (state) => state.users.filteredDataUnverified;

export default userSlice.reducer;
