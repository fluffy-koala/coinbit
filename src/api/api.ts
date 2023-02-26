import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API } from './api.constants';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API.BASE_URL,
  }),
  endpoints: () => {
    return {};
  },
  reducerPath: 'api',
});

export default api;
