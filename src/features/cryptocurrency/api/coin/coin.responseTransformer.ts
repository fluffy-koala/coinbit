import type { GetCoinsQueryResponse } from './coin.types';

const coinResponseTransformer = {
  getCoins: (data: GetCoinsQueryResponse) => {
    return data.map((coin) => {
      return {
        ...coin,
        symbol: coin.symbol.toUpperCase(),
      };
    });
  },
};

export default coinResponseTransformer;
