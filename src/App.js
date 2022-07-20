import { Routes } from 'react-router-dom';
import './App.css';
import Services from './Pages/Home/Services/Services';

function App() {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold'>push code on your branch, don't merge the git without team meeting</h1>
      <Services></Services>
      
      <Routes>
        {/* <Route path='' element={}></Route> */}
        {/* <Route path='' element={}></Route> */}
        {/* <Route path='' element={}></Route> */}
      </Routes>  
    </div>
  );
}

export default App;
