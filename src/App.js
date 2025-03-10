import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Addjewellery from './pages/addjewellery/Addjewellery';

function App() {
  return (
    <div className="">
      <BrowserRouter>
   <Dashboard/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addjewellery' element={<Addjewellery/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
