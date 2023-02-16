import './App.css';
import { Routes, Route} from "react-router-dom";
import { HomeLayout } from './components/HomeLayout/HomeLayout';
import { ProtectedLayout } from './components/ProtectedLayout/ProtectedLayout';
import Bookings from './Pages/Bookings/Bookings';
import Rooms from './Pages/Rooms/Rooms';
import Contact from './Pages/Contact/Contact';
import Users from './Pages/Users/Users';
import Booking from './Pages/Bookings/Booking/Booking';
import LoginPage from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
=======
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/" element={<ProtectedLayout><Dashboard/></ProtectedLayout>}></Route>
        <Route path="/bookings" element={<ProtectedLayout><Bookings /></ProtectedLayout>}/>
        <Route path="/bookings/:id" element={<ProtectedLayout><Booking/></ProtectedLayout>}/>
        <Route path="/rooms" element={<ProtectedLayout><Rooms /></ProtectedLayout>}/>
        <Route path="/contact" element={<ProtectedLayout><Contact/></ProtectedLayout>}/>
        <Route path="/users" element={<ProtectedLayout><Users /></ProtectedLayout>}/>
      </Routes>

>>>>>>> Sprint2
    </div>
  );
}

export default App;
