/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {usersData} from '../../DummyData/usersData';
import { delay } from './delay';
import { Action } from '../../Interfaces/interfaces';
import { UserState } from '../../Interfaces/UserDataInterface';

const initialState : UserState = {
  users: [],
  status: 'idle',
}

export const fetchUsers = createAsyncThunk<any>('users/fetchUsers', async (data: any = usersData) => {
  return await delay(data);
});

export const newUser = createAsyncThunk('users/saveNewUser', async (data: string []) => {
  return await delay(data);
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