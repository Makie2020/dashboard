import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {usersData} from '../../DummyData/usersData';

function delay(usersData, time = 200) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(usersData);
    }, time);
  });
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return await delay(usersData);
});

export const newUser = createAsyncThunk('users/saveNewUser', async data => {
  return await delay(data);
});

const UsersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'Loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'Succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'Failed';
        state.message = action.error.message;
      })
      .addCase(newUser.fulfilled, (state, action) => {
        state.status = 'Succeeded';
        state.users = [...state.users, action.payload];
      })
      .addCase(newUser.rejected, (state, action) => {
        state.status = 'Failed';
        state.message = action.error.message;
      });
  },
});

export default UsersSlice.reducer;

export const selectAllUsers = state => state.users.users;

export const selectById = (state, usersId) =>
  state.users.find(users => users.id === usersId);
