// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch user data
export const fetchUserData1 = createAsyncThunk(
  'user/fetchUserData1',
  async () => {
    const response = await axios.get(
      "http://103.181.21.93:8099/api/v1/admin/totalSubscription"
    );
    return response.data.data; // Adjust based on actual response structure
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null, // Change to null to handle initial state properly
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData1.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData1.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserData1.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
