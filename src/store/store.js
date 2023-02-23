import { configureStore } from '@reduxjs/toolkit'
import BookingsSlicereducer from './slice/BookingsSlice'
import UsersSlicereducer from './slice/UsersSlice'
import ContactSlicereducer from './slice/ContactSlice'
import RoomsSlicereducer from './slice/RoomsSlice'

export default configureStore({
  reducer: {
    bookings: BookingsSlicereducer,
    users: UsersSlicereducer,
    contacts: ContactSlicereducer,
    rooms: RoomsSlicereducer
  }
})