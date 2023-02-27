import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@store';

export const selectAuthenticationSlice = (state: RootState) => {
  return state.authenticationSlice;
};

export const selectIsSignedIn = createSelector(
  [selectAuthenticationSlice],
  (authenticationSlice) => {
    return authenticationSlice.isSignedIn;
  },
);
