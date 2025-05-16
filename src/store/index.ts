import { skipSelectSlice } from "@/features/skip-select/store/skip-select-slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
      skipSelect: skipSelectSlice.reducer,
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  