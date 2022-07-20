

import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/SharedComponents/Navbar';
import './App.css';
import Painless from './Pages/Home/AppointmentScheduling/Painless';
import Productive from './Pages/Home/AppointmentScheduling/Productive';
import Professional from './Pages/Home/AppointmentScheduling/Professional';
import Home from './Pages/Home/Home';
import Footer from './SharedComponents/Footer';

function App() {
  return (
    <div>
      <Navbar />     
      <Routes>
      <Route path='/'  element={<Home></Home>}>
          <Route  index element={<Productive></Productive>}></Route>
          <Route  path='productive' element={<Productive></Productive>}></Route>
          <Route path='professional' element={<Professional></Professional>}></Route>
          <Route path='painless' element={<Painless></Painless>}></Route>
        </Route>
      </Routes>  
      <Footer></Footer>
    </div>
  );
}

export default App;
