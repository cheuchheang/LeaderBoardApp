import {configureStore} from '@reduxjs/toolkit';
import userIdReducer from '../redux/userId/userIdSlice';

export const store = configureStore({
  reducer: {userId: userIdReducer},
});
