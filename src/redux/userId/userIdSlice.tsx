import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface UserIdState {
  uid: string;
}
const initialState: UserIdState = {
  uid: '',
};

export const userIdSlice = createSlice({
  name: 'userId',
  initialState,
  reducers: {
    searchUserId: (state, action: PayloadAction<string>) => {
      state.uid = action.payload;
    },
  },
});

export const {searchUserId} = userIdSlice.actions;
export const selectUserId = (state: RootState) => state.userId.uid;
export default userIdSlice.reducer;
