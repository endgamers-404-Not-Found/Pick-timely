import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/SharedComponents/Navbar';
import './App.css';
import Painless from './Pages/Home/AppointmentScheduling/Painless';
import Productive from './Pages/Home/AppointmentScheduling/Productive';
import Professional from './Pages/Home/AppointmentScheduling/Professional';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Solutions from './Pages/Solutions/Solutions';
import Footer from './SharedComponents/Footer';

function App() {
  return (
    <div>
      <Navbar />





      <Routes>
        <Route path='/signIn' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/solutions' element={<Solutions></Solutions>}></Route>


        {/* nested route for Appointment schedule */}
        <Route path='/' element={<Home></Home>}>
          <Route index element={<Productive></Productive>}></Route>
          <Route path='productive' element={<Productive></Productive>}></Route>
          <Route path='professional' element={<Professional></Professional>}></Route>
          <Route path='painless' element={<Painless></Painless>}></Route>
        </Route>
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;