import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  uid: '',
};

export const userIdSlice = createSlice({
  name: 'userId',
  initialState,
  reducers: {
    searchUserId: (state, {payload}) => {
      state.uid = payload;
    },
  },
});

export const {searchUserId} = userIdSlice.actions;
export default userIdSlice.reducer;
