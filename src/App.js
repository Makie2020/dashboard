import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Bookings from './Pages/Bookings/Bookings';
import Rooms from './Pages/Rooms/Rooms';
import Contact from './Pages/Contact/Contact';
import Users from './Pages/Users/Users';
import Booking from './Pages/Bookings/Booking/Booking';
import LoginPage from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import {AuthProvider} from './hooks/useAuth';
import store from './store/store';
import {Provider} from 'react-redux';
import NewUser from './Pages/Users/NewUser/NewUser';
import NewRoom from './Pages/Rooms/NewRoom/NewRoom';
import EditBooking from './Pages/Bookings/Booking/EditBooking';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="bookings/:id" element={<Booking />} />
            <Route path="bookings/edit-booking" element={<EditBooking/>}/>
            <Route path="rooms" element={<Rooms />} />
            <Route path="rooms/new-room" element={<NewRoom />} />
            <Route path="users" element={<Users />} />
            <Route path="users/new-user" element={<NewUser />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;
