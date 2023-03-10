/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {messageData} from '../../DummyData/messageData';
import { delay } from './delay';

export interface ContactDataExtended {
  id: string,
  photo: string,
  date: string,
  time: string,
  full_name: string,
  email: string,
  phone_number: string,
  subject: string,
}

interface ContactState {
  contact: [] | ContactDataExtended[],
  status: 'idle' | 'Loading' | 'Succeeded' | 'Failed'
}
const initialState : ContactState = {
  contact: [],
  status: 'idle',
}

interface ActionInterface {
  type: string;
  payload: any;
}

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async (data: {} = messageData) => {
    return await delay(data);
  },
);

const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.pending, state => {
        state.status = 'Loading';
      })
      .addCase(fetchContacts.fulfilled, (state: ContactState, action: ActionInterface) => {
        state.status = 'Succeeded';
        state.contact = action.payload;
      })
      .addCase(fetchContacts.rejected, (state: ContactState) => {
        state.status = 'Failed';
        console.log("No able to load the messages")
      });
  },
});

export default ContactSlice.reducer;

export const selectAllContacts = (state: any) => state.contacts.contact;
