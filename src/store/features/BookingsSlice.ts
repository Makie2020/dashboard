/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {bookingData} from '../../DummyData/bookingData';
import { delay } from './delay';
import { BookingState } from '../../Interfaces/BookingDataInterface';
import { Action } from '../../Interfaces/interfaces';

const initialState : BookingState = {
  bookings: [],
  booking: null,
  status: 'idle',
}

export const fetchBookings = createAsyncThunk<any>('bookings/fetchBookings',async (data: any = bookingData) => {
    return await delay(data);
});
export const getBooking = createAsyncThunk('bookings/getBooking', async (id: number) => {
  return await delay(id);
});

export const deleteBooking = createAsyncThunk('bookings/deleteBooking', async (id: number) => {
    return await delay(id);
});

export const editBooking = createAsyncThunk('bookings/editBooking', async (idBooking: number) => {
    return await delay(idBooking);
});

const BookingsSlice = createSlice({
  name: 'bookings',
  initialState,  
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookings.pending, state => {
        state.status = 'Loading';
      })
      .addCase(fetchBookings.fulfilled,
        (state: BookingState, action: Action) => {
          state.status = "Succeeded";
          state.bookings = action.payload;
      })        
      .addCase(fetchBookings.rejected, (state: BookingState) => {
        state.status = 'Failed';
        console.log("Not able to load Bookings")
      })
      .addCase(getBooking.fulfilled, (state: BookingState, action: Action) => {
        state.status = 'Succeeded';
        state.booking = state.bookings.find(
          (booking) => booking.id === action.payload
        );
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
          return booking.id === action.payload.bookingID
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