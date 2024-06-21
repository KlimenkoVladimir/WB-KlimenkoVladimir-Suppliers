import { configureStore } from "@reduxjs/toolkit";
import suppliersReducer from "./suppliersSlice";
import modalReducer from "./modalSlice";
import sortReducer from "./sortSlice";

const store = configureStore({
  reducer: {
    suppliers: suppliersReducer,
    modal: modalReducer,
    sort: sortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
