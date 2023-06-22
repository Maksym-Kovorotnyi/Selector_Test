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
import { tweetsReducer } from "./tweets/tweetsSlice";
import storage from "redux-persist/lib/storage";

const followingPersistConfig = {
  key: "following",
  storage,
  whitelist: ["following"],
};

export const store = configureStore({
  reducer: persistReducer(followingPersistConfig, tweetsReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
