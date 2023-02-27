import { createSlice } from '@reduxjs/toolkit';

import { signIn, signOut } from './authentication.reducers';
import type { AuthenticationSliceState } from './authentication.types';

const initialState: AuthenticationSliceState = {
  isSignedIn: false,
};

const authenticationSlice = createSlice({
  initialState,
  name: 'authenticationSlice',
  reducers: {
    signIn,
    signOut,
  },
});

export default authenticationSlice;
