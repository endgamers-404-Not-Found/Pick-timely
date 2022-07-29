// import { Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import 'react-day-picker/dist/style.css';
import Navbar from '../src/SharedComponents/Navbar';
import Footer from './SharedComponents/Footer';

import './App.css';
import AllUser from './Pages/Dashboard/AllUser';
import ArrangeNewMeeting from './Pages/Dashboard/ArrangeNewMeeting';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Dashboard/Profile';
import Painless from './Pages/Home/AppointmentScheduling/Painless';
import Productive from './Pages/Home/AppointmentScheduling/Productive';
import Professional from './Pages/Home/AppointmentScheduling/Professional';
import Home from './Pages/Home/Home';
import Packages from './Pages/Home/Packages/Packages';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import NotFound from './SharedComponents/NotFound';

import Customers from './Pages/Customers/Customers';
import EventSchedule from './Pages/Dashboard/ScheduleMenu/EventSchedule';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import Feature from './Pages/Features/Feature';
import Payment from './Pages/Payment/Payment';
import Pricing from './Pages/Pricing/Pricing';
import Solutions from './Pages/Solutions/Solutions';

function App() {
  return (
    <div>
      <Navbar />
     
      <Routes>

      <Route path='/signIn' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/pricing' element={<Packages></Packages>}></Route>
        <Route path='/payment/:id' element={<Payment></Payment>}></Route>
        <Route path='/solutions' element={<Solutions></Solutions>}></Route>


        <Route path='/' element={<Home></Home>}>
          <Route index element={<Productive></Productive>}></Route>
          <Route path='productive' element={<Productive></Productive>}></Route>
          <Route path='professional' element={<Professional></Professional>}></Route>
          <Route path='painless' element={<Painless></Painless>}></Route>
        </Route>

        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='updateProfile' element={<UpdateProfile />}></Route>
          <Route path='eventSchedule' element={<EventSchedule></EventSchedule>}></Route>
          <Route path='arrangemeeting/:hostId' element={<ArrangeNewMeeting></ArrangeNewMeeting>}></Route>
          <Route path='users' element={<AllUser></AllUser>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/features' element={<Feature></Feature>}></Route>
        <Route path='/customers' element={<Customers></Customers>}></Route>

      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;