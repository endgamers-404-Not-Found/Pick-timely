import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import MobileApps from './Pages/Home/MobileApps/MobileApps';
import Packages from './Pages/Home/Packages/Packages';

function App() {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold'>push code on your branch, don't merge the git without team meeting</h1>
      <Packages></Packages>
      <MobileApps></MobileApps>
      <Routes>
        {/* <Route path='' element={}></Route> */}
        {/* <Route path='' element={}></Route> */}
        {/* <Route path='' element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
