import axios, {AxiosError, AxiosResponse} from 'axios';
import {createSlice, PayloadAction, current} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../store';
import {NewUser} from '../../types/index';
import { supabase } from '../../lib/initSupabase'

const initialState: NewUser = {
  id: '',
  email: '',
  username: '',
  password: '',
  isAuth: false,
  error: '',
};

export const registerSlice = createSlice({
  name: 'register-user',
  initialState,
  reducers: {
    resetState: () => initialState,
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    changeUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    validateForm: state => {
      // We clear errors
      state.error = '';

      // Then we validate the form
      const {email, username, password} = current(state);

      // Validating the title
      if (!email || !username) {
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
    UserSuccess: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
      state.error = '';
      state.isAuth = true;
    },
    UserFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isAuth = false;
    },
  },
});

export const {
  resetState,
  changeEmail,
  changeUsername,
  changePassword,
  validateForm,
  UserSuccess,
  UserFail,
} = registerSlice.actions;

export const selectCreateUser = (state: RootState) => state.register;

export const registerUser = (): AppThunk => async (dispatch, getState) => {
  dispatch(validateForm());

  

  const {email, username, password, error} = selectCreateUser(getState());

  console.log(email)
  // If the form is valid, we send a request to the api
 if (error === '') {
  try {
    const res: AxiosResponse = await axios.post('/register', {
      email,
      username,
      password,
    });
   /* const { data, error} = await supabase.from("users").insert([
      {
        email: email,
        username: username,
        password: password
      }
    ])

    console.log(error)*/

    dispatch(UserSuccess(res.data));
  } catch (error) {
    // Catching the error
    const {response} = error as AxiosError;

    dispatch(UserFail('Something unexpected happend!'));
  }
 }
};

export default registerSlice.reducer;
