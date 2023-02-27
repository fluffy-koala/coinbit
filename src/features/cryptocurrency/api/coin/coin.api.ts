import { rootApi } from '@api';

import coinResponseTransformer from './coin.responseTransformer';

const coinApi = rootApi.injectEndpoints({
  endpoints: (build) => {
    return {
      getCoins: build.query({
        query: () => {
          return {
            url: 'coins/list',
          };
        },
        transformResponse: coinResponseTransformer.getCoins,
      }),
    };
  },
});

export default coinApi;
