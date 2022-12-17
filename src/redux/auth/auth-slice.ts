import axios, {AxiosError, AxiosResponse} from 'axios';
import {createSlice, PayloadAction, current} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../store';
import {User} from '../../types/index';

const initialState: User = {
  id: '',
  name: '',
  password: '',
  isAuth: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth-user',
  initialState,
  reducers: {
    resetState: () => initialState,
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    validateForm: state => {
      // We clear errors
      state.error = '';

      // Then we validate the form
      const {name, password} = current(state);

      // Validating the title
      if (!name) {
        state.error = "Email or username can't be empty";

        return;
      } else {
        if (password.length < 6) {
          state.error = 'Password must be at least 6 characters';
          return;
        } else {
          // we have to do something here
        }
      }
    },
    authUserSuccess: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
      state.error = '';
      state.isAuth = true;
    },
    authUserFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isAuth = false;
    },
  },
});

export const {
  resetState,
  changeName,
  changePassword,
  validateForm,
  authUserSuccess,
  authUserFail,
} = authSlice.actions;

export const selectCreateUser = (state: RootState) => state.auth;

export const loginUser = (): AppThunk => async (dispatch, getState) => {
  dispatch(validateForm());

  const {name, password} = selectCreateUser(getState());

  // If the form is valid, we send a request to the api
  try {
    const res: AxiosResponse = await axios.post('/', {
      name,
      password,
    });

    dispatch(authUserSuccess(res.data));
  } catch (error) {
    // Catching the error
    const {response} = error as AxiosError;

    dispatch(authUserFail('Something unexpected happend!'));
  }
};

export default authSlice.reducer;
