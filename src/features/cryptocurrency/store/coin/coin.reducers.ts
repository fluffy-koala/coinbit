import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

import type { CoinSliceState } from './coin.types';

export const likeCoin: CaseReducer<CoinSliceState, PayloadAction<string>> = (
  state,
  action,
) => {
  state.likedCoinIds?.push(action.payload);
};

export const dislikeCoin: CaseReducer<CoinSliceState, PayloadAction<string>> = (
  state,
  action,
) => {
  state.likedCoinIds = state.likedCoinIds.filter((likedCoinId) => {
    return likedCoinId !== action.payload;
  });
};
