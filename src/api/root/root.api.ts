import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ROOT_API } from './root.api.constants';

const rootApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: ROOT_API.BASE_URL,
  }),
  endpoints: () => {
    return {};
  },
  reducerPath: 'api',
});

export default rootApi;
