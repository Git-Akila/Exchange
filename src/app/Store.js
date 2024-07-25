
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/userSlice';
import userReducer1 from '../feature/userSlice2';
import userReducer2 from '../feature/userSlice3';
export const store = configureStore({
  reducer: {
    users: userReducer,
    user: userReducer1,
    user1:userReducer2,
  },
});
