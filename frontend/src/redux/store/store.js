import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage
import categoryReducer from '../features/categorySlice'
import productReducer from '../features/productSlice'


const persistConfig = {
  key: "root",
  storage, // Persist in localStorage,

};

const persistedReducer = persistReducer(persistConfig, productReducer);


export const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: persistedReducer
  }
})

export const persistor = persistStore(store);
