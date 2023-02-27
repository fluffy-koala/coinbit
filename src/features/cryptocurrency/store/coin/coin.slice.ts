import { createSlice } from '@reduxjs/toolkit';

import { dislikeCoin, likeCoin } from './coin.reducers';
import type { CoinSliceState } from './coin.types';

const initialState: CoinSliceState = {
  likedCoinIds: [],
};

const coinSlice = createSlice({
  initialState,
  name: 'coinSlice',
  reducers: {
    dislikeCoin,
    likeCoin,
  },
});

export default coinSlice;
