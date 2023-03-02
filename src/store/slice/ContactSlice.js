import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {messageData} from '../../DummyData/messageData';

function delay(messageData, time = 200) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(messageData);
    }, time);
  });
}

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async () => {
    return await delay(messageData);
  },
);

const ContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contact: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.pending, state => {
        state.status = 'Loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'Succeeded';
        state.contact = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'Failed';
        state.message = action.error.message;
      });
  },
});

export default ContactSlice.reducer;

export const selectAllContacts = state => state.contacts.contact;
