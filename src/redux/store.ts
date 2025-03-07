import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import baseApi from "./Api/baseApi";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// ...

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDafaultMiddlewares) =>
    getDafaultMiddlewares().concat(baseApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
