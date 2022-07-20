import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Painless from './Pages/Home/AppointmentScheduling/Painless';
import Productive from './Pages/Home/AppointmentScheduling/Productive';
import Professional from './Pages/Home/AppointmentScheduling/Professional';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold text-primary'>push code on your branch, don't merge the git without team meeting</h1>
      
      <Routes>
      <Route path='/'  element={<Home></Home>}>
          <Route  index element={<Productive></Productive>}></Route>
          <Route  path='productive' element={<Productive></Productive>}></Route>
          <Route path='professional' element={<Professional></Professional>}></Route>
          <Route path='painless' element={<Painless></Painless>}></Route>
        </Route>
      </Routes>  
    </div>
  );
}

export default App;
