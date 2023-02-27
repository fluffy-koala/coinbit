import { rootApi } from '@api';
import { authenticationSlice } from '@features/authentication';
import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from './store.types';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      rootApi.middleware,
    );
  },
  reducer: {
    [authenticationSlice.name]: authenticationSlice.reducer,
    [rootApi.reducerPath]: rootApi.reducer,
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
