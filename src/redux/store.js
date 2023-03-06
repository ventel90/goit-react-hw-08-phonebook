import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contacts/contacts-operation';
import authSlice from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
//   whitelist: ['token'],
};


export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    auth: persistReducer(persistConfig, authSlice),
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,
  ],
});

export const persistor = persistStore(store);
