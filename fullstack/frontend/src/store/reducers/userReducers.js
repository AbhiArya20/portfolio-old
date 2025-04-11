import { createSlice } from '@reduxjs/toolkit';

const userInitialState = { userInfo: { admin: true } };

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    resetUserInfo(state, action) {
      state.userInfo = { admin: true };
    }
  }
});

const userActions = userSlice.actions;
const userReducer = userSlice.reducer;

export { userActions, userReducer };
