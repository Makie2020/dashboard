import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { bookingData } from '../../DummyData/bookingData';

function delay(bookingData, time = 200) {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(bookingData);
    }, time);
  })
}

export const fetchBookings = createAsyncThunk('users/fetchUsers', async()=> {
  return await delay(bookingData)
})

export const newBooking = createAsyncThunk('users/saveNewBooking', async(data) => {
  return await delay (data)
})


const BookingsSlice = createSlice({
    name: 'bookings',
    initialState: {
        bookings: [],
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
        .addCase(newBooking.fulfilled, (state, action)=> {
          state.status = "Succeeded"
          state.bookings = [...state.users, action.payload]
        })
        .addCase(newBooking.rejected,(state, action)=>{
          state.status = "Failed"
          state.message = action.error.message;
        })
    }
});

export default BookingsSlice.reducer

export const selectAllBookings = state => state.bookings.bookings