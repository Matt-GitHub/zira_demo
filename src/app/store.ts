import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rosterReducer from "../features/roster/rosterSlice";

export const store = configureStore({
  reducer: {
    roster: rosterReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
