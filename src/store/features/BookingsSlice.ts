/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {bookingData} from '../../DummyData/bookingData';
import { delay } from './delay';

interface BookingDataInterface {
  full__name: string,
  image: string,
  bookingId: string,
  order_date: string,
  check_in: string,
  check_out: string,
  special_request: string,
  room_type: string,
  room_number: number,
  status: string,
  price: number,
}

interface BookingState {
  bookings: [] | BookingDataInterface[],
  booking: BookingDataInterface | null | undefined;
  status: 'idle' | 'Loading' | 'Succeeded' | 'Failed'
}
const initialState : BookingState = {
  bookings: [],
  booking: null,
  status: 'idle',
}

interface ActionInterface {
  type: string;
  payload: any;
}

export const fetchBookings = createAsyncThunk(
  'bookings/fetchBookings',
  async (data: {} = bookingData) => {
    return await delay(data);
  },
);
export const getBooking = createAsyncThunk('bookings/getBooking', async (idBooking: number) => {
  return await delay(idBooking);
});

export const deleteBooking = createAsyncThunk(
  'bookings/deleteBooking',
  async (bookingID: number) => {
    return await delay(bookingID);
  },
);
export const editBooking = createAsyncThunk(
  'bookings/editBooking',
  async (idBooking: number) => {
    return await delay(idBooking);
  },
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
      .addCase(fetchBookings.fulfilled,
        (state: BookingState, action: ActionInterface) => {
          state.status = "Succeeded";
          state.bookings = action.payload;
      })        
      .addCase(fetchBookings.rejected, (state: BookingState) => {
        state.status = 'Failed';
        console.log("Not able to load Bookings")
      })
      .addCase(getBooking.fulfilled, (state: BookingState, action: ActionInterface) => {
        state.status = 'Succeeded';
        state.booking = state.bookings.find(
          (booking) => booking.bookingId === action.payload
        );
      })
      .addCase(getBooking.rejected, (state:BookingState) => {
        state.status = 'Failed';
        console.log("Not able to load Booking")
      })
      .addCase(deleteBooking.fulfilled, (state: BookingState, action: ActionInterface) => {
        state.status = 'Succeeded';
        state.bookings = state.bookings.filter(
          booking => booking.bookingId !== action.payload,
        );
      })
      .addCase(deleteBooking.rejected, (state: BookingState) => {
        state.status = 'Failed';
        console.log("Not able to delete the Booking")
      })
      .addCase(editBooking.fulfilled, (state: BookingState, action: ActionInterface) => {
        state.status = 'Succeeded';
        state.bookings = state.bookings.map((booking) => {
          return booking.bookingId === action.payload.bookingID
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