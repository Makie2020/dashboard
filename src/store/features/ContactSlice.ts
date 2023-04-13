/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { Action } from '../../Interfaces/interfaces';
import { ContactState } from '../../Interfaces/ContactDataInterface';
import {requestGET } from '../ApiClient';
import { ContactDataExtended } from '../../Interfaces/ContactDataInterface';

const initialState : ContactState = {
  contact: [],
  status: 'idle',
}

export const fetchContacts = createAsyncThunk<any>('contact/fetchContacts', async() => {
  const dataContact = await requestGET("http://localhost:3002/contact");
  const data: ContactDataExtended = dataContact.data;
  return data;
});

const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.pending, state => {
        state.status = 'Loading';
      })
      .addCase(fetchContacts.fulfilled, (state: ContactState, action: Action) => {
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
