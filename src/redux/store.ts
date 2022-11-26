import {Action, ThunkAction, configureStore} from '@reduxjs/toolkit';
import auth from './auth/auth-slice';
import register from './auth/register-slice';
export const store = configureStore({
  reducer: {
    auth,
    register,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
