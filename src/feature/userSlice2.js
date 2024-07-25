
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchUserData1 = createAsyncThunk(
  'user/fetchUserData1',
  async () => {
    const response = await axios.get(
      "http://103.181.21.93:8099/api/v1/admin/totalSubscription"
    );
    return response.data.data; 
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null, 
    status: 'idle', 
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
