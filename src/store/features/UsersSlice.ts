/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { Action } from '../../Interfaces/interfaces';
import { UserState } from '../../Interfaces/UserDataInterface';
import { UsersDataExtended } from '../../Interfaces/UserDataInterface';
import { requestGET, requestPOST } from '../ApiClient';

const initialState : UserState = {
  users: [],
  status: 'idle',
}

export const fetchUsers = createAsyncThunk<any>('users/fetchUsers', async() => {
  const dataUsers = await requestGET("http://localhost:3002/users");
  const data: UsersDataExtended = dataUsers.data;
  return data;
});
export const newUser = createAsyncThunk('users/saveNewUser', async(newUser: UsersDataExtended) => {
  const data = await requestPOST("http://localhost:3002/users", newUser)
  return data;
});

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'Loading';
      })
      .addCase(fetchUsers.fulfilled, (state: UserState, action: Action) => {
        state.status = 'Succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state: UserState) => {
        state.status = 'Failed';
        console.log("Not able to load the users")
      })
      .addCase(newUser.fulfilled, (state: UserState, action: Action) => {
        state.status = 'Succeeded';
        state.users = [...state.users, action.payload];
      })
      .addCase(newUser.rejected, (state: UserState) => {
        state.status = 'Failed';
        console.log("Not able to add the new user")
      });
  },
});

export default UsersSlice.reducer;
export const selectAllUsers = (state: any) => state.users.users;