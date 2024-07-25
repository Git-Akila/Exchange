import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUserData2=createAsyncThunk(
    'user/fetchUserData2',
    async()=>{
        const response=await axios.get(
            "http://103.181.21.93:8099/api/v1/admin/totalRoyality"
        );
        return response.data.data;
    }
);
const userSlice=createSlice({
    name:'user1',
    initialState:{
        data:null,
        status:'idle',
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUserData2.pending,(state)=>{
            state.status='loading';
        })
        .addCase(fetchUserData2.fulfilled,(state,action)=>{
            state.status='succeeded';
            state.data=action.payload;
        })
        .addCase(fetchUserData2.rejected,(state,action)=>{
            state.error='failed';
            state.error=action.error.message;
        });
    },
});
export default userSlice.reducer;