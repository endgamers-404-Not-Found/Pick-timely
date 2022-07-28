// import { Routes } from 'react-router-dom';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Footer from './SharedComponents/Footer';
import Navbar from '../src/SharedComponents/Navbar'

import './App.css';

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
import NotFound from './SharedComponents/NotFound';
import Packages from './Pages/Home/Packages/Packages';
import Payment from './Pages/Payment/Payment';
import Solutions from './Pages/Solutions/Solutions';
import Pricing from './Pages/Pricing/Pricing';
import Feature from './Pages/Features/Feature';
import Customers from './Pages/Customers/Customers';


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
              <Route path='arrangemeeting' element={<ArrangeNewMeeting></ArrangeNewMeeting>}></Route>
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