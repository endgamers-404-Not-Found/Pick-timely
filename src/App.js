

// import { Routes } from 'react-router-dom';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './SharedComponents/Footer';
import Navbar from '../src/SharedComponents/Navbar'
import Painless from './Pages/Home/AppointmentScheduling/Painless';
import Productive from './Pages/Home/AppointmentScheduling/Productive';
import Professional from './Pages/Home/AppointmentScheduling/Professional';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import ArrangeNewMeeting from './Pages/Dashboard/ArrangeNewMeeting';
import Profile from './Pages/Dashboard/Profile';
import AllUser from './Pages/Dashboard/AllUser';
import Packages from './Pages/Home/Packages/Packages';
import Payment from './Pages/Payment/Payment';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/signIn' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/pricing' element={<Packages></Packages>}></Route>
        <Route path='/payment/:id' element={<Payment></Payment>}></Route>


        {/* nested route for Appointment schedule */}
        <Route path='/' element={<Home></Home>}>
          <Route index element={<Productive></Productive>}></Route>
          <Route path='productive' element={<Productive></Productive>}></Route>
          <Route path='professional' element={<Professional></Professional>}></Route>
          <Route path='painless' element={<Painless></Painless>}></Route>
        </Route>

        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
              <Route index element={<Profile></Profile>}></Route>
              <Route path='arrangemeeting' element={<ArrangeNewMeeting></ArrangeNewMeeting>}></Route>
              <Route path='users' element={<AllUser></AllUser>}></Route>
        </Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;