import type { CaseReducer } from '@reduxjs/toolkit';

import type { AuthenticationSliceState } from './authentication.types';

export const signIn: CaseReducer<AuthenticationSliceState> = (state) => {
  state.isSignedIn = true;
};
