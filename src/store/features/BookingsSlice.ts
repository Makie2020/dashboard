/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { BookingState, BookingDataInterface } from '../../Interfaces/BookingDataInterface';
import { Action } from '../../Interfaces/interfaces';
import {requestGET, requestDELETE, requestPUT} from '../ApiClient';

const initialState : BookingState = {
  bookings: [],
  booking: null,
  status: 'idle',
}

export const fetchBookings = createAsyncThunk<any>('bookings/fetchBookings', async() => {
  const dataBooking = await requestGET("http://localhost:3002/bookings");
  const data: BookingDataInterface = dataBooking.data;
  return data;
});
export const getBooking = createAsyncThunk('bookings/getBooking', async (id: any) => {
  const dataBooking = await requestGET(`http://localhost:3002/bookings/${id}`);
  const data: BookingDataInterface = dataBooking.data;
  console.log(data);
  return data;
});

export const deleteBooking = createAsyncThunk('bookings/deleteBooking', async (id: any) => {
  const dataBooking = await requestDELETE(`http://localhost:3002/bookings/${id}`);
  return dataBooking
});

export const editBooking = createAsyncThunk("bookings/EditBooking", async (currentBooking: BookingDataInterface) => {
    const data = await requestPUT(`http://localhost:3002/bookings/${currentBooking.id}`, currentBooking);
    console.log(data)
    return data
  }
);

const BookingsSlice = createSlice({
  name: 'bookings',
  initialState,  
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookings.pending, state => {
        state.status = 'Loading';
      })
      .addCase(fetchBookings.fulfilled,(state: BookingState, action: Action) => {
          state.status = 'Succeeded';
          state.bookings = action.payload;
      })        
      .addCase(fetchBookings.rejected, (state: BookingState) => {
        state.status = 'Failed';
        console.log("Not able to load Bookings")
      })
      .addCase(getBooking.pending, state => {
        state.booking = undefined;
      })
      .addCase(getBooking.fulfilled, (state: BookingState, action: Action) => {
        state.status = 'Succeeded';
        state.booking = action.payload;
      })
      .addCase(getBooking.rejected, (state:BookingState) => {
        state.status = 'Failed';
        console.log("Not able to load Booking")
      })
      .addCase(deleteBooking.fulfilled, (state: BookingState, action: Action) => {
        state.status = 'Succeeded';
        state.bookings = state.bookings.filter(booking => booking.id !== action.payload);
      })
      .addCase(deleteBooking.rejected, (state: BookingState) => {
        state.status = 'Failed';
        console.log("Not able to delete the Booking")
      })
      .addCase(editBooking.fulfilled, (state: BookingState, action: Action) => {
        state.status = 'Succeeded';
        state.bookings = state.bookings.map((booking) => {
          return booking.id === action.payload.id
            ? action.payload
            : booking;
        });
        state.booking = null;
      })
      .addCase(editBooking.rejected, (state:BookingState) => {
        state.status = 'Failed';
        console.log("Not able to edit the Booking")
      });
  },
});

export default BookingsSlice.reducer;
export const selectAllBookings = (state:any) => state.bookings.bookings;