import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice.ts";
import colorChangeReducer from "./color/colorChangeSlice.ts";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    colorChanger: colorChangeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
