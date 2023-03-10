/* eslint-disable prettier/prettier */
import './App.css';
import React from 'react';
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Bookings from './Pages/Bookings/Booking/Bookings';
import Rooms from './Pages/Rooms/NewRoom/Rooms';
import Contact from './Pages/Contact/Contact';
import Users from './Pages/Users/Users';
import Booking from './Pages/Bookings/Booking/Booking';
import LoginPage from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import NewUser from './Pages/Users/NewUser/NewUser';
import NewRoom from './Pages/Rooms/NewRoom/NewRoom';
import EditBooking from './Pages/Bookings/Booking/EditBooking';
import EditRoom from './Pages/Rooms/EditRoom/EditRoom';
import {ProtectRoute} from "./components/ProtectedRouted"
import {useAuth} from "./hooks/context/AuthContext"

function App() {
  const { isAuth } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route path="*" element={<ProtectRoute isAuth={isAuth} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="bookings/:id" element={<Booking />} />
          <Route path="bookings/edit-booking" element={<EditBooking/>}/>
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/new-room" element={<NewRoom />} />
          <Route path="rooms/edit-room" element={<EditRoom/>}/>
          <Route path="users" element={<Users />}/>
          <Route path="users/new-user" element={<NewUser />} />;
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
