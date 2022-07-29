// import { Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-day-picker/dist/style.css';
import Navbar from '../src/SharedComponents/Navbar';
import Footer from './SharedComponents/Footer';
import './App.css';
import AllUser from './Pages/Dashboard/AllUser';
import ArrangeNewMeeting from './Pages/Dashboard/ArrangeNewMeeting';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Dashboard/Profile';
import ScheduleList from './Pages/Dashboard/ScheduleList';
import CreateEvent from './Pages/Dashboard/ScheduleMenu/CreateEvent';
import EventSchedule from './Pages/Dashboard/ScheduleMenu/EventSchedule';
import FindSchedule from './Pages/Dashboard/ScheduleMenu/FindSchedule';
import PastSchedule from './Pages/Dashboard/ScheduleMenu/PastSchedule';
import Upcoming from './Pages/Dashboard/ScheduleMenu/Upcoming';
import Painless from './Pages/Home/AppointmentScheduling/Painless';
import Productive from './Pages/Home/AppointmentScheduling/Productive';
import Professional from './Pages/Home/AppointmentScheduling/Professional';
import Home from './Pages/Home/Home';
import Packages from './Pages/Home/Packages/Packages';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import NotFound from './SharedComponents/NotFound';
import Customers from './Pages/Customers/Customers';
import Payment from './Pages/Payment/Payment';
import Solutions from './Pages/Solutions/Solutions';
import RequireAuth from './SharedComponents/RequireAuth';
import Features from './Pages/Pricing/Features/Features';
import Pricing from './Pages/Pricing/Pricing';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import AddReview from './Pages/Home/Review/AddReview';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>

        <Route path='/signIn' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/pricing' element={<Packages></Packages>}></Route>
        <Route path='/payment/:id' element={<RequireAuth><Payment></Payment></RequireAuth>}></Route>
        <Route path='/solutions' element={<Solutions></Solutions>}></Route>


        <Route path='/' element={<Home></Home>}>
          <Route index element={<Productive></Productive>}></Route>
          <Route path='productive' element={<Productive></Productive>}></Route>
          <Route path='professional' element={<Professional></Professional>}></Route>
          <Route path='painless' element={<Painless></Painless>}></Route>
        </Route>




        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='updateProfile' element={<UpdateProfile />}></Route>
          <Route path='arrangemeeting' element={<ArrangeNewMeeting></ArrangeNewMeeting>}></Route>
          <Route path='users' element={<AllUser></AllUser>}></Route>
          <Route path='eventschedule' element={<EventSchedule></EventSchedule>}></Route>
          <Route path='eventschedule/:hostId' element={<ArrangeNewMeeting></ArrangeNewMeeting>}></Route>
          <Route path='createEvent' element={<CreateEvent></CreateEvent>}></Route>
          <Route path='scheduleList' element={<ScheduleList></ScheduleList>}>
            <Route index element={<Upcoming></Upcoming>}></Route>
            <Route path='upcoming' element={<Upcoming></Upcoming>}></Route>
            <Route path='pastschedule' element={<PastSchedule></PastSchedule>}></Route>
            <Route path='findschedule' element={<FindSchedule></FindSchedule>}></Route>
          </Route>
        </Route>

        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/features' element={<Features></Features>}></Route>
        <Route path='/customers' element={<Customers></Customers>}></Route>
        <Route path='/addreview' element={<AddReview></AddReview>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;