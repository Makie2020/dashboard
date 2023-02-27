import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { bookingData } from '../../DummyData/bookingData';

function delay(bookingData, time = 200) {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(bookingData);
    }, time);
  })
}

export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async()=> {
  return await delay(bookingData)
})
export const getBooking = createAsyncThunk('bookings/getBooking', async() => {
  return await delay ()
})
export const addBooking = createAsyncThunk('bookings/addBooking', async() => {
  return await delay ()
})
export const deleteBooking = createAsyncThunk('bookings/deleteBooking', async() => {
  return await delay ()
})
export const editBooking = createAsyncThunk('bookings/editBooking', async() => {
  return await delay ()
})


const BookingsSlice = createSlice({
    name: 'bookings',
    initialState: {
        bookings: [],
        booking: {},
        status: 'idle',
        error: null
    },
    reducers: {
    },
    extraReducers(builder) {
      builder
        .addCase(fetchBookings.pending,(state)=>{
          state.status = "Loading"
        })
        .addCase(fetchBookings.fulfilled,(state, action)=>{
          state.status = "Succeeded"
          state.bookings = action.payload
        })
        .addCase(fetchBookings.rejected,(state, action)=>{
          state.status = "Failed"
          state.message = action.error.message;
        })
        .addCase(getBooking.fulfilled, (state, action)=> {
          state.status = "Succeeded"
          state.booking = state.bookings.find(booking => booking.id === action.payload);
        })
        .addCase(getBooking.rejected,(state, action)=>{
          state.status = "Failed"
          state.message = action.error.message;
        })
        .addCase(addBooking.fulfilled, (state, action)=> {
          state.status = "Succeeded"
          state.bookings = [...state.bookings, action.payload]
        })
        .addCase(addBooking.rejected,(state, action)=>{
          state.status = "Failed"
          state.message = action.error.message;
        })
        .addCase(deleteBooking.fulfilled, (state, action)=> {
          state.status = "Succeeded"
          state.bookings = state.bookings.filter(booking => booking.id !== action.payload);
        })
        .addCase(deleteBooking.rejected,(state, action)=>{
          state.status = "Failed"
          state.message = action.error.message;
        })
        .addCase(editBooking.fulfilled, (state, action)=> {
          state.status = "Succeeded"
          state.bookings = state.bookings = state.bookings.map(booking => booking.id === action.payload.id ? action.payload : booking)
        })
        .addCase(editBooking.rejected,(state, action)=>{
          state.status = "Failed"
          state.message = action.error.message;
        })
    }
});

export default BookingsSlice.reducer

export const selectAllBookings = state => state.bookings.bookings