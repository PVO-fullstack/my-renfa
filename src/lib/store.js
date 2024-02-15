import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authSlice } from "./auth/auth-slice";
import { partsApi } from "@/apiService/apiPartsRTK";
// import { contactsApi } from "./contacts/contactsSlice";
// import { filterSlice } from "./contacts/filterSlice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
  // key: "user_order",
  // storage,
  // whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice.reducer),
    [partsApi.reducerPath]: partsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    partsApi.middleware,
  ],
});

export const persistor = persistStore(store);
