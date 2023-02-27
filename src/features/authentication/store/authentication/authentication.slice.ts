import { createSlice } from '@reduxjs/toolkit';

import { signIn } from './authentication.reducers';
import type { AuthenticationSliceState } from './authentication.types';

const initialState: AuthenticationSliceState = {
  isSignedIn: null,
};

const authenticationSlice = createSlice({
  initialState,
  name: 'authenticationSlice',
  reducers: {
    signIn,
  },
});

export default authenticationSlice;
