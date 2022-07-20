import { Route, Routes } from 'react-router-dom';
import './App.css';
import MobileApps from './Pages/Home/MobileApps/MobileApps';
import Packages from './Pages/Home/Packages/Packages';
import Navbar from '../src/SharedComponents/Navbar'
import Painless from './Pages/Home/AppointmentScheduling/Painless';
import Productive from './Pages/Home/AppointmentScheduling/Productive';
import Professional from './Pages/Home/AppointmentScheduling/Professional';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>


      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route index element={<Productive></Productive>}></Route>
          <Route path='productive' element={<Productive></Productive>}></Route>
          <Route path='professional' element={<Professional></Professional>}></Route>
          <Route path='painless' element={<Painless></Painless>}></Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
