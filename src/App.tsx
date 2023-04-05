/* eslint-disable prettier/prettier */
import './App.css';
import React,  { useReducer, useContext } from 'react';
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Bookings from './Pages/Bookings/Booking/Bookings';
import Rooms from './Pages/Rooms/Rooms';
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
import { AuthState, Action } from './Interfaces/interfaces';

const initialState: AuthState = {isAuth: localStorage.getItem('Dashboard') ? true : false, user:"Marieke", token:"test"} 

const AuthReducer = (state: AuthState, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: action.payload,
      };
    case "UPDATE":
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};

const AuthContext = React.createContext<AuthState>(initialState)
export const useAuth = () => { return useContext(AuthContext) };

function App() {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <div className= "App">
      <AuthContext.Provider value={{user: state.user, token: state.token, isAuth: state.isAuth, dispatch}}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={state.isAuth ? <Navigate to="/dashboard" /> : <LoginPage />}
            />
            <Route path="*" element={<ProtectRoute isAuth={state.isAuth} />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:id" element={<Booking />} />
              <Route path="bookings/edit-booking/:id" element={<EditBooking/>}/>
              <Route path="rooms" element={<Rooms />} />
              <Route path="rooms/new-room" element={<NewRoom />} />
              <Route path="rooms/edit-room/:id" element={<EditRoom/>}/>
              <Route path="users" element={<Users />}/>
              <Route path="users/new-user" element={<NewUser />} />;
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>

  );
}

export default App;
