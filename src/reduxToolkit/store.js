import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dataSlice from "./slice";
import favoriteSlice from "./sliceFavorites";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  data: dataSlice,
  favorites: favoriteSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
