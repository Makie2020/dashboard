/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {usersData} from '../../DummyData/usersData';
import { delay } from './delay';

export interface UsersData {
    photo: string,
    id: string,
    full_name: string,
    email: string,
    start_date: string,
    description: string,
    phone_number: string,
    status: string,
}

interface UserState {
  users: [] | string [],
  status: 'idle' | 'Loading' | 'Succeeded' | 'Failed'
}

const initialState : UserState = {
  users: [],
  status: 'idle',
}
interface ActionInterface {
  type: string;
  payload: any;
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (data: UsersData[]= usersData) => {
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
      .addCase(fetchUsers.fulfilled, (state: UserState, action: ActionInterface) => {
        state.status = 'Succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state: UserState) => {
        state.status = 'Failed';
        console.log("Not able to load the users")
      })
      .addCase(newUser.fulfilled, (state: UserState, action: ActionInterface) => {
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