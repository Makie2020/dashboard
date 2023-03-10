/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import BookingsSlicereducer from './features/BookingsSlice';
import UsersSlicereducer from './features/UsersSlice';
import ContactSlicereducer from './features/ContactSlice';
import RoomsSlicereducer from './features/RoomsSlice';

export const store = configureStore({
  reducer: {
    bookings: BookingsSlicereducer,
    users: UsersSlicereducer,
    contacts: ContactSlicereducer,
    rooms: RoomsSlicereducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch