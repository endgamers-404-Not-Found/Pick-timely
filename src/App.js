// import { Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import 'react-day-picker/dist/style.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../src/SharedComponents/Navbar';
import './App.css';
import Contact from './Pages/Contact/Contact';
import AllUser from './Pages/Dashboard/AllUser';
import Dashboard from './Pages/Dashboard/Dashboard';
import Graph from './Pages/Dashboard/Graph';
import Profile from './Pages/Dashboard/Profile';
import ScheduleList from './Pages/Dashboard/ScheduleList';
import FindSchedule from './Pages/Dashboard/ScheduleMenu/FindSchedule';
import HostList from './Pages/Dashboard/ScheduleMenu/HostList';
import PastSchedule from './Pages/Dashboard/ScheduleMenu/PastSchedule';
import Upcoming from './Pages/Dashboard/ScheduleMenu/Upcoming';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import ArrangeNewMeeting from './Pages/EventSchedule/ArrangeNewMeeting';
import CreateEvent from './Pages/Dashboard/ScheduleMenu/CreateEvent';
import EventSchedule from './Pages/EventSchedule/EventSchedule';
import Painless from './Pages/Home/AppointmentScheduling/Painless';
import Productive from './Pages/Home/AppointmentScheduling/Productive';
import Professional from './Pages/Home/AppointmentScheduling/Professional';
import Home from './Pages/Home/Home';
import Packages from './Pages/Home/Packages/Packages';
import AddReview from './Pages/Home/Review/AddReview';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Payment from './Pages/Payment/Payment';
import Pricing from './Pages/Pricing/Pricing';
import Solutions from './Pages/Solutions/Solutions';
import Footer from './SharedComponents/Footer';
import NotFound from './SharedComponents/NotFound';
import RequireAuth from './SharedComponents/RequireAuth';
import { useEffect } from 'react';
import About from './Pages/About/About';
import AboutPickTimely from './Pages/About/AboutPickTimely';
import OurTeam from './Pages/About/redux-compo/OurTeam';

import Blog from './Pages/Blog/Blog';
import BlogDetails from './Pages/Blog/BlogDetails';
import PostBlog from './Pages/Blog/PostBlog';
import EasySchedule from './Pages/Solutions/OtherSolutions/EasySchedule';
import RecruitDetails from './Pages/Solutions/OtherSolutions/RecruitDetails';
// import AOS from "aos";
// import "aos/dist/aos.css";
import Branding from './SharedComponents/FooterSection/Branding';
import CookiePolicy from './SharedComponents/FooterSection/CookiePolicy';
import DeveloperContact from './SharedComponents/FooterSection/DeveloperContact';
import Job from './SharedComponents/FooterSection/Job';
import Marketing from './SharedComponents/FooterSection/Marketing';
import Mission from './SharedComponents/FooterSection/Mission';
import Partner from './SharedComponents/FooterSection/Partner';
import PrivacyPolicy from './SharedComponents/FooterSection/PrivacyPolicy';
import TermConditon from './SharedComponents/FooterSection/TermConditon';
import { Provider } from 'react-redux';
import { store2 } from './Pages/Pricing/Redux_pricing';
import BlogProvider from './Pages/Blog/BlogProvider';
export const ThemeContext = createContext(null);




function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    // console.log('dark is working')
  };
  useEffect(() => {
    // AOS.init({
    //   duration: 2500,
    //   delay: 400,
    // })
  }, [])
  return (


    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Navbar toggleTheme={toggleTheme} theme={theme} />

        <Routes>
          <Route path='/signIn' element={<Login></Login>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
          <Route path='/pricing' element={<Provider store={store2}><Packages></Packages></Provider>}></Route>
          <Route path='/payment/:id' element={<RequireAuth><Payment></Payment></RequireAuth>}></Route>
          <Route path='/solutions' element={<Solutions></Solutions>}></Route>
          <Route path='/solutions/recruitments/:id' element={<RecruitDetails></RecruitDetails>}></Route>
          <Route path='/solutions/easySchedule/:id' element={<EasySchedule></EasySchedule>}></Route>
          <Route path='/blog' element={<BlogProvider></BlogProvider>}></Route>
          <Route path='/blog/:blogId' element={<BlogDetails></BlogDetails>}></Route>


          {/* nested route for appointment schedule */}
          <Route path='/' element={<Home></Home>}>
            <Route index element={<Productive></Productive>}></Route>
            <Route path='productive' element={<Productive></Productive>}></Route>
            <Route path='professional' element={<Professional></Professional>}></Route>
            <Route path='painless' element={<Painless></Painless>}></Route>
          </Route>


          {/* nested route for about page */}
          <Route path='/about' element={<About></About>}>
            {/* <Route index element={<AboutPickTimely></AboutPickTimely>}></Route> */}
            <Route path='aboutPickTimely' element={<AboutPickTimely></AboutPickTimely>}></Route>
            <Route path='developers' element={<OurTeam></OurTeam>}></Route>
          </Route>



          <Route path='profile' element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }></Route>
          <Route path='updateProfile' element={
            <RequireAuth>
              <UpdateProfile />
            </RequireAuth>
          }></Route>

          <Route path='/branding' element={<Branding></Branding>}></Route>
          <Route path='/mission' element={<Mission></Mission>}></Route>
          <Route path='/partner' element={<Partner></Partner>}></Route>
          <Route path='/marketing' element={<Marketing></Marketing>}></Route>
          <Route path='/job' element={<Job></Job>}></Route>
          <Route path='/developerContact' element={<DeveloperContact></DeveloperContact>}></Route>
          <Route path='/termCondition' element={<TermConditon></TermConditon>}></Route>
          <Route path='/cookiePolicy' element={<CookiePolicy></CookiePolicy>}></Route>
          <Route path='/privcyPolicy' element={<PrivacyPolicy></PrivacyPolicy>}></Route>




          {/* nested route for dashboard */}
          <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>

            <Route index element={<Profile></Profile>}></Route>
            <Route path='updateProfile' element={<UpdateProfile />}></Route>

            <Route path='hostList' element={<HostList></HostList>}></Route>
            <Route path='users' element={<AllUser></AllUser>}></Route>
            <Route path='postBlog' element={<PostBlog />}></Route>
            <Route path='graph' element={<Graph></Graph>}></Route>
            <Route path='eventschedule' element={<EventSchedule></EventSchedule>}></Route>
            <Route path='eventschedule/:hostId' element={<ArrangeNewMeeting></ArrangeNewMeeting>}></Route>
            <Route path='createEvent' element={<CreateEvent></CreateEvent>}></Route>
            {/*  {/* nested route for  schedule list */}

            <Route path='myMeetings' element={<ScheduleList></ScheduleList>}>
              <Route index element={<Upcoming></Upcoming>}></Route>
              <Route path='upcoming' element={<Upcoming></Upcoming>}></Route>
              <Route path='pastschedule' element={<PastSchedule></PastSchedule>}></Route>
              <Route path='findschedule' element={<FindSchedule></FindSchedule>}></Route>
            </Route>
          </Route>
          {/*  {/* nested route for dashboard ends here */}



          <Route path='createEvent/:emailId' element={<CreateEvent></CreateEvent>}></Route>
          <Route path='eventSchedule/:hostId' element={<ArrangeNewMeeting></ArrangeNewMeeting>}></Route>

          <Route path='arrangeMeeting/:hostId' element={<ArrangeNewMeeting></ArrangeNewMeeting>}></Route>
          .
          <Route path='eventSchedule' element={<EventSchedule></EventSchedule>}></Route>
          <Route path='/pricing' element={<Pricing></Pricing>}></Route>
          <Route path='/addreview' element={<RequireAuth><AddReview></AddReview></RequireAuth>}></Route>

          <Route path='/contact' element={<Contact></Contact>}></Route>


          <Route path='profile' element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }></Route>
          <Route path='updateProfile' element={
            <RequireAuth>
              <UpdateProfile />
            </RequireAuth>
          }></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>

        </Routes >

        <Footer></Footer>

        <ToastContainer />
      </div >
    </ThemeContext.Provider >

  );
}

export default App;