import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@store';

export const selectCoinSlice = (state: RootState) => {
  return state.coinSlice;
};

export const selectIsCoinLiked = createSelector(
  [
    selectCoinSlice,
    (_, id) => {
      return id;
    },
  ],
  (coinSlice, id) => {
    return coinSlice.likedCoinIds.includes(id);
  },
);
